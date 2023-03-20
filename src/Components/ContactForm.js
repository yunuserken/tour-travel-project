import "./ContactFormStyles.css";

function ContactForm() {
  return (
    <div className="form-container">
      <h1> Send a message to us! </h1>
      <form>
        <input placeholder="Name" />
        <input placeholder="Email" />
        <input placeholder="Subject" />
        <br />

        <textarea placeholder="Message"></textarea>

        <button> Send </button>
      </form>
    </div>
  );
}

export default ContactForm;
