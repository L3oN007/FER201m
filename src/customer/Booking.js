import React from 'react'

export default function Booking() {
    return (
        <>
            {/* Breadcrumb */}
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
            {/* /Breadcrumb */}
            {/* Page Content */}
            <div className="content">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="card">
                                <div className="card-body">
                                    <div className="booking-doc-info">
                                        <a href="doctor-profile.html" className="booking-doc-img">
                                            <img
                                                src="assets/img/doctors/doctor-thumb-02.jpg"
                                                alt="User Image"
                                            />
                                        </a>
                                        <div className="booking-info">
                                            <h4>
                                                <a href="doctor-profile.html">Dr. ABC</a>
                                            </h4>
                                            {/* <div class="rating">
												<i class="fas fa-star filled"></i>
												<i class="fas fa-star filled"></i>
												<i class="fas fa-star filled"></i>
												<i class="fas fa-star filled"></i>
												<i class="fas fa-star"></i>
												<span class="d-inline-block average-rating">35</span>
											</div> */}
                                            <p className="text-muted mb-0">
                                                <i className="fas fa-map-marker-alt" /> Dong Da district,
                                                Hanoi city
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Schedule Widget */}
                            <div className="card booking-schedule schedule-widget">
                                {/* Schedule Header */}
                                <div className="schedule-header">
                                    <div className="row">
                                        <div className="col-md-12">
                                            {/* Day Slot */}
                                            <div className="day-slot">
                                                <ul>
                                                    <li className="left-arrow">
                                                        <a href="#">
                                                            <i className="fa fa-chevron-left" />
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <span>Mon</span>
                                                        <span className="slot-date">
                                                            11 Jun <small className="slot-year">2023</small>
                                                        </span>
                                                    </li>
                                                    <li>
                                                        <span>Tue</span>
                                                        <span className="slot-date">
                                                            12 Jun <small className="slot-year">2023</small>
                                                        </span>
                                                    </li>
                                                    <li>
                                                        <span>Wed</span>
                                                        <span className="slot-date">
                                                            13 Jun <small className="slot-year">2023</small>
                                                        </span>
                                                    </li>
                                                    <li>
                                                        <span>Thu</span>
                                                        <span className="slot-date">
                                                            14 Jun <small className="slot-year">2023</small>
                                                        </span>
                                                    </li>
                                                    <li>
                                                        <span>Fri</span>
                                                        <span className="slot-date">
                                                            15 Jun <small className="slot-year">2023</small>
                                                        </span>
                                                    </li>
                                                    <li>
                                                        <span>Sat</span>
                                                        <span className="slot-date">
                                                            16 Jun <small className="slot-year">2023</small>
                                                        </span>
                                                    </li>
                                                    <li>
                                                        <span>Sun</span>
                                                        <span className="slot-date">
                                                            17 Jun <small className="slot-year">2023</small>
                                                        </span>
                                                    </li>
                                                    <li className="right-arrow">
                                                        <a href="#">
                                                            <i className="fa fa-chevron-right" />
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                            {/* /Day Slot */}
                                        </div>
                                    </div>
                                </div>
                                {/* /Schedule Header */}
                                {/* Schedule Content */}
                                <div className="schedule-cont">
                                    <div className="row">
                                        <div className="col-md-12">
                                            {/* Time Slot */}
                                            <div className="time-slot">
                                                <ul className="clearfix">
                                                    <li>
                                                        <a className="timing" href="#">
                                                            {" "}
                                                            <span>9:00</span> <span>AM</span>{" "}
                                                        </a>
                                                        <a className="timing" href="#">
                                                            {" "}
                                                            <span>10:00</span> <span>AM</span>{" "}
                                                        </a>
                                                    </li>
                                                    <li></li>
                                                    <li>
                                                        <a className="timing" href="#">
                                                            {" "}
                                                            <span>9:00</span> <span>AM</span>{" "}
                                                        </a>
                                                        <a className="timing" href="#">
                                                            {" "}
                                                            <span>10:00</span> <span>AM</span>{" "}
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a className="timing" href="#">
                                                            {" "}
                                                            <span>9:00</span> <span>AM</span>{" "}
                                                        </a>
                                                        <a className="timing" href="#">
                                                            {" "}
                                                            <span>11:00</span> <span>AM</span>{" "}
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a className="timing" href="#">
                                                            {" "}
                                                            <span>9:00</span> <span>AM</span>{" "}
                                                        </a>
                                                        <a className="timing selected" href="#">
                                                            {" "}
                                                            <span>10:00</span> <span>AM</span>{" "}
                                                        </a>
                                                        <a className="timing" href="#">
                                                            {" "}
                                                            <span>11:00</span> <span>AM</span>{" "}
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a className="timing" href="#">
                                                            {" "}
                                                            <span>9:00</span> <span>AM</span>{" "}
                                                        </a>
                                                        <a className="timing" href="#">
                                                            {" "}
                                                            <span>10:00</span> <span>AM</span>{" "}
                                                        </a>
                                                        <a className="timing" href="#">
                                                            {" "}
                                                            <span>11:00</span> <span>AM</span>{" "}
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a className="timing" href="#">
                                                            {" "}
                                                            <span>9:00</span> <span>AM</span>{" "}
                                                        </a>
                                                        <a className="timing" href="#">
                                                            {" "}
                                                            <span>10:00</span> <span>AM</span>{" "}
                                                        </a>
                                                        <a className="timing" href="#">
                                                            {" "}
                                                            <span>11:00</span> <span>AM</span>{" "}
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                            {/* /Time Slot */}
                                        </div>
                                    </div>
                                </div>
                                {/* /Schedule Content */}
                            </div>
                            {/* /Schedule Widget */}
                            {/* Submit Section */}
                            <div className="submit-section proceed-btn text-right">
                                <a href="BookInfo-all.html" className="btn btn-primary submit-btn">
                                    Next
                                </a>
                            </div>
                            {/* /Submit Section */}
                        </div>
                    </div>
                </div>
            </div>
            {/* /Page Content */}
        </>

    )
}
