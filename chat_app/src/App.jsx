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
import {USER} from './constants/user';

function App() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [contacts] = useState(CONTACTS);
  const [discussions, setDiscussions] = useState(DISCUSSIONS);
  const [messages, setMessages] = useState([]);
  const [user] = useState(USER);
  const [activeContact, setActiveContact] = useState(null);

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

  function addNewDiscussion() {
  const newDiscussionId = discussions.length+1;

  const newDiscussion = {
    id: newDiscussionId,
    contacts: [
      {
        id: user.id,
        name: user.name,
      },
      {
        id: activeContact.id,
        name: activeContact.name,
      },
      
    ],
  };

  const updatedDiscussion = [...discussions, newDiscussion];

  setDiscussions(updatedDiscussion);
  }


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
