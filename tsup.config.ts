import { defineConfig, type Options } from "tsup";

export default defineConfig((options: Options) => ({
  entry: ["typescript-fetch-client/index.ts"],
  clean: true,
  dts: true,
  format: ["cjs", "esm"],
  ...options,
}));
