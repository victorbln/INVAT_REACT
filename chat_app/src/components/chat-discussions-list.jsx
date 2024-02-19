import useSWR, { useSWRConfig } from "swr";
import useChatContext from "../hooks/user-chat-context";
import { deleteDiscussion, fetchDiscussions } from "../lib/api";
import { ChatDiscussionsContact } from "./chat-discussions-contact";
import { clsx } from "clsx";
import { AiFillDelete } from "react-icons/ai";

export function ChatDiscussionsList() {
  const { setActiveDiscussion, activeDiscussion } = useChatContext();
  const { mutate } = useSWRConfig();

  const { data: discussions } = useSWR("discussions", fetchDiscussions);

  async function handleDeleteDiscussion(discussionId) {
    const { error } = await deleteDiscussion(discussionId);
    if (error) {
      console.error(error);
      return;
    }
    mutate("discussions");
  }

  const discussionsJSX = discussions?.map((discussion) => (
    <li key={discussion.id} className="chat-discussion-list-item">
      <button
        className={clsx(
          "chat-discussion-list-item-btn",
          activeDiscussion?.id === discussion.id && "is-active"
        )}
        onClick={() => {
          setActiveDiscussion(discussion);
        }}
      >
        <ChatDiscussionsContact contacts={discussion.contacts} />
      </button>

      <button
        onClick={() => {
          handleDeleteDiscussion(discussion.id);
        }}
        className="chat-discussion-list-item-delete-btn"
      >
        <AiFillDelete />
      </button>
    </li>
  ));

  return (
    <div className="chat-discussion-list">
      <ul className="chat-discussion-list-items">{discussionsJSX}</ul>
    </div>
  );
}
