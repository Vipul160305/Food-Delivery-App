const Contact=()=>{
    return(
        <div className="contact-page">
      <h2>Contact Us</h2>
      <p>We’d love to hear from you! Send us a message and we’ll get back shortly.</p>

      <form className="contact-form">
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea placeholder="Your Message" rows="5" required></textarea>
        <button type="submit">Send Message</button>
      </form>
    </div>
    )
}

export default Contact;

