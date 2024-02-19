import { createContext, useState } from "react";
import { useMessages } from "../hooks/use-messages";
import { useDiscussion } from "../hooks/use-discussion";
import { USER } from "../constants/user";

export const ChatContext = createContext(null);

export function ChatProvider({ children }) {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [user] = useState(USER);
  const [activeContact, setActiveContact] = useState([]);
  const [activeDiscussion, setActiveDiscussion] = useState([]);

  const { discussions, setDiscussions, addNewDiscussion } = useDiscussion({
    user,
    activeContact,
  });

  const { messages, loadMessages, highlightActiveDiscussion } = useMessages(
    discussions,
    setDiscussions
  );

  return (
    <ChatContext.Provider
      value={{
        messages,
        isModalVisible,
        user,
        activeContact,
        activeDiscussion,
        setActiveContact,
        setIsModalVisible,
        setDiscussions,
        addNewDiscussion,
        loadMessages,
        highlightActiveDiscussion,
        setActiveDiscussion,
      }}
    >
      {children}
    </ChatContext.Provider>
  );
}
