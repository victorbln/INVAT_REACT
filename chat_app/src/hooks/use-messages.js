import { useState } from "react";
import { fetchMessages } from "../lib/api";

export function useMessages(discussions, setDiscussions, user, activeContact) {
  const [messages, setMessages] = useState([]);
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

  return { messages, addNewDiscussion, loadMessages };
}
