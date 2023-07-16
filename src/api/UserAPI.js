import axios from 'axios';

const API_URL = 'https://64b0cbc3062767bc48252f14.mockapi.io/user';


export const checkAuthorize = async (userId) => {
    try {
        const users = await getUsers();
        const storedLoginData = localStorage.getItem('loginData');
        if (storedLoginData) {
            const loginData = JSON.parse(storedLoginData);
            const storedUserId = loginData.user.sub;
            if (storedUserId === userId) {
                const user = users.find((user) => user.userId === userId);
                if (user) {
                    return user.role;
                }
            }
        }
        return "Unauthorized";
    } catch (error) {
        console.error("Error retrieving users:", error);
        throw error;
    }
};


// GET all users
export const getUsers = async () => {
    try {
        const response = await axios.get(API_URL);
        return response.data;
    } catch (error) {
        console.error('Error retrieving users:', error);
        throw error;
    }
};

// GET a single user by ID
export const getUserById = async (userId) => {
    try {
        const response = await axios.get(`${API_URL}/${userId}`);
        return response.data;
    } catch (error) {
        console.error(`Error retrieving user with ID ${userId}:`, error);
        throw error;
    }
};

// PUT (update) a user
export const updateUser = async (userId, userData) => {
    try {
        const response = await axios.put(`${API_URL}/${userId}`, userData);
        return response.data;
    } catch (error) {
        console.error(`Error updating user with ID ${userId}:`, error);
        throw error;
    }
};

// DELETE a user
export const deleteUser = async (userId) => {
    try {
        const response = await axios.delete(`${API_URL}/${userId}`);
        return response.data;
    } catch (error) {
        console.error(`Error deleting user with ID ${userId}:`, error);
        throw error;
    }
};

// POST (create) a new user
export const createUser = async (userData) => {
    try {
        const response = await axios.post(API_URL, userData);
        return response.data;
    } catch (error) {
        console.error('Error creating user:', error);
        throw error;
    }
};

// GET user role by ID
export const getUserRole = async (userId) => {
    try {
        const response = await axios.get(`${API_URL}/${userId}`);
        const user = response.data;
        return user.role;
    } catch (error) {
        console.error(`Error retrieving role for user with ID ${userId}:`, error);
        throw error;
    }
};
