export type Neo4jScheme =
  | 'neo4j'
  | 'neo4j+s'
  | 'neo4j+ssc'
  | 'bolt'
  | 'bolt+s'
  | 'bolt+ssc';

export interface Neo4jConfig {
  host: string;
  username: string;
  password: string;
}

export enum RelationDirection {
  OUT = 'OUT',
  IN = 'IN',
  BOTH = 'BOTH',
}
