import { DynamicModule, Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { Connection } from 'cypher-query-builder';
import { Neo4jConfig } from './neo4j-config.interface';
import { NEO4J_CONFIG, NEO4J_CONNECTION } from './neo4j.constants';
import { createDatabaseConfig, ConnecitonError } from './neo4j.utils';
import { QueryRepository } from './query.repository';

@Module({
  providers: [QueryRepository],
})
export class Neo4jModule {
  static forRootAsync(customConfig?: Neo4jConfig): DynamicModule {
    return {
      module: Neo4jModule,
      imports: [ConfigModule],
      global: true,
      providers: [
        {
          provide: NEO4J_CONFIG,
          inject: [ConfigService],
          useFactory: (configService: ConfigService) =>
            createDatabaseConfig(configService, customConfig),
        },
        {
          provide: NEO4J_CONNECTION,
          inject: [NEO4J_CONFIG],
          useFactory: async (config: Neo4jConfig) => {
            try {
              const { host, username, password } = config;
              const connection = new Connection(host, {
                username,
                password,
              });

              await connection.driver.verifyConnectivity();
              return connection;
            } catch (error) {
              throw new ConnecitonError(error);
            }
          },
        },
      ],
      exports: [QueryRepository],
    };
  }
}
