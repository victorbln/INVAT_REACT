import { createContext, useState } from "react";
import { useContacts } from "../hooks/use-contacts";
import { useMessages } from "../hooks/use-messages";
import { useDiscussion } from "../hooks/use-discussion";
import { USER } from "../constants/user";

export const ChatContext = createContext(null);

export function ChatProvider({ children }) {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [user] = useState(USER);
  const [activeContact, setActiveContact] = useState(null);

  const { contacts } = useContacts();
  const { discussions, setDiscussions } = useDiscussion();
  const {
    messages,
    addNewDiscussion,
    loadMessages,
    highlightActiveDiscussion,
  } = useMessages(discussions, user, activeContact, setDiscussions);

  return (
    <ChatContext.Provider
      value={{
        messages,
        isModalVisible,
        user,
        activeContact,
        contacts,
        discussions,
        setActiveContact,
        setIsModalVisible,
        setDiscussions,
        addNewDiscussion,
        loadMessages,
        highlightActiveDiscussion,
      }}
    >
      {children}
    </ChatContext.Provider>
  );
}
