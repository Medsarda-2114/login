import { useState } from "react";
import "../scss/signIn.scss";
import { toast } from "react-toastify";

const SignIn = ({ slideContainerNotActive }) => {
  const [user, setUser] = useState({
    fullName: "",
    email: "",
    password: "",
  });
  const getInputData = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };
  const handleSignInSubmit = (e) => {
    e.preventDefault();
    if (!user.fullName || !user.email || !user.password) {
      toast.error("Please Enter Your Info");
    } else {
      toast.success("Sign In");
      console.log(user);
    }
  };
  return (
    <div className="signInContainer">
      <h2>Sign In</h2>
      <form>
        <div className="row">
          <label htmlFor="">Full Name</label>
          <input type="text" name="fullName" onChange={getInputData} />
        </div>
        <div className="row">
          <label htmlFor="">Email</label>
          <input type="email" name="email" onChange={getInputData} />
        </div>
        <div className="row">
          <label htmlFor="">Password</label>
          <input type="password" name="password" onChange={getInputData} />
        </div>
        <button onClick={(e) => handleSignInSubmit(e)}>Submit</button>
      </form>
      <span className="msg">
        if you already have an account
        <button onClick={() => slideContainerNotActive()}>Sign Up</button>
      </span>
    </div>
  );
};

export default SignIn;
