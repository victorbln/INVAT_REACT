import { ChatMessage } from "./chat-message";

export function ChatMessageList({ messages }) {
  return (
    <div>
      {messages.map((message) => (
        <ChatMessage message={message} />
      ))}  
      
    </div>
  )
}