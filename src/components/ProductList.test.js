import React from "react";
import { render, fireEvent } from "@testing-library/react";
import ProductList from "./ProductList";
import App from '../App'

test("ProductList should render passed props as content body and respond to callback props", () => {
  const productIds = null;
  // const user = jest.fn();
  // let userRole = 5;

  const { getByTestId } = render(
    <ProductList
      productIds={productIds}
    />
  );

  expect(getByTestId("product-list-empty").textContent).toBe(
    "There is nothing hereAdd an item to start"
  );
});
