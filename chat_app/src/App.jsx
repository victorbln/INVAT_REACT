import { ChatControls } from "./components/chat-controls";
import "./App.css";
import { ChatLayout } from "./components/chat-layout";
import { ChatDiscussionsList } from "./components/chat-discussions-list";
import { ChatMessageList } from "./components/chat-message-list";
import { ChatStartDiscussionModal } from "./components/chat-start-discussion-modal";
import { useState } from "react";

import { USER } from "./constants/user";
import { useContacts } from "./hooks/use-contacts";
import { useDiscussion } from "./hooks/use-discussion";
import { useMessages } from "./hooks/use-messages";

function App() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [user] = useState(USER);
  const [activeContact, setActiveContact] = useState(null);

  const { contacts } = useContacts();
  const { discussions, setDiscussions } = useDiscussion();
  const { messages, addNewDiscussion, loadMessages } = useMessages(
    discussions,
    user,
    activeContact,
    setDiscussions
  );

  return (
    <>
      {isModalVisible && (
        <ChatStartDiscussionModal
          setIsModalVisible={setIsModalVisible}
          contacts={contacts}
          setActiveContact={setActiveContact}
          addNewDiscussion={addNewDiscussion}
          activeContact={activeContact}
        />
      )}

      <ChatLayout
        controls={
          <ChatControls
            setIsModalVisible={setIsModalVisible}
            isModalVisible={isModalVisible}
          />
        }
        aside={
          <ChatDiscussionsList
            discussions={discussions}
            loadMessages={loadMessages}
          />
        }
        main={<ChatMessageList messages={messages} />}
      />
    </>
  );
}

export default App;
