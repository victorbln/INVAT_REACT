export function ChatControls() {
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
