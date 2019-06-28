import React from "react"
import contactFormStyles from "../contactForm/contactForm.module.scss"

const ContactForm = () => {
    return (
        <form
            className={contactFormStyles.contactForm}
            name="contact"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            method="post"
            action="/success"
        >
            <input type="hidden" name="form-name" value="contact" />

            <p>
                <label htmlFor="name">
                    Name: <input type="text" name="name" required />
                </label>
            </p>

            <p>
                <label htmlFor="email">
                    Email: <input type="email" name="email" required />
                </label>
            </p>

            <p>
                <label htmlFor="phone">
                    Phone:{" "}
                    <input
                        type="tel"
                        name="phone"
                        placeholder="(optional)"
                        pattern="[0-9]{3}-[0-9]{3}-[0-4]{4}"
                    />
                </label>
            </p>

            <p className={contactFormStyles.full}>
                <label htmlFor="message">
                    Message:{" "}
                    <textarea name="message" rows="5" required></textarea>
                </label>
            </p>

            <p className={contactFormStyles.full}>
                <button type="submit">Submit</button>
            </p>
        </form>
    )
}

export default ContactForm
