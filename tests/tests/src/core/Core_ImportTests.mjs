// Generated by ReScript, PLEASE EDIT WITH CARE

import * as Test from "./Test.mjs";

async function main() {
  let eq = await import("./Core_IntTests.mjs").then(m => m.eq);
  return Test.run([
    [
      "Core_ImportTests.res",
      3,
      22,
      55
    ],
    "dynamic import - Int tests - eq"
  ], 1, eq, 1);
}

export {
  main,
}
/* Test Not a pure module */