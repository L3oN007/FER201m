import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const URL = 'https://64b0cbc3062767bc48252f14.mockapi.io/';

export default function BlogList() {
  const [blogs, setBlogs] = useState([]);

  const getListBlog = async () => {
    try {
      const res = await axios.get(`${URL}/blog`);
      if (res.status === 200) {
        setBlogs(res.data);
      }
    } catch (error) {
      console.error('Error retrieving blog list:', error);
    }
  };

  useEffect(() => {
    getListBlog();
  }, []);

  return (
    <div className="container pt-5">
      <div className="d-flex flex-column text-center mb-5">
        <h4 className="text-secondary mb-3">Bird Blog</h4>
        <h1 className="display-4 m-0">
          <span className="text-primary">Updates</span> From Blog
        </h1>
      </div>
      <div className="row pb-3">
        {blogs &&
          blogs.map((blog) => (
            <div className="col-lg-4 mb-4" key={blog.id}>
              <div className="card border-0 mb-2">
                <img src={blog.image} alt={blog.title} />
                <div className="card-body bg-light p-4">
                  <h3 className="card-title text-truncate">{blog.title}</h3>
                  <h5>{blog.category}</h5>
                  <h5>{blog.createDate}</h5>
                  <p>{blog.description}</p>
                  <Link to={`/blog-detail/${blog.id}`}>
                    <button className="text-uppercase font-weight-bold">
                      Read more
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

