import type { CodegenConfig } from "@graphql-codegen/cli";
import dotenv from "dotenv";

dotenv.config();

const config: CodegenConfig = {
  overwrite: true,
  schema: {
    [process.env.APP_CONFIG_GRAPHQL_SYSTEM_SCHEMA as string]: {
      headers: {
        authorization: `Bearer ${process.env.APP_CONFIG_GRAPHQL_SYSTEM_SCHEMA_TOKEN}`,
      },
    },
  },
  documents: ["src/gql/system/**/*.graphql"],
  generates: {
    "./src/gql/system/generated.ts": {
      plugins: [
        "typescript",
        "typescript-operations",
        "typescript-graphql-request",
      ],
    },
  },
  hooks: { afterAllFileWrite: ["prettier --write"] },
};

export default config;
