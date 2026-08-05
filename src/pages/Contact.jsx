import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

import "./Contact.css";

// Our wording for each way a field can fail. Keys are ValidityState flags, so the
// browser does the actual checking (email format, required, pattern, length) and
// we only supply the copy.
const MESSAGES = {
  name: {
    valueMissing: "Please enter your name.",
    patternMismatch: "Name can't contain numbers.",
  },
  email: {
    valueMissing: "Please enter your email.",
    typeMismatch: "Enter a valid email, like name@example.com.",
  },
  message: {
    valueMissing: "Please enter a message.",
    tooShort: "Tell us a little more — at least 10 characters.",
  },
};

function errorFor(el) {
  const rules = MESSAGES[el.name] ?? {};
  const flag = Object.keys(rules).find((key) => el.validity[key]);
  // Fall back to the browser's own text so a new constraint is never silent.
  return flag ? rules[flag] : el.validationMessage;
}

function Contact() {
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);
  const confirmHeading = useRef(null);

  // Swapping the form out drops focus to <body>, which leaves keyboard and
  // screen-reader users with no idea anything happened. Move it to the heading.
  useEffect(() => {
    if (sent) confirmHeading.current?.focus();
  }, [sent]);

  // Validate on blur, not on every keystroke — don't flag an email as malformed
  // while it's still being typed.
  function handleBlur(e) {
    const { name } = e.target;
    setErrors((prev) => ({ ...prev, [name]: errorFor(e.target) }));
  }

  // Once a field is already showing an error, re-check as they type so the
  // message clears the moment they fix it.
  function handleInput(e) {
    const { name } = e.target;
    setErrors((prev) =>
      prev[name] ? { ...prev, [name]: errorFor(e.target) } : prev,
    );
  }

  function handleSubmit(e) {
    e.preventDefault();
    const form = e.target;
    const fields = [...form.elements].filter((el) => el.name);

    const next = Object.fromEntries(fields.map((el) => [el.name, errorFor(el)]));
    setErrors(next);

    const firstInvalid = fields.find((el) => next[el.name]);
    if (firstInvalid) {
      firstInvalid.focus();
      return;
    }

    // ponytail: no backend yet — swap for a fetch() when there's an endpoint.
    console.log(Object.fromEntries(new FormData(form)));
    // The form unmounts, so its fields clear themselves — but `errors` lives on
    // the component and would still be here on "Send again".
    setErrors({});
    setSent(true);
  }

  if (sent) {
    return (
      <main className="page page--center">
        <h1 ref={confirmHeading} tabIndex={-1}>
          Thank you! Your message is on its way!
        </h1>
        <p>We&apos;ll get back to you within 2 business days.</p>

        <div className="contact__confirm-actions">
          <Link to="/" className="btn btn--dark">
            Back to home
          </Link>
          <button
            type="button"
            className="btn btn--sage"
            onClick={() => setSent(false)}
          >
            Send again
          </button>
        </div>
      </main>
    );
  }

  return (
    <main className="page">
      <h1>Send us Message</h1>

      {/* noValidate: keep the constraint checks, drop the unstyleable browser bubbles */}
      <form className="contact__form" onSubmit={handleSubmit} noValidate>
        <div className="contact__row">
          <div className="field">
            <label htmlFor="name">Name:</label>
            <div className="field__control">
              <input
                id="name"
                name="name"
                type="text"
                placeholder="John Doe"
                autoComplete="name"
                pattern="[^0-9]+"
                maxLength={80}
                required
                aria-invalid={Boolean(errors.name)}
                aria-describedby={errors.name ? "name-error" : undefined}
                onBlur={handleBlur}
                onInput={handleInput}
              />
              {errors.name && (
                <p className="field__error" id="name-error">
                  {errors.name}
                </p>
              )}
            </div>
          </div>

          <div className="field">
            <label htmlFor="email">Email:</label>
            <div className="field__control">
              <input
                id="email"
                name="email"
                type="email"
                placeholder="johndoe@gmail.com"
                autoComplete="email"
                maxLength={254}
                required
                aria-invalid={Boolean(errors.email)}
                aria-describedby={errors.email ? "email-error" : undefined}
                onBlur={handleBlur}
                onInput={handleInput}
              />
              {errors.email && (
                <p className="field__error" id="email-error">
                  {errors.email}
                </p>
              )}
            </div>
          </div>
        </div>

        <div className="field">
          <label htmlFor="message">Message:</label>
          <div className="field__control">
            <textarea
              id="message"
              name="message"
              placeholder="Leave us a message here."
              minLength={10}
              maxLength={1000}
              required
              aria-invalid={Boolean(errors.message)}
              aria-describedby={errors.message ? "message-error" : undefined}
              onBlur={handleBlur}
              onInput={handleInput}
            />
            {errors.message && (
              <p className="field__error" id="message-error">
                {errors.message}
              </p>
            )}
          </div>
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
