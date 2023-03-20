import "./SignUpFormStyles.css";

function SignUpForm() {
  return (
    <div className="form-container">
      <h1> Sign Up, Just a few second! </h1>
      <form>
        <input placeholder="Name" />
        <input placeholder="Email" />
        <input placeholder="Password" />
        <button> Sign Up </button>
      </form>
    </div>
  );
}

export default SignUpForm;
