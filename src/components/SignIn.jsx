import "../scss/signIn.scss";
const SignIn = ({ slideContainerNotActive }) => {
  return (
    <div className="signInContainer">
      <h2>Sign In</h2>
      <form>
        <div className="row">
          <label htmlFor="">Full Name</label>
          <input type="text" />
        </div>
        <div className="row">
          <label htmlFor="">Email</label>
          <input type="email" />
        </div>
        <div className="row">
          <label htmlFor="">Password</label>
          <input type="password" />
        </div>
        <button>Submit</button>
      </form>
      <span className="msg">
        if you already have an account
        <button onClick={() => slideContainerNotActive()}>Sign Up</button>
      </span>
    </div>
  );
};

export default SignIn;
