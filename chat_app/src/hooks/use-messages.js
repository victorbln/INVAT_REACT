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



  return {
    messages,
    loadMessages,
    highlightActiveDiscussion,
  };
}
