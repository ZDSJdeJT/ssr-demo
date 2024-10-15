import serve from "./src/server";
import buildConfig from "./build.config";

await Bun.build(buildConfig);
const server = Bun.serve(serve);

console.info(`Started at http://localhost:${server.port}.`);
