import LeftMenu from "./components/LeftMenu";
import MainContainer from "./components/MainContainer";
import RightMenu from "./components/RightMenu";
import space from "./images/space.jpg";

import "./App.css";

export default function App() {
  return (
    <>
      <div className="app">
        <img src={space} alt="" div className="img" />
        <LeftMenu />
        <MainContainer />
        <RightMenu />
      </div>
    </>
  );
}
