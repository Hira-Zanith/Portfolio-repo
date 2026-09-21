function Contact() {
  return (
    <section
      id="contact"
      className="section"
      data-aos="fade-up"
    >
      <h2>Contact Me</h2>

      <form className="contact-form">
        <input
          type="text"
          placeholder="Your Name"
        />

        <input
          type="email"
          placeholder="Your Email"
        />

        <textarea
          rows="5"
          placeholder="Message"
        ></textarea>

        <button className="primary-btn">
          Send Message
        </button>
      </form>
    </section>
  );
}

export default Contact;