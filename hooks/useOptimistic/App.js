import { useOptimistic, useState, useRef, useId } from "react";
import ReactDOM from "react-dom/client";

export async function deliverMessage(message) {
  await new Promise((res) => setTimeout(res, 1000));
  return message;
}

export default function App() {
  const [messages, setMessages] = useState([
    { text: "Hello there!", sending: false, key: 1 },
  ]);

  const formRef = useRef();

  async function formAction(formData) {
    await deliverMessage(formData.get("message"));
    setMessages([
      ...messages,
      {
        text: formData.get("message"),
        sending: true,
        key: messages.length + 1,
      },
    ]);
  }

  return (
    <>
      <form action={formAction}>
        <input type="text" name="message" placeholder="Hello!" />
        <button type="submit">Send</button>
      </form>
      <ul>
        {messages.map((message) => (
          <li key={message.key}>{message.text}</li>
        ))}
      </ul>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
