import { useState } from "react";
import "../scss/signUp.scss";
import { toast } from "react-toastify";
const SignUp = ({ slideContainerActive }) => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const getInputData = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const handleSignUpSubmit = (e) => {
    e.preventDefault();
    if (!user.email || !user.password) {
      toast.error("Please Enter Your Info");
    } else {
      toast.success("Sign Up");
    }
  };
  return (
    <div className="signUpContainer">
      <h2>Sign Up</h2>
      <form>
        <div className="row">
          <label htmlFor="">Email</label>
          <input type="email" name="email" onChange={getInputData} />
        </div>
        <div className="row">
          <label htmlFor="">Password</label>
          <input type="password" name="password" onChange={getInputData} />
        </div>
        <button onClick={(e) => handleSignUpSubmit(e)}>Sign Up</button>
      </form>
      <span className="msg">
        If You Don't Have An Account Create One
        <button onClick={() => slideContainerActive()}>Sign In</button>
      </span>
    </div>
  );
};

export default SignUp;
