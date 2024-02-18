import { ChatControls } from "./components/chat-controls";
import "./App.css";
import { ChatLayout } from "./components/chat-layout";
import { ChatDiscussionsList } from "./components/chat-discussions-list";
import { ChatMessageList } from "./components/chat-message-list";
import { ChatStartDiscussionModal } from "./components/chat-start-discussion-modal";
import { ChatProvider } from "./store/chat-context";

function App() {
  return (
    <ChatProvider>
      <ChatStartDiscussionModal />
      <ChatLayout
        controls={<ChatControls />}
        aside={<ChatDiscussionsList />}
        main={<ChatMessageList />}
      />
    </ChatProvider>
  );
}

export default App;
