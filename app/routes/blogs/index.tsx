import type { LoaderArgs } from "@remix-run/node"; // or cloudflare/deno
import { json } from "@remix-run/node"; // or cloudflare/deno
import { useLoaderData } from "@remix-run/react";

import { db } from "~/db.server";

export async function loader({ params }: LoaderArgs) {
    return json(
        await db.blog.findMany()
      );
}
export default function Blog() {

    const data = useLoaderData<typeof loader>();
    console.log(data)
  return (
    <>
        <section className="page-header-section style-1">
            <div className="container">
                <div className="page-header-content">
                    <div className="page-header-inner">
                        <div className="page-title">
                            <h2>D8me Blog</h2>
                        </div>
                        <ol className="breadcrumb">
                            <li><a href="index.html">Home</a></li>
                            <li className="active">Blog</li>
                        </ol>
                    </div>
                </div>
            </div>
        </section>
        <section className="blog-section padding-tb">
            <div className="container">
                <div className="main-blog">
                    <div className="row">
                        <div className="col-lg-8 col-12">
                            <div className="blog-wrapper">
                                <div className="post-item">
                                    <div className="post-item-inner">
                                        <div className="post-thumb">
                                            <a href="blog-single.html"><img src="./images/blog/01.jpg" alt="blog" /></a>
                                        </div>
                                        <div className="post-content">
                                            <span className="meta">By <a href="#">Admin</a> March 24, 2021</span>
                                            <h3><a href="blog-single.html">Uompe Qrear High Ecent Nche Without Some Prin
                                                    Uomp Without Some Qreari</a></h3>
                                            <p>Rapidious qntegrate distrbuted supply chains throuih marke position bestn
                                                practces chain marke positonn bestin practcer ieractvel fashon and sound
                                                qources forin iteractve fashion bestin practce ieractve and sound qources
                                                for.</p>
                                        </div>
                                        <div className="blog-footer">
                                            <a href="blog-single.html" className="viewall">Read More <i
                                                    className="icofont-double-right"></i></a>
                                            <div className="right">
                                                <a href="#" className="blog-heart"><i className="icofont-heart-alt"></i> 12 <span
                                                        className="d-none d-sm-inline-block">Like</span> </a>
                                                <a href="#" className="blog-comment"><i className="icofont-comment"></i> 24
                                                    <span className="d-none d-sm-inline-block">Comments</span> </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="post-item post-slider">
                                    <div className="post-item-inner">
                                        <div className="post-thumb">
                                            <div className="blog-slider">
                                                <div className="swiper-wrapper">
                                                    <div className="swiper-slide">
                                                        <img src="./images/blog/03.jpg" alt="blog" />
                                                    </div>
                                                    <div className="swiper-slide">
                                                        <img src="./images/blog/02.jpg" alt="blog" />
                                                    </div>
                                                    <div className="swiper-slide">
                                                        <img src="./images/blog/01.jpg" alt="blog" />
                                                    </div>
                                                </div>
                                                <div className="blog-slider-next">
                                                    <i className="icofont-play"></i>
                                                </div>
                                                <div className="blog-slider-prev">
                                                    <i className="icofont-play"></i>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="post-content">
                                            <span className="meta">By <a href="blog-single.html">Admin</a> March 24, 2021</span>
                                            <h3><a href="blog-single.html">Uompe Qrear High Ecent Nche Without Some Prin
                                                    Uomp Without Some Qreari</a></h3>
                                            <p>Rapidious qntegrate distrbuted supply chains throuih marke position bestn
                                                practces chain marke positonn bestin practcer ieractvel fashon and sound
                                                qources forin iteractve fashion bestin practce ieractve and sound qources
                                                for.</p>
                                        </div>
                                        <div className="blog-footer">
                                            <a href="blog-single.html" className="viewall">Read More <i
                                                    className="icofont-double-right"></i></a>
                                            <div className="right">
                                                <a href="#" className="blog-heart"><i className="icofont-heart-alt"></i> 12 <span
                                                        className="d-none d-sm-inline-block">Like</span> </a>
                                                <a href="#" className="blog-comment"><i className="icofont-comment"></i> 24
                                                    <span className="d-none d-sm-inline-block">Comments</span> </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="post-item video-post">
                                    <div className="post-item-inner">
                                        <div className="post-thumb">
                                            <div className="embed-responsive">
                                                <iframe src="https://www.youtube.com/embed/ViOZGtS8FG4"
                                                    allowFullScreen></iframe>
                                            </div>
                                        </div>
                                        <div className="post-content">
                                            <span className="meta">By <a href="#">Admin</a> March 24, 2021</span>
                                            <h3><a href="blog-single.html">Uompe Qrear High Ecent Nche Without Some Prin
                                                    Uomp Without Some Qreari</a></h3>
                                            <p>Rapidious qntegrate distrbuted supply chains throuih marke position bestn
                                                practces chain marke positonn bestin practcer ieractvel fashon and sound
                                                qources forin iteractve fashion bestin practce ieractve and sound qources
                                                for.</p>
                                        </div>
                                        <div className="blog-footer">
                                            <a href="blog-single.html" className="viewall">Read More <i
                                                    className="icofont-double-right"></i></a>
                                            <div className="right">
                                                <a href="#" className="blog-heart"><i className="icofont-heart-alt"></i> 12 <span
                                                        className="d-none d-sm-inline-block">Like</span> </a>
                                                <a href="#" className="blog-comment"><i className="icofont-comment"></i> 24
                                                    <span className="d-none d-sm-inline-block">Comments</span> </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="post-item code-post">
                                    <div className="post-item-inner">
                                        <div className="post-thumb">
                                            <div className="code-content">
                                                <img src="./images/blog/icon/code.png" alt="blog" />
                                                <p>Rapidious qntegrate distrbuted supply chains throuih marke position bestn
                                                    practces chain marke positonn bestin practcer ieractvel fashon and sound
                                                    qources forin iteractve fashion bestin practce ieractve and sound
                                                    qources
                                                    for.</p>
                                            </div>
                                        </div>
                                        <div className="post-content">
                                            <span className="meta">By <a href="#">Admin</a> March 24, 2021</span>
                                            <h3><a href="blog-single.html">Uompe Qrear High Ecent Nche Without Some Prin
                                                    Uomp Without Some Qreari</a></h3>
                                            <p>Rapidious qntegrate distrbuted supply chains throuih marke position bestn
                                                practces chain marke positonn bestin practcer ieractvel fashon and sound
                                                qources forin iteractve fashion bestin practce ieractve and sound qources
                                                for.</p>
                                        </div>
                                        <div className="blog-footer">
                                            <a href="blog-single.html" className="viewall">Read More <i
                                                    className="icofont-double-right"></i></a>
                                            <div className="right">
                                                <a href="#" className="blog-heart"><i className="icofont-heart-alt"></i> 12 <span
                                                        className="d-none d-sm-inline-block">Like</span> </a>
                                                <a href="#" className="blog-comment"><i className="icofont-comment"></i> 24
                                                    <span className="d-none d-sm-inline-block">Comments</span> </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="paginations">
                                <ul className="lab-ul d-flex flex-wrap justify-content-center mb-1">
                                    <li>
                                        <a href="#"><i className="icofont-rounded-double-left"></i></a>
                                    </li>
                                    <li>
                                        <a href="#">1</a>
                                    </li>
                                    <li className="d-none d-sm-block">
                                        <a href="#">2</a>
                                    </li>
                                    <li>
                                        <a href="#">...</a>
                                    </li>
                                    <li className="d-none d-sm-block">
                                        <a href="#">4</a>
                                    </li>
                                    <li>
                                        <a href="#">5</a>
                                    </li>
                                    <li>
                                        <a href="#"><i className="icofont-rounded-double-right"></i></a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-4 col-12">
                            <aside className="mt-5 mt-lg-0">
                                <div className="widget search-widget">
                                    <div className="widget-inner">
                                        <div className="widget-title">
                                            <h5>Filter Search Member</h5>
                                        </div>
                                        <div className="widget-content">
                                            <p>Serious Dating With D8me Your Perfect
                                                Match is Just a Click Away.</p>
                                            <form action="/" className="banner-form">
                                                <div className="gender">
                                                    <div className="custom-select right w-100">
                                                        <select name="gender" id="gender" className="">
                                                            <option value="0">I am a </option>
                                                            <option value="1">Male</option>
                                                            <option value="2">Female</option>
                                                            <option value="3">Others</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="person">
                                                    <div className="custom-select right w-100">
                                                        <select name="gender" id="gender-two" className="">
                                                            <option value="0">Looking for</option>
                                                            <option value="1">Male</option>
                                                            <option value="2">Female</option>
                                                            <option value="3">Others</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="age">
                                                    <div className="right d-flex justify-content-between w-100">
                                                        <div className="custom-select">
                                                            <select name="age-start" id="age">
                                                                <option value="1">18+</option>
                                                                <option value="2">19</option>
                                                                <option value="3">20</option>
                                                                <option value="4">21</option>
                                                                <option value="5">22</option>
                                                                <option value="6">23</option>
                                                                <option value="7">24</option>
                                                                <option value="8">25</option>
                                                                <option value="9">26</option>
                                                                <option value="10">27</option>
                                                                <option value="11">28</option>
                                                                <option value="13">29</option>
                                                                <option value="14">30</option>
                                                            </select>
                                                        </div>

                                                        <div className="custom-select">
                                                            <select name="age-end" id="age-two">
                                                                <option value="1">36</option>
                                                                <option value="2">19</option>
                                                                <option value="3">20</option>
                                                                <option value="4">21</option>
                                                                <option value="5">22</option>
                                                                <option value="6">23</option>
                                                                <option value="7">24</option>
                                                                <option value="8">25</option>
                                                                <option value="9">26</option>
                                                                <option value="10">27</option>
                                                                <option value="11">28</option>
                                                                <option value="13">29</option>
                                                                <option value="14">30</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="city">
                                                    <div className="custom-select right w-100">
                                                        <select name="country" id="country" className="">
                                                            <option value="0">Choose Your Country
                                                            </option>
                                                            <option value="1">USA</option>
                                                            <option value="2">UK</option>
                                                            <option value="3">Spain</option>
                                                            <option value="4">Brazil</option>
                                                            <option value="5">France</option>
                                                            <option value="6">Newzeland</option>
                                                            <option value="7">Australia</option>
                                                            <option value="8">Bangladesh</option>
                                                            <option value="9">Turki</option>
                                                            <option value="10">Chine</option>
                                                            <option value="11">India</option>
                                                            <option value="12">Canada</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="interest">
                                                    <div className="custom-select right w-100">
                                                        <select name="country" id="interest" className="">
                                                            <option value="0">Your Interests
                                                            </option>
                                                            <option value="1">Gaming</option>
                                                            <option value="2">Fishing</option>
                                                            <option value="3">Skydriving</option>
                                                            <option value="4">Swimming</option>
                                                            <option value="5">Racing</option>
                                                            <option value="6">Hangout</option>
                                                            <option value="7">Tranvelling</option>
                                                            <option value="8">Camping</option>
                                                            <option value="9">Touring</option>
                                                            <option value="10">Acting</option>
                                                            <option value="11">Dancing</option>
                                                            <option value="12">Singing</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <button className="">Find Your Partner</button>

                                            </form>
                                        </div>
                                    </div>
                                </div>
                                <div className="widget like-member">
                                    <div className="widget-inner">
                                        <div className="widget-title">
                                            <h5>you may like</h5>
                                        </div>
                                        <div className="widget-content">
                                            <div className="row row-cols-3 row-cols-sm-auto g-3">
                                                <div className="col">
                                                    <div className="image-thumb">
                                                        <a href="#">
                                                            <img src="./images/widget/01.jpg" alt="img" />
                                                        </a>
                                                    </div>
                                                </div>
                                                <div className="col">
                                                    <div className="image-thumb">
                                                        <a href="#">
                                                            <img src="./images/widget/02.jpg" alt="img" />
                                                        </a>
                                                    </div>
                                                </div>
                                                <div className="col">
                                                    <div className="image-thumb">
                                                        <a href="#">
                                                            <img src="./images/widget/03.jpg" alt="img" />
                                                        </a>
                                                    </div>
                                                </div>
                                                <div className="col">
                                                    <div className="image-thumb">
                                                        <a href="#">
                                                            <img src="./images/widget/04.jpg" alt="img" />
                                                        </a>
                                                    </div>
                                                </div>
                                                <div className="col">
                                                    <div className="image-thumb">
                                                        <a href="#">
                                                            <img src="./images/widget/05.jpg" alt="img" />
                                                        </a>
                                                    </div>
                                                </div>
                                                <div className="col">
                                                    <div className="image-thumb">
                                                        <a href="#">
                                                            <img src="./images/widget/06.jpg" alt="img" />
                                                        </a>
                                                    </div>
                                                </div>
                                                <div className="col">
                                                    <div className="image-thumb">
                                                        <a href="#">
                                                            <img src="./images/widget/07.jpg" alt="img" />
                                                        </a>
                                                    </div>
                                                </div>
                                                <div className="col">
                                                    <div className="image-thumb">
                                                        <a href="#">
                                                            <img src="./images/widget/08.jpg" alt="img" />
                                                        </a>
                                                    </div>
                                                </div>
                                                <div className="col">
                                                    <div className="image-thumb">
                                                        <a href="#">
                                                            <img src="./images/widget/09.jpg" alt="img" />
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="widget active-group">
                                    <div className="widget-inner">
                                        <div className="widget-title">
                                            <h5>join the group</h5>
                                        </div>
                                        <div className="widget-content">
                                            <div className="group-item lab-item">
                                                <div className="lab-inner d-flex flex-wrap align-items-center">
                                                    <div className="lab-content w-100">
                                                        <h6>Active Group A1</h6>
                                                        <p>Colabors atively fabcate best breed and
                                                            apcations through visionary</p>
                                                        <ul className="img-stack d-flex">
                                                            <li><img src="./images/group/group-mem/01.png"
                                                                    alt="member-img" /></li>
                                                            <li><img src="./images/group/group-mem/02.png"
                                                                    alt="member-img" /></li>
                                                            <li><img src="./images/group/group-mem/03.png"
                                                                    alt="member-img" /></li>
                                                            <li><img src="./images/group/group-mem/04.png"
                                                                    alt="member-img" /></li>
                                                            <li><img src="./images/group/group-mem/05.png"
                                                                    alt="member-img" /></li>
                                                            <li><img src="./images/group/group-mem/06.png"
                                                                    alt="member-img" /></li>
                                                            <li className="bg-theme">12+</li>
                                                        </ul>
                                                        <div className="test"> <a href="profile.html" className="lab-btn"><i
                                                                    className="icofont-users-alt-5"></i> View Group</a></div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="group-item lab-item">
                                                <div className="lab-inner d-flex flex-wrap align-items-center">
                                                    <div className="lab-content w-100">
                                                        <h6>Active Group A2</h6>
                                                        <p>Colabors atively fabcate best breed and
                                                            apcations through visionary</p>
                                                        <ul className="img-stack d-flex">
                                                            <li><img src="./images/group/group-mem/01.png"
                                                                    alt="member-img" /></li>
                                                            <li><img src="./images/group/group-mem/02.png"
                                                                    alt="member-img" /></li>
                                                            <li><img src="./images/group/group-mem/03.png"
                                                                    alt="member-img" /></li>
                                                            <li><img src="./images/group/group-mem/04.png"
                                                                    alt="member-img" /></li>
                                                            <li><img src="./images/group/group-mem/05.png"
                                                                    alt="member-img" /></li>
                                                            <li><img src="./images/group/group-mem/06.png"
                                                                    alt="member-img" /></li>
                                                            <li className="bg-theme">16+</li>
                                                        </ul>
                                                        <div className="test"> <a href="profile.html" className="lab-btn"> <i
                                                                    className="icofont-users-alt-5"></i>View Group</a></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </aside>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  );
}
