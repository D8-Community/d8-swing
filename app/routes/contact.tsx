


import { ContactForm } from "~/components/Page/ContactForm";

export default function ContactPage() {
  return (
    <>
    <section className="page-header-section style-1">
      <div className="container">
            <div className="page-header-content">
                <div className="page-header-inner">
                    <div className="page-title">
                    <h2>Contact Us</h2>
                    <p className="mb-5">Use the form below to reach us.</p>
                    </div>
                    
                </div>
            </div>
        </div>
    </section>
    <section className="contact-section">
        <div className="contact-top padding-tb aside-bg padding-b">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8">
                        <div className="contact-form-wrapper">
                            <div className="contact-form">
                            <h4>Don't Be A Stranger Just Say Hello.</h4>
                    <p className="mb-5">We do fast phone repair. In most to repair your device in just minutes, li we'll normally get con nection inutes, we'll normally ge.</p>
                                <ContactForm />

                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="contact-info-wrapper">
                            <div className="contact-info-title">
                            <h5>Get Information</h5>
                                <p>Our Contact information Details and
                                    Follow us on social media</p>
                            </div>
                            <div className="contact-info-content">
                                <div className="contact-info-item">
                                    <div className="contact-info-inner">
                                        <div className="contact-info-thumb">
                                            <img src="./images/contact/01.png" alt="address" />
                                        </div>
                                        <div className="contact-info-details">
                                            <span className="fw-bold">Office Address</span>
                                            <p>1201 park street, Fifth Avenue</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="contact-info-item">
                                    <div className="contact-info-inner">
                                        <div className="contact-info-thumb">
                                            <img src="./images/contact/02.png" alt="address" />
                                        </div>
                                        <div className="contact-info-details">
                                            <span className="fw-bold">Phone Number</span>
                                            <p>+22698 745 632,02 982 745</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="contact-info-item">
                                    <div className="contact-info-inner">
                                        <div className="contact-info-thumb">
                                            <img src="./images/contact/03.png" alt="address" />
                                        </div>
                                        <div className="contact-info-details">
                                            <span className="fw-bold">Send Mail</span>
                                            <p>adminD8me@gmail.com</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="contact-info-item">
                                    <div className="contact-info-inner">
                                        <div className="contact-info-thumb">
                                            <img src="./images/contact/04.png" alt="address" />
                                        </div>
                                        <div className="contact-info-details">
                                            <span className="fw-bold">Our Website</span>
                                            <p>www.D8me-dating.com</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="contact-bottom">
            <div className="contac-bottom">
                <div className="row justify-content-center g-0">
                    <div className="col-12">
                        <div className="location-map">
                            <div id="map">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d228225.89119998863!2d-82.1359357856101!3d26.64753629985287!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88db44a7e78016f5%3A0xafd1a4163a9b6ff2!2sCape%20Coral%2C%20FL%2C%20USA!5e0!3m2!1sen!2sbd!4v1616562014411!5m2!1sen!2sbd"
                                    loading="lazy"></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
  );
}