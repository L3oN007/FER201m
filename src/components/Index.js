import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export default function Index() {
    const URL = 'https://64b0cbc3062767bc48252f14.mockapi.io/';
    const [blogs, setBlogs] = useState([]);

    const getListBlog = async () => {
        try {
            const res = await axios.get(`${URL}/blog`);
            if (res.status === 200) {
                setBlogs(res.data);
            }
        } catch (error) {
            console.error('Error retrieving blog list:', error);
        }
    };

    useEffect(() => {
        getListBlog();
    }, []);

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
                                    <h4 class="text-white mb-3 d-none d-sm-block">BirdLove Veterinary Clinic</h4>
                                    <h4 class="text-white mb-3 d-none d-sm-block">Trusted Bird Clinic Providing the Best Veterinary Services and Top-notch Veterinary Team</h4>
                                    <Link
                                        to='blog-list'
                                        className="btn btn-lg btn-secondary mt-3 mt-md-4 px-4"
                                    >
                                        Learn More
                                    </Link>
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
                                    <h4 class="text-white mb-3 d-none d-sm-block">BirdLove Veterinary Clinic</h4>
                                    <h4 class="text-white mb-3 d-none d-sm-block">a Reliable Place for Pet Check-ups and Treatment</h4>
                                    {/* <a href="" class="btn btn-lg btn-primary mt-3 mt-md-4 px-4">Book Now</a> */}
                                    <Link
                                        to='blog-list'
                                        className="btn btn-lg btn-secondary mt-3 mt-md-4 px-4"
                                    >
                                        Learn More
                                    </Link>
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
                    Welcome to our premier boarding and daycare services for pets. We are committed to providing a safe and nurturing environment for your furry companions.
                </h5>
                <p className="mb-4">
                    Our team of experienced caregivers ensures that your pets receive personalized attention and care while you're away. We offer comfortable boarding facilities with spacious play areas and cozy sleeping quarters. Our daycare services provide a fun and interactive setting for your pets to socialize and engage in stimulating activities.
                </p>
                <ul className="list-inline">
                    <li>
                        <h5>
                            <i className="fa fa-check-double text-secondary mr-3" />
                            Experienced and Caring Staff
                        </h5>
                    </li>
                    <li>
                        <h5>
                            <i className="fa fa-check-double text-secondary mr-3" />
                            Secure and Comfortable Facilities
                        </h5>
                    </li>
                    <li>
                        <h5>
                            <i className="fa fa-check-double text-secondary mr-3" />
                            Customized Care Plans for Each Pet
                        </h5>
                    </li>
                </ul>
                <a href="#" className="btn btn-lg btn-primary mt-3 px-4">
                    Learn More
                </a>
            </div>
            <div className="col-lg-5">
                <div className="row px-3">
                    <div className="col-12 p-0">
                        <img
                            className="img-fluid w-100 h-100"
                            src="assets/img/about-1.jpg"
                            alt="Boarding and Daycare"
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
                                <h3 className="display-3 font-weight-normal text-secondary mb-3" ><i class="fa-solid fa-house"/></h3>
                                <h3 className="mb-3">Bird General</h3>
                                <p>
                                    Bird General is a comprehensive service that provides general healthcare and wellness
                                    check-ups for birds. Our experienced veterinarians examine your birds, perform necessary tests,
                                    and provide appropriate treatments to ensure their overall well-being.
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
                                <h3 className="display-3 font-weight-normal text-secondary mb-3" ><i class="fa-solid fa-dna"></i></h3>
                                <h3 className="mb-3">Bird Genetics</h3>
                                <p>
                                    Bird Genetics is a specialized service that offers genetic testing and counseling for avian species.
                                    Our experts utilize advanced techniques to identify and analyze genetic markers, helping bird owners
                                    understand the inherited traits and potential health risks in their birds.
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
                                <h3 className="display-3 font-weight-normal text-secondary mb-3" ><i class="fa-solid fa-hand-scissors"></i></h3>
                                <h3 className="mb-3">Bird Grooming</h3>
                                <p>
                                    Bird Grooming is dedicated to maintaining the hygiene and appearance of your avian companions.
                                    Our trained professionals offer a range of grooming services, including feather trimming, nail clipping,
                                    beak maintenance, and bathing.
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
                                <h3 className="display-3 font-weight-normal text-secondary mb-3" ><i class="fa-solid fa-syringe"></i></h3>
                                <h3 className="mb-3">Bird Surgery</h3>
                                <p>
                                    Bird Surgery provides advanced surgical procedures for avian patients. Our skilled veterinarians
                                     perform various surgical interventions, including tumor removal, orthopedic procedures, and soft
                                      tissue surgeries.
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
                                <h3 className="flaticon-doctor display-3 font-weight-normal text-secondary mb-3" ><i class="fa-solid fa-bone"></i></h3>
                                <h3 className="mb-3">Bird Imaging</h3>
                                <p>
                                    Bird Imaging offers advanced diagnostic imaging services for avian patients. Our state-of-the-art
                                     imaging equipment, including X-ray and ultrasound, allows us to obtain detailed images of internal
                                      structures, aiding in the diagnosis and treatment of various avian conditions. 
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
                                <h3 className=" display-3 font-weight-normal text-secondary mb-3" ><i class="fa-solid fa-utensils"></i></h3>
                                <h3 className="mb-3">Bird Nutrition</h3>
                                <p>
                                    Bird Nutrition focuses on providing tailored diet plans and nutritional counseling for your feathered 
                                    companions. Our experts assess your bird's dietary needs, considering factors such as species, age, and 
                                    specific health requirements.
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
                    {blogs && blogs.filter((blog) => blog.status === true)
                        .map((blog) => (
                            <div className="col-lg-4 mb-4" key={blog.id}>
                                <div className="card border-0 mb-2">
                                    <img src={blog.image} alt={blog.title} />
                                    <div className="card-body bg-light p-4">
                                        <h3 className="card-title text-truncate">{blog.title}</h3>
                                        <div className="d-flex">
                                            <small className="mr-3" ><i class="fa-solid fa-filter mr-1"></i>
                                                {blog.category}</small>
                                            <small className="mr-3" ><i class="fa-solid fa-calendar-days mr-1"></i>
                                                {blog.createDate}</small>
                                        </div>
                                        <p>{blog.description}</p>
                                        <Link to={`/blog-detail/${blog.id}`}>
                                            <button className="text-uppercase font-weight-bold">
                                                Read more
                                            </button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    <Link
                        to='blog-list'
                        className="btn btn-lg btn-secondary "
                    >
                        More Blogs
                    </Link>
                </div>

            </div>

            {/* blog Section */}

        </section>
    )
}
