export function ChatControls({ setIsModalVisible }) {
  return (
    <div className="chat-controls">
      <button
        className="chat-controls-btn"
        onClick={() => {
          setIsModalVisible((prev) => !prev);
        }}
      >
        Toggle Modal
      </button>

      <button
        className="chat-controls-btn"
        onClick={() => {
          setIsModalVisible((prev) => !prev);
        }}
      >
        Show Modal
      </button>

      <button
        className="chat-controls-btn"
        onClick={() => {
          setIsModalVisible((prev) => !prev);
        }}
      >
        Hide Modal
      </button>
    </div>
  );
}
