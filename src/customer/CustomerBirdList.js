import React, { useEffect, useState } from 'react'

export default function CustomerBirdList() {
    const [birds, setBirds] = useState([]);
    const [user, setUser] = useState({});
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const storedLoginData = localStorage.getItem('loginData');
        if (storedLoginData) {
            const loginData = JSON.parse(storedLoginData);
            setUser(loginData.user);

            fetch(`https://64b0cbc3062767bc48252f14.mockapi.io/user/${loginData.user.sub}/bird`)
                .then(response => response.json())
                .then(data => setBirds(data))
                .catch(error => console.error(error));
        }
    }, []);
   


    return (
        <div className="col-md-7 col-lg-8 col-xl-9">
            <div className="card">
                <div className="card-body pt-0">
                    {/* Tab Menu */}
                    <nav className="user-tabs mb-4">
                        <ul className="nav nav-tabs nav-tabs-bottom nav-justified">
                            <li className="nav-item">
                                <a
                                    className="nav-link active"
                                    href="#pat_appointments"
                                    data-toggle="tab"
                                >
                                    My Birds
                                </a>
                            </li>
                        </ul>
                    </nav>
                    {/* /Tab Menu */}
                    {/* Tab Content */}
                    <div className="tab-content pt-0">
                        {/* Appointment Tab */}
                        <div id="pat_appointments" className="tab-pane fade show active">
                            <div className="card card-table mb-0">
                                <div className="card-body">
                                    <div className="table-responsive">
                                        <table className="table table-hover table-center mb-0">
                                            <thead>
                                                <tr>
                                                    <th>Bird</th>
                                                    <th>Breed</th>
                                                    <th>Hatch Day</th>
                                                    <th>Sex</th>
                                                    <th>Weight</th>
                                                    <th>Micro Chip</th>
                                                    <th />
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {/* {birds.map(bird => (
                                                    <>
                                                        <tr>
                                                            <td>
                                                                <h2 className="table-avatar">
                                                                    <a className="avatar avatar-sm mr-2">
                                                                        <img className="avatar-img rounded-circle"
                                                                            src={bird.avatar}
                                                                            alt={bird.name} />
                                                                    </a>
                                                                    <a >{bird.name}</a>
                                                                </h2>
                                                            </td>
                                                            <td>{bird.breed}</td>
                                                            <td>{bird.hatchDate}</td>
                                                            <td>{bird.sex}</td>
                                                            <td>{bird.weight}</td>
                                                            <td>{bird.chip}</td>
                                                            <td className="text-right">
                                                                <div className="table-action">
                                                                    <a
                                                                        href="bird-details.html"
                                                                        className="btn btn-sm bg-info-light"
                                                                    >
                                                                        {" "}
                                                                        <i className="far fa-eye" /> View{" "}
                                                                    </a>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                    </>
                                                ))} */}

                                                <tr>
                                                    <td>
                                                        <h2 className="table-avatar">
                                                            <a
                                                                href="doctor-profile.html"
                                                                className="avatar avatar-sm mr-2"
                                                            >
                                                                <img
                                                                    className="avatar-img rounded-circle"
                                                                    src="../assets/img/bird/bird-2.webp"
                                                                    alt="User Image"
                                                                />
                                                            </a>
                                                            <a href="doctor-profile.html">Lucifer</a>
                                                        </h2>
                                                    </td>
                                                    <td>Cuckoo</td>
                                                    <td>7 Nov 2023</td>
                                                    <td>Female</td>
                                                    <td>1.5kg</td>
                                                    <td>
                                                        <span className="badge badge-pill bg-success-light">
                                                            Yes
                                                        </span>
                                                    </td>
                                                    <td className="text-right">
                                                        <div className="table-action">
                                                            <a
                                                                href="bird-details.html"
                                                                className="btn btn-sm bg-info-light"
                                                            >
                                                                {" "}
                                                                <i className="far fa-eye" /> View{" "}
                                                            </a>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <h2 className="table-avatar">
                                                            <a
                                                                href="doctor-profile.html"
                                                                className="avatar avatar-sm mr-2"
                                                            >
                                                                <img
                                                                    className="avatar-img rounded-circle"
                                                                    src="../assets/img/bird/bird-3.jpg"
                                                                    alt="User Image"
                                                                />
                                                            </a>
                                                            <a href="doctor-profile.html">Luffy</a>
                                                        </h2>
                                                    </td>
                                                    <td>Red-whiskered</td>
                                                    <td>4 Jun 2023</td>
                                                    <td>Female</td>
                                                    <td>2.2kg</td>
                                                    <td>
                                                        <span className="badge badge-pill bg-success-light">
                                                            Yes
                                                        </span>
                                                    </td>
                                                    <td className="text-right">
                                                        <div className="table-action">
                                                            <a
                                                                href="bird-details.html"
                                                                className="btn btn-sm bg-info-light"
                                                            >
                                                                {" "}
                                                                <i className="far fa-eye" /> View{" "}
                                                            </a>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <h2 className="table-avatar">
                                                            <a
                                                                href="doctor-profile.html"
                                                                className="avatar avatar-sm mr-2"
                                                            >
                                                                <img
                                                                    className="avatar-img rounded-circle"
                                                                    src="../assets/img/bird/bird-4.jpg"
                                                                    alt="User Image"
                                                                />
                                                            </a>
                                                            <a href="doctor-profile.html">Jacky</a>
                                                        </h2>
                                                    </td>
                                                    <td>Parrot</td>
                                                    <td>1 Nov 2022</td>
                                                    <td>Male</td>
                                                    <td>3kg</td>
                                                    <td>
                                                        <span className="badge badge-pill bg-success-light">
                                                            Yes
                                                        </span>
                                                    </td>
                                                    <td className="text-right">
                                                        <div className="table-action">
                                                            <a
                                                                href="bird-details.html"
                                                                className="btn btn-sm bg-info-light"
                                                            >
                                                                {" "}
                                                                <i className="far fa-eye" /> View{" "}
                                                            </a>
                                                        </div>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* /Appointment Tab */}
                    </div>
                    <button className="add-more" onClick={() => setIsOpen(true)}>Add more+</button>


                    {isOpen && <div className='modal-show' onClick={() => setIsOpen(false)}>
                        <div class="d-flex justify-content-center">
                            <div class="card w-50 active">
                                <div class="card-header">
                                    <h3 class="text-center">Fill in this form to assign your bird</h3>
                                </div>
                                <div class="card-body">
                                    <form>
                                        <div class="row form-row">
                                            <div class="col-12 col-md-12">
                                                <div class="form-group">
                                                    <div class="change-avatar">
                                                        <div class="profile-img">
                                                            <img src="assets/img/bird-avatar.jpg" alt="Bird Image" />
                                                        </div>
                                                        <div class="upload-img">
                                                            <div class="change-photo-btn">
                                                                <span><i class="fa fa-upload"></i> Upload Photo</span>
                                                                <input type="file" class="upload" />
                                                            </div>
                                                            <small class="form-text text-muted">Allowed JPG, GIF or
                                                                PNG. Max size of 2MB</small>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-12 col-md-6">
                                                <div class="form-group">
                                                    <label>Bird Name</label>
                                                    <input type="text" class="form-control"
                                                        placeholder="Richard" />
                                                </div>
                                            </div>
                                            <div class="col-12 col-md-6">
                                                <div class="form-group">
                                                    <label>Microchip</label>
                                                    <select class="form-control select">
                                                        <option>Yes</option>
                                                        <option>No</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div class="col-12 col-md-6">
                                                <div class="form-group">
                                                    <label>Breed</label>
                                                    <input type="text" class="form-control" placeholder />
                                                </div>
                                            </div>
                                            <div class="col-12 col-md-6">
                                                <div class="form-group">
                                                    <label>Hatching date</label>
                                                    <div class="cal-icon">
                                                        <input type="date" class="form-control" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-12 col-md-6">
                                                <div class="form-group">
                                                    <label>Gender</label>
                                                    <select class="form-control select">
                                                        <option>Male</option>
                                                        <option>Female</option>
                                                        <option>Others</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div class="col-12 col-md-6">
                                                <div class="form-group">
                                                    <label>Weight</label>
                                                    <div class="input-group mb-3">
                                                        <input type="text" class="form-control" />
                                                        <span class="input-group-text">Gram</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-12 col-md-6">
                                                <div class="form-group">
                                                    <label>Band</label>
                                                    <input type="text" placeholder class="form-control" />
                                                </div>
                                            </div>
                                            <div class="col-12 col-md-6">
                                                <div class="form-group">
                                                    <label>Sex method</label>
                                                    <input type="text" placeholder class="form-control" />
                                                </div>
                                            </div>

                                            <div class="col-12 col-md-6">
                                                <div class="form-group">
                                                    <label>Feather color</label>
                                                    <input type="text" class="form-control" placeholder />
                                                </div>
                                            </div>
                                        </div>
                                        <div class="submit-section">
                                            <button type="submit" class="btn btn-search submit-btn">Back</button>
                                            <button type="submit" class="btn btn-primary submit-btn">Done</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>}
                    
                    {/* Tab Content */}
                </div>
            </div>
        </div>

    )
}
