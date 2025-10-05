export default function CounterControls({
  count,
  onIncrement,
  onDecrement,
  onReset,
}) {
  return (
    <div>
      <div className="count">Count: {count}</div>
      <div className="controls">
        <button onClick={onIncrement}>+</button>
        <button onClick={onDecrement}>-</button>
        <button onClick={onReset}>Reset</button>
      </div>
    </div>
  );
}
