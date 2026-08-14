// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import "@testing-library/jest-dom";

// Suppress act() warning for async thunk dispatch in App.js
const originalError = console.error;
console.error = (...args) => {
  if (typeof args[0] === "string" && args[0].includes("not wrapped in act")) {
    return;
  }
  originalError.call(console, ...args);
};
