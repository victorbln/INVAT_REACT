import { ChatContact } from './components/chat-contact' 
import { ChatMessage } from './components/chat-message'
import { ChatContactList } from './components/chat-contact-list'
import { ChatMessageList } from './components/chat-message-list'
import { ChatDiscussionsContact } from './components/chat-discussions-contact'
import { ChatControls } from './components/chat-controls'
import './App.css'

function App() {

  return (
    <>
    <ChatContact />
    <ChatMessage />
    <ChatContactList />
    <ChatMessageList />
    <ChatDiscussionsContact />
    <ChatControls />
    </>
  )
}

export default App
