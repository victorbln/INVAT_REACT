import { ChatControls } from "./components/chat-controls";
import "./App.css";
import { ChatLayout } from "./components/chat-layout";
import { ChatDiscussionsList } from "./components/chat-discussions-list";
import { ChatMessageList } from "./components/chat-message-list";
import { ChatStartDiscussionModal } from "./components/chat-start-discussion-modal";
import { useState } from "react";

function App() {
  const [isModalVisible, setIsModalVisible] = useState(false);

  return (
    <>
      {isModalVisible && <ChatStartDiscussionModal 
      setIsModalVisible={setIsModalVisible}
      />}

      <ChatLayout
        controls={
          <ChatControls
            setIsModalVisible={setIsModalVisible}
            isModalVisible={isModalVisible}
          />
        }
        aside={<ChatDiscussionsList />}
        main={<ChatMessageList />}
      />
    </>
  );
}

export default App;
