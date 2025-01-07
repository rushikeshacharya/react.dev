import Chat from "./Chat";
import { useReducer } from "./MyReact.js";
import { initialState, messengerReducer } from "./messengerReducer.js";

export default function Messenger(){
  const [state, dispatch] = useReducer(messengerReducer, initialState);
  const message = state.message[state.selectedId];
  // const contact = contacts.find((c) => c.id === state.selectedId);
  return(
    <div>
      <Chat contact={contacts[0]} message={message} dispatch={dispatch}></Chat>
    </div>
  )
}

const contacts = [
    {id: 0, name: 'Taylor', email: 'taylor@mail.com'},
    {id: 1, name: 'Alice', email: 'alice@mail.com'},
    {id: 2, name: 'Bob', email: 'bob@mail.com'},
  ];
  