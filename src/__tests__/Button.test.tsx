import React from "react";
import { render } from "@testing-library/react";
import Button from '../components/Button/Button';

describe("Button", () => {
	test("renders the Button component", () => {
		render(<Button color="primary">Hello world!</Button>);
	});
});
