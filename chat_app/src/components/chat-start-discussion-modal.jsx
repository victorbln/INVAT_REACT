import { ChatContactList } from "./chat-contact-list.jsx";
import { ChatStartDiscussionButton } from "./chat-start-discussion-button.jsx";
export function ChatStartDiscussionModal({setIsModalVisible, contacts}) {
  return (
    <div className="chat-start-discussion-modal">
      <ChatContactList 
      contacts={contacts}
      />
      <ChatStartDiscussionButton />
      <button
      className="chat-start-discussion-modal-close-btn"
      onClick={() => {
        setIsModalVisible((prev) => !prev);
      }}
      >Close</button>
    </div>
  );
}
