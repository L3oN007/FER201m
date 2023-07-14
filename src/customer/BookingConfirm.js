
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { useEffect, useState } from 'react';
import * as Yup from 'yup';

export default function BookingConfirm() {
    const validationSchema = Yup.object({
        fullName: Yup.string().required('Full Name is required'),
        email: Yup.string().required('Email is required'),
        phone: Yup.string().required('Phone is required'),
        services: Yup.string().required('Please choose a service'),
        symptoms: Yup.string().required('Symptoms description is required'),
        birdId: Yup.string().required('Please choose your bird'),
    });
    const [birds, setBirds] = useState([]);
    const [LoginUser, setLoginUser] = useState({});
    const [user, setUser] = useState([]);


    useEffect(() => {

        const storedLoginData = localStorage.getItem('loginData');
        if (storedLoginData) {
            const loginData = JSON.parse(storedLoginData);
            setLoginUser(loginData.user);
            fetch(`https://64b0cbc3062767bc48252f14.mockapi.io/user/${loginData.user.sub}`)
                .then(response => response.json())
                .then(data => setUser(data))
                .catch(error => console.error(error));

            fetch(`https://64b0cbc3062767bc48252f14.mockapi.io/user/${loginData.user.sub}/bird`)
                .then(response => response.json())
                .then(data => setBirds(data))
                .catch(error => console.error(error));
        }
    }, []);


    const handleSubmit = (values) => {
        console.log('Form Values:', values);
    };


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
                                        Booking Information
                                    </li>
                                </ol>
                            </nav>
                            <h2 className="breadcrumb-title">Booking Information</h2>
                        </div>
                    </div>
                </div>
            </div>
            {/* /Breadcrumb */}
            {/* Page Content */}
            <div className="content">
                <div className="container">
                    <div className="row">
                        <div className="col-md-7 col-lg-8">
                            <div className="card">
                                <div className="card-body">
                                    {/* Checkout Form */}
                                    <Formik
                                        enableReinitialize
                                        initialValues={{
                                            fullName: `${user.firstName + " " + user.lastName}`,
                                            email: `${user.email}`,
                                            phone: `${user.phone}`,
                                            userId: `${user.userId}`,
                                            birdId: '',
                                            services: '',
                                            datetime: '',
                                            symptoms: '',
                                        }}
                                        validationSchema={validationSchema}
                                        onSubmit={handleSubmit}
                                    >
                                        <Form>
                                            <div className="info-widget">
                                                <h4 className="card-title">Personal Information</h4>
                                                <div className="row">
                                                    <div className="col-md-6 col-sm-12">
                                                        <div className="form-group card-label">
                                                            <label>Full Name</label>
                                                            <Field className="form-control" type="text" name="fullName" value={user.firstName + " " + user.lastName} disabled />
                                                            <ErrorMessage
                                                                name="fullName"
                                                                component="div"
                                                                className="error-message"
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6 col-sm-12">
                                                        <div className="form-group card-label">
                                                            <label>Email</label>
                                                            <Field className="form-control" type="email" name="email" value={user.email} disabled />
                                                            <ErrorMessage
                                                                name="email"
                                                                component="div"
                                                                className="error-message"
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6 col-sm-12">
                                                        <div className="form-group card-label">
                                                            <label>Phone</label>
                                                            <Field className="form-control" type="text" name="phone" value={user.phone} disabled />
                                                            <ErrorMessage
                                                                name="phone"
                                                                component="div"
                                                                className="error-message"
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6 col-sm-12">
                                                        <div className="form-group card-label">
                                                            <label>Gender</label>
                                                            <Field as="select" className="form-control" name="gender" disabled>
                                                                <option value={user.gender} selected>{user.gender}</option>

                                                            </Field>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="info-widget">
                                                <h4 className="card-title">Bird Information</h4>
                                                <div className="row">
                                                    <div className="col-md-12 col-sm-12">
                                                        <div className="form-group card-label">
                                                            <label>Choose your bird</label>
                                                            <Field as="select" className="form-control" name="birdId">
                                                                <option value="">--</option>
                                                                {birds.map(bird => (
                                                                    <option value={bird.birdId}>
                                                                        {bird.birdName}
                                                                    </option>
                                                                ))}
                                                            </Field>
                                                            <ErrorMessage
                                                            name="birdId"
                                                            component="div"
                                                            className="error-message"
                                                        />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="info-widget">
                                                <h4 className="card-title">Notes</h4>
                                                <div className="col-md-12 col-sm-12">
                                                    <div className="form-group card-label">

                                                    </div>
                                                </div>
                                                <div className="col-md-12 col-sm-12">
                                                    <div className="form-group card-label">
                                                        <label>Choose services</label>
                                                        <Field as="select" className="form-control" name="services">
                                                            <option value="">--</option>
                                                            <option value="general">General</option>
                                                            <option value="surgery">Surgery</option>
                                                            <option value="imaging">Imaging</option>
                                                            <option value="nutrition">Nutrition</option>
                                                            <option value="genetics">Genetics</option>
                                                        </Field>
                                                        <ErrorMessage
                                                            name="services"
                                                            component="div"
                                                            className="error-message"
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-md-12 col-sm-12">
                                                    <div className="form-group card-label">
                                                        <label>Date & time</label>
                                                        <Field as="input" type="datetime-local" className="form-control" name="datetime">

                                                        </Field>
                                                        <ErrorMessage
                                                            name="services"
                                                            component="div"
                                                            className="error-message"
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-md-12 col-sm-12">
                                                    <div className="form-group">
                                                        <Field
                                                            as="textarea"
                                                            className="form-control"
                                                            rows={4}
                                                            placeholder="Describe bird's symptoms"
                                                            name="symptoms"
                                                        />
                                                        <ErrorMessage
                                                            name="symptoms"
                                                            component="div"
                                                            className="error-message"
                                                        />
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="submit-section mt-4">
                                                <button type="submit" className="btn btn-primary submit-btn">
                                                    Confirm and submit
                                                </button>
                                            </div>
                                        </Form>
                                    </Formik>


                                    {/* /Checkout Form */}
                                </div>
                            </div>
                        </div>
                        <div className="col-md-5 col-lg-4 theiaStickySidebar">
                            {/* Booking Summary */}
                            <div className="card booking-card">
                                <div className="card-header">
                                    <h4 className="card-title">Booking Summary</h4>
                                </div>
                                <div className="card-body">
                                    {/* Booking Doctor Info */}
                                    <div className="booking-doc-info">
                                        <a href="doctor-profile.html" className="booking-doc-img">
                                            <img src="assets/img/logo.png" alt="User Image" />
                                        </a>
                                        <div className="booking-info">
                                            <h4>
                                                <a href="doctor-profile.html">BirdLover Clinic</a>
                                            </h4>
                                            {/* <div class="rating">
													<i class="fas fa-star filled"></i>
													<i class="fas fa-star filled"></i>
													<i class="fas fa-star filled"></i>
													<i class="fas fa-star filled"></i>
													<i class="fas fa-star"></i>
													<span class="d-inline-block average-rating">35</span>
												</div> */}
                                            <div className="clinic-details">
                                                <p className="doc-location">
                                                    <i className="fas fa-map-marker-alt" /> Long Bien, Hanoi
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Booking Doctor Info */}
                                    <div className="booking-summary">
                                        <div className="booking-item-wrap">
                                            <ul className="booking-date">
                                                <li>
                                                    Date <span>16 Jun 2023</span>
                                                </li>
                                                <li>
                                                    Time <span>10:00 AM</span>
                                                </li>
                                            </ul>
                                            <ul className="booking-fee">
                                                {/* <li>Consulting Fee <span>$100</span></li> */}
                                                <li>
                                                    Booking Fee <span>$10</span>
                                                </li>
                                                {/* <li>Video Call <span>$50</span></li> */}
                                            </ul>
                                            {/* <div class="booking-total">
												<ul class="booking-total-list">
													<li>
														<span>Total</span>
														<span class="total-cost">$160</span>
													</li>
												</ul>
											</div> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* /Booking Summary */}
                        </div>
                    </div>
                </div>
            </div>
            {/* /Page Content */}

        </>
    )
}
