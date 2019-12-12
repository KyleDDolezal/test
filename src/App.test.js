import React from 'react';
import { fireEvent } from "@testing-library/react";
import { unmountComponentAtNode, render } from "react-dom";
import { act } from "react-dom/test-utils";
import App from './App'


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

it('should display two numbers when add is called twice', () => {
  act(() => {
    render(<App/>, container)
  });

  expect(container.firstChild.firstChild.textContent).toBe("3");
  expect(container.firstChild.lastChild.textContent).toBe("6");
});
