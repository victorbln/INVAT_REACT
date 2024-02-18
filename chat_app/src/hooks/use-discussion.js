import { useEffect, useState } from "react";
import { fetchDiscussions, postDiscussion } from "../lib/api";

export function useDiscussion({ user, activeContact }) {
  const [discussions, setDiscussions] = useState([]);
  useEffect(() => {
    loadDiscussions();
  }, []);

  async function loadDiscussions() {
    const data = await fetchDiscussions();
    setDiscussions(data);
  }

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
