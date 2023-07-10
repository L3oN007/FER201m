import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Breadcrumb() {
    const location = useLocation();
    const pathnames = location.pathname
        .split('/')
        .filter((path) => path !== '')
        .map((path) => path.replace(/-/g, ' ')); // Remove "-" character from path

    const capitalizedBreadcrumbTitle =
        pathnames.length > 0 ? pathnames[pathnames.length - 1].charAt(0).toUpperCase() + pathnames[pathnames.length - 1].slice(1) : '';

    return (
        <div className="breadcrumb-bar">
            <div className="container-fluid">
                <div className="row align-items-center">
                    <div className="col-md-12 col-12">
                        <nav aria-label="breadcrumb" className="page-breadcrumb">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item">
                                    <Link to="/">Home</Link>
                                </li>
                                {pathnames.map((pathname, index) => {
                                    const capitalizedPathname = pathname.charAt(0).toUpperCase() + pathname.slice(1);

                                    return (
                                        <li className="breadcrumb-item active" key={index}>
                                            {index === pathnames.length - 1 ? (
                                                <span>{capitalizedPathname}</span>
                                            ) : (
                                                <Link to={`/${pathnames.slice(0, index + 1).join('/')}`}>{capitalizedPathname}</Link>
                                            )}
                                        </li>
                                    );
                                })}
                            </ol>
                        </nav>
                        <h2 className="breadcrumb-title">{capitalizedBreadcrumbTitle}</h2>
                    </div>
                </div>
            </div>
        </div>
    );
}
