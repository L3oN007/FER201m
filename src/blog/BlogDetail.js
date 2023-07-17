import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export default function BlogDetail() {
    const URL = 'https://64b0cbc3062767bc48252f14.mockapi.io/blog';
    const { id } = useParams();
    const [blog, setBlog] = useState({});

    useEffect(() => {
        const getBlog = async () => {
            try {
                const res = await axios.get(`${URL}/${id}`);
                if (res.status === 200) {
                    setBlog(res.data);
                }
            } catch (error) {
                console.error('Error fetching blog:', error);
                // Handle error scenario here (e.g., display error message)
            }
        };

        getBlog();
    }, [id, URL]);

    return (
        <div className="container py-5">
            <div className="row pt-5">
                <div className="col-lg-8">
                    <div className="d-flex flex-column text-left mb-4">
                        <h4 className="text-secondary mb-3">Blog Detail</h4>
                        <h1 className="mb-3">{blog.title}</h1>
                        <div className="mb-5">
                            <img
                                className="img-fluid w-100 mb-4"
                                src={blog.image}
                                alt={blog.title}
                            />
                            <div className="d-flex">
                                <small className="mr-3" ><i class="fa-solid fa-filter mr-1"></i>
                                    {blog.category}</small>
                                <small className="mr-3" ><i class="fa-solid fa-calendar-days mr-1"></i>
                                    {blog.createDate}</small>
                            </div>
                            <p>{blog.description}</p>
                            <p>{blog.content}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
