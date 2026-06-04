/// <reference types="@testing-library/jest-dom" />
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import { Button } from "./Button";

describe("Button", () => {
	it("renders children correctly", () => {
		render(<Button>Submit</Button>);
		const button = screen.getByRole("button", { name: /submit/i });
		expect(button).toBeInTheDocument();
	});

	it("handles standard click events", async () => {
		const user = userEvent.setup();
		const handlePress = vi.fn();

		// Note: react-aria-components use `onPress` rather than `onClick`
		// for normalized multi-device interactions
		render(<Button onPress={handlePress}>Submit</Button>);

		const button = screen.getByRole("button", { name: /submit/i });
		await user.click(button);

		expect(handlePress).toHaveBeenCalledTimes(1);
	});

	it("disables interactivity when isDisabled is true", async () => {
		const user = userEvent.setup();
		const handlePress = vi.fn();

		render(
			<Button isDisabled onPress={handlePress}>
				Submit
			</Button>,
		);

		const button = screen.getByRole("button", { name: /submit/i });
		expect(button).toBeDisabled();

		await user.click(button);
		expect(handlePress).not.toHaveBeenCalled();
	});
});
