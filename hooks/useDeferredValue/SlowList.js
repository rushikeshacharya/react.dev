import { memo } from "react";

const SlowList = ({ text }) => {
  let items = [];
  for (let index = 0; index < 250; index++) {
    items.push(<SlowItem key={index} text={text} />);
  }
  return <ul>{items}</ul>;
};

const SlowItem = ({ text }) => {
  let startTime = performance.now();

  while (performance.now() - startTime < 1) {}
  return <li className="item">Text: {text}</li>;
};

export default memo(SlowList);
