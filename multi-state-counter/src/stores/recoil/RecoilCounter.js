import { useRecoilState } from "recoil";
import { counterState } from "./atom";

import CounterControls from "../../components/CounterControls";

export default function RecoilCounter() {
  const [count, setCount] = useRecoilState(counterState);
  return (
    <CounterControls
      count={count}
      onIncrement={() => setCount((c) => c + 1)}
      onDecrement={() => setCount((c) => c - 1)}
      onReset={() => setCount(0)}
    />
  );
}
