import { ChatControls } from './components/chat-controls'
import './App.css'
import { ChatLayout } from './components/chat-layout'
import { ChatDiscussionsList } from './components/chat-discussions-list'
import { ChatMessageList } from './components/chat-message-list'
import { ChatStartDiscussionModal } from './components/chat-start-discussion-modal'

function App() {

  return (
    <>
   {true && <ChatStartDiscussionModal/>}

    <ChatLayout 
      controls={<ChatControls/>}
      aside={<ChatDiscussionsList/>}
      main={<ChatMessageList/>}
      />
    </>
  )
}

export default App
