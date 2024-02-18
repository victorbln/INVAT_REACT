import { ChatControls } from "./components/chat-controls";
import "./App.css";
import { ChatLayout } from "./components/chat-layout";
import { ChatDiscussionsList } from "./components/chat-discussions-list";
import { ChatMessageList } from "./components/chat-message-list";
import { ChatStartDiscussionModal } from "./components/chat-start-discussion-modal";
import { useState } from "react";

import { CONTACTS } from "./constants/contacts";
import { DISCUSSIONS } from "./constants/discussions";
function App() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [contacts] = useState(CONTACTS);
  const [discussions] = useState(DISCUSSIONS);
  return (
    <>
      {isModalVisible && (
        <ChatStartDiscussionModal
          setIsModalVisible={setIsModalVisible}
          contacts={contacts}
        />
      )}

      <ChatLayout
        controls={
          <ChatControls
            setIsModalVisible={setIsModalVisible}
            isModalVisible={isModalVisible}
          />
        }
        aside={<ChatDiscussionsList 
        discussions={discussions}
        />}
        main={<ChatMessageList />}
      />
    </>
  );
}

export default App;
