import { useState } from "react";
import { letters } from "./data.js";
import Letter from "./Letter.js";

export default function MailClient() {
  const [selectedId, setSelectedId] = useState([]);

  // TODO: allow multiple selection
  const selectedCount = selectedId.length;

  function handleToggle(toggledId) {
    // TODO: allow multiple selection
    if (selectedId.includes(toggledId)) {
      setSelectedId(selectedId.filter((id) => id !== toggledId));
    } else {
      setSelectedId([...selectedId, toggledId]);
    }
  }

  return (
    <>
      <h2>Inbox</h2>
      <ul>
        {letters.map((letter) => (
          <Letter
            key={letter.id}
            letter={letter}
            isSelected={
              // TODO: allow multiple selection
              selectedId.includes(letter.id)
            }
            onToggle={handleToggle}
          />
        ))}
        <hr />
        <p>
          <b>You selected {selectedCount} letters</b>
        </p>
      </ul>
    </>
  );
}
