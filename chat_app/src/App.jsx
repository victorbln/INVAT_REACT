import { ChatControls } from "./components/chat-controls";
import "./App.css";
import { ChatLayout } from "./components/chat-layout";
import { ChatDiscussionsList } from "./components/chat-discussions-list";
import { ChatMessageList } from "./components/chat-message-list";
import { ChatStartDiscussionModal } from "./components/chat-start-discussion-modal";
import { useEffect, useState } from "react";

import { USER } from "./constants/user";
import { fetchDiscussions } from "./lib/api";
import { fetchContacts } from "./lib/api";
import { fetchMessages } from "./lib/api";

function App() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [contacts, setContacts] = useState([]);
  const [discussions, setDiscussions] = useState([]);
  const [messages, setMessages] = useState([]);
  const [user] = useState(USER);
  const [activeContact, setActiveContact] = useState(null);

  async function loadMessages(discussionId) {
    const data = await fetchMessages(discussionId);
    setMessages(data);
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
    const newDiscussionId = discussions.length + 1;

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

  async function loadDiscussions() {
    const data = await fetchDiscussions();
    setDiscussions(data);
  }

  async function loadContacts() {
    const data = await fetchContacts();
    setContacts(data);
  }

  useEffect(() => {
    loadDiscussions();
    loadContacts();
  }, []);

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
