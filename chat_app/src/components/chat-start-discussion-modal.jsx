import { ChatContactList } from "./chat-contact-list.jsx";
import { ChatStartDiscussionButton } from "./chat-start-discussion-button.jsx";
export function ChatStartDiscussionModal({setIsModalVisible, contacts, setActiveContact, addNewDiscussion, activeContact}) {
  return (
    <div className="chat-start-discussion-modal">
      <ChatContactList 
      contacts={contacts}
      setActiveContact={setActiveContact}
      activeContact={activeContact}
      />
      <ChatStartDiscussionButton 
      addNewDiscussion={addNewDiscussion}
      setIsModalVisible={setIsModalVisible}

      />
      <button
      className="chat-start-discussion-modal-close-btn"
      onClick={() => {
        setIsModalVisible((prev) => !prev);
      }}
      >Close</button>
    </div>
  );
}
