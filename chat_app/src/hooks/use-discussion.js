import { useEffect, useState } from "react";
import { fetchDiscussions } from "../lib/api";

export function useDiscussion() {
  const [discussions, setDiscussions] = useState([]);
  async function loadDiscussions() {
    const data = await fetchDiscussions();
    setDiscussions(data);
  }
  useEffect(() => {
    loadDiscussions();
  }, []);
  return { discussions, setDiscussions };
}
