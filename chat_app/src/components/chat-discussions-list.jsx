import { ChatDiscussionsContact } from "./chat-discussions-contact";

export function ChatDiscussionsList({ discussions }) {
  const discussionsJSX = discussions.map((discussion) => (
    <li key={discussion.id} className="chat-discussion-list-item">
      <button className="chat-discussion-list-item-btn">
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
