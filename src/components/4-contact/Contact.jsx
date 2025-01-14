import "./contact.css";
import { useForm, ValidationError } from "@formspree/react";
import Lottie from "lottie-react";
import doneAnimation from "../../../src/animation/done.json";
import contactAnimation from "../../../src/animation/contact us.json";
import { useRef, useEffect } from "react";

function Contact() {
  const [state, handleSubmit] = useForm("movvppnq");
  const emailInputRef = useRef(null);
  const messageInputRef = useRef(null);

  useEffect(() => {
    if (state.succeeded) {
      emailInputRef.current.value = "";
      messageInputRef.current.value = "";
    }
  }, [state.succeeded]);

  return (
    <section className="contact-us">
      <h1 className="title">
        <span className="icon-envelope"></span>
        Contact US
      </h1>
      <p className="subtitle">
        Contact us for more information and Get notified when I publish
        something new
      </p>
      <div style={{ justifyContent: "space-between" }} className="flex">
        <form onSubmit={handleSubmit} className="" action="">
          <div className="flex">
            <label htmlFor="email">Email Address</label>
            <input
              autoComplete="off"
              required
              type="email"
              name="email"
              id="email"
              ref={emailInputRef}
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          </div>

          <div className="flex" style={{ marginTop: "24px" }}>
            <label htmlFor="message">Your Message</label>
            <textarea required name="message" id="message" ref={messageInputRef}></textarea>
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
          </div>
          <button type="submit" disabled={state.submitting} className="submit">
            {state.submitting ? "Submitting ..." : "Submit"}
          </button>
          {state.succeeded && (
            <p
              className="flex"
              style={{ fontSize: "18px", marginTop: "1.7rem" }}
            >
              <Lottie
                loop={false}
                style={{ height: 37 }}
                animationData={doneAnimation}
              />
              Your message has been sent successfully
            </p>
          )}
        </form>
        <div className="animation">
          <Lottie
            className="contact-animation"
            style={{ height: 359 }}
            animationData={contactAnimation}
          />
        </div>
      </div>
    </section>
  );
}

export default Contact;