import "./App.css";
import MyDisplayComponent from "./Components/MyDisplayComponent";
import MyRightButtonComponent from "./Components/MyLeftButtonComponent";
import MyLeftButtonComponent from "./Components/MyRightButtonComponent";

export default function App() {
  return (
    <>
      <div>
        <MyLeftButtonComponent />
        <MyRightButtonComponent />
        <MyDisplayComponent />
      </div>
    </>
  );
}
