import { Form } from "@remix-run/react";

export function ContactForm() {
    return (
        <Form method="POST" className="comment-form">
        <input type="text" name="name" className="" placeholder="Name*" />
        <input type="email" name="email" className="" placeholder="Email*" />
        <input type="text" name="sub" className="" placeholder="Subject*" />
        <input type="text" name="number" className="" placeholder="Mobile Number*" />
        <textarea name="text" id="role"
            placeholder="Message*"></textarea>
        <button type="submit" className="lab-btn">
            <span>Send Our Message</span>
        </button>
        </Form>
    )
}
