import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddBird = () => {
    const [birdData, setBirdData] = useState({
        birdName: "",
        avatar: "",
        microchip: "",
        birdBreed: "",
        hatchDate: "",
        sex: 1,
        weight: "",
    });
    const nav = useNavigate();
    const handleSubmit = (event) => {
        event.preventDefault();

        const storedLoginData = localStorage.getItem("loginData");
        if (storedLoginData) {
            const loginData = JSON.parse(storedLoginData);

            // Validate avatar as a link
            const avatarLinkPattern = /^https?:\/\/\S+$/i;
            if (!avatarLinkPattern.test(birdData.avatar)) {
                alert("Avatar must be a valid link");
                return;
            }

            // Validate microchip length
            if (birdData.microchip.length < 6) {
                alert("Microchip must be at least 6 characters");
                return;
            }

            // Validate hatch date
            const currentDate = new Date();
            const selectedDate = new Date(birdData.hatchDate);
            if (selectedDate > currentDate) {
                alert("Hatch date must be before today");
                return;
            }

            // Validate weight
            const weightLimit = 20000;
            if (birdData.weight > weightLimit) {
                alert("Weight must be less than 20000 grams");
                return;
            }

            fetch(
                `https://64b0cbc3062767bc48252f14.mockapi.io/user/${loginData.user.sub}/bird`,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(birdData),
                }
            )
                .then((response) => response.json())
                .then(() => {
                    alert("Add Bird successfully");
                    nav("/customer/customer-bird-list");
                    // Clear the form fields
                    setBirdData({
                        birdName: "",
                        avatar: "",
                        microchip: "",
                        birdBreed: "",
                        hatchDate: "",
                        sex: 1,
                        weight: "",
                    });
                })
                .catch((error) => {
                    // Handle the error
                    console.error(error);
                });
        }
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setBirdData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    return (
        <div className="col-md-7 col-lg-8 col-xl-9">
            <div className="container">
                <div className="row">
                    <div className="col text-center mt-4">
                        <h1 className="display-6 text-primary">Assign Bird</h1>
                        <p className="lead mt-2">Assign Bird to us</p>
                    </div>
                </div>
            </div>
            <div className="d-flex justify-content-center">
                <div className="card w-100 active">
                    <div className="card-header">
                        <h3 className="text-center">Fill in this form to assign your bird</h3>
                    </div>
                    <div className="card-body">
                        <form onSubmit={handleSubmit}>
                            <div className="row form-row">
                                <div className="col-12 col-md-6">
                                    <div className="form-group">
                                        <label>Bird Name</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Richard"
                                            name="birdName"
                                            value={birdData.birdName}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="col-12 col-md-6">
                                    <div className="form-group">
                                        <label>Image</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Input image's link"
                                            name="avatar"
                                            value={birdData.avatar}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="col-12 col-md-6">
                                    <div className="form-group">
                                        <label>Microchip</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="ABC123"
                                            name="microchip"
                                            value={birdData.microchip}
                                            onChange={handleChange}
                                        />
                                    </div>
                                </div>
                                <div className="col-12 col-md-6">
                                    <div className="form-group">
                                        <label>Breed</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Cockatiel"
                                            name="birdBreed"
                                            value={birdData.birdBreed}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="col-12 col-md-6">
                                    <div className="form-group">
                                        <label>Hatching date</label>
                                        <input
                                            type="date"
                                            className="form-control"
                                            name="hatchDate"
                                            value={birdData.hatchDate}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="col-12 col-md-6">
                                    <div className="form-group">
                                        <label>Gender</label>
                                        <select
                                            className="form-control select"
                                            name="sex"
                                            value={birdData.sex}
                                            onChange={handleChange}
                                            required
                                        >
                                            <option value="1">Male</option>
                                            <option value="0">Female</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="col-12 col-md-6">
                                    <div className="form-group">
                                        <label>Weight</label>
                                        <div className="input-group mb-3">
                                            <input
                                                type="number"
                                                className="form-control"
                                                name="weight"
                                                value={birdData.weight}
                                                onChange={handleChange}
                                            />
                                            <span className="input-group-text">Gram</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="submit-section">
                                <button
                                    type="button"
                                    className="btn btn-search submit-btn"
                                    onClick={() => {
                                        // Handle back button click
                                    }}
                                >
                                    Back
                                </button>
                                <button type="submit" className="btn btn-primary submit-btn">
                                    Done
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default AddBird



