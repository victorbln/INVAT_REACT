export function ChatMessage({ message }) {
  return (
    <div>
      <p>{message.value}</p>
      <p>{message.date}</p>
      <p>{message.author}</p>
    </div>
  );
}
