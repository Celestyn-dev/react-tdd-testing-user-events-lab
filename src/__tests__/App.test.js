import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom"; // 🔥 FIX for toBeInTheDocument()
import App from "../App";

describe("Newsletter Signup Form", () => {
  test("renders name and email input fields", () => {
    render(<App />);
    expect(screen.getByLabelText(/name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
  });

  test("renders interest checkboxes", () => {
    render(<App />);
    expect(screen.getByLabelText(/tech/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/design/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/marketing/i)).toBeInTheDocument();
  });

  test("submits form and displays success message", async () => {
    render(<App />);
    await userEvent.type(screen.getByLabelText(/name/i), "Celestine");
    await userEvent.type(screen.getByLabelText(/email/i), "celestine@example.com");
    await userEvent.click(screen.getByLabelText(/tech/i));
    await userEvent.click(screen.getByLabelText(/design/i));
    await userEvent.click(screen.getByRole("button", { name: /submit/i }));

    expect(
      screen.getByText(/Thank you, Celestine! Your signup is complete./i)
    ).toBeInTheDocument();

    expect(
      screen.getByText(/Your selected interests: tech, design/i)
    ).toBeInTheDocument();
  });
});
