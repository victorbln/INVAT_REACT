import { ChatContact } from "./chat-contact";
export function ChatContactList({ contacts }) {
  return (
    <div>
      <ul>
        {
        contacts.map((contact) => (
          <ChatContact key={contact.id} contact={contact} />
        ))}
      </ul>
    </div>
  );
}
