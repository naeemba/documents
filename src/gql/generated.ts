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
  delete_documentCategory_item?: Maybe<Delete_One>;
  delete_documentCategory_items?: Maybe<Delete_Many>;
  delete_documentItem_item?: Maybe<Delete_One>;
  delete_documentItem_items?: Maybe<Delete_Many>;
  delete_document_item?: Maybe<Delete_One>;
  delete_document_items?: Maybe<Delete_Many>;
  delete_entity_item?: Maybe<Delete_One>;
  delete_entity_items?: Maybe<Delete_Many>;
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

export type Subscription = {
  __typename?: "Subscription";
  directus_users_mutated?: Maybe<Directus_Users_Mutated>;
  documentCategory_mutated?: Maybe<DocumentCategory_Mutated>;
  documentItem_mutated?: Maybe<DocumentItem_Mutated>;
  document_mutated?: Maybe<Document_Mutated>;
  entity_mutated?: Maybe<Entity_Mutated>;
};

export type SubscriptionDirectus_Users_MutatedArgs = {
  event?: InputMaybe<EventEnum>;
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

export type Create_Directus_Users_Input = {
  appearance?: InputMaybe<Scalars["String"]["input"]>;
  auth_data?: InputMaybe<Scalars["JSON"]["input"]>;
  avatar?: InputMaybe<Scalars["String"]["input"]>;
  description?: InputMaybe<Scalars["String"]["input"]>;
  email?: InputMaybe<Scalars["String"]["input"]>;
  email_notifications?: InputMaybe<Scalars["Boolean"]["input"]>;
  external_identifier?: InputMaybe<Scalars["String"]["input"]>;
  first_name?: InputMaybe<Scalars["String"]["input"]>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  language?: InputMaybe<Scalars["String"]["input"]>;
  last_access?: InputMaybe<Scalars["Date"]["input"]>;
  last_name?: InputMaybe<Scalars["String"]["input"]>;
  last_page?: InputMaybe<Scalars["String"]["input"]>;
  location?: InputMaybe<Scalars["String"]["input"]>;
  password?: InputMaybe<Scalars["Hash"]["input"]>;
  policies?: InputMaybe<Scalars["String"]["input"]>;
  provider?: InputMaybe<Scalars["String"]["input"]>;
  role?: InputMaybe<Scalars["String"]["input"]>;
  status?: InputMaybe<Scalars["String"]["input"]>;
  tags?: InputMaybe<Scalars["JSON"]["input"]>;
  tfa_secret?: InputMaybe<Scalars["Hash"]["input"]>;
  theme_dark?: InputMaybe<Scalars["String"]["input"]>;
  theme_dark_overrides?: InputMaybe<Scalars["JSON"]["input"]>;
  theme_light?: InputMaybe<Scalars["String"]["input"]>;
  theme_light_overrides?: InputMaybe<Scalars["JSON"]["input"]>;
  title?: InputMaybe<Scalars["String"]["input"]>;
  token?: InputMaybe<Scalars["Hash"]["input"]>;
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
  user_created?: InputMaybe<Create_Directus_Users_Input>;
  user_updated?: InputMaybe<Create_Directus_Users_Input>;
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
  user_created?: InputMaybe<Create_Directus_Users_Input>;
  user_updated?: InputMaybe<Create_Directus_Users_Input>;
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
  user_created?: InputMaybe<Create_Directus_Users_Input>;
  user_updated?: InputMaybe<Create_Directus_Users_Input>;
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
  user?: InputMaybe<Scalars["String"]["input"]>;
  user_created?: InputMaybe<Create_Directus_Users_Input>;
  user_updated?: InputMaybe<Create_Directus_Users_Input>;
  weight?: InputMaybe<Scalars["Float"]["input"]>;
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

export type Directus_Users = {
  __typename?: "directus_users";
  appearance?: Maybe<Scalars["String"]["output"]>;
  auth_data?: Maybe<Scalars["JSON"]["output"]>;
  auth_data_func?: Maybe<Count_Functions>;
  avatar?: Maybe<Scalars["String"]["output"]>;
  description?: Maybe<Scalars["String"]["output"]>;
  email?: Maybe<Scalars["String"]["output"]>;
  email_notifications?: Maybe<Scalars["Boolean"]["output"]>;
  external_identifier?: Maybe<Scalars["String"]["output"]>;
  first_name?: Maybe<Scalars["String"]["output"]>;
  id: Scalars["ID"]["output"];
  language?: Maybe<Scalars["String"]["output"]>;
  last_access?: Maybe<Scalars["Date"]["output"]>;
  last_access_func?: Maybe<Datetime_Functions>;
  last_name?: Maybe<Scalars["String"]["output"]>;
  last_page?: Maybe<Scalars["String"]["output"]>;
  location?: Maybe<Scalars["String"]["output"]>;
  password?: Maybe<Scalars["Hash"]["output"]>;
  policies?: Maybe<Scalars["String"]["output"]>;
  policies_func?: Maybe<Count_Functions>;
  provider?: Maybe<Scalars["String"]["output"]>;
  role?: Maybe<Scalars["String"]["output"]>;
  status?: Maybe<Scalars["String"]["output"]>;
  tags?: Maybe<Scalars["JSON"]["output"]>;
  tags_func?: Maybe<Count_Functions>;
  tfa_secret?: Maybe<Scalars["Hash"]["output"]>;
  theme_dark?: Maybe<Scalars["String"]["output"]>;
  theme_dark_overrides?: Maybe<Scalars["JSON"]["output"]>;
  theme_dark_overrides_func?: Maybe<Count_Functions>;
  theme_light?: Maybe<Scalars["String"]["output"]>;
  theme_light_overrides?: Maybe<Scalars["JSON"]["output"]>;
  theme_light_overrides_func?: Maybe<Count_Functions>;
  title?: Maybe<Scalars["String"]["output"]>;
  token?: Maybe<Scalars["Hash"]["output"]>;
};

export type Directus_Users_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Directus_Users_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Directus_Users_Filter>>>;
  appearance?: InputMaybe<String_Filter_Operators>;
  auth_data?: InputMaybe<String_Filter_Operators>;
  auth_data_func?: InputMaybe<Count_Function_Filter_Operators>;
  avatar?: InputMaybe<String_Filter_Operators>;
  description?: InputMaybe<String_Filter_Operators>;
  email?: InputMaybe<String_Filter_Operators>;
  email_notifications?: InputMaybe<Boolean_Filter_Operators>;
  external_identifier?: InputMaybe<String_Filter_Operators>;
  first_name?: InputMaybe<String_Filter_Operators>;
  id?: InputMaybe<String_Filter_Operators>;
  language?: InputMaybe<String_Filter_Operators>;
  last_access?: InputMaybe<Date_Filter_Operators>;
  last_access_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  last_name?: InputMaybe<String_Filter_Operators>;
  last_page?: InputMaybe<String_Filter_Operators>;
  location?: InputMaybe<String_Filter_Operators>;
  password?: InputMaybe<Hash_Filter_Operators>;
  policies?: InputMaybe<String_Filter_Operators>;
  policies_func?: InputMaybe<Count_Function_Filter_Operators>;
  provider?: InputMaybe<String_Filter_Operators>;
  role?: InputMaybe<String_Filter_Operators>;
  status?: InputMaybe<String_Filter_Operators>;
  tags?: InputMaybe<String_Filter_Operators>;
  tags_func?: InputMaybe<Count_Function_Filter_Operators>;
  tfa_secret?: InputMaybe<Hash_Filter_Operators>;
  theme_dark?: InputMaybe<String_Filter_Operators>;
  theme_dark_overrides?: InputMaybe<String_Filter_Operators>;
  theme_dark_overrides_func?: InputMaybe<Count_Function_Filter_Operators>;
  theme_light?: InputMaybe<String_Filter_Operators>;
  theme_light_overrides?: InputMaybe<String_Filter_Operators>;
  theme_light_overrides_func?: InputMaybe<Count_Function_Filter_Operators>;
  title?: InputMaybe<String_Filter_Operators>;
  token?: InputMaybe<Hash_Filter_Operators>;
};

export type Directus_Users_Mutated = {
  __typename?: "directus_users_mutated";
  data?: Maybe<Directus_Users>;
  event?: Maybe<EventEnum>;
  key: Scalars["ID"]["output"];
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
  user_created?: Maybe<Directus_Users>;
  user_updated?: Maybe<Directus_Users>;
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

export type DocumentUser_CreatedArgs = {
  filter?: InputMaybe<Directus_Users_Filter>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  page?: InputMaybe<Scalars["Int"]["input"]>;
  search?: InputMaybe<Scalars["String"]["input"]>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

export type DocumentUser_UpdatedArgs = {
  filter?: InputMaybe<Directus_Users_Filter>;
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
  user_created?: Maybe<Directus_Users>;
  user_updated?: Maybe<Directus_Users>;
};

export type DocumentCategoryDocumentsArgs = {
  filter?: InputMaybe<Document_Filter>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  page?: InputMaybe<Scalars["Int"]["input"]>;
  search?: InputMaybe<Scalars["String"]["input"]>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

export type DocumentCategoryUser_CreatedArgs = {
  filter?: InputMaybe<Directus_Users_Filter>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  page?: InputMaybe<Scalars["Int"]["input"]>;
  search?: InputMaybe<Scalars["String"]["input"]>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

export type DocumentCategoryUser_UpdatedArgs = {
  filter?: InputMaybe<Directus_Users_Filter>;
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
  user_created?: InputMaybe<Directus_Users_Filter>;
  user_updated?: InputMaybe<Directus_Users_Filter>;
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
  user_created?: Maybe<Directus_Users>;
  user_updated?: Maybe<Directus_Users>;
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

export type DocumentItemUser_CreatedArgs = {
  filter?: InputMaybe<Directus_Users_Filter>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  page?: InputMaybe<Scalars["Int"]["input"]>;
  search?: InputMaybe<Scalars["String"]["input"]>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

export type DocumentItemUser_UpdatedArgs = {
  filter?: InputMaybe<Directus_Users_Filter>;
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
  user_created?: InputMaybe<Directus_Users_Filter>;
  user_updated?: InputMaybe<Directus_Users_Filter>;
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
  user_created?: InputMaybe<Directus_Users_Filter>;
  user_updated?: InputMaybe<Directus_Users_Filter>;
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
  user?: Maybe<Scalars["String"]["output"]>;
  user_created?: Maybe<Directus_Users>;
  user_updated?: Maybe<Directus_Users>;
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

export type EntityUser_CreatedArgs = {
  filter?: InputMaybe<Directus_Users_Filter>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  page?: InputMaybe<Scalars["Int"]["input"]>;
  search?: InputMaybe<Scalars["String"]["input"]>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

export type EntityUser_UpdatedArgs = {
  filter?: InputMaybe<Directus_Users_Filter>;
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
  user?: InputMaybe<String_Filter_Operators>;
  user_created?: InputMaybe<Directus_Users_Filter>;
  user_updated?: InputMaybe<Directus_Users_Filter>;
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

export type Update_Directus_Users_Input = {
  appearance?: InputMaybe<Scalars["String"]["input"]>;
  auth_data?: InputMaybe<Scalars["JSON"]["input"]>;
  avatar?: InputMaybe<Scalars["String"]["input"]>;
  description?: InputMaybe<Scalars["String"]["input"]>;
  email?: InputMaybe<Scalars["String"]["input"]>;
  email_notifications?: InputMaybe<Scalars["Boolean"]["input"]>;
  external_identifier?: InputMaybe<Scalars["String"]["input"]>;
  first_name?: InputMaybe<Scalars["String"]["input"]>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  language?: InputMaybe<Scalars["String"]["input"]>;
  last_access?: InputMaybe<Scalars["Date"]["input"]>;
  last_name?: InputMaybe<Scalars["String"]["input"]>;
  last_page?: InputMaybe<Scalars["String"]["input"]>;
  location?: InputMaybe<Scalars["String"]["input"]>;
  password?: InputMaybe<Scalars["Hash"]["input"]>;
  policies?: InputMaybe<Scalars["String"]["input"]>;
  provider?: InputMaybe<Scalars["String"]["input"]>;
  role?: InputMaybe<Scalars["String"]["input"]>;
  status?: InputMaybe<Scalars["String"]["input"]>;
  tags?: InputMaybe<Scalars["JSON"]["input"]>;
  tfa_secret?: InputMaybe<Scalars["Hash"]["input"]>;
  theme_dark?: InputMaybe<Scalars["String"]["input"]>;
  theme_dark_overrides?: InputMaybe<Scalars["JSON"]["input"]>;
  theme_light?: InputMaybe<Scalars["String"]["input"]>;
  theme_light_overrides?: InputMaybe<Scalars["JSON"]["input"]>;
  title?: InputMaybe<Scalars["String"]["input"]>;
  token?: InputMaybe<Scalars["Hash"]["input"]>;
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
  user_created?: InputMaybe<Update_Directus_Users_Input>;
  user_updated?: InputMaybe<Update_Directus_Users_Input>;
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
  user_created?: InputMaybe<Update_Directus_Users_Input>;
  user_updated?: InputMaybe<Update_Directus_Users_Input>;
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
  user_created?: InputMaybe<Update_Directus_Users_Input>;
  user_updated?: InputMaybe<Update_Directus_Users_Input>;
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
  user?: InputMaybe<Scalars["String"]["input"]>;
  user_created?: InputMaybe<Update_Directus_Users_Input>;
  user_updated?: InputMaybe<Update_Directus_Users_Input>;
  weight?: InputMaybe<Scalars["Float"]["input"]>;
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
  user_created?: Maybe<Scalars["JSON"]["output"]>;
  user_updated?: Maybe<Scalars["JSON"]["output"]>;
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
  user_created?: Maybe<Scalars["JSON"]["output"]>;
  user_updated?: Maybe<Scalars["JSON"]["output"]>;
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
  user_created?: Maybe<Scalars["JSON"]["output"]>;
  user_updated?: Maybe<Scalars["JSON"]["output"]>;
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
  user?: Maybe<Scalars["String"]["output"]>;
  user_created?: Maybe<Scalars["JSON"]["output"]>;
  user_updated?: Maybe<Scalars["JSON"]["output"]>;
  weight?: Maybe<Scalars["Float"]["output"]>;
};

export type EntityFragment = {
  __typename?: "entity";
  id: string;
  status?: string | null;
  sort?: number | null;
  date_created?: any | null;
  date_updated?: any | null;
  title?: string | null;
  color?: string | null;
  no?: string | null;
  productionYear?: number | null;
  race?: string | null;
  height?: number | null;
  weight?: number | null;
  user_created?: {
    __typename?: "directus_users";
    id: string;
    first_name?: string | null;
    last_name?: string | null;
  } | null;
  user_updated?: {
    __typename?: "directus_users";
    id: string;
    first_name?: string | null;
    last_name?: string | null;
  } | null;
};

export type CreateEntityMutationVariables = Exact<{
  entity: Create_Entity_Input;
}>;

export type CreateEntityMutation = {
  __typename?: "Mutation";
  create_entity_item?: { __typename?: "entity"; id: string } | null;
};

export type UpdateEntityMutationVariables = Exact<{
  id: Scalars["ID"]["input"];
  entity: Update_Entity_Input;
}>;

export type UpdateEntityMutation = {
  __typename?: "Mutation";
  update_entity_item?: { __typename?: "entity"; id: string } | null;
};

export type DeleteEntityMutationVariables = Exact<{
  id: Scalars["ID"]["input"];
}>;

export type DeleteEntityMutation = {
  __typename?: "Mutation";
  delete_entity_item?: { __typename?: "delete_one"; id: string } | null;
};

export type GetEntitiesDataQueryVariables = Exact<{ [key: string]: never }>;

export type GetEntitiesDataQuery = {
  __typename?: "Query";
  entity: Array<{
    __typename?: "entity";
    id: string;
    status?: string | null;
    sort?: number | null;
    date_created?: any | null;
    date_updated?: any | null;
    title?: string | null;
    color?: string | null;
    no?: string | null;
    productionYear?: number | null;
    race?: string | null;
    height?: number | null;
    weight?: number | null;
    user_created?: {
      __typename?: "directus_users";
      id: string;
      first_name?: string | null;
      last_name?: string | null;
    } | null;
    user_updated?: {
      __typename?: "directus_users";
      id: string;
      first_name?: string | null;
      last_name?: string | null;
    } | null;
  }>;
};

export type GetSingleEntityQueryVariables = Exact<{
  id: Scalars["String"]["input"];
}>;

export type GetSingleEntityQuery = {
  __typename?: "Query";
  entity: Array<{
    __typename?: "entity";
    id: string;
    status?: string | null;
    sort?: number | null;
    date_created?: any | null;
    date_updated?: any | null;
    title?: string | null;
    color?: string | null;
    no?: string | null;
    productionYear?: number | null;
    race?: string | null;
    height?: number | null;
    weight?: number | null;
    user_created?: {
      __typename?: "directus_users";
      id: string;
      first_name?: string | null;
      last_name?: string | null;
    } | null;
    user_updated?: {
      __typename?: "directus_users";
      id: string;
      first_name?: string | null;
      last_name?: string | null;
    } | null;
  }>;
};

export const EntityFragmentDoc = gql`
  fragment Entity on entity {
    id
    status
    sort
    user_created {
      id
      first_name
      last_name
    }
    user_updated {
      id
      first_name
      last_name
    }
    date_created
    date_updated
    title
    color
    no
    productionYear
    race
    height
    weight
  }
`;
export const CreateEntityDocument = gql`
  mutation createEntity($entity: create_entity_input!) {
    create_entity_item(data: $entity) {
      id
    }
  }
`;
export const UpdateEntityDocument = gql`
  mutation updateEntity($id: ID!, $entity: update_entity_input!) {
    update_entity_item(id: $id, data: $entity) {
      id
    }
  }
`;
export const DeleteEntityDocument = gql`
  mutation deleteEntity($id: ID!) {
    delete_entity_item(id: $id) {
      id
    }
  }
`;
export const GetEntitiesDataDocument = gql`
  query getEntitiesData {
    entity {
      ...Entity
    }
  }
  ${EntityFragmentDoc}
`;
export const GetSingleEntityDocument = gql`
  query getSingleEntity($id: String!) {
    entity(filter: { id: { _eq: $id } }) {
      ...Entity
    }
  }
  ${EntityFragmentDoc}
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
    createEntity(
      variables: CreateEntityMutationVariables,
      requestHeaders?: GraphQLClientRequestHeaders,
    ): Promise<CreateEntityMutation> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<CreateEntityMutation>(
            CreateEntityDocument,
            variables,
            { ...requestHeaders, ...wrappedRequestHeaders },
          ),
        "createEntity",
        "mutation",
        variables,
      );
    },
    updateEntity(
      variables: UpdateEntityMutationVariables,
      requestHeaders?: GraphQLClientRequestHeaders,
    ): Promise<UpdateEntityMutation> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<UpdateEntityMutation>(
            UpdateEntityDocument,
            variables,
            { ...requestHeaders, ...wrappedRequestHeaders },
          ),
        "updateEntity",
        "mutation",
        variables,
      );
    },
    deleteEntity(
      variables: DeleteEntityMutationVariables,
      requestHeaders?: GraphQLClientRequestHeaders,
    ): Promise<DeleteEntityMutation> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<DeleteEntityMutation>(
            DeleteEntityDocument,
            variables,
            { ...requestHeaders, ...wrappedRequestHeaders },
          ),
        "deleteEntity",
        "mutation",
        variables,
      );
    },
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
    getSingleEntity(
      variables: GetSingleEntityQueryVariables,
      requestHeaders?: GraphQLClientRequestHeaders,
    ): Promise<GetSingleEntityQuery> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<GetSingleEntityQuery>(
            GetSingleEntityDocument,
            variables,
            { ...requestHeaders, ...wrappedRequestHeaders },
          ),
        "getSingleEntity",
        "query",
        variables,
      );
    },
  };
}
export type Sdk = ReturnType<typeof getSdk>;
