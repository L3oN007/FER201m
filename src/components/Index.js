import React from 'react'

export default function Index() {
    return (
        <section className="main-wrapper">

            {/* Home Banner */}
            <div className="container-fluid p-0">
                <div id="header-carousel" className="carousel slide" data-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img className="w-100" src="assets/img/bposter1.jpg" alt="Image" />
                            <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                                <div className="p-3" style={{ maxWidth: 900 }}>
                                    <h3 className="text-white mb-3 d-none d-sm-block">
                                        Best Bird Services
                                    </h3>
                                    <h1 className="display-3 text-white mb-3">
                                        Keep Your Bird Happy
                                    </h1>
                                    <h5 className="text-white mb-3 d-none d-sm-block">
                                        Duo nonumy et dolor tempor no et. Diam sit diam sit diam erat
                                    </h5>
                                    <a
                                        href="service-detail.html"
                                        className="btn btn-lg btn-secondary mt-3 mt-md-4 px-4"
                                    >
                                        Learn More
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img className="w-100" src="assets/img/bposter2.jpg" alt="Image" />
                            <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                                <div className="p-3" style={{ maxWidth: 900 }}>
                                    <h3 className="text-white mb-3 d-none d-sm-block">
                                        Best Bird Services
                                    </h3>
                                    <h1 className="display-3 text-white mb-3">
                                        Bird Spa &amp; Grooming
                                    </h1>
                                    <h5 className="text-white mb-3 d-none d-sm-block">
                                        Duo nonumy et dolor tempor no et. Diam sit diam sit diam erat
                                    </h5>
                                    {/* <a href="" class="btn btn-lg btn-primary mt-3 mt-md-4 px-4">Book Now</a> */}
                                    <a
                                        href="service-detail.html"
                                        className="btn btn-lg btn-secondary mt-3 mt-md-4 px-4"
                                    >
                                        Learn More
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <a
                        className="carousel-control-prev"
                        href="#header-carousel"
                        data-slide="prev"
                    >
                        <div
                            className="btn btn-primary rounded"
                            style={{ width: 45, height: 45 }}
                        >
                            <span className="carousel-control-prev-icon mb-n2" />
                        </div>
                    </a>
                    <a
                        className="carousel-control-next"
                        href="#header-carousel"
                        data-slide="next"
                    >
                        <div
                            className="btn btn-primary rounded"
                            style={{ width: 45, height: 45 }}
                        >
                            <span className="carousel-control-next-icon mb-n2" />
                        </div>
                    </a>
                </div>
            </div>
            {/* /Home Banner */}
            {/* Availabe Features */}
            <section className="section section-specialities" style={{ padding: 0 }}>
                <div className="container py-5">
                    <div className="row py-5">
                        <div className="col-lg-7 pb-5 pb-lg-0 px-3 px-lg-5">
                            <h4 className="text-secondary mb-3">About Us</h4>
                            <h1 className="display-4 mb-4">
                                <span className="text-primary">Boarding</span> &amp;{" "}
                                <span className="text-secondary">Daycare</span>
                            </h1>
                            <h5 className="text-muted mb-3">
                                Amet stet amet ut. Sit no vero vero no dolor. Sed erat ut sea. Just
                                clita ut stet kasd at diam sit erat vero sit.
                            </h5>
                            <p className="mb-4">
                                Dolores lorem lorem ipsum sit et ipsum. Sadip sea amet diam dolore
                                sed et. Sit rebum labore sit sit ut vero no sit. Et elitr stet dolor
                                sed sit et sed ipsum et kasd ut. Erat duo eos et erat sed diam duo
                            </p>
                            <ul className="list-inline">
                                <li>
                                    <h5>
                                        <i className="fa fa-check-double text-secondary mr-3" />
                                        Best In Industry
                                    </h5>
                                </li>
                                <li>
                                    <h5>
                                        <i className="fa fa-check-double text-secondary mr-3" />
                                        Emergency Services
                                    </h5>
                                </li>
                                <li>
                                    <h5>
                                        <i className="fa fa-check-double text-secondary mr-3" />
                                        24/7 Customer Support
                                    </h5>
                                </li>
                            </ul>
                            <a href="" className="btn btn-lg btn-primary mt-3 px-4">
                                Learn More
                            </a>
                        </div>
                        <div className="col-lg-5">
                            <div className="row px-3">
                                <div className="col-12 p-0">
                                    <img
                                        className="img-fluid w-100 h-100"
                                        src="assets/img/about-1.jpg"
                                        alt=""
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Services Start */}
            <div className="container-fluid bg-light pt-5">
                <div className="container py-5">
                    <div className="d-flex flex-column text-center mb-5">
                        <h4 className="text-secondary mb-3">Our Services</h4>
                        <h1 className="display-4 m-0">
                            <span className="text-primary">Premium</span> Bird Services
                        </h1>
                    </div>
                    <div className="row pb-3">
                        <div className="col-md-6 col-lg-4 mb-4">
                            <div className="d-flex flex-column text-center bg-white mb-2 p-3 p-sm-5">
                                <h3 className="flaticon-house display-3 font-weight-normal text-secondary mb-3" />
                                <h3 className="mb-3">Bird Boarding</h3>
                                <p>
                                    Diam amet eos at no eos sit lorem, amet rebum ipsum clita stet,
                                    diam sea est magna diam eos, rebum sit vero stet ipsum justo
                                </p>
                                <a
                                    className="text-uppercase font-weight-bold"
                                    href="service-detail.html"
                                >
                                    Read More
                                </a>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 mb-4">
                            <div className="d-flex flex-column text-center bg-white mb-2 p-3 p-sm-5">
                                <h3 className="flaticon-food display-3 font-weight-normal text-secondary mb-3" />
                                <h3 className="mb-3">Bird Feeding</h3>
                                <p>
                                    Diam amet eos at no eos sit lorem, amet rebum ipsum clita stet,
                                    diam sea est magna diam eos, rebum sit vero stet ipsum justo
                                </p>
                                <a
                                    className="text-uppercase font-weight-bold"
                                    href="service-detail.html"
                                >
                                    Read More
                                </a>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 mb-4">
                            <div className="d-flex flex-column text-center bg-white mb-2 p-3 p-sm-5">
                                <h3 className="flaticon-grooming display-3 font-weight-normal text-secondary mb-3" />
                                <h3 className="mb-3">Bird Grooming</h3>
                                <p>
                                    Diam amet eos at no eos sit lorem, amet rebum ipsum clita stet,
                                    diam sea est magna diam eos, rebum sit vero stet ipsum justo
                                </p>
                                <a
                                    className="text-uppercase font-weight-bold"
                                    href="service-detail.html"
                                >
                                    Read More
                                </a>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 mb-4">
                            <div className="d-flex flex-column text-center bg-white mb-2 p-3 p-sm-5">
                                <h3 className="flaticon-care display-3 font-weight-normal text-secondary mb-3" />
                                <h3 className="mb-3">Bird Examine</h3>
                                <p>
                                    Diam amet eos at no eos sit lorem, amet rebum ipsum clita stet,
                                    diam sea est magna diam eos, rebum sit vero stet ipsum justo
                                </p>
                                <a
                                    className="text-uppercase font-weight-bold"
                                    href="service-detail.html"
                                >
                                    Read More
                                </a>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 mb-4">
                            <div className="d-flex flex-column text-center bg-white mb-2 p-3 p-sm-5">
                                <h3 className="flaticon-doctor display-3 font-weight-normal text-secondary mb-3" />
                                <h3 className="mb-3">DNA &amp; Sex testing</h3>
                                <p>
                                    Diam amet eos at no eos sit lorem, amet rebum ipsum clita stet,
                                    diam sea est magna diam eos, rebum sit vero stet ipsum justo
                                </p>
                                <a
                                    className="text-uppercase font-weight-bold"
                                    href="service-detail.html"
                                >
                                    Read More
                                </a>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 mb-4">
                            <div className="d-flex flex-column text-center bg-white mb-2 p-3 p-sm-5">
                                <h3 className="flaticon-vaccine display-3 font-weight-normal text-secondary mb-3" />
                                <h3 className="mb-3">Bird Vaccination</h3>
                                <p>
                                    Diam amet eos at no eos sit lorem, amet rebum ipsum clita stet,
                                    diam sea est magna diam eos, rebum sit vero stet ipsum justo
                                </p>
                                <a
                                    className="text-uppercase font-weight-bold"
                                    href="service-detail.html"
                                >
                                    Read More
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Services End */}
            {/* blog Section */}
            <div className="container pt-5">
                <div className="d-flex flex-column text-center mb-5">
                    <h4 className="text-secondary mb-3">Bird Blog</h4>
                    <h1 className="display-4 m-0">
                        <span className="text-primary">Updates</span> From Blog
                    </h1>
                </div>
                <div className="row pb-3">
                    <div className="col-lg-4 mb-4">
                        <div className="card border-0 mb-2">
                            <img className="card-img-top" src="assets/img/blog-1.jpg" alt="" />
                            <div className="card-body bg-light p-4">
                                <h4 className="card-title text-truncate">
                                    Diam amet eos at no eos
                                </h4>
                                <div className="d-flex mb-3">
                                    <small className="mr-2">
                                        <i className="fa fa-user text-muted" /> Admin
                                    </small>
                                    <small className="mr-2">
                                        <i className="fa fa-folder text-muted" /> Web Design
                                    </small>
                                    <small className="mr-2">
                                        <i className="fa fa-comments text-muted" /> 15
                                    </small>
                                </div>
                                <p>
                                    Diam amet eos at no eos sit lorem, amet rebum ipsum clita stet,
                                    diam sea est diam eos, rebum sit vero stet justo
                                </p>
                                <a className="font-weight-bold" href="blog-detail.html">
                                    Read More
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 mb-4">
                        <div className="card border-0 mb-2">
                            <img className="card-img-top" src="assets/img/about-2.jpg" alt="" />
                            <div className="card-body bg-light p-4">
                                <h4 className="card-title text-truncate">
                                    Diam amet eos at no eos
                                </h4>
                                <div className="d-flex mb-3">
                                    <small className="mr-2">
                                        <i className="fa fa-user text-muted" /> Admin
                                    </small>
                                    <small className="mr-2">
                                        <i className="fa fa-folder text-muted" /> Web Design
                                    </small>
                                    <small className="mr-2">
                                        <i className="fa fa-comments text-muted" /> 15
                                    </small>
                                </div>
                                <p>
                                    Diam amet eos at no eos sit lorem, amet rebum ipsum clita stet,
                                    diam sea est diam eos, rebum sit vero stet justo
                                </p>
                                <a className="font-weight-bold" href="blog-detail.html">
                                    Read More
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 mb-4">
                        <div className="card border-0 mb-2">
                            <img className="card-img-top" src="assets/img/blog-1.jpg" alt="" />
                            <div className="card-body bg-light p-4">
                                <h4 className="card-title text-truncate">
                                    Diam amet eos at no eos
                                </h4>
                                <div className="d-flex mb-3">
                                    <small className="mr-2">
                                        <i className="fa fa-user text-muted" /> Admin
                                    </small>
                                    <small className="mr-2">
                                        <i className="fa fa-folder text-muted" /> Web Design
                                    </small>
                                    <small className="mr-2">
                                        <i className="fa fa-comments text-muted" /> 15
                                    </small>
                                </div>
                                <p>
                                    Diam amet eos at no eos sit lorem, amet rebum ipsum clita stet,
                                    diam sea est diam eos, rebum sit vero stet justo
                                </p>
                                <a className="font-weight-bold" href="blog-detail.html">
                                    Read More
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* blog Section */}

        </section>

    )
}
