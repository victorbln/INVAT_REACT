import { clsx } from "clsx";
import useChatContext from "../hooks/user-chat-context";

export function ChatControls() {
  const { setIsModalVisible, isModalVisible } = useChatContext();

  return (
    <div className="chat-controls">
      <button
        className={clsx("chat-controls-btn", isModalVisible && "is-active")}
        onClick={() => {
          setIsModalVisible((prev) => !prev);
        }}
      >
        Show Modal
      </button>

      <button
        className={clsx("chat-controls-btn", !isModalVisible && "is-active")}
        onClick={() => {
          setIsModalVisible((prev) => !prev);
        }}
      >
        Hide Modal
      </button>

      <button
        className={`chat-controls-btn ${isModalVisible ? "is-active" : ""}`}
        onClick={() => {
          setIsModalVisible((prev) => !prev);
        }}
      >
        Toggle Modal
      </button>
    </div>
  );
}
