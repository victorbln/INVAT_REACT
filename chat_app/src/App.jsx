import { ChatControls } from "./components/chat-controls";
import "./App.css";
import { ChatLayout } from "./components/chat-layout";
import { ChatDiscussionsList } from "./components/chat-discussions-list";
import { ChatMessageList } from "./components/chat-message-list";
import { ChatStartDiscussionModal } from "./components/chat-start-discussion-modal";
import { useState } from "react";

import { CONTACTS } from "./constants/contacts";
import { DISCUSSIONS } from "./constants/discussions";
import { DISCUSSIONS_CONTENT } from "./constants/messages";

function App() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [contacts] = useState(CONTACTS);
  const [discussions, setDiscussions] = useState(DISCUSSIONS);
  const [messages, setMessages] = useState([]);

  function loadMessages(discussionId) {
    function checkDiscussionId(message) {
      return message.discussionId === discussionId;
    }

    const data = DISCUSSIONS_CONTENT.find(checkDiscussionId);

    setMessages(data?.messages);
    highlightActiveDiscussion(discussionId);
  }

  function highlightActiveDiscussion(discussionId) {
    function checkDiscussionId(discussion) {
      return discussion.id === discussionId;
    }

    const activeDiscussion = discussions.find(checkDiscussionId);

    function updateDiscussion(discussion) {
      return {
        ...discussion,
        isActive: discussion.id === activeDiscussion.id,
      };
    }

    setDiscussions(discussions.map(updateDiscussion));
  }

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
