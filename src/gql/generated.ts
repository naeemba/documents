import { GraphQLClient, RequestOptions } from "graphql-request";
import gql from "graphql-tag";
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
export type MakeEmpty<
  T extends { [key: string]: unknown },
  K extends keyof T,
> = { [_ in K]?: never };
export type Incremental<T> =
  | T
  | {
      [P in keyof T]?: P extends " $fragmentName" | "__typename" ? T[P] : never;
    };
type GraphQLClientRequestHeaders = RequestOptions["requestHeaders"];
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string };
  String: { input: string; output: string };
  Boolean: { input: boolean; output: boolean };
  Int: { input: number; output: number };
  Float: { input: number; output: number };
  Date: { input: any; output: any };
  GraphQLStringOrFloat: { input: any; output: any };
  Hash: { input: any; output: any };
  JSON: { input: any; output: any };
};

export enum EventEnum {
  Create = "create",
  Delete = "delete",
  Update = "update",
}

export type Mutation = {
  __typename?: "Mutation";
  create_documentCategory_item?: Maybe<DocumentCategory>;
  create_documentCategory_items: Array<DocumentCategory>;
  create_documentItem_item?: Maybe<DocumentItem>;
  create_documentItem_items: Array<DocumentItem>;
  create_document_item?: Maybe<Document>;
  create_document_items: Array<Document>;
  create_entity_item?: Maybe<Entity>;
  create_entity_items: Array<Entity>;
  create_user_item?: Maybe<User>;
  create_user_items: Array<User>;
  delete_documentCategory_item?: Maybe<Delete_One>;
  delete_documentCategory_items?: Maybe<Delete_Many>;
  delete_documentItem_item?: Maybe<Delete_One>;
  delete_documentItem_items?: Maybe<Delete_Many>;
  delete_document_item?: Maybe<Delete_One>;
  delete_document_items?: Maybe<Delete_Many>;
  delete_entity_item?: Maybe<Delete_One>;
  delete_entity_items?: Maybe<Delete_Many>;
  delete_user_item?: Maybe<Delete_One>;
  delete_user_items?: Maybe<Delete_Many>;
  update_documentCategory_batch: Array<DocumentCategory>;
  update_documentCategory_item?: Maybe<DocumentCategory>;
  update_documentCategory_items: Array<DocumentCategory>;
  update_documentItem_batch: Array<DocumentItem>;
  update_documentItem_item?: Maybe<DocumentItem>;
  update_documentItem_items: Array<DocumentItem>;
  update_document_batch: Array<Document>;
  update_document_item?: Maybe<Document>;
  update_document_items: Array<Document>;
  update_entity_batch: Array<Entity>;
  update_entity_item?: Maybe<Entity>;
  update_entity_items: Array<Entity>;
  update_user_batch: Array<User>;
  update_user_item?: Maybe<User>;
  update_user_items: Array<User>;
};

export type MutationCreate_DocumentCategory_ItemArgs = {
  data: Create_DocumentCategory_Input;
};

export type MutationCreate_DocumentCategory_ItemsArgs = {
  data?: InputMaybe<Array<Create_DocumentCategory_Input>>;
  filter?: InputMaybe<DocumentCategory_Filter>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  page?: InputMaybe<Scalars["Int"]["input"]>;
  search?: InputMaybe<Scalars["String"]["input"]>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

export type MutationCreate_DocumentItem_ItemArgs = {
  data: Create_DocumentItem_Input;
};

export type MutationCreate_DocumentItem_ItemsArgs = {
  data?: InputMaybe<Array<Create_DocumentItem_Input>>;
  filter?: InputMaybe<DocumentItem_Filter>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  page?: InputMaybe<Scalars["Int"]["input"]>;
  search?: InputMaybe<Scalars["String"]["input"]>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

export type MutationCreate_Document_ItemArgs = {
  data: Create_Document_Input;
};

export type MutationCreate_Document_ItemsArgs = {
  data?: InputMaybe<Array<Create_Document_Input>>;
  filter?: InputMaybe<Document_Filter>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  page?: InputMaybe<Scalars["Int"]["input"]>;
  search?: InputMaybe<Scalars["String"]["input"]>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

export type MutationCreate_Entity_ItemArgs = {
  data: Create_Entity_Input;
};

export type MutationCreate_Entity_ItemsArgs = {
  data?: InputMaybe<Array<Create_Entity_Input>>;
  filter?: InputMaybe<Entity_Filter>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  page?: InputMaybe<Scalars["Int"]["input"]>;
  search?: InputMaybe<Scalars["String"]["input"]>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

export type MutationCreate_User_ItemArgs = {
  data: Create_User_Input;
};

export type MutationCreate_User_ItemsArgs = {
  data?: InputMaybe<Array<Create_User_Input>>;
  filter?: InputMaybe<User_Filter>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  page?: InputMaybe<Scalars["Int"]["input"]>;
  search?: InputMaybe<Scalars["String"]["input"]>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

export type MutationDelete_DocumentCategory_ItemArgs = {
  id: Scalars["ID"]["input"];
};

export type MutationDelete_DocumentCategory_ItemsArgs = {
  ids: Array<InputMaybe<Scalars["ID"]["input"]>>;
};

export type MutationDelete_DocumentItem_ItemArgs = {
  id: Scalars["ID"]["input"];
};

export type MutationDelete_DocumentItem_ItemsArgs = {
  ids: Array<InputMaybe<Scalars["ID"]["input"]>>;
};

export type MutationDelete_Document_ItemArgs = {
  id: Scalars["ID"]["input"];
};

export type MutationDelete_Document_ItemsArgs = {
  ids: Array<InputMaybe<Scalars["ID"]["input"]>>;
};

export type MutationDelete_Entity_ItemArgs = {
  id: Scalars["ID"]["input"];
};

export type MutationDelete_Entity_ItemsArgs = {
  ids: Array<InputMaybe<Scalars["ID"]["input"]>>;
};

export type MutationDelete_User_ItemArgs = {
  id: Scalars["ID"]["input"];
};

export type MutationDelete_User_ItemsArgs = {
  ids: Array<InputMaybe<Scalars["ID"]["input"]>>;
};

export type MutationUpdate_DocumentCategory_BatchArgs = {
  data?: InputMaybe<Array<Update_DocumentCategory_Input>>;
  filter?: InputMaybe<DocumentCategory_Filter>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  page?: InputMaybe<Scalars["Int"]["input"]>;
  search?: InputMaybe<Scalars["String"]["input"]>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

export type MutationUpdate_DocumentCategory_ItemArgs = {
  data: Update_DocumentCategory_Input;
  id: Scalars["ID"]["input"];
};

export type MutationUpdate_DocumentCategory_ItemsArgs = {
  data: Update_DocumentCategory_Input;
  filter?: InputMaybe<DocumentCategory_Filter>;
  ids: Array<InputMaybe<Scalars["ID"]["input"]>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  page?: InputMaybe<Scalars["Int"]["input"]>;
  search?: InputMaybe<Scalars["String"]["input"]>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

export type MutationUpdate_DocumentItem_BatchArgs = {
  data?: InputMaybe<Array<Update_DocumentItem_Input>>;
  filter?: InputMaybe<DocumentItem_Filter>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  page?: InputMaybe<Scalars["Int"]["input"]>;
  search?: InputMaybe<Scalars["String"]["input"]>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

export type MutationUpdate_DocumentItem_ItemArgs = {
  data: Update_DocumentItem_Input;
  id: Scalars["ID"]["input"];
};

export type MutationUpdate_DocumentItem_ItemsArgs = {
  data: Update_DocumentItem_Input;
  filter?: InputMaybe<DocumentItem_Filter>;
  ids: Array<InputMaybe<Scalars["ID"]["input"]>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  page?: InputMaybe<Scalars["Int"]["input"]>;
  search?: InputMaybe<Scalars["String"]["input"]>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

export type MutationUpdate_Document_BatchArgs = {
  data?: InputMaybe<Array<Update_Document_Input>>;
  filter?: InputMaybe<Document_Filter>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  page?: InputMaybe<Scalars["Int"]["input"]>;
  search?: InputMaybe<Scalars["String"]["input"]>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

export type MutationUpdate_Document_ItemArgs = {
  data: Update_Document_Input;
  id: Scalars["ID"]["input"];
};

export type MutationUpdate_Document_ItemsArgs = {
  data: Update_Document_Input;
  filter?: InputMaybe<Document_Filter>;
  ids: Array<InputMaybe<Scalars["ID"]["input"]>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  page?: InputMaybe<Scalars["Int"]["input"]>;
  search?: InputMaybe<Scalars["String"]["input"]>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

export type MutationUpdate_Entity_BatchArgs = {
  data?: InputMaybe<Array<Update_Entity_Input>>;
  filter?: InputMaybe<Entity_Filter>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  page?: InputMaybe<Scalars["Int"]["input"]>;
  search?: InputMaybe<Scalars["String"]["input"]>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

export type MutationUpdate_Entity_ItemArgs = {
  data: Update_Entity_Input;
  id: Scalars["ID"]["input"];
};

export type MutationUpdate_Entity_ItemsArgs = {
  data: Update_Entity_Input;
  filter?: InputMaybe<Entity_Filter>;
  ids: Array<InputMaybe<Scalars["ID"]["input"]>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  page?: InputMaybe<Scalars["Int"]["input"]>;
  search?: InputMaybe<Scalars["String"]["input"]>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

export type MutationUpdate_User_BatchArgs = {
  data?: InputMaybe<Array<Update_User_Input>>;
  filter?: InputMaybe<User_Filter>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  page?: InputMaybe<Scalars["Int"]["input"]>;
  search?: InputMaybe<Scalars["String"]["input"]>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

export type MutationUpdate_User_ItemArgs = {
  data: Update_User_Input;
  id: Scalars["ID"]["input"];
};

export type MutationUpdate_User_ItemsArgs = {
  data: Update_User_Input;
  filter?: InputMaybe<User_Filter>;
  ids: Array<InputMaybe<Scalars["ID"]["input"]>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  page?: InputMaybe<Scalars["Int"]["input"]>;
  search?: InputMaybe<Scalars["String"]["input"]>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

export type Query = {
  __typename?: "Query";
  document: Array<Document>;
  documentCategory: Array<DocumentCategory>;
  documentCategory_aggregated: Array<DocumentCategory_Aggregated>;
  documentCategory_by_id?: Maybe<DocumentCategory>;
  documentCategory_by_version?: Maybe<Version_DocumentCategory>;
  documentItem: Array<DocumentItem>;
  documentItem_aggregated: Array<DocumentItem_Aggregated>;
  documentItem_by_id?: Maybe<DocumentItem>;
  documentItem_by_version?: Maybe<Version_DocumentItem>;
  document_aggregated: Array<Document_Aggregated>;
  document_by_id?: Maybe<Document>;
  document_by_version?: Maybe<Version_Document>;
  entity: Array<Entity>;
  entity_aggregated: Array<Entity_Aggregated>;
  entity_by_id?: Maybe<Entity>;
  entity_by_version?: Maybe<Version_Entity>;
  user: Array<User>;
  user_aggregated: Array<User_Aggregated>;
  user_by_id?: Maybe<User>;
  user_by_version?: Maybe<Version_User>;
};

export type QueryDocumentArgs = {
  filter?: InputMaybe<Document_Filter>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  page?: InputMaybe<Scalars["Int"]["input"]>;
  search?: InputMaybe<Scalars["String"]["input"]>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

export type QueryDocumentCategoryArgs = {
  filter?: InputMaybe<DocumentCategory_Filter>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  page?: InputMaybe<Scalars["Int"]["input"]>;
  search?: InputMaybe<Scalars["String"]["input"]>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

export type QueryDocumentCategory_AggregatedArgs = {
  filter?: InputMaybe<DocumentCategory_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  page?: InputMaybe<Scalars["Int"]["input"]>;
  search?: InputMaybe<Scalars["String"]["input"]>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

export type QueryDocumentCategory_By_IdArgs = {
  id: Scalars["ID"]["input"];
  version?: InputMaybe<Scalars["String"]["input"]>;
};

export type QueryDocumentCategory_By_VersionArgs = {
  id: Scalars["ID"]["input"];
  version: Scalars["String"]["input"];
};

export type QueryDocumentItemArgs = {
  filter?: InputMaybe<DocumentItem_Filter>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  page?: InputMaybe<Scalars["Int"]["input"]>;
  search?: InputMaybe<Scalars["String"]["input"]>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

export type QueryDocumentItem_AggregatedArgs = {
  filter?: InputMaybe<DocumentItem_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  page?: InputMaybe<Scalars["Int"]["input"]>;
  search?: InputMaybe<Scalars["String"]["input"]>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

export type QueryDocumentItem_By_IdArgs = {
  id: Scalars["ID"]["input"];
  version?: InputMaybe<Scalars["String"]["input"]>;
};

export type QueryDocumentItem_By_VersionArgs = {
  id: Scalars["ID"]["input"];
  version: Scalars["String"]["input"];
};

export type QueryDocument_AggregatedArgs = {
  filter?: InputMaybe<Document_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  page?: InputMaybe<Scalars["Int"]["input"]>;
  search?: InputMaybe<Scalars["String"]["input"]>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

export type QueryDocument_By_IdArgs = {
  id: Scalars["ID"]["input"];
  version?: InputMaybe<Scalars["String"]["input"]>;
};

export type QueryDocument_By_VersionArgs = {
  id: Scalars["ID"]["input"];
  version: Scalars["String"]["input"];
};

export type QueryEntityArgs = {
  filter?: InputMaybe<Entity_Filter>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  page?: InputMaybe<Scalars["Int"]["input"]>;
  search?: InputMaybe<Scalars["String"]["input"]>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

export type QueryEntity_AggregatedArgs = {
  filter?: InputMaybe<Entity_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  page?: InputMaybe<Scalars["Int"]["input"]>;
  search?: InputMaybe<Scalars["String"]["input"]>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

export type QueryEntity_By_IdArgs = {
  id: Scalars["ID"]["input"];
  version?: InputMaybe<Scalars["String"]["input"]>;
};

export type QueryEntity_By_VersionArgs = {
  id: Scalars["ID"]["input"];
  version: Scalars["String"]["input"];
};

export type QueryUserArgs = {
  filter?: InputMaybe<User_Filter>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  page?: InputMaybe<Scalars["Int"]["input"]>;
  search?: InputMaybe<Scalars["String"]["input"]>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

export type QueryUser_AggregatedArgs = {
  filter?: InputMaybe<User_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  page?: InputMaybe<Scalars["Int"]["input"]>;
  search?: InputMaybe<Scalars["String"]["input"]>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

export type QueryUser_By_IdArgs = {
  id: Scalars["ID"]["input"];
  version?: InputMaybe<Scalars["String"]["input"]>;
};

export type QueryUser_By_VersionArgs = {
  id: Scalars["ID"]["input"];
  version: Scalars["String"]["input"];
};

export type Subscription = {
  __typename?: "Subscription";
  documentCategory_mutated?: Maybe<DocumentCategory_Mutated>;
  documentItem_mutated?: Maybe<DocumentItem_Mutated>;
  document_mutated?: Maybe<Document_Mutated>;
  entity_mutated?: Maybe<Entity_Mutated>;
  user_mutated?: Maybe<User_Mutated>;
};

export type SubscriptionDocumentCategory_MutatedArgs = {
  event?: InputMaybe<EventEnum>;
};

export type SubscriptionDocumentItem_MutatedArgs = {
  event?: InputMaybe<EventEnum>;
};

export type SubscriptionDocument_MutatedArgs = {
  event?: InputMaybe<EventEnum>;
};

export type SubscriptionEntity_MutatedArgs = {
  event?: InputMaybe<EventEnum>;
};

export type SubscriptionUser_MutatedArgs = {
  event?: InputMaybe<EventEnum>;
};

export type Boolean_Filter_Operators = {
  _eq?: InputMaybe<Scalars["Boolean"]["input"]>;
  _neq?: InputMaybe<Scalars["Boolean"]["input"]>;
  _nnull?: InputMaybe<Scalars["Boolean"]["input"]>;
  _null?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type Count_Function_Filter_Operators = {
  count?: InputMaybe<Number_Filter_Operators>;
};

export type Count_Functions = {
  __typename?: "count_functions";
  count?: Maybe<Scalars["Int"]["output"]>;
};

export type Create_DocumentCategory_Input = {
  code?: InputMaybe<Scalars["String"]["input"]>;
  date_created?: InputMaybe<Scalars["Date"]["input"]>;
  date_updated?: InputMaybe<Scalars["Date"]["input"]>;
  documents?: InputMaybe<Array<InputMaybe<Create_Document_Input>>>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  sort?: InputMaybe<Scalars["Int"]["input"]>;
  status?: InputMaybe<Scalars["String"]["input"]>;
  title?: InputMaybe<Scalars["String"]["input"]>;
  user_created?: InputMaybe<Scalars["String"]["input"]>;
  user_updated?: InputMaybe<Scalars["String"]["input"]>;
};

export type Create_DocumentItem_Input = {
  brand?: InputMaybe<Scalars["String"]["input"]>;
  changed?: InputMaybe<Scalars["Boolean"]["input"]>;
  date_created?: InputMaybe<Scalars["Date"]["input"]>;
  date_updated?: InputMaybe<Scalars["Date"]["input"]>;
  description?: InputMaybe<Scalars["String"]["input"]>;
  document?: InputMaybe<Create_Document_Input>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  nextDate?: InputMaybe<Scalars["Date"]["input"]>;
  nextKilometer?: InputMaybe<Scalars["Int"]["input"]>;
  sort?: InputMaybe<Scalars["Int"]["input"]>;
  status?: InputMaybe<Scalars["String"]["input"]>;
  title?: InputMaybe<Scalars["String"]["input"]>;
  user_created?: InputMaybe<Scalars["String"]["input"]>;
  user_updated?: InputMaybe<Scalars["String"]["input"]>;
  visited?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type Create_Document_Input = {
  date?: InputMaybe<Scalars["Date"]["input"]>;
  date_created?: InputMaybe<Scalars["Date"]["input"]>;
  date_updated?: InputMaybe<Scalars["Date"]["input"]>;
  description?: InputMaybe<Scalars["String"]["input"]>;
  documentCategory?: InputMaybe<Create_DocumentCategory_Input>;
  entity?: InputMaybe<Create_Entity_Input>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  items?: InputMaybe<Array<InputMaybe<Create_DocumentItem_Input>>>;
  kilometer?: InputMaybe<Scalars["Int"]["input"]>;
  sort?: InputMaybe<Scalars["Int"]["input"]>;
  status?: InputMaybe<Scalars["String"]["input"]>;
  title?: InputMaybe<Scalars["String"]["input"]>;
  user_created?: InputMaybe<Scalars["String"]["input"]>;
  user_updated?: InputMaybe<Scalars["String"]["input"]>;
};

export type Create_Entity_Input = {
  color?: InputMaybe<Scalars["String"]["input"]>;
  date_created?: InputMaybe<Scalars["Date"]["input"]>;
  date_updated?: InputMaybe<Scalars["Date"]["input"]>;
  documents?: InputMaybe<Array<InputMaybe<Create_Document_Input>>>;
  height?: InputMaybe<Scalars["Float"]["input"]>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  no?: InputMaybe<Scalars["String"]["input"]>;
  productionYear?: InputMaybe<Scalars["Int"]["input"]>;
  race?: InputMaybe<Scalars["String"]["input"]>;
  sort?: InputMaybe<Scalars["Int"]["input"]>;
  status?: InputMaybe<Scalars["String"]["input"]>;
  title?: InputMaybe<Scalars["String"]["input"]>;
  user?: InputMaybe<Create_User_Input>;
  user_created?: InputMaybe<Scalars["String"]["input"]>;
  user_updated?: InputMaybe<Scalars["String"]["input"]>;
  weight?: InputMaybe<Scalars["Float"]["input"]>;
};

export type Create_User_Input = {
  date_created?: InputMaybe<Scalars["Date"]["input"]>;
  date_updated?: InputMaybe<Scalars["Date"]["input"]>;
  email?: InputMaybe<Scalars["String"]["input"]>;
  entities?: InputMaybe<Array<InputMaybe<Create_Entity_Input>>>;
  firstName?: InputMaybe<Scalars["String"]["input"]>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  lastName?: InputMaybe<Scalars["String"]["input"]>;
  password?: InputMaybe<Scalars["Hash"]["input"]>;
  phone?: InputMaybe<Scalars["String"]["input"]>;
  sort?: InputMaybe<Scalars["Int"]["input"]>;
  status?: InputMaybe<Scalars["String"]["input"]>;
  user_created?: InputMaybe<Scalars["String"]["input"]>;
  user_updated?: InputMaybe<Scalars["String"]["input"]>;
  username?: InputMaybe<Scalars["String"]["input"]>;
};

export type Date_Filter_Operators = {
  _between?: InputMaybe<
    Array<InputMaybe<Scalars["GraphQLStringOrFloat"]["input"]>>
  >;
  _eq?: InputMaybe<Scalars["String"]["input"]>;
  _gt?: InputMaybe<Scalars["String"]["input"]>;
  _gte?: InputMaybe<Scalars["String"]["input"]>;
  _in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  _lt?: InputMaybe<Scalars["String"]["input"]>;
  _lte?: InputMaybe<Scalars["String"]["input"]>;
  _nbetween?: InputMaybe<
    Array<InputMaybe<Scalars["GraphQLStringOrFloat"]["input"]>>
  >;
  _neq?: InputMaybe<Scalars["String"]["input"]>;
  _nin?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  _nnull?: InputMaybe<Scalars["Boolean"]["input"]>;
  _null?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type Datetime_Function_Filter_Operators = {
  day?: InputMaybe<Number_Filter_Operators>;
  hour?: InputMaybe<Number_Filter_Operators>;
  minute?: InputMaybe<Number_Filter_Operators>;
  month?: InputMaybe<Number_Filter_Operators>;
  second?: InputMaybe<Number_Filter_Operators>;
  week?: InputMaybe<Number_Filter_Operators>;
  weekday?: InputMaybe<Number_Filter_Operators>;
  year?: InputMaybe<Number_Filter_Operators>;
};

export type Datetime_Functions = {
  __typename?: "datetime_functions";
  day?: Maybe<Scalars["Int"]["output"]>;
  hour?: Maybe<Scalars["Int"]["output"]>;
  minute?: Maybe<Scalars["Int"]["output"]>;
  month?: Maybe<Scalars["Int"]["output"]>;
  second?: Maybe<Scalars["Int"]["output"]>;
  week?: Maybe<Scalars["Int"]["output"]>;
  weekday?: Maybe<Scalars["Int"]["output"]>;
  year?: Maybe<Scalars["Int"]["output"]>;
};

export type Delete_Many = {
  __typename?: "delete_many";
  ids: Array<Maybe<Scalars["ID"]["output"]>>;
};

export type Delete_One = {
  __typename?: "delete_one";
  id: Scalars["ID"]["output"];
};

export type Document = {
  __typename?: "document";
  date?: Maybe<Scalars["Date"]["output"]>;
  date_created?: Maybe<Scalars["Date"]["output"]>;
  date_created_func?: Maybe<Datetime_Functions>;
  date_func?: Maybe<Datetime_Functions>;
  date_updated?: Maybe<Scalars["Date"]["output"]>;
  date_updated_func?: Maybe<Datetime_Functions>;
  description?: Maybe<Scalars["String"]["output"]>;
  documentCategory?: Maybe<DocumentCategory>;
  entity?: Maybe<Entity>;
  id: Scalars["ID"]["output"];
  items?: Maybe<Array<Maybe<DocumentItem>>>;
  items_func?: Maybe<Count_Functions>;
  kilometer?: Maybe<Scalars["Int"]["output"]>;
  sort?: Maybe<Scalars["Int"]["output"]>;
  status?: Maybe<Scalars["String"]["output"]>;
  title?: Maybe<Scalars["String"]["output"]>;
  user_created?: Maybe<Scalars["String"]["output"]>;
  user_updated?: Maybe<Scalars["String"]["output"]>;
};

export type DocumentDocumentCategoryArgs = {
  filter?: InputMaybe<DocumentCategory_Filter>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  page?: InputMaybe<Scalars["Int"]["input"]>;
  search?: InputMaybe<Scalars["String"]["input"]>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

export type DocumentEntityArgs = {
  filter?: InputMaybe<Entity_Filter>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  page?: InputMaybe<Scalars["Int"]["input"]>;
  search?: InputMaybe<Scalars["String"]["input"]>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

export type DocumentItemsArgs = {
  filter?: InputMaybe<DocumentItem_Filter>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  page?: InputMaybe<Scalars["Int"]["input"]>;
  search?: InputMaybe<Scalars["String"]["input"]>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

export type DocumentCategory = {
  __typename?: "documentCategory";
  code?: Maybe<Scalars["String"]["output"]>;
  date_created?: Maybe<Scalars["Date"]["output"]>;
  date_created_func?: Maybe<Datetime_Functions>;
  date_updated?: Maybe<Scalars["Date"]["output"]>;
  date_updated_func?: Maybe<Datetime_Functions>;
  documents?: Maybe<Array<Maybe<Document>>>;
  documents_func?: Maybe<Count_Functions>;
  id: Scalars["ID"]["output"];
  sort?: Maybe<Scalars["Int"]["output"]>;
  status?: Maybe<Scalars["String"]["output"]>;
  title?: Maybe<Scalars["String"]["output"]>;
  user_created?: Maybe<Scalars["String"]["output"]>;
  user_updated?: Maybe<Scalars["String"]["output"]>;
};

export type DocumentCategoryDocumentsArgs = {
  filter?: InputMaybe<Document_Filter>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  page?: InputMaybe<Scalars["Int"]["input"]>;
  search?: InputMaybe<Scalars["String"]["input"]>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

export type DocumentCategory_Aggregated = {
  __typename?: "documentCategory_aggregated";
  avg?: Maybe<DocumentCategory_Aggregated_Fields>;
  avgDistinct?: Maybe<DocumentCategory_Aggregated_Fields>;
  count?: Maybe<DocumentCategory_Aggregated_Count>;
  countAll?: Maybe<Scalars["Int"]["output"]>;
  countDistinct?: Maybe<DocumentCategory_Aggregated_Count>;
  group?: Maybe<Scalars["JSON"]["output"]>;
  max?: Maybe<DocumentCategory_Aggregated_Fields>;
  min?: Maybe<DocumentCategory_Aggregated_Fields>;
  sum?: Maybe<DocumentCategory_Aggregated_Fields>;
  sumDistinct?: Maybe<DocumentCategory_Aggregated_Fields>;
};

export type DocumentCategory_Aggregated_Count = {
  __typename?: "documentCategory_aggregated_count";
  code?: Maybe<Scalars["Int"]["output"]>;
  date_created?: Maybe<Scalars["Int"]["output"]>;
  date_updated?: Maybe<Scalars["Int"]["output"]>;
  documents?: Maybe<Scalars["Int"]["output"]>;
  id?: Maybe<Scalars["Int"]["output"]>;
  sort?: Maybe<Scalars["Int"]["output"]>;
  status?: Maybe<Scalars["Int"]["output"]>;
  title?: Maybe<Scalars["Int"]["output"]>;
  user_created?: Maybe<Scalars["Int"]["output"]>;
  user_updated?: Maybe<Scalars["Int"]["output"]>;
};

export type DocumentCategory_Aggregated_Fields = {
  __typename?: "documentCategory_aggregated_fields";
  sort?: Maybe<Scalars["Float"]["output"]>;
};

export type DocumentCategory_Filter = {
  _and?: InputMaybe<Array<InputMaybe<DocumentCategory_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<DocumentCategory_Filter>>>;
  code?: InputMaybe<String_Filter_Operators>;
  date_created?: InputMaybe<Date_Filter_Operators>;
  date_created_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  date_updated?: InputMaybe<Date_Filter_Operators>;
  date_updated_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  documents?: InputMaybe<Document_Filter>;
  documents_func?: InputMaybe<Count_Function_Filter_Operators>;
  id?: InputMaybe<String_Filter_Operators>;
  sort?: InputMaybe<Number_Filter_Operators>;
  status?: InputMaybe<String_Filter_Operators>;
  title?: InputMaybe<String_Filter_Operators>;
  user_created?: InputMaybe<String_Filter_Operators>;
  user_updated?: InputMaybe<String_Filter_Operators>;
};

export type DocumentCategory_Mutated = {
  __typename?: "documentCategory_mutated";
  data?: Maybe<DocumentCategory>;
  event?: Maybe<EventEnum>;
  key: Scalars["ID"]["output"];
};

export type DocumentItem = {
  __typename?: "documentItem";
  brand?: Maybe<Scalars["String"]["output"]>;
  changed?: Maybe<Scalars["Boolean"]["output"]>;
  date_created?: Maybe<Scalars["Date"]["output"]>;
  date_created_func?: Maybe<Datetime_Functions>;
  date_updated?: Maybe<Scalars["Date"]["output"]>;
  date_updated_func?: Maybe<Datetime_Functions>;
  description?: Maybe<Scalars["String"]["output"]>;
  document?: Maybe<Document>;
  id: Scalars["ID"]["output"];
  nextDate?: Maybe<Scalars["Date"]["output"]>;
  nextDate_func?: Maybe<Datetime_Functions>;
  nextKilometer?: Maybe<Scalars["Int"]["output"]>;
  sort?: Maybe<Scalars["Int"]["output"]>;
  status?: Maybe<Scalars["String"]["output"]>;
  title?: Maybe<Scalars["String"]["output"]>;
  user_created?: Maybe<Scalars["String"]["output"]>;
  user_updated?: Maybe<Scalars["String"]["output"]>;
  visited?: Maybe<Scalars["Boolean"]["output"]>;
};

export type DocumentItemDocumentArgs = {
  filter?: InputMaybe<Document_Filter>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  page?: InputMaybe<Scalars["Int"]["input"]>;
  search?: InputMaybe<Scalars["String"]["input"]>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

export type DocumentItem_Aggregated = {
  __typename?: "documentItem_aggregated";
  avg?: Maybe<DocumentItem_Aggregated_Fields>;
  avgDistinct?: Maybe<DocumentItem_Aggregated_Fields>;
  count?: Maybe<DocumentItem_Aggregated_Count>;
  countAll?: Maybe<Scalars["Int"]["output"]>;
  countDistinct?: Maybe<DocumentItem_Aggregated_Count>;
  group?: Maybe<Scalars["JSON"]["output"]>;
  max?: Maybe<DocumentItem_Aggregated_Fields>;
  min?: Maybe<DocumentItem_Aggregated_Fields>;
  sum?: Maybe<DocumentItem_Aggregated_Fields>;
  sumDistinct?: Maybe<DocumentItem_Aggregated_Fields>;
};

export type DocumentItem_Aggregated_Count = {
  __typename?: "documentItem_aggregated_count";
  brand?: Maybe<Scalars["Int"]["output"]>;
  changed?: Maybe<Scalars["Int"]["output"]>;
  date_created?: Maybe<Scalars["Int"]["output"]>;
  date_updated?: Maybe<Scalars["Int"]["output"]>;
  description?: Maybe<Scalars["Int"]["output"]>;
  document?: Maybe<Scalars["Int"]["output"]>;
  id?: Maybe<Scalars["Int"]["output"]>;
  nextDate?: Maybe<Scalars["Int"]["output"]>;
  nextKilometer?: Maybe<Scalars["Int"]["output"]>;
  sort?: Maybe<Scalars["Int"]["output"]>;
  status?: Maybe<Scalars["Int"]["output"]>;
  title?: Maybe<Scalars["Int"]["output"]>;
  user_created?: Maybe<Scalars["Int"]["output"]>;
  user_updated?: Maybe<Scalars["Int"]["output"]>;
  visited?: Maybe<Scalars["Int"]["output"]>;
};

export type DocumentItem_Aggregated_Fields = {
  __typename?: "documentItem_aggregated_fields";
  nextKilometer?: Maybe<Scalars["Float"]["output"]>;
  sort?: Maybe<Scalars["Float"]["output"]>;
};

export type DocumentItem_Filter = {
  _and?: InputMaybe<Array<InputMaybe<DocumentItem_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<DocumentItem_Filter>>>;
  brand?: InputMaybe<String_Filter_Operators>;
  changed?: InputMaybe<Boolean_Filter_Operators>;
  date_created?: InputMaybe<Date_Filter_Operators>;
  date_created_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  date_updated?: InputMaybe<Date_Filter_Operators>;
  date_updated_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  description?: InputMaybe<String_Filter_Operators>;
  document?: InputMaybe<Document_Filter>;
  id?: InputMaybe<String_Filter_Operators>;
  nextDate?: InputMaybe<Date_Filter_Operators>;
  nextDate_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  nextKilometer?: InputMaybe<Number_Filter_Operators>;
  sort?: InputMaybe<Number_Filter_Operators>;
  status?: InputMaybe<String_Filter_Operators>;
  title?: InputMaybe<String_Filter_Operators>;
  user_created?: InputMaybe<String_Filter_Operators>;
  user_updated?: InputMaybe<String_Filter_Operators>;
  visited?: InputMaybe<Boolean_Filter_Operators>;
};

export type DocumentItem_Mutated = {
  __typename?: "documentItem_mutated";
  data?: Maybe<DocumentItem>;
  event?: Maybe<EventEnum>;
  key: Scalars["ID"]["output"];
};

export type Document_Aggregated = {
  __typename?: "document_aggregated";
  avg?: Maybe<Document_Aggregated_Fields>;
  avgDistinct?: Maybe<Document_Aggregated_Fields>;
  count?: Maybe<Document_Aggregated_Count>;
  countAll?: Maybe<Scalars["Int"]["output"]>;
  countDistinct?: Maybe<Document_Aggregated_Count>;
  group?: Maybe<Scalars["JSON"]["output"]>;
  max?: Maybe<Document_Aggregated_Fields>;
  min?: Maybe<Document_Aggregated_Fields>;
  sum?: Maybe<Document_Aggregated_Fields>;
  sumDistinct?: Maybe<Document_Aggregated_Fields>;
};

export type Document_Aggregated_Count = {
  __typename?: "document_aggregated_count";
  date?: Maybe<Scalars["Int"]["output"]>;
  date_created?: Maybe<Scalars["Int"]["output"]>;
  date_updated?: Maybe<Scalars["Int"]["output"]>;
  description?: Maybe<Scalars["Int"]["output"]>;
  documentCategory?: Maybe<Scalars["Int"]["output"]>;
  entity?: Maybe<Scalars["Int"]["output"]>;
  id?: Maybe<Scalars["Int"]["output"]>;
  items?: Maybe<Scalars["Int"]["output"]>;
  kilometer?: Maybe<Scalars["Int"]["output"]>;
  sort?: Maybe<Scalars["Int"]["output"]>;
  status?: Maybe<Scalars["Int"]["output"]>;
  title?: Maybe<Scalars["Int"]["output"]>;
  user_created?: Maybe<Scalars["Int"]["output"]>;
  user_updated?: Maybe<Scalars["Int"]["output"]>;
};

export type Document_Aggregated_Fields = {
  __typename?: "document_aggregated_fields";
  kilometer?: Maybe<Scalars["Float"]["output"]>;
  sort?: Maybe<Scalars["Float"]["output"]>;
};

export type Document_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Document_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Document_Filter>>>;
  date?: InputMaybe<Date_Filter_Operators>;
  date_created?: InputMaybe<Date_Filter_Operators>;
  date_created_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  date_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  date_updated?: InputMaybe<Date_Filter_Operators>;
  date_updated_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  description?: InputMaybe<String_Filter_Operators>;
  documentCategory?: InputMaybe<DocumentCategory_Filter>;
  entity?: InputMaybe<Entity_Filter>;
  id?: InputMaybe<String_Filter_Operators>;
  items?: InputMaybe<DocumentItem_Filter>;
  items_func?: InputMaybe<Count_Function_Filter_Operators>;
  kilometer?: InputMaybe<Number_Filter_Operators>;
  sort?: InputMaybe<Number_Filter_Operators>;
  status?: InputMaybe<String_Filter_Operators>;
  title?: InputMaybe<String_Filter_Operators>;
  user_created?: InputMaybe<String_Filter_Operators>;
  user_updated?: InputMaybe<String_Filter_Operators>;
};

export type Document_Mutated = {
  __typename?: "document_mutated";
  data?: Maybe<Document>;
  event?: Maybe<EventEnum>;
  key: Scalars["ID"]["output"];
};

export type Entity = {
  __typename?: "entity";
  color?: Maybe<Scalars["String"]["output"]>;
  date_created?: Maybe<Scalars["Date"]["output"]>;
  date_created_func?: Maybe<Datetime_Functions>;
  date_updated?: Maybe<Scalars["Date"]["output"]>;
  date_updated_func?: Maybe<Datetime_Functions>;
  documents?: Maybe<Array<Maybe<Document>>>;
  documents_func?: Maybe<Count_Functions>;
  height?: Maybe<Scalars["Float"]["output"]>;
  id: Scalars["ID"]["output"];
  no?: Maybe<Scalars["String"]["output"]>;
  productionYear?: Maybe<Scalars["Int"]["output"]>;
  race?: Maybe<Scalars["String"]["output"]>;
  sort?: Maybe<Scalars["Int"]["output"]>;
  status?: Maybe<Scalars["String"]["output"]>;
  title?: Maybe<Scalars["String"]["output"]>;
  user?: Maybe<User>;
  user_created?: Maybe<Scalars["String"]["output"]>;
  user_updated?: Maybe<Scalars["String"]["output"]>;
  weight?: Maybe<Scalars["Float"]["output"]>;
};

export type EntityDocumentsArgs = {
  filter?: InputMaybe<Document_Filter>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  page?: InputMaybe<Scalars["Int"]["input"]>;
  search?: InputMaybe<Scalars["String"]["input"]>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

export type EntityUserArgs = {
  filter?: InputMaybe<User_Filter>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  page?: InputMaybe<Scalars["Int"]["input"]>;
  search?: InputMaybe<Scalars["String"]["input"]>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

export type Entity_Aggregated = {
  __typename?: "entity_aggregated";
  avg?: Maybe<Entity_Aggregated_Fields>;
  avgDistinct?: Maybe<Entity_Aggregated_Fields>;
  count?: Maybe<Entity_Aggregated_Count>;
  countAll?: Maybe<Scalars["Int"]["output"]>;
  countDistinct?: Maybe<Entity_Aggregated_Count>;
  group?: Maybe<Scalars["JSON"]["output"]>;
  max?: Maybe<Entity_Aggregated_Fields>;
  min?: Maybe<Entity_Aggregated_Fields>;
  sum?: Maybe<Entity_Aggregated_Fields>;
  sumDistinct?: Maybe<Entity_Aggregated_Fields>;
};

export type Entity_Aggregated_Count = {
  __typename?: "entity_aggregated_count";
  color?: Maybe<Scalars["Int"]["output"]>;
  date_created?: Maybe<Scalars["Int"]["output"]>;
  date_updated?: Maybe<Scalars["Int"]["output"]>;
  documents?: Maybe<Scalars["Int"]["output"]>;
  height?: Maybe<Scalars["Int"]["output"]>;
  id?: Maybe<Scalars["Int"]["output"]>;
  no?: Maybe<Scalars["Int"]["output"]>;
  productionYear?: Maybe<Scalars["Int"]["output"]>;
  race?: Maybe<Scalars["Int"]["output"]>;
  sort?: Maybe<Scalars["Int"]["output"]>;
  status?: Maybe<Scalars["Int"]["output"]>;
  title?: Maybe<Scalars["Int"]["output"]>;
  user?: Maybe<Scalars["Int"]["output"]>;
  user_created?: Maybe<Scalars["Int"]["output"]>;
  user_updated?: Maybe<Scalars["Int"]["output"]>;
  weight?: Maybe<Scalars["Int"]["output"]>;
};

export type Entity_Aggregated_Fields = {
  __typename?: "entity_aggregated_fields";
  height?: Maybe<Scalars["Float"]["output"]>;
  productionYear?: Maybe<Scalars["Float"]["output"]>;
  sort?: Maybe<Scalars["Float"]["output"]>;
  weight?: Maybe<Scalars["Float"]["output"]>;
};

export type Entity_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Entity_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Entity_Filter>>>;
  color?: InputMaybe<String_Filter_Operators>;
  date_created?: InputMaybe<Date_Filter_Operators>;
  date_created_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  date_updated?: InputMaybe<Date_Filter_Operators>;
  date_updated_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  documents?: InputMaybe<Document_Filter>;
  documents_func?: InputMaybe<Count_Function_Filter_Operators>;
  height?: InputMaybe<Number_Filter_Operators>;
  id?: InputMaybe<String_Filter_Operators>;
  no?: InputMaybe<String_Filter_Operators>;
  productionYear?: InputMaybe<Number_Filter_Operators>;
  race?: InputMaybe<String_Filter_Operators>;
  sort?: InputMaybe<Number_Filter_Operators>;
  status?: InputMaybe<String_Filter_Operators>;
  title?: InputMaybe<String_Filter_Operators>;
  user?: InputMaybe<User_Filter>;
  user_created?: InputMaybe<String_Filter_Operators>;
  user_updated?: InputMaybe<String_Filter_Operators>;
  weight?: InputMaybe<Number_Filter_Operators>;
};

export type Entity_Mutated = {
  __typename?: "entity_mutated";
  data?: Maybe<Entity>;
  event?: Maybe<EventEnum>;
  key: Scalars["ID"]["output"];
};

export type Hash_Filter_Operators = {
  _empty?: InputMaybe<Scalars["Boolean"]["input"]>;
  _nempty?: InputMaybe<Scalars["Boolean"]["input"]>;
  _nnull?: InputMaybe<Scalars["Boolean"]["input"]>;
  _null?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type Number_Filter_Operators = {
  _between?: InputMaybe<
    Array<InputMaybe<Scalars["GraphQLStringOrFloat"]["input"]>>
  >;
  _eq?: InputMaybe<Scalars["GraphQLStringOrFloat"]["input"]>;
  _gt?: InputMaybe<Scalars["GraphQLStringOrFloat"]["input"]>;
  _gte?: InputMaybe<Scalars["GraphQLStringOrFloat"]["input"]>;
  _in?: InputMaybe<Array<InputMaybe<Scalars["GraphQLStringOrFloat"]["input"]>>>;
  _lt?: InputMaybe<Scalars["GraphQLStringOrFloat"]["input"]>;
  _lte?: InputMaybe<Scalars["GraphQLStringOrFloat"]["input"]>;
  _nbetween?: InputMaybe<
    Array<InputMaybe<Scalars["GraphQLStringOrFloat"]["input"]>>
  >;
  _neq?: InputMaybe<Scalars["GraphQLStringOrFloat"]["input"]>;
  _nin?: InputMaybe<
    Array<InputMaybe<Scalars["GraphQLStringOrFloat"]["input"]>>
  >;
  _nnull?: InputMaybe<Scalars["Boolean"]["input"]>;
  _null?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type String_Filter_Operators = {
  _contains?: InputMaybe<Scalars["String"]["input"]>;
  _empty?: InputMaybe<Scalars["Boolean"]["input"]>;
  _ends_with?: InputMaybe<Scalars["String"]["input"]>;
  _eq?: InputMaybe<Scalars["String"]["input"]>;
  _icontains?: InputMaybe<Scalars["String"]["input"]>;
  _iends_with?: InputMaybe<Scalars["String"]["input"]>;
  _in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  _istarts_with?: InputMaybe<Scalars["String"]["input"]>;
  _ncontains?: InputMaybe<Scalars["String"]["input"]>;
  _nempty?: InputMaybe<Scalars["Boolean"]["input"]>;
  _nends_with?: InputMaybe<Scalars["String"]["input"]>;
  _neq?: InputMaybe<Scalars["String"]["input"]>;
  _niends_with?: InputMaybe<Scalars["String"]["input"]>;
  _nin?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  _nistarts_with?: InputMaybe<Scalars["String"]["input"]>;
  _nnull?: InputMaybe<Scalars["Boolean"]["input"]>;
  _nstarts_with?: InputMaybe<Scalars["String"]["input"]>;
  _null?: InputMaybe<Scalars["Boolean"]["input"]>;
  _starts_with?: InputMaybe<Scalars["String"]["input"]>;
};

export type Update_DocumentCategory_Input = {
  code?: InputMaybe<Scalars["String"]["input"]>;
  date_created?: InputMaybe<Scalars["Date"]["input"]>;
  date_updated?: InputMaybe<Scalars["Date"]["input"]>;
  documents?: InputMaybe<Array<InputMaybe<Update_Document_Input>>>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  sort?: InputMaybe<Scalars["Int"]["input"]>;
  status?: InputMaybe<Scalars["String"]["input"]>;
  title?: InputMaybe<Scalars["String"]["input"]>;
  user_created?: InputMaybe<Scalars["String"]["input"]>;
  user_updated?: InputMaybe<Scalars["String"]["input"]>;
};

export type Update_DocumentItem_Input = {
  brand?: InputMaybe<Scalars["String"]["input"]>;
  changed?: InputMaybe<Scalars["Boolean"]["input"]>;
  date_created?: InputMaybe<Scalars["Date"]["input"]>;
  date_updated?: InputMaybe<Scalars["Date"]["input"]>;
  description?: InputMaybe<Scalars["String"]["input"]>;
  document?: InputMaybe<Update_Document_Input>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  nextDate?: InputMaybe<Scalars["Date"]["input"]>;
  nextKilometer?: InputMaybe<Scalars["Int"]["input"]>;
  sort?: InputMaybe<Scalars["Int"]["input"]>;
  status?: InputMaybe<Scalars["String"]["input"]>;
  title?: InputMaybe<Scalars["String"]["input"]>;
  user_created?: InputMaybe<Scalars["String"]["input"]>;
  user_updated?: InputMaybe<Scalars["String"]["input"]>;
  visited?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type Update_Document_Input = {
  date?: InputMaybe<Scalars["Date"]["input"]>;
  date_created?: InputMaybe<Scalars["Date"]["input"]>;
  date_updated?: InputMaybe<Scalars["Date"]["input"]>;
  description?: InputMaybe<Scalars["String"]["input"]>;
  documentCategory?: InputMaybe<Update_DocumentCategory_Input>;
  entity?: InputMaybe<Update_Entity_Input>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  items?: InputMaybe<Array<InputMaybe<Update_DocumentItem_Input>>>;
  kilometer?: InputMaybe<Scalars["Int"]["input"]>;
  sort?: InputMaybe<Scalars["Int"]["input"]>;
  status?: InputMaybe<Scalars["String"]["input"]>;
  title?: InputMaybe<Scalars["String"]["input"]>;
  user_created?: InputMaybe<Scalars["String"]["input"]>;
  user_updated?: InputMaybe<Scalars["String"]["input"]>;
};

export type Update_Entity_Input = {
  color?: InputMaybe<Scalars["String"]["input"]>;
  date_created?: InputMaybe<Scalars["Date"]["input"]>;
  date_updated?: InputMaybe<Scalars["Date"]["input"]>;
  documents?: InputMaybe<Array<InputMaybe<Update_Document_Input>>>;
  height?: InputMaybe<Scalars["Float"]["input"]>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  no?: InputMaybe<Scalars["String"]["input"]>;
  productionYear?: InputMaybe<Scalars["Int"]["input"]>;
  race?: InputMaybe<Scalars["String"]["input"]>;
  sort?: InputMaybe<Scalars["Int"]["input"]>;
  status?: InputMaybe<Scalars["String"]["input"]>;
  title?: InputMaybe<Scalars["String"]["input"]>;
  user?: InputMaybe<Update_User_Input>;
  user_created?: InputMaybe<Scalars["String"]["input"]>;
  user_updated?: InputMaybe<Scalars["String"]["input"]>;
  weight?: InputMaybe<Scalars["Float"]["input"]>;
};

export type Update_User_Input = {
  date_created?: InputMaybe<Scalars["Date"]["input"]>;
  date_updated?: InputMaybe<Scalars["Date"]["input"]>;
  email?: InputMaybe<Scalars["String"]["input"]>;
  entities?: InputMaybe<Array<InputMaybe<Update_Entity_Input>>>;
  firstName?: InputMaybe<Scalars["String"]["input"]>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  lastName?: InputMaybe<Scalars["String"]["input"]>;
  password?: InputMaybe<Scalars["Hash"]["input"]>;
  phone?: InputMaybe<Scalars["String"]["input"]>;
  sort?: InputMaybe<Scalars["Int"]["input"]>;
  status?: InputMaybe<Scalars["String"]["input"]>;
  user_created?: InputMaybe<Scalars["String"]["input"]>;
  user_updated?: InputMaybe<Scalars["String"]["input"]>;
  username?: InputMaybe<Scalars["String"]["input"]>;
};

export type User = {
  __typename?: "user";
  date_created?: Maybe<Scalars["Date"]["output"]>;
  date_created_func?: Maybe<Datetime_Functions>;
  date_updated?: Maybe<Scalars["Date"]["output"]>;
  date_updated_func?: Maybe<Datetime_Functions>;
  email?: Maybe<Scalars["String"]["output"]>;
  entities?: Maybe<Array<Maybe<Entity>>>;
  entities_func?: Maybe<Count_Functions>;
  firstName?: Maybe<Scalars["String"]["output"]>;
  id: Scalars["ID"]["output"];
  lastName?: Maybe<Scalars["String"]["output"]>;
  password?: Maybe<Scalars["Hash"]["output"]>;
  phone?: Maybe<Scalars["String"]["output"]>;
  sort?: Maybe<Scalars["Int"]["output"]>;
  status?: Maybe<Scalars["String"]["output"]>;
  user_created?: Maybe<Scalars["String"]["output"]>;
  user_updated?: Maybe<Scalars["String"]["output"]>;
  username?: Maybe<Scalars["String"]["output"]>;
};

export type UserEntitiesArgs = {
  filter?: InputMaybe<Entity_Filter>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  page?: InputMaybe<Scalars["Int"]["input"]>;
  search?: InputMaybe<Scalars["String"]["input"]>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

export type User_Aggregated = {
  __typename?: "user_aggregated";
  avg?: Maybe<User_Aggregated_Fields>;
  avgDistinct?: Maybe<User_Aggregated_Fields>;
  count?: Maybe<User_Aggregated_Count>;
  countAll?: Maybe<Scalars["Int"]["output"]>;
  countDistinct?: Maybe<User_Aggregated_Count>;
  group?: Maybe<Scalars["JSON"]["output"]>;
  max?: Maybe<User_Aggregated_Fields>;
  min?: Maybe<User_Aggregated_Fields>;
  sum?: Maybe<User_Aggregated_Fields>;
  sumDistinct?: Maybe<User_Aggregated_Fields>;
};

export type User_Aggregated_Count = {
  __typename?: "user_aggregated_count";
  date_created?: Maybe<Scalars["Int"]["output"]>;
  date_updated?: Maybe<Scalars["Int"]["output"]>;
  email?: Maybe<Scalars["Int"]["output"]>;
  entities?: Maybe<Scalars["Int"]["output"]>;
  firstName?: Maybe<Scalars["Int"]["output"]>;
  id?: Maybe<Scalars["Int"]["output"]>;
  lastName?: Maybe<Scalars["Int"]["output"]>;
  password?: Maybe<Scalars["Int"]["output"]>;
  phone?: Maybe<Scalars["Int"]["output"]>;
  sort?: Maybe<Scalars["Int"]["output"]>;
  status?: Maybe<Scalars["Int"]["output"]>;
  user_created?: Maybe<Scalars["Int"]["output"]>;
  user_updated?: Maybe<Scalars["Int"]["output"]>;
  username?: Maybe<Scalars["Int"]["output"]>;
};

export type User_Aggregated_Fields = {
  __typename?: "user_aggregated_fields";
  sort?: Maybe<Scalars["Float"]["output"]>;
};

export type User_Filter = {
  _and?: InputMaybe<Array<InputMaybe<User_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<User_Filter>>>;
  date_created?: InputMaybe<Date_Filter_Operators>;
  date_created_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  date_updated?: InputMaybe<Date_Filter_Operators>;
  date_updated_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  email?: InputMaybe<String_Filter_Operators>;
  entities?: InputMaybe<Entity_Filter>;
  entities_func?: InputMaybe<Count_Function_Filter_Operators>;
  firstName?: InputMaybe<String_Filter_Operators>;
  id?: InputMaybe<String_Filter_Operators>;
  lastName?: InputMaybe<String_Filter_Operators>;
  password?: InputMaybe<Hash_Filter_Operators>;
  phone?: InputMaybe<String_Filter_Operators>;
  sort?: InputMaybe<Number_Filter_Operators>;
  status?: InputMaybe<String_Filter_Operators>;
  user_created?: InputMaybe<String_Filter_Operators>;
  user_updated?: InputMaybe<String_Filter_Operators>;
  username?: InputMaybe<String_Filter_Operators>;
};

export type User_Mutated = {
  __typename?: "user_mutated";
  data?: Maybe<User>;
  event?: Maybe<EventEnum>;
  key: Scalars["ID"]["output"];
};

export type Version_Document = {
  __typename?: "version_document";
  date?: Maybe<Scalars["Date"]["output"]>;
  date_created?: Maybe<Scalars["Date"]["output"]>;
  date_updated?: Maybe<Scalars["Date"]["output"]>;
  description?: Maybe<Scalars["String"]["output"]>;
  documentCategory?: Maybe<Scalars["JSON"]["output"]>;
  entity?: Maybe<Scalars["JSON"]["output"]>;
  id?: Maybe<Scalars["ID"]["output"]>;
  items?: Maybe<Scalars["JSON"]["output"]>;
  kilometer?: Maybe<Scalars["Int"]["output"]>;
  sort?: Maybe<Scalars["Int"]["output"]>;
  status?: Maybe<Scalars["String"]["output"]>;
  title?: Maybe<Scalars["String"]["output"]>;
  user_created?: Maybe<Scalars["String"]["output"]>;
  user_updated?: Maybe<Scalars["String"]["output"]>;
};

export type Version_DocumentCategory = {
  __typename?: "version_documentCategory";
  code?: Maybe<Scalars["String"]["output"]>;
  date_created?: Maybe<Scalars["Date"]["output"]>;
  date_updated?: Maybe<Scalars["Date"]["output"]>;
  documents?: Maybe<Scalars["JSON"]["output"]>;
  id?: Maybe<Scalars["ID"]["output"]>;
  sort?: Maybe<Scalars["Int"]["output"]>;
  status?: Maybe<Scalars["String"]["output"]>;
  title?: Maybe<Scalars["String"]["output"]>;
  user_created?: Maybe<Scalars["String"]["output"]>;
  user_updated?: Maybe<Scalars["String"]["output"]>;
};

export type Version_DocumentItem = {
  __typename?: "version_documentItem";
  brand?: Maybe<Scalars["String"]["output"]>;
  changed?: Maybe<Scalars["Boolean"]["output"]>;
  date_created?: Maybe<Scalars["Date"]["output"]>;
  date_updated?: Maybe<Scalars["Date"]["output"]>;
  description?: Maybe<Scalars["String"]["output"]>;
  document?: Maybe<Scalars["JSON"]["output"]>;
  id?: Maybe<Scalars["ID"]["output"]>;
  nextDate?: Maybe<Scalars["Date"]["output"]>;
  nextKilometer?: Maybe<Scalars["Int"]["output"]>;
  sort?: Maybe<Scalars["Int"]["output"]>;
  status?: Maybe<Scalars["String"]["output"]>;
  title?: Maybe<Scalars["String"]["output"]>;
  user_created?: Maybe<Scalars["String"]["output"]>;
  user_updated?: Maybe<Scalars["String"]["output"]>;
  visited?: Maybe<Scalars["Boolean"]["output"]>;
};

export type Version_Entity = {
  __typename?: "version_entity";
  color?: Maybe<Scalars["String"]["output"]>;
  date_created?: Maybe<Scalars["Date"]["output"]>;
  date_updated?: Maybe<Scalars["Date"]["output"]>;
  documents?: Maybe<Scalars["JSON"]["output"]>;
  height?: Maybe<Scalars["Float"]["output"]>;
  id?: Maybe<Scalars["ID"]["output"]>;
  no?: Maybe<Scalars["String"]["output"]>;
  productionYear?: Maybe<Scalars["Int"]["output"]>;
  race?: Maybe<Scalars["String"]["output"]>;
  sort?: Maybe<Scalars["Int"]["output"]>;
  status?: Maybe<Scalars["String"]["output"]>;
  title?: Maybe<Scalars["String"]["output"]>;
  user?: Maybe<Scalars["JSON"]["output"]>;
  user_created?: Maybe<Scalars["String"]["output"]>;
  user_updated?: Maybe<Scalars["String"]["output"]>;
  weight?: Maybe<Scalars["Float"]["output"]>;
};

export type Version_User = {
  __typename?: "version_user";
  date_created?: Maybe<Scalars["Date"]["output"]>;
  date_updated?: Maybe<Scalars["Date"]["output"]>;
  email?: Maybe<Scalars["String"]["output"]>;
  entities?: Maybe<Scalars["JSON"]["output"]>;
  firstName?: Maybe<Scalars["String"]["output"]>;
  id?: Maybe<Scalars["ID"]["output"]>;
  lastName?: Maybe<Scalars["String"]["output"]>;
  password?: Maybe<Scalars["Hash"]["output"]>;
  phone?: Maybe<Scalars["String"]["output"]>;
  sort?: Maybe<Scalars["Int"]["output"]>;
  status?: Maybe<Scalars["String"]["output"]>;
  user_created?: Maybe<Scalars["String"]["output"]>;
  user_updated?: Maybe<Scalars["String"]["output"]>;
  username?: Maybe<Scalars["String"]["output"]>;
};

export type GetEntitiesDataQueryVariables = Exact<{ [key: string]: never }>;

export type GetEntitiesDataQuery = {
  __typename?: "Query";
  entity: Array<{
    __typename?: "entity";
    id: string;
    title?: string | null;
    color?: string | null;
    documents?: Array<{
      __typename?: "document";
      id: string;
      title?: string | null;
    } | null> | null;
  }>;
};

export const GetEntitiesDataDocument = gql`
  query getEntitiesData {
    entity {
      id
      title
      color
      documents {
        id
        title
      }
    }
  }
`;

export type SdkFunctionWrapper = <T>(
  action: (requestHeaders?: Record<string, string>) => Promise<T>,
  operationName: string,
  operationType?: string,
  variables?: any,
) => Promise<T>;

const defaultWrapper: SdkFunctionWrapper = (
  action,
  _operationName,
  _operationType,
  _variables,
) => action();

export function getSdk(
  client: GraphQLClient,
  withWrapper: SdkFunctionWrapper = defaultWrapper,
) {
  return {
    getEntitiesData(
      variables?: GetEntitiesDataQueryVariables,
      requestHeaders?: GraphQLClientRequestHeaders,
    ): Promise<GetEntitiesDataQuery> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<GetEntitiesDataQuery>(
            GetEntitiesDataDocument,
            variables,
            { ...requestHeaders, ...wrappedRequestHeaders },
          ),
        "getEntitiesData",
        "query",
        variables,
      );
    },
  };
}
export type Sdk = ReturnType<typeof getSdk>;
