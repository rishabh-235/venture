import { render, screen, waitFor } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "./redux/store";
import App from "./App";

test("renders app without crashing", async () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>,
  );
  // App shows "Loading..." during auth initialization
  // Just verify it renders without crashing
  await waitFor(() => {
    const container = screen.getByText(/Loading/i).parentElement;
    expect(container).toBeInTheDocument();
  });
});
