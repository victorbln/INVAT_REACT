import useChatContext from "../hooks/user-chat-context";
import { ChatDiscussionsContact } from "./chat-discussions-contact";
import { clsx } from "clsx";

export function ChatDiscussionsList() {
  const { loadMessages, discussions } = useChatContext();
  const discussionsJSX = discussions.map((discussion) => (
    <li key={discussion.id} className="chat-discussion-list-item">
      <button
        className={clsx(
          "chat-discussion-list-item-btn",
          discussion.isActive && "is-active"
        )}
        onClick={() => {
          loadMessages(discussion.id);
        }}
      >
        <ChatDiscussionsContact contacts={discussion.contacts} />
      </button>
    </li>
  ));
  return (
    <div className="chat-discussion-list">
      <ul className="chat-discussion-list-items">{discussionsJSX}</ul>
    </div>
  );
}
