import { Link } from "@remix-run/react";

export function FooterBottom() {
    return (
        
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="footer-bottom-content text-center">
                            <p>&copy; 2023 <Link to="/">D8me.live</Link> - Online Dating app</p>
                        </div>
                    </div>
                </div>
            </div>
       
    )
}