const API_BASE = "http://localhost:3000";

export async function fetchDiscussions() {
  const endpoint = "discussions";

  const data = await fetch(`${API_BASE}/${endpoint}`);
  const discussions = await data.json();

  return discussions;
}

export async function fetchContacts() {
  const endpoint = "contacts";

  const data = await fetch(`${API_BASE}/${endpoint}`);
  const contacts = await data.json();

  return contacts;
}

export async function fetchMessages(discussionId) {
  const endpoint = `messages`;
  const data = await fetch(`${API_BASE}/${endpoint}`);
  const allMessages = await data.json();

  function checkDiscussionId(message) {
    return Number(message.discussionId) === Number(discussionId);
  }
  const discussionContent = allMessages.find(checkDiscussionId);

  return discussionContent?.messages;
}

export async function postDiscussion(payload) {
  const endpoint = "discussions";
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  };

  const response = await fetch(`${API_BASE}/${endpoint}`, options);
  const data = await response.json();

  return data;
}
