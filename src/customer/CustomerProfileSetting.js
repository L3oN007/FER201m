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
    };

    return (
        <div className="col-md-7 col-lg-8 col-xl-9">
            <div className="card">
                <div className="card-body">
                    {/* Profile Settings Form */}
                    <form onSubmit={handleSubmit}>
                        <div className="row form-row">
                            <div className="col-12 col-md-6">
                                <div className="form-group">
                                    <label>First Name</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Richard"
                                        value={firstName}
                                        onChange={(e) => setFirstName(e.target.value)}
                                    />
                                </div>
                            </div>
                            <div className="col-12 col-md-6">
                                <div className="form-group">
                                    <label>Last Name</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Wilson"
                                        value={lastName}
                                        onChange={(e) => setLastName(e.target.value)}
                                    />
                                </div>
                            </div>
                            <div className="col-12 col-md-6">
                                <div className="form-group">
                                    <label>Date of Birth</label>
                                    <div className="cal-icon">
                                        <input
                                            type="date"
                                            className="form-control"
                                            value={dateOfBirth}
                                            onChange={(e) => setDateOfBirth(e.target.value)}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-6">
                                <div className="form-group">
                                    <label>Gender</label>
                                    <select
                                        className="form-control select"
                                        value={gender}
                                        onChange={(e) => setGender(e.target.value)}
                                    >
                                        <option>Male</option>
                                        <option>Female</option>
                                        <option>Others</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-12 col-md-6">
                                <div className="form-group">
                                    <label>Email</label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        placeholder="email@example.com"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                </div>
                            </div>
                            <div className="col-12 col-md-6">
                                <div className="form-group">
                                    <label>Mobile</label>
                                    <input
                                        type="text"
                                        placeholder="+1 202-555-0125"
                                        className="form-control"
                                        value={phone}
                                        onChange={(e) => setPhone(e.target.value)}
                                    />
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="form-group">
                                    <label>Address</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="123 Pham Van Hai"
                                        value={address}
                                        onChange={(e) => setAddress(e.target.value)}
                                    />
                                </div>
                            </div>
                            <div className="col-12 col-md-6">
                                <div className="form-group">
                                    <label>District</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Tan Binh"
                                        value={district}
                                        onChange={(e) => setDistrict(e.target.value)}
                                    />
                                </div>
                            </div>
                            <div className="col-12 col-md-6">
                                <div className="form-group">
                                    <label>City</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Ho Chi Minh"
                                        value={city}
                                        onChange={(e) => setCity(e.target.value)}
                                    />
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
