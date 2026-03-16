import { getPayload } from "payload";
import configPromise from "./payload.config";

async function run() {
  const payload = await getPayload({ config: configPromise });
  const global = await payload.findGlobal({ slug: "home-page", depth: 1 });
  console.log(JSON.stringify(global, null, 2));
  process.exit(0);
}
run();
