import { useSWRConfig } from "swr";
import useChatContext from "../hooks/user-chat-context";
import { postDiscussion } from "../lib/api";

export function ChatStartDiscussionButton() {
  const { mutate } = useSWRConfig();

  const { setIsModalVisible, activeContact, user, setActiveContact } =
    useChatContext();

  async function startDiscussion() {
    const payload = {
      contacts: [
        { id: activeContact.id, name: activeContact.name },
        { id: user.id, name: user.name },
      ],
    };

    const { error } = await postDiscussion(payload);
    if (error) {
      console.error(error);
      return;
    }

    mutate("discussions");
    setIsModalVisible(false);
  }

  return (
    <button
      onClick={() => {
        startDiscussion();
        setActiveContact(null);
      }}
    >
      Start discussion
    </button>
  );
}
