export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: any }> = { [K in keyof T]: T[K] };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Coin = {
  __typename?: 'Coin';
  id: Scalars['Int'];
  coinId: Scalars['String'];
  name: Scalars['String'];
  symbol: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  addCoin: Coin;
  syncCoins: Array<Maybe<Coin>>;
};


export type MutationAddCoinArgs = {
  coinId: Scalars['String'];
  symbol: Scalars['String'];
  name: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  coin?: Maybe<Coin>;
  coins: Array<Coin>;
  searchCoin: Array<Coin>;
};


export type QueryCoinArgs = {
  coinId: Scalars['String'];
};


export type QuerySearchCoinArgs = {
  text: Scalars['String'];
};
