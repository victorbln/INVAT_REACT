import useSWR from "swr";
import useChatContext from "../hooks/user-chat-context";
import { fetchDiscussions } from "../lib/api";
import { ChatDiscussionsContact } from "./chat-discussions-contact";
import { clsx } from "clsx";

export function ChatDiscussionsList() {
  const { setActiveDiscussion, activeDiscussion } = useChatContext();

  const { data: discussions } = useSWR("discussions", fetchDiscussions);

  const discussionsJSX = discussions?.map((discussion) => (
    <li key={discussion.id} className="chat-discussion-list-item">
      <button
        className={clsx(
          "chat-discussion-list-item-btn",

          activeDiscussion.id === discussion.id && "is-active"
        )}
        onClick={() => {
          setActiveDiscussion(discussion);
        }}
      >
        <ChatDiscussionsContact contacts={discussion.contacts} />
      </button>
    </li>
  ));

  return (
    <div className="chat-discussion-list">
      <ul className="chat-discussion-list-items">{discussionsJSX}</ul>
    </div>
  );
}
