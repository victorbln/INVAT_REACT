export function ChatStartDiscussionModal() {
  return (
    <div>
      <button
        onClick={() => {
          setIsModalVisible(!isModalVisible);
        }}
      >
        Show Modal
      </button>
    </div>
  );
}
