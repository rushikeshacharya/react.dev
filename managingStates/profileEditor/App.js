import { useState } from "react";

export default function EditProfile() {
  const [firstName, setFirstName] = useState("Jane");
  const [lastName, setLastName] = useState("Jacobes");
  const [isEditing, setIsEditing] = useState(false);

  function handleFormSubmit(e) {
    e.preventDefault();
    setIsEditing(!isEditing);
  }
  return (
    <form onSubmit={handleFormSubmit}>
      <label>
        First name:{" "}
        {isEditing ? (
          <input
            value={firstName}
            onChange={(e) => {
              {setFirstName(e.target.value)}
            }}
          />
        ) : (
          <b>{firstName}</b>
        )}
      </label>

            <label>
        Last name:{" "}
        {isEditing ? (
          <input
            value={lastName}
            onChange={(e) => {
              {setLastName(e.target.value)}
            }}
          />
        ) : (
          <b>{lastName}</b>
        )}
      </label>

        <button type="submit" onClick={handleFormSubmit}>
          { isEditing ? 'Save' : 'Edit'} Profile
        </button>
      <p>
        <i>
          Hello, {firstName} {lastName}!
        </i>
      </p>
    </form>
  );
}  