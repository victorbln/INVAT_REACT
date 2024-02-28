import { ChatControls } from "./components/chat-controls";
import "./App.css";
import { ChatLayout } from "./components/chat-layout";
import { ChatMessageList } from "./components/chat-message-list";
import { NextUIProvider } from "@nextui-org/system";
import { ChatInput } from "./components/chat-input";
import { ChatDiscussionList } from "./components/chat-discussions-list";

function App() {
  return (
    <NextUIProvider>
      <ChatLayout
        controls={<ChatControls />}
        aside={<ChatDiscussionList />}
        main={
          <>
            <ChatMessageList />
            <ChatInput />
          </>
        }
      />
    </NextUIProvider>
  );
}

export default App;
