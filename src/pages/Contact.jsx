function Contact() {
  // ponytail: uncontrolled form + native validation. No state, no backend yet —
  // swap the log for a fetch() when there's an endpoint.
  function handleSubmit(e) {
    e.preventDefault();
    console.log(Object.fromEntries(new FormData(e.target)));
  }

  return (
    <main className="page">
      <h1>Send us message!</h1>

      <form className="contact__form" onSubmit={handleSubmit}>
        <div className="contact__row">
          <div className="field">
            <label htmlFor="name">Name:</label>
            <input id="name" name="name" type="text" required />
          </div>

          <div className="field">
            <label htmlFor="email">Email:</label>
            <input id="email" name="email" type="email" required />
          </div>
        </div>

        <div className="field field--stack">
          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" required />
        </div>

        <div className="contact__actions">
          <button type="submit" className="btn btn--dark">
            Submit
          </button>
        </div>
      </form>
    </main>
  );
}

export default Contact;
