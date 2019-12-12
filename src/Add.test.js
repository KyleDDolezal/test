import React from 'react';
import { fireEvent } from "@testing-library/react";
import { unmountComponentAtNode, render } from "react-dom";
import { act } from "react-dom/test-utils";
import Add from './Add'

let container = null;
beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it('renders sum of two numbers', () => {
    act(() => {
      render(<Add firstNumber={1} secondNumber={2} />, container);
    });

    expect(container.textContent).toBe("3");
})
