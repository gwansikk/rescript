// Generated by ReScript, PLEASE EDIT WITH CARE


function test_set(x) {
  x.length__aux = 3;
}

function ff(fn, a0, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11) {
  return fn(a0, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11);
}

function ff2(fn, a0, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12) {
  return fn(a0, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12);
}

function off2(o, a0, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12) {
  return o.huge_method(a0, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12);
}

function mk_f() {
  return (a0, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12) => a0(a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12);
}

export {
  test_set,
  ff,
  ff2,
  off2,
  mk_f,
}
/* No side effect */