import { Link } from "@remix-run/react";

export function HeaderBottom() {
    return (
        <div className="header-bottom">
            <div className="container">
                <div className="header-wrapper">
                    <div className="logo">
                        <Link to="/">
                            <img src="./images/logo/logo.png" alt="logo" />
                        </Link>
                    </div>
                    <div className="menu-area">
                        <ul className="menu">
                            <li>
                                <Link to="/">Home</Link>
                            </li>

                            <li>
                                <a href="#0">Features</a>
                                <ul className="submenu">
                                    <li><Link to="/member">All Members</Link></li>
                                    <li><Link to="/profile">Member Profile</Link></li>
                                    <li><Link to="/login">Login</Link></li>
                                    <li><Link to="/signup">Sign Up</Link></li>
                                    <li><Link to="/pricing">Pricing Plan</Link></li>
                                    <li><Link to="/404">404 Page</Link></li>

                                </ul>
                            </li>
                            <li>
                                <Link to="/group">Community</Link>
                            </li>
                            <li>
                                <Link to="/blogs">Blog</Link>
                            </li>
                            <li><Link to="/contact">Contact</Link></li>
                        </ul>
                        <Link to="/login" className="login"><i className="icofont-user"></i> <span>LOG IN</span> </Link>
                        <Link to="/signup" className="signup"><i className="icofont-users"></i> <span>SIGN UP</span> </Link>

          
                        <div className="header-bar d-lg-none">
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                        <div className="ellepsis-bar d-lg-none">
                            <i className="icofont-info-square"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}