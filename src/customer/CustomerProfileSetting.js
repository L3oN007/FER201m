import React, { useEffect, useState } from 'react';
import { getUserById, updateUser } from '../api/UserAPI';

export default function CustomerProfileSetting() {
    const [user, setUser] = useState({});
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [dateOfBirth, setDateOfBirth] = useState('');
    const [gender, setGender] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');
    const [district, setDistrict] = useState('');
    const [city, setCity] = useState('');
    const [isFormValidated, setIsFormValidated] = useState(false);

    useEffect(() => {
        const storedLoginData = localStorage.getItem('loginData');
        if (storedLoginData) {
            const loginData = JSON.parse(storedLoginData);
            const userId = loginData.user.sub;
            fetchUserData(userId);
        }
    }, []);

    const fetchUserData = async (userId) => {
        try {
            const userData = await getUserById(userId);
            setUser(userData);
            setFirstName(userData.firstName);
            setLastName(userData.lastName);
            setDateOfBirth(userData.dateOfBirth);
            setGender(userData.gender);
            setEmail(userData.email);
            setPhone(userData.phone);
            setAddress(userData.address);
            setDistrict(userData.district);
            setCity(userData.city);
        } catch (error) {
            console.error('Error fetching user data:', error);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = e.currentTarget;
        if (form.checkValidity()) {
            const userData = {
                firstName,
                lastName,
                dateOfBirth,
                gender,
                email,
                phone,
                address,
                district,
                city,
            };
            try {
                await updateUser(user.userId, userData);
                // Handle successful update
                console.log('User updated successfully');
            } catch (error) {
                // Handle error
                console.error('Error updating user:', error);
            }
        } else {
            e.stopPropagation();
        }
        setIsFormValidated(true);
    };

    return (
        <div className="col-md-7 col-lg-8 col-xl-9">
            <div className="card">
                <div className="card-body">
                    {/* Profile Settings Form */}
                    <form
                        className={isFormValidated ? 'needs-validation was-validated' : 'needs-validation'}
                        onSubmit={handleSubmit}
                        noValidate
                    >
                        <div className="row form-row">
                            <div className="col-12 col-md-6">
                                <div className="form-group">
                                    <label htmlFor="firstName">First Name</label>
                                    <input
                                        type="text"
                                        className={`form-control ${isFormValidated && !firstName && 'is-invalid'}`}
                                        id="firstName"
                                        placeholder="First Name"
                                        value={firstName}
                                        onChange={(e) => setFirstName(e.target.value)}
                                        required
                                    />
                                    {isFormValidated && !firstName && (
                                        <div className="invalid-feedback">Please provide a first name.</div>
                                    )}
                                </div>
                            </div>
                            <div className="col-12 col-md-6">
                                <div className="form-group">
                                    <label htmlFor="lastName">Last Name</label>
                                    <input
                                        type="text"
                                        className={`form-control ${isFormValidated && !lastName && 'is-invalid'}`}
                                        id="lastName"
                                        placeholder="Last Name"
                                        value={lastName}
                                        onChange={(e) => setLastName(e.target.value)}
                                        required
                                    />
                                    {isFormValidated && !lastName && (
                                        <div className="invalid-feedback">Please provide a last name.</div>
                                    )}
                                </div>
                            </div>
                            <div className="col-12 col-md-6">
                                <div className="form-group">
                                    <label htmlFor="dateOfBirth">Date of Birth</label>
                                    <div className="">
                                        <input
                                            type="date"
                                            className={`form-control ${isFormValidated && !dateOfBirth && 'is-invalid'}`}
                                            id="dateOfBirth"
                                            value={dateOfBirth}
                                            onChange={(e) => setDateOfBirth(e.target.value)}
                                            required
                                        />
                                        {isFormValidated && !dateOfBirth && (
                                            <div className="invalid-feedback">Please provide a date of birth.</div>
                                        )}
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-6">
                                <div className={`form-group ${isFormValidated && !gender && 'has-validation'}`}>
                                    <label htmlFor="gender">Gender</label>
                                    <div className="">
                                        <select
                                            className={`form-control ${isFormValidated && !gender && 'is-invalid'}`}
                                            id="gender"
                                            value={gender}
                                            onChange={(e) => setGender(e.target.value)}
                                            required
                                        >
                                            <option value="">Choose...</option>
                                            <option>Male</option>
                                            <option>Female</option>
                                            <option>Others</option>
                                        </select>
                                        {isFormValidated && !gender && (
                                            <div className="invalid-feedback">Please select a gender.</div>
                                        )}
                                    </div>
                                </div>
                            </div>


                            <div className="col-12 col-md-6">
                                <div className="form-group">
                                    <label htmlFor="email">Email</label>
                                    <input
                                        type="email"
                                        className={`form-control ${isFormValidated && !email && 'is-invalid'}`}
                                        id="email"
                                        placeholder="email@example.com"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        required
                                    />
                                    {isFormValidated && !email && (
                                        <div className="invalid-feedback">Please provide an email.</div>
                                    )}
                                </div>
                            </div>
                            <div className="col-12 col-md-6">
                                <div className="form-group">
                                    <label htmlFor="phone">Mobile</label>
                                    <input
                                        type="text"
                                        className={`form-control ${isFormValidated && !phone && 'is-invalid'}`}
                                        id="phone"
                                        placeholder="(+84) 123-456-789"
                                        value={phone}
                                        onChange={(e) => setPhone(e.target.value)}
                                        required
                                    />
                                    {isFormValidated && !phone && (
                                        <div className="invalid-feedback">Please provide a phone number.</div>
                                    )}
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="form-group">
                                    <label htmlFor="address">Address</label>
                                    <input
                                        type="text"
                                        className={`form-control ${isFormValidated && !address && 'is-invalid'}`}
                                        id="address"
                                        placeholder="Your Address"
                                        value={address}
                                        onChange={(e) => setAddress(e.target.value)}
                                        required
                                    />
                                    {isFormValidated && !address && (
                                        <div className="invalid-feedback">Please provide an address.</div>
                                    )}
                                </div>
                            </div>
                            <div className="col-12 col-md-6">
                                <div className="form-group">
                                    <label htmlFor="district">District</label>
                                    <input
                                        type="text"
                                        className={`form-control ${isFormValidated && !district && 'is-invalid'}`}
                                        id="district"
                                        placeholder="Your District"
                                        value={district}
                                        onChange={(e) => setDistrict(e.target.value)}
                                        required
                                    />
                                    {isFormValidated && !district && (
                                        <div className="invalid-feedback">Please provide a district.</div>
                                    )}
                                </div>
                            </div>
                            <div className="col-12 col-md-6">
                                <div className="form-group">
                                    <label htmlFor="city">City</label>
                                    <input
                                        type="text"
                                        className={`form-control ${isFormValidated && !city && 'is-invalid'}`}
                                        id="city"
                                        placeholder="Your City"
                                        value={city}
                                        onChange={(e) => setCity(e.target.value)}
                                        required
                                    />
                                    {isFormValidated && !city && (
                                        <div className="invalid-feedback">Please provide a city.</div>
                                    )}
                                </div>
                            </div>
                        </div>
                        <div className="submit-section">
                            <button type="submit" className="btn btn-primary submit-btn">
                                Update
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
