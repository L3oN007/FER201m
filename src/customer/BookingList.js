import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';

export default function BookingList() {
  const sliderRef = useRef(null);

  useEffect(() => {
    sliderRef.current.slickGoTo(0); // Resets the slider to the first slide when the component mounts
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <>
      <div className="breadcrumb-bar">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-md-12 col-12">
              <nav aria-label="breadcrumb" className="page-breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <a href="index.html">Home</a>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Booking
                  </li>
                </ol>
              </nav>
              <h2 className="breadcrumb-title">Booking</h2>
            </div>
          </div>
        </div>
      </div>

      <section className="section section-doctor">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-4">
              <div className="section-header">
                <h2>Book Our Doctor</h2>
                <p>Certified Avian Practice</p>
              </div>
              <div className="about-content">
                <p>
                  BirdLovers Clinic, is home to Dr. Kiet, a Certified Avian Specialist offering
                  an exceptional level of veterinary care to all types of birds. We work with pet
                  owners, bird breeders, zoos and other facilities treating birds, from exotic
                  toucans and parrots, to cockatoos, parakeets, and more.
                </p>
                <p>
                  We feature a state-of-the-art surgical center, ICU, specialized avian radiography,
                  anesthesia, endoscopy, boarding, in-house laboratory, and more. Schedule your appointment today.
                </p>
                <Link to='/booking-confirm' className='mr-2'>Book All</Link>
                <Link to='/blog-list'>Read More..</Link>

              </div>
            </div>
            <div className="col-lg-8">
              {/* <div className="row filter">
                <div className="form-group col-lg-6">
                  <label htmlFor="specialty-selector">Specialty</label>
                  <select className="form-control" id="specialty-selector">
                    <option value="all">All</option>
                    <option value="general">General</option>
                    <option value="surgery">Surgery</option>
                    <option value="imaging">Imaging</option>
                    <option value="nutrition">Nutrition</option>
                    <option value="genetics">Genetics</option>
                  </select>
                </div>
              </div> */}
              <div className="doctor-slider slider" id="doctors-container">
                <Slider {...settings} ref={sliderRef}>
                  {/* Doctor Widget */}
                  <div
                    className="profile-widget nutrition"
                    data-specialty="nutrition"
                  >
                    <div className="doc-img">
                      <a href="doctor-profile.html">
                        <img
                          className="img-fluid"
                          alt="User Image"
                          src="assets/img/doctors/doctor-01.jpg"
                        />
                      </a>
                      <a href="javascript:void(0)" className="fav-btn">
                        <i className="far fa-bookmark" />
                      </a>
                    </div>
                    <div className="pro-content">
                      <h3 className="title">
                        <a href="doctor-profile.html">Ruby Perrin</a>
                        <i className="fas fa-check-circle verified" />
                      </h3>
                      <p className="specialty">Nutrition</p>
                      <div className="rating">
                        <i className="fas fa-star filled" />
                        <i className="fas fa-star filled" />
                        <i className="fas fa-star filled" />
                        <i className="fas fa-star filled" />
                        <i className="fas fa-star filled" />
                        <span className="d-inline-block average-rating">(17)</span>
                      </div>
                      <ul className="available-info">
                        <li>
                          <i className="fas fa-map-marker-alt" /> Florida, USA
                        </li>
                        <li>
                          <i className="far fa-clock" /> Available on Fri, 22 Mar
                        </li>
                        <li>
                          <i className="far fa-money-bill-alt" /> $300 - $1000
                          <i
                            className="fas fa-info-circle"
                            data-toggle="tooltip"
                            title="Lorem Ipsum"
                          />
                        </li>
                      </ul>
                      <div className="row row-sm">
                        <div className="col-6">
                          <a href="doctor-profile.html" className="btn view-btn">
                            View Profile
                          </a>
                        </div>
                        <div className="col-6">
                          <Link to='/booking-confirm' className="btn book-btn">
                            Book Now
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* /Doctor Widget */}
                  {/* Doctor Widget */}
                  <div className="profile-widget general" data-specialty="general">
                    <div className="doc-img">
                      <a href="doctor-profile.html">
                        <img
                          className="img-fluid"
                          alt="User Image"
                          src="assets/img/doctors/doctor-02.jpg"
                        />
                      </a>
                      <a href="javascript:void(0)" className="fav-btn">
                        <i className="far fa-bookmark" />
                      </a>
                    </div>
                    <div className="pro-content">
                      <h3 className="title">
                        <a href="doctor-profile.html">Darren Elder</a>
                        <i className="fas fa-check-circle verified" />
                      </h3>
                      <p className="specialty">General</p>
                      <div className="rating">
                        <i className="fas fa-star filled" />
                        <i className="fas fa-star filled" />
                        <i className="fas fa-star filled" />
                        <i className="fas fa-star filled" />
                        <i className="fas fa-star" />
                        <span className="d-inline-block average-rating">(35)</span>
                      </div>
                      <ul className="available-info">
                        <li>
                          <i className="fas fa-map-marker-alt" /> Newyork, USA
                        </li>
                        <li>
                          <i className="far fa-clock" /> Available on Fri, 22 Mar
                        </li>
                        <li>
                          <i className="far fa-money-bill-alt" /> $50 - $300
                          <i
                            className="fas fa-info-circle"
                            data-toggle="tooltip"
                            title="Lorem Ipsum"
                          />
                        </li>
                      </ul>
                      <div className="row row-sm">
                        <div className="col-6">
                          <a href="doctor-profile.html" className="btn view-btn">
                            View Profile
                          </a>
                        </div>
                        <div className="col-6">
                          <Link to='/booking-confirm' className="btn book-btn">
                            Book Now
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* /Doctor Widget */}
                  {/* Doctor Widget */}
                  <div className="profile-widget genetics" data-specialty="genetics">
                    <div className="doc-img">
                      <a href="doctor-profile.html">
                        <img
                          className="img-fluid"
                          alt="User Image"
                          src="assets/img/doctors/doctor-03.jpg"
                        />
                      </a>
                      <a href="javascript:void(0)" className="fav-btn">
                        <i className="far fa-bookmark" />
                      </a>
                    </div>
                    <div className="pro-content">
                      <h3 className="title">
                        <a href="doctor-profile.html">Deborah Angel</a>
                        <i className="fas fa-check-circle verified" />
                      </h3>
                      <p className="specialty">Genetics</p>
                      <div className="rating">
                        <i className="fas fa-star filled" />
                        <i className="fas fa-star filled" />
                        <i className="fas fa-star filled" />
                        <i className="fas fa-star filled" />
                        <i className="fas fa-star" />
                        <span className="d-inline-block average-rating">(27)</span>
                      </div>
                      <ul className="available-info">
                        <li>
                          <i className="fas fa-map-marker-alt" /> Georgia, USA
                        </li>
                        <li>
                          <i className="far fa-clock" /> Available on Fri, 22 Mar
                        </li>
                        <li>
                          <i className="far fa-money-bill-alt" /> $100 - $400
                          <i
                            className="fas fa-info-circle"
                            data-toggle="tooltip"
                            title="Lorem Ipsum"
                          />
                        </li>
                      </ul>
                      <div className="row row-sm">
                        <div className="col-6">
                          <a href="doctor-profile.html" className="btn view-btn">
                            View Profile
                          </a>
                        </div>
                        <div className="col-6">
                          <Link to='/booking-confirm' className="btn book-btn">
                            Book Now
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* /Doctor Widget */}
                  {/* Doctor Widget */}
                  <div className="profile-widget surgery" data-specialty="surgery">
                    <div className="doc-img">
                      <a href="doctor-profile.html">
                        <img
                          className="img-fluid"
                          alt="User Image"
                          src="assets/img/doctors/doctor-04.jpg"
                        />
                      </a>
                      <a href="javascript:void(0)" className="fav-btn">
                        <i className="far fa-bookmark" />
                      </a>
                    </div>
                    <div className="pro-content">
                      <h3 className="title">
                        <a href="doctor-profile.html">Sofia Brient</a>
                        <i className="fas fa-check-circle verified" />
                      </h3>
                      <p className="specialty">Surgery</p>
                      <div className="rating">
                        <i className="fas fa-star filled" />
                        <i className="fas fa-star filled" />
                        <i className="fas fa-star filled" />
                        <i className="fas fa-star filled" />
                        <i className="fas fa-star" />
                        <span className="d-inline-block average-rating">(4)</span>
                      </div>
                      <ul className="available-info">
                        <li>
                          <i className="fas fa-map-marker-alt" /> Louisiana, USA
                        </li>
                        <li>
                          <i className="far fa-clock" /> Available on Fri, 22 Mar
                        </li>
                        <li>
                          <i className="far fa-money-bill-alt" /> $150 - $250
                          <i
                            className="fas fa-info-circle"
                            data-toggle="tooltip"
                            title="Lorem Ipsum"
                          />
                        </li>
                      </ul>
                      <div className="row row-sm">
                        <div className="col-6">
                          <a href="doctor-profile.html" className="btn view-btn">
                            View Profile
                          </a>
                        </div>
                        <div className="col-6">
                          <Link to='/booking-confirm' className="btn book-btn">
                            Book Now
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* /Doctor Widget */}
                  {/* Doctor Widget */}
                  <div
                    className="profile-widget nutrition"
                    data-specialty="nutrition"
                  >
                    <div className="doc-img">
                      <a href="doctor-profile.html">
                        <img
                          className="img-fluid"
                          alt="User Image"
                          src="assets/img/doctors/doctor-05.jpg"
                        />
                      </a>
                      <a href="javascript:void(0)" className="fav-btn">
                        <i className="far fa-bookmark" />
                      </a>
                    </div>
                    <div className="pro-content">
                      <h3 className="title">
                        <a href="doctor-profile.html">Marvin Campbell</a>
                        <i className="fas fa-check-circle verified" />
                      </h3>
                      <p className="specialty">Nutrition</p>
                      <div className="rating">
                        <i className="fas fa-star filled" />
                        <i className="fas fa-star filled" />
                        <i className="fas fa-star filled" />
                        <i className="fas fa-star filled" />
                        <i className="fas fa-star" />
                        <span className="d-inline-block average-rating">(66)</span>
                      </div>
                      <ul className="available-info">
                        <li>
                          <i className="fas fa-map-marker-alt" /> Michigan, USA
                        </li>
                        <li>
                          <i className="far fa-clock" /> Available on Fri, 22 Mar
                        </li>
                        <li>
                          <i className="far fa-money-bill-alt" /> $50 - $700
                          <i
                            className="fas fa-info-circle"
                            data-toggle="tooltip"
                            title="Lorem Ipsum"
                          />
                        </li>
                      </ul>
                      <div className="row row-sm">
                        <div className="col-6">
                          <a href="doctor-profile.html" className="btn view-btn">
                            View Profile
                          </a>
                        </div>
                        <div className="col-6">
                          <Link to='/booking-confirm' className="btn book-btn">
                            Book Now
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* /Doctor Widget */}
                  {/* Doctor Widget */}
                  <div className="profile-widget imaging" data-specialty="imaging">
                    <div className="doc-img">
                      <a href="doctor-profile.html">
                        <img
                          className="img-fluid"
                          alt="User Image"
                          src="assets/img/doctors/doctor-06.jpg"
                        />
                      </a>
                      <a href="javascript:void(0)" className="fav-btn">
                        <i className="far fa-bookmark" />
                      </a>
                    </div>
                    <div className="pro-content">
                      <h3 className="title">
                        <a href="doctor-profile.html">Katharine Berthold</a>
                        <i className="fas fa-check-circle verified" />
                      </h3>
                      <p className="specialty">Imaging</p>
                      <div className="rating">
                        <i className="fas fa-star filled" />
                        <i className="fas fa-star filled" />
                        <i className="fas fa-star filled" />
                        <i className="fas fa-star filled" />
                        <i className="fas fa-star" />
                        <span className="d-inline-block average-rating">(52)</span>
                      </div>
                      <ul className="available-info">
                        <li>
                          <i className="fas fa-map-marker-alt" /> Texas, USA
                        </li>
                        <li>
                          <i className="far fa-clock" /> Available on Fri, 22 Mar
                        </li>
                        <li>
                          <i className="far fa-money-bill-alt" /> $100 - $500
                          <i
                            className="fas fa-info-circle"
                            data-toggle="tooltip"
                            title="Lorem Ipsum"
                          />
                        </li>
                      </ul>
                      <div className="row row-sm">
                        <div className="col-6">
                          <a href="doctor-profile.html" className="btn view-btn">
                            View Profile
                          </a>
                        </div>
                        <div className="col-6">
                          <Link to='/booking-confirm' className="btn book-btn">
                            Book Now
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* /Doctor Widget */}
                  {/* Doctor Widget */}
                  <div className="profile-widget general" data-specialty="general">
                    <div className="doc-img">
                      <a href="doctor-profile.html">
                        <img
                          className="img-fluid"
                          alt="User Image"
                          src="assets/img/doctors/doctor-07.jpg"
                        />
                      </a>
                      <a href="javascript:void(0)" className="fav-btn">
                        <i className="far fa-bookmark" />
                      </a>
                    </div>
                    <div className="pro-content">
                      <h3 className="title">
                        <a href="doctor-profile.html">Linda Tobin</a>
                        <i className="fas fa-check-circle verified" />
                      </h3>
                      <p className="specialty">General</p>
                      <div className="rating">
                        <i className="fas fa-star filled" />
                        <i className="fas fa-star filled" />
                        <i className="fas fa-star filled" />
                        <i className="fas fa-star filled" />
                        <i className="fas fa-star" />
                        <span className="d-inline-block average-rating">(43)</span>
                      </div>
                      <ul className="available-info">
                        <li>
                          <i className="fas fa-map-marker-alt" /> Kansas, USA
                        </li>
                        <li>
                          <i className="far fa-clock" /> Available on Fri, 22 Mar
                        </li>
                        <li>
                          <i className="far fa-money-bill-alt" /> $100 - $1000
                          <i
                            className="fas fa-info-circle"
                            data-toggle="tooltip"
                            title="Lorem Ipsum"
                          />
                        </li>
                      </ul>
                      <div className="row row-sm">
                        <div className="col-6">
                          <a href="doctor-profile.html" className="btn view-btn">
                            View Profile
                          </a>
                        </div>
                        <div className="col-6">
                          <Link to='/booking-confirm' className="btn book-btn">
                            Book Now
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* /Doctor Widget */}
                  {/* Doctor Widget */}
                  <div className="profile-widget surgery" data-specialty="surgery">
                    <div className="doc-img">
                      <a href="doctor-profile.html">
                        <img
                          className="img-fluid"
                          alt="User Image"
                          src="assets/img/doctors/doctor-08.jpg"
                        />
                      </a>
                      <a href="javascript:void(0)" className="fav-btn">
                        <i className="far fa-bookmark" />
                      </a>
                    </div>
                    <div className="pro-content">
                      <h3 className="title">
                        <a href="doctor-profile.html">Paul Richard</a>
                        <i className="fas fa-check-circle verified" />
                      </h3>
                      <p className="specialty">Surgery</p>
                      <div className="rating">
                        <i className="fas fa-star filled" />
                        <i className="fas fa-star filled" />
                        <i className="fas fa-star filled" />
                        <i className="fas fa-star filled" />
                        <i className="fas fa-star" />
                        <span className="d-inline-block average-rating">(49)</span>
                      </div>
                      <ul className="available-info">
                        <li>
                          <i className="fas fa-map-marker-alt" /> California, USA
                        </li>
                        <li>
                          <i className="far fa-clock" /> Available on Fri, 22 Mar
                        </li>
                        <li>
                          <i className="far fa-money-bill-alt" /> $100 - $400
                          <i
                            className="fas fa-info-circle"
                            data-toggle="tooltip"
                            title="Lorem Ipsum"
                          />
                        </li>
                      </ul>
                      <div className="row row-sm">
                        <div className="col-6">
                          <a href="doctor-profile.html" className="btn view-btn">
                            View Profile
                          </a>
                        </div>
                        <div className="col-6">
                          <Link to='/booking-confirm' className="btn book-btn">
                            Book Now
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Doctor Widget */}
                </Slider>
              </div>
            </div>
          </div>
        </div>

      </section >


    </>


  )
}
