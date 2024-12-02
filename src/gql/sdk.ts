import { getSdk } from "./generated";
import { GraphQLClient } from "graphql-request";

const client = new GraphQLClient(process.env.APP_CONFIG_GRAPHQL_SCHEMA ?? "");

const sdk = getSdk(client);
export default sdk;
