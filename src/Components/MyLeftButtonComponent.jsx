export default function MyLeftButtonComponent() {
  return (
    <div>
      <button
        id="leftButton"
        onClick={() => {
          console.log("hello");
        }}
      >
        Left
      </button>
    </div>
  );
}
