import useChatContext from "../hooks/user-chat-context";
import { ChatMessage } from "./chat-message";
import useSWR from "swr";
import { fetchMessages } from "../lib/api";

export function ChatMessageList() {
  const { activeDiscussion } = useChatContext();

  const { data: messages } = useSWR(
    () => `messages ${activeDiscussion?.id})`,
    () => fetchMessages(activeDiscussion?.id),
    { dedupingInterval: 10000 }
  );

  return (
    <div>
      {messages?.map((message) => (
        <ChatMessage key={message.id} message={message} />
      ))}
    </div>
  );
}
