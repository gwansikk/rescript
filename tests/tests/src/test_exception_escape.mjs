// Generated by ReScript, PLEASE EDIT WITH CARE

import * as Primitive_exceptions from "rescript/lib/es6/Primitive_exceptions.js";

let A = /* @__PURE__ */Primitive_exceptions.create("Test_exception_escape.N.A");

let f;

try {
  throw {
    RE_EXN_ID: A,
    _1: 3,
    Error: new Error()
  };
} catch (exn) {
  f = 3;
}

let N = {
  f: f
};

export {
  N,
}
/* f Not a pure module */
