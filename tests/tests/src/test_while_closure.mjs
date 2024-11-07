// Generated by ReScript, PLEASE EDIT WITH CARE

import * as Belt_Array from "rescript/lib/es6/Belt_Array.js";

let v = {
  contents: 0
};

let arr = Belt_Array.make(10, () => {});

function f() {
  let n = 0;
  while (n < 10) {
    let j = n;
    arr[j] = () => {
      v.contents = v.contents + j | 0;
    };
    n = n + 1 | 0;
  };
}

f();

Belt_Array.forEach(arr, x => x());

console.log(v.contents.toString());

if (v.contents !== 45) {
  throw {
    RE_EXN_ID: "Assert_failure",
    _1: [
      "test_while_closure.res",
      55,
      2
    ],
    Error: new Error()
  };
}

let count = 10;

export {
  v,
  count,
  arr,
  f,
}
/* arr Not a pure module */