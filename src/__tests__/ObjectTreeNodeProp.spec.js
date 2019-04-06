import React from "react";
import {
  render,
  fireEvent,
  cleanup,
  waitForElement
} from "react-testing-library";
import "jest-dom/extend-expect";
import ObjectTreeNodeProp from "../components/ObjectTreeNodeProp";

afterEach(cleanup);

test("renders without crashing", () => {
  const { getByText, getByTestId, container, asFragment } = render(
    <ObjectTreeNodeProp
      prefix="anything"
      propKey="testKey"
      data={{ testKey: {} }}
      level={0}
      levelPrefix=""
    />
  );

  const prefixTextNode = waitForElement(() => {
    getByTestId("anything");
  });

  expect(container.firstChild).toMatchSnapshot();
});
