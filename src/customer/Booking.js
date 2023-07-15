import React from 'react';
import Breadcrumb from '../components/Breadcrumb';

export default function Booking() {
    return (
        <>
            <Breadcrumb />

            <div className="position-relative">
                <div className="shape overflow-hidden text-white">
                    <svg viewBox="0 0 2880 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z" fill="currentColor" />
                    </svg>
                </div>
            </div>

            <section className="section">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-10">
                            <div className="card border-0 shadow rounded overflow-hidden">
                                <ul className="nav nav-pills nav-justified flex-column flex-sm-row rounded-0 shadow overflow-hidden bg-light mb-0" id="pills-tab" role="tablist">
                                    <li className="nav-item">
                                        <a
                                            className="nav-link rounded-0 active"
                                            id="clinic-booking"
                                            data-bs-toggle="pill"
                                            href="#pills-clinic"
                                            role="tab"
                                            aria-controls="pills-clinic"
                                            aria-selected="false"
                                        >
                                            <div className="text-center pt-5 pb-4">
                                                <h2 className="title fw-bold text-white">Bird Clinic Appointment</h2>
                                                <p className="text-white">Book an appointment for your bird.</p>
                                            </div>
                                        </a>
                                    </li>
                                </ul>
                                <div className="tab-content p-4" id="pills-tabContent">
                                    <div className="tab-pane fade show active" id="pills-clinic" role="tabpanel" aria-labelledby="clinic-booking">
                                        <form>
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <div className="mb-3">
                                                        <label className="form-label">
                                                            Customer First Name <span className="text-danger">*</span>
                                                        </label>
                                                        <input
                                                            name="customerFirstName"
                                                            id="customerFirstName"
                                                            type="text"
                                                            className="form-control"
                                                            placeholder="Customer First Name:"
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="mb-3">
                                                        <label className="form-label">
                                                            Customer Last Name <span className="text-danger">*</span>
                                                        </label>
                                                        <input
                                                            name="customerLastName"
                                                            id="customerLastName"
                                                            type="text"
                                                            className="form-control"
                                                            placeholder="Customer Last Name:"
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="mb-3">
                                                        <label className="form-label">
                                                            Bird Species <span className="text-danger">*</span>
                                                        </label>
                                                        <select className="form-control birdSpecies">
                                                            <option value="parrot">Parrot</option>
                                                            <option value="canary">Canary</option>
                                                            <option value="budgerigar">Budgerigar</option>
                                                            <option value="cockatiel">Cockatiel</option>
                                                            <option value="lovebird">Lovebird</option>
                                                            <option value="finch">Finch</option>
                                                            <option value="cockatoo">Cockatoo</option>
                                                            <option value="macaw">Macaw</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="mb-3">
                                                        <label className="form-label">
                                                            Preferred Time Slot <span className="text-danger">*</span>
                                                        </label>
                                                        <select className="form-control timeSlot">
                                                            <option value="morning">Morning</option>
                                                            <option value="afternoon">Afternoon</option>
                                                            <option value="evening">Evening</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="mb-3">
                                                        <label className="form-label">
                                                            Preferred Doctor <span className="text-danger">*</span>
                                                        </label>
                                                        <select className="form-control doctor">
                                                            <option value="Dr. Avian Anderson">Dr. Avian Anderson</option>
                                                            <option value="Dr. Feather Foster">Dr. Feather Foster</option>
                                                            <option value="Dr. Wing Wallace">Dr. Wing Wallace</option>
                                                            <option value="Dr. Beak Beckett">Dr. Beak Beckett</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="mb-3">
                                                        <label className="form-label">
                                                            Customer Email <span className="text-danger">*</span>
                                                        </label>
                                                        <input
                                                            name="customerEmail"
                                                            id="customerEmail"
                                                            type="email"
                                                            className="form-control"
                                                            placeholder="Customer Email:"
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="mb-3">
                                                        <label className="form-label">
                                                            Customer Phone <span className="text-danger">*</span>
                                                        </label>
                                                        <input
                                                            name="customerPhone"
                                                            id="customerPhone"
                                                            type="tel"
                                                            className="form-control"
                                                            placeholder="Customer Phone:"
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-lg-12">
                                                    <div className="d-grid">
                                                        <button type="submit" className="btn btn-primary">
                                                            Book Appointment
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
