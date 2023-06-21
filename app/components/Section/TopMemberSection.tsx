export function TopMemberSection() {
    return (
        <div className="container">
            <div className="section-header">
                <h4 className="theme-color">Top Members</h4>
                <h2>D8me Members Online Now</h2>
            </div>
            <div className="section-wrapper">
                <ul className="button-group filters-button-group w-100 d-flex flex-wrap justify-content-center">
                    <li className="button is-checked filter-btn" data-filter="*"><i className="icofont-heart-alt"></i> Show all
                    </li>
                    <li className="button filter-btn" data-filter=".girl"><i className="icofont-girl"></i> new girl
                        member</li>
                    <li className="button filter-btn" data-filter=".boy"><i className="icofont-hotel-boy"></i> New
                        Boy Member</li>
                </ul>

                <div className="grid-memberlist">
                    <div className="grid-member filter-item girl">
                        <div className="lab-item member-item style-1 style-2">
                            <div className="lab-inner">
                                <div className="lab-thumb">
                                    <img src="./images/member/01.jpg" alt="member-img" />
                                </div>
                                <div className="lab-content">
                                    <h6><a href="profile.html">Johanna</a> </h6>
                                    <p>Active 1 Day</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="grid-member filter-item girl">
                        <div className="lab-item member-item style-1 style-2">
                            <div className="lab-inner">
                                <div className="lab-thumb">
                                    <img src="./images/member/03.jpg" alt="member-img" />
                                </div>
                                <div className="lab-content">
                                    <h6><a href="profile.html">Selinae</a> </h6>
                                    <p>Active 1 Day</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="grid-member filter-item boy">
                        <div className="lab-item member-item style-1 style-2">
                            <div className="lab-inner">
                                <div className="lab-thumb">
                                    <img src="./images/member/02.jpg" alt="member-img" />
                                </div>
                                <div className="lab-content">
                                    <h6><a href="profile.html">Andrea Guido</a> </h6>
                                    <p>Active 1 Day</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="grid-member filter-item boy">
                        <div className="lab-item member-item style-1 style-2">
                            <div className="lab-inner">
                                <div className="lab-thumb">
                                    <img src="./images/member/04.jpg" alt="member-img" />
                                </div>
                                <div className="lab-content">
                                    <h6><a href="profile.html">Rocky deo</a> </h6>
                                    <p>Active 1 Day</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="grid-member filter-item girl">
                        <div className="lab-item member-item style-1 style-2">
                            <div className="lab-inner">
                                <div className="lab-thumb">
                                    <img src="./images/member/05.jpg" alt="member-img" />
                                </div>
                                <div className="lab-content">
                                    <h6><a href="profile.html">Jhon doe</a> </h6>
                                    <p>Active 5 Day</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="grid-member filter-item boy">
                        <div className="lab-item member-item style-1 style-2">
                            <div className="lab-inner">
                                <div className="lab-thumb">
                                    <img src="./images/member/06.jpg" alt="member-img" />
                                </div>
                                <div className="lab-content">
                                    <h6><a href="profile.html">Angelina</a> </h6>
                                    <p>Active 1 Day</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="grid-member filter-item girl">
                        <div className="lab-item member-item style-1 style-2">
                            <div className="lab-inner">
                                <div className="lab-thumb">
                                    <img src="./images/member/07.jpg" alt="member-img" />
                                </div>
                                <div className="lab-content">
                                    <h6><a href="profile.html">Andrea Guido</a> </h6>
                                    <p>Active 1 Day</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="grid-member filter-item boy">
                        <div className="lab-item member-item style-1 style-2">
                            <div className="lab-inner">
                                <div className="lab-thumb">
                                    <img src="./images/member/08.jpg" alt="member-img" />
                                </div>
                                <div className="lab-content">
                                    <h6><a href="profile.html">Jene Aiko</a> </h6>
                                    <p>Active 1 Day</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="grid-member filter-item girl">
                        <div className="lab-item member-item style-1 style-2">
                            <div className="lab-inner">
                                <div className="lab-thumb">
                                    <img src="./images/member/09.jpg" alt="member-img" />
                                </div>
                                <div className="lab-content">
                                    <h6><a href="profile.html">Anna haek</a> </h6>
                                    <p>Active 1 Day</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="grid-member filter-item boy">
                        <div className="lab-item member-item style-1 style-2">
                            <div className="lab-inner">
                                <div className="lab-thumb">
                                    <img src="./images/member/10.jpg" alt="member-img" />
                                </div>
                                <div className="lab-content">
                                    <h6><a href="profile.html">Andrean Puido</a> </h6>
                                    <p>Active 1 Day</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}