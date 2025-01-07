import { useState } from "react";

export function useReducer(reducer, initialState){
    const [state, setState] = useState(initialState);
     function dispatch(){}

    return [state, dispatch];
}