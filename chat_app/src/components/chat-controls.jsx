export function ChatControls({ setIsModalVisible, isModalVisible }) {
  return (
    <div className="chat-controls">
      <button
        className={`chat-controls-btn ${isModalVisible ? "is-active" : ""}`}
        onClick={() => {
          setIsModalVisible((prev) => !prev);
        }}
      >
        Show Modal
      </button>

      <button
        className={`chat-controls-btn ${!isModalVisible ? "is-active" : ""}`}
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
