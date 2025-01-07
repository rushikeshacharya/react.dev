export default function Chat({ key,contact, message, dispatch }) {
  return (
    <section className="chat">
      <textarea
        value={message}
        key={key}
        placeholder={"Chat to" + contact.name}
        onChange={(e) => {
          console.log("On change called...", e.target.value)
          dispatch({
            type: "edited_message",
            message: e.target.value,
          });
        }}
      />
      <br />
      <button
        onClick={() => {
          alert(`Sending '${message}' to ${contact.email}`);
          dispatch({
            type: "sent_message",
          });
        }}
      >
        {" "}
        Send to {contact.email}
      </button>
    </section>
  );
}
