import { Avatar } from "@nextui-org/react";
import { useAtom } from "jotai";
import { ChatToggleContacts } from "./chat-toggle-contatcs";
import { userAtom } from "../store/store";

export function ChatControls() {
  const [user] = useAtom(userAtom);
//just a comment
  return (
    <header className="flex justify-between items-center rounded-lg bg-gray-100 px-4 py-3">
      <Avatar 
      name={user.name}
      src={user.imageUrl}
      size="lg"
      radius="md"
      />
      <p>
        Welcome, <strong>{user.name}</strong>
      </p>
      <ChatToggleContacts />
    </header>
  );
}
