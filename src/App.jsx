import { useState } from "react";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import "./scss/index.scss";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [slideContainer, setSlideContainer] = useState("active");
  const slideContainerActive = () => {
    setSlideContainer("active");
  };
  const slideContainerNotActive = () => {
    setSlideContainer("");
  };
  return (
    <div className="App">
      <ToastContainer />
      <div className="loginContainer">
        {slideContainer ? (
          <div className={`overLay ${slideContainer}`}>
            <h2>Hello, Friend</h2>
            <p>
              Enter You Personal Details And Start <br />
              Journey With Us
            </p>
          </div>
        ) : (
          <div className={`overLay ${slideContainer}`}>
            <h2>Welcome Back</h2>
            <p>
              To Keep Connected With Us Please Login <br /> With Your Personal
              Info .
            </p>
          </div>
        )}
        <SignIn slideContainerNotActive={slideContainerNotActive} />
        <SignUp slideContainerActive={slideContainerActive} />
      </div>
    </div>
  );
}

export default App;
