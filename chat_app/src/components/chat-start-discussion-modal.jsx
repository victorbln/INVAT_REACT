import useChatContext from "../hooks/user-chat-context.js";
import { ChatContactList } from "./chat-contact-list.jsx";
import { ChatStartDiscussionButton } from "./chat-start-discussion-button.jsx";
export function ChatStartDiscussionModal() {
  const { setIsModalVisible, isModalVisible } = useChatContext();

  return isModalVisible ? (
    <div className="chat-start-discussion-modal">
      <ChatContactList />
      <ChatStartDiscussionButton />
      <button
        className="chat-start-discussion-modal-close-btn"
        onClick={() => setIsModalVisible(false)}
      >
        Close
      </button>
    </div>
  ) : null;
}
