

import { Form, Link } from "@remix-run/react";

export default function LoginPage() {
  return (
    <>
    <section className="page-header-section style-1">
      <div className="container">
            <div className="page-header-content">
                <div className="page-header-inner">
                    <div className="page-title">
                        <h2>Please login to your profile</h2>
                    </div>
                    <ol className="breadcrumb">
                        <li><Link to="/">Home</Link></li>
                        <li className="active">Login</li>
                    </ol>
                </div>
            </div>
        </div>
    </section>
    <section className="login-section padding-tb">
          <div className=" container">
              <div className="account-wrapper">
                  <h3 className="title">Login</h3>
                  <Form className="account-form">
                      <div className="form-group">
                          <input type="text" placeholder="User Name" name="username" />
                      </div>
                      <div className="form-group">
                          <input type="password" placeholder="Password" name="password" />
                      </div>
                      <div className="form-group">
                          <div className="d-flex justify-content-between flex-wrap pt-sm-2">
                              <div className="checkgroup">
                                  <input type="checkbox" name="remember" id="remember" />
                                  <label htmlFor="remember">Remember Me</label>
                              </div>
                              <Link to="/forgot-password">Forget Password?</Link>
                          </div>
                      </div>
                      <div className="form-group">
                          <button className="d-block lab-btn"><span>Submit Now</span></button>
                      </div>
                  </Form>
                  <div className="account-bottom">
                      <span className="d-block cate pt-10">Don’t Have any Account? <Link to="/signup"> Sign
                              Up</Link></span>
                      <span className="or"><span>or</span></span>
                      <h5 className="subtitle">Login With Social Media</h5>
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


  