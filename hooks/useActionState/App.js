"use client";

import React, { useActionState, useDebugValue } from "react";
import ReactDOM from "react-dom/client";
import increment from "./actions";

// function increment(previousState, formData) {
//   return previousState + 1;
// }

// const App = () => {
//   const [state, actionToTake] = useActionState(increment, 0);

//   return (
//     <div>
//       App
//       <h1>Hello</h1>
//       <form>
//         {state}
//         <button formAction={actionToTake}>Increment</button>
//       </form>
//     </div>
//   );
// };

function useIsPending(isPending) {
  useDebugValue(isPending ? "True" : "false");
}
const App = () => {
  const [count, incrementAction, isPending] = useActionState(increment, 0);
  useIsPending(isPending);
  return (
    <>
      <p>Count : {count}</p>
      <form action={incrementAction}>
        <button
          type="submit"
          disabled={isPending}
          className="border box-shadow disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Increment
        </button>
      </form>
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
