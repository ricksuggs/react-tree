import React from "react";
import {
  render,
  fireEvent,
  cleanup,
} from "react-testing-library";
import "jest-dom/extend-expect";
import ObjectTreeNodeProp from "../components/ObjectTreeNodeProp";

afterEach(cleanup);

test("responds to click events", () => {
  const {container  } = render(
    <ObjectTreeNodeProp
      prefix="anything"
      propKey="testKey"
      data={{ testKey: {} }}
      level={0}
      levelPrefix=""
    />
  );

  const expanderNode = container.querySelector(".expander");

  expect(expanderNode).toHaveAttribute("class", "expander collapsed");
  fireEvent.click(expanderNode)
  expect(expanderNode).toHaveAttribute("class", "expander ");
  fireEvent.click(expanderNode);
  expect(expanderNode).toHaveAttribute("class", "expander collapsed");
});
