import { useState } from "react";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import "./scss/index.scss";

function App() {
  const [slideContainer, setSlideContainer] = useState("");
  const slideContainerActive = () => {
    setSlideContainer("active");
  };
  const slideContainerNotActive = () => {
    setSlideContainer("");
  };
  return (
    <div className="App">
      <div className="loginContainer">
        <img
          className={`overLay ${slideContainer}`}
          src="https://st.depositphotos.com/18722762/51522/v/600/depositphotos_515228814-stock-illustration-online-registration-sign-login-account.jpg"
          alt=""
        />
        <SignIn slideContainerNotActive={slideContainerNotActive} />
        <SignUp slideContainerActive={slideContainerActive} />
      </div>
    </div>
  );
}

export default App;
