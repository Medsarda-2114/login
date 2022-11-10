import "../scss/signUp.scss";
const SignUp = ({ slideContainerActive }) => {
  return (
    <div className="signUpContainer">
      <h2>Sign Up</h2>
      <form>
        <div className="row">
          <label htmlFor="">Email</label>
          <input type="email" />
        </div>
        <div className="row">
          <label htmlFor="">Password</label>
          <input type="password" />
        </div>
        <button>Sign Up</button>
      </form>
      <span className="msg">
        If You Don't Have An Account Create One{" "}
        <button onClick={() => slideContainerActive()}>Sign In</button>
      </span>
    </div>
  );
};

export default SignUp;
