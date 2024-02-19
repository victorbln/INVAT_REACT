import { createContext, useState } from "react";
import { USER } from "../constants/user";

export const ChatContext = createContext(null);

export function ChatProvider({ children }) {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [user] = useState(USER);
  const [activeContact, setActiveContact] = useState([]);
  const [activeDiscussion, setActiveDiscussion] = useState([]);

  return (
    <ChatContext.Provider
      value={{
        isModalVisible,
        user,
        activeContact,
        activeDiscussion,
        setActiveContact,
        setIsModalVisible,
        setActiveDiscussion,
      }}
    >
      {children}
    </ChatContext.Provider>
  );
}
