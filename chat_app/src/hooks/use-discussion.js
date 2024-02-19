import { useState } from "react";
import { postDiscussion } from "../lib/api";

export function useDiscussion({ user, activeContact }) {
  const [discussions, setDiscussions] = useState([]);

  async function addNewDiscussion() {
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
    await postDiscussion(newDiscussion);

    const updatedDiscussion = [...discussions, newDiscussion];

    setDiscussions(updatedDiscussion);
  }

  return { discussions, setDiscussions, addNewDiscussion };
}
