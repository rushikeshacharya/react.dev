import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, reset } from "./counterSlice";
import CounterControls from "../../components/CounterControls";

export default function RTKCounter() {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();

  return (
    <CounterControls
      count={count}
      onIncrement={() => dispatch(increment())}
      onDecrement={() => dispatch(decrement())}
      onReset={() => dispatch(reset())}
    />
  );
}
