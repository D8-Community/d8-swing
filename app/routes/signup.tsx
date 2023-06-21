

import { Form, Link } from "@remix-run/react";

export default function SignUpPage() {
  return (
    <>
    <section className="page-header-section style-1">
      <div className="container">
            <div className="page-header-content">
                <div className="page-header-inner">
                    <div className="page-title">
                        <h2>Sign up today.</h2>
                    </div>
                    <ol className="breadcrumb">
                        <li><Link to="/">Home</Link></li>
                        <li className="active">Register</li>
                    </ol>
                </div>
            </div>
        </div>
    </section>
    <section className="signup-section padding-tb">
          <div className=" container">
              <div className="account-wrapper">
                  <h3 className="title">Register</h3>
                  <Form className="account-form">
                            <div className="form-group">
                                <input type="text" placeholder="User Name" name="username" />
                            </div>
                            <div className="form-group">
                                <input type="text" placeholder="Email" name="email" />
                            </div>
                            <div className="form-group">
                                <input type="password" placeholder="Password" name="password" />
                            </div>
                            <div className="form-group">
                                <input type="password" placeholder="Confirm Password" name="password" />
                            </div>

                      <div className="form-group">
                          <button className="d-block lab-btn"><span>Get Started Now</span></button>
                      </div>
                  </Form>
                  <div className="account-bottom">
                      <span className="d-block cate pt-10">Are you a member? <Link to="/login">Login</Link></span>
                      <span className="or"><span>or</span></span>
                      <h5 className="subtitle">Sign Up With Social Media</h5>
                      <ul className="social-media social-color lab-ul d-flex justify-content-center">
                          <li>
                              <Link to="#" className="facebook"><i className="icofont-facebook"></i></Link>
                          </li>
                          <li>
                              <Link to="#" className="twitter"><i className="icofont-twitter"></i></Link>
                          </li>
                          <li>
                              <Link to="#" className="linkedin"><i className="icofont-linkedin"></i></Link>
                          </li>
                          <li>
                              <Link to="#" className="instagram"><i className="icofont-instagram"></i></Link>
                          </li>
                          <li>
                              <Link to="#" className="pinterest"><i className="icofont-pinterest"></i></Link>
                          </li>
                      </ul>
                  </div>
              </div>
          </div>
    </section>

    </>
  );
}


  