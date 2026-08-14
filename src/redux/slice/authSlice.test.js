import reducer, { checkAuthStatus } from "./authSlice";

describe("auth slice", () => {
  it("exposes a thunk for checking auth and initializes to logged out", () => {
    expect(typeof checkAuthStatus).toBe("function");
    expect(reducer(undefined, { type: "@@INIT" })).toEqual({
      status: false,
      userData: null,
      loading: false,
      error: null,
    });
  });
});
