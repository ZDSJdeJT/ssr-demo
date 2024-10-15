import buildConfig from "./build.config";

await Bun.build(buildConfig);

console.info("Build successful.");
