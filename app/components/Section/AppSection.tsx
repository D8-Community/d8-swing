export function AppSection() {
    return (
        <div className="container">
            <div className="section-wrapper padding-tb">
                <div className="app-content">
                    <h4>Download App Our D8me</h4>
                    <h2>Easy Connect to Everyone</h2>
                    <p>You find us, finally, and you are already in love. More than 5.000.000 around
                        the world already shared the same experience andng ares uses our system
                        Joining us today just got easier!</p>
                    <ul className="app-download d-flex flex-wrap">
                        <li><a href="#" className="d-flex flex-wrap align-items-center">
                                <div className="app-thumb">
                                    <img src="./images/app/apple.png" alt="apple" />
                                </div>
                                <div className="app-content">
                                    <p>Available on the</p>
                                    <h4>App Store</h4>
                                </div>
                            </a></li>
                        <li className="d-inline-block"><a href="#" className="d-flex flex-wrap align-items-center">
                                <div className="app-thumb">
                                    <img src="./images/app/playstore.png" alt="playstore" />
                                </div>
                                <div className="app-content">
                                    <p>Available on the</p>
                                    <h4>Google Play</h4>
                                </div>
                            </a></li>
                    </ul>

                </div>
                <div className="mobile-app">
                    <img src="./images/app/mobile-view.png" alt="mbl-view" />
                </div>
            </div>
        </div>
    )
}