import { Fragment } from "react";
import "./App.css";
import MyComponent from "./MyComponent";

const App = () => {
  return (
    <MyComponent name="React" age="28" address="대구시 수성구" favoriteNum="24">
      리액트
    </MyComponent>
  );
};

export default App;
