import React from 'react';

export default function CustomerProfileSetting() {
    return (
        <div className="col-md-7 col-lg-8 col-xl-9">
            <div className="card">
                <div className="card-body">
                    {/* Profile Settings Form */}
                    <form>
                        <div className="row form-row">
                            <div className="col-12 col-md-12">
                                <div className="form-group">
                                    <div className="change-avatar">
                                        <div className="profile-img">
                                            <img
                                                src="../assets/img/patients/patient.jpg"
                                                alt="User Image"
                                            />
                                        </div>
                                        <div className="upload-img">
                                            <div className="change-photo-btn">
                                                <span>
                                                    <i className="fa fa-upload" /> Upload Photo
                                                </span>
                                                <input type="file" className="upload" />
                                            </div>
                                            <small className="form-text text-muted">
                                                Allowed JPG, GIF or PNG. Max size of 2MB
                                            </small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-6">
                                <div className="form-group">
                                    <label>First Name</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        defaultValue="Richard"
                                    />
                                </div>
                            </div>
                            <div className="col-12 col-md-6">
                                <div className="form-group">
                                    <label>Last Name</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        defaultValue="Wilson"
                                    />
                                </div>
                            </div>
                            <div className="col-12 col-md-6">
                                <div className="form-group">
                                    <label>Date of Birth</label>
                                    <div className="cal-icon">
                                        <input
                                            type="text"
                                            className="form-control datetimepicker"
                                            defaultValue="24-07-1983"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-6">
                                <div className="form-group">
                                    <label>Email ID</label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        defaultValue="richard@example.com"
                                    />
                                </div>
                            </div>
                            <div className="col-12 col-md-6">
                                <div className="form-group">
                                    <label>Mobile</label>
                                    <input
                                        type="text"
                                        defaultValue="+1 202-555-0125"
                                        className="form-control"
                                    />
                                </div>
                            </div>
                            <div className="col-12 col-md-6">
                                <div className="form-group">
                                    <label>Address</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        defaultValue="806 Twin Willow Lane"
                                    />
                                </div>
                            </div>
                            <div className="col-12 col-md-6">
                                <div className="form-group">
                                    <label>City</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        defaultValue="Old Forge"
                                    />
                                </div>
                            </div>
                            <div className="col-12 col-md-6">
                                <div className="form-group">
                                    <label>State</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        defaultValue="Newyork"
                                    />
                                </div>
                            </div>
                            <div className="col-12 col-md-6">
                                <div className="form-group">
                                    <label>Zip Code</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        defaultValue={13420}
                                    />
                                </div>
                            </div>
                            <div className="col-12 col-md-6">
                                <div className="form-group">
                                    <label>Country</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        defaultValue="United States"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="submit-section">
                            <button type="submit" className="btn btn-primary submit-btn">
                                Save Changes
                            </button>
                        </div>
                    </form>
                    {/* /Profile Settings Form */}
                </div>
            </div>
        </div>


    )
}
