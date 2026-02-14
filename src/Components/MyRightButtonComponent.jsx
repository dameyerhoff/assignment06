export default function MyRightButtonComponent() {
  return (
    <div>
      <button
        id="rightButton"
        onClick={() => {
          console.log("hello");
        }}
      >
        Right
      </button>
    </div>
  );
}
