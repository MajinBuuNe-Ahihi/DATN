import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloServerPluginLandingPageLocalDefault } from 'apollo-server-core';
import { AppResolver } from './app.resolver';
import { Neo4jModule } from './neo4j/neo4j.module';
import { UserModule } from './domain/nodes/user/user.module';
import { ApolloDriver } from '@nestjs/apollo';
import { ReviewModule } from './domain/nodes/review/review.module';
import { StoreModule } from './domain/nodes/store/store.module';
import { CommentModule } from './domain/nodes/comment/comment.module';
import { RabbitmqModule } from './rabbitmq/rabbitmq.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true, envFilePath: '.env' }),
    GraphQLModule.forRoot({
      typePaths: ['src/schema/schema.graphql'],
      playground: false,
      driver: ApolloDriver,
      plugins: [ApolloServerPluginLandingPageLocalDefault()],
      cors: {
        origin: '*', // Allow all origins
        methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
        credentials: true,
        allowedHeaders: 'Content-Type,Authorization',
      },
    }),
    Neo4jModule.forRootAsync(),
    RabbitmqModule,
    UserModule,
    ReviewModule,
    StoreModule,
    CommentModule,
  ],
  controllers: [],
  providers: [AppResolver],
})
export class AppModule {}
