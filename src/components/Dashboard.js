import React, { useEffect, useState } from 'react';

const Dashboard = () => {
    const [user, setUser] = useState({});

    useEffect(() => {
        const storedLoginData = localStorage.getItem('loginData');
        if (storedLoginData) {
            const loginData = JSON.parse(storedLoginData);
            setUser(loginData.user);
        }
    }, []);

    return (
        <div>
            <h1>Dashboard</h1>
            <h2>{user.name}</h2>
            <img src={user.picture} alt="User" />
        </div>
    );
};

export default Dashboard;
