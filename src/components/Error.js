import React from 'react'
import { Link } from 'react-router-dom'

export default function Error() {
    return (
        <section
            className="bg-home d-flex bg-light align-items-center"
            style={{ background: 'url("../assets/images/bg/bg-lines-one.png") center' }}
        >
            <div className="container">
                <div className="row justify-content-center mb-5">
                    <div className="col-lg-7 col-md-10 text-center">
                        <img
                            src="./assets/img/svg/error.svg"
                            className="img-fluid"
                            alt=""
                        />
                        <h3 className="mb-4">Page Not Found</h3>
                        <p className="text-muted para-desc mx-auto">
                            Explore and learn more about everything from machine learning and
                            global payments to scaling your team.
                        </p>
                        <Link to="/" className="btn btn-primary mt-2">
                            Go To Home
                        </Link>
                    </div>
                    {/*end col*/}
                </div>
                {/*end row*/}
            </div>
            {/*end container*/}
        </section>

    )
}
