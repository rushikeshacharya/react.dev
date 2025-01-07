export default function ContactList({ contacts, selectedId, dispatch }) {
  return (
    <section className="contact-list">
      <ul>
        {contacts.map((contact) => (
          <li>
            <button onClick={() => console.log()}>
              {selectedId === contact.id ? <b>{contact.name}</b> : contact.name}
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
}
