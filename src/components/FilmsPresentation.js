import React, { useState } from "react";

export default function FilmsPresentation({ films }) {
    const [selectedFilm, setSelectedFilm] = useState(null);

    const handleOpenPopup = (film) => {
        setSelectedFilm(film);
    };

    const handleClosePopup = () => {
        setSelectedFilm(null);
    };

    return (
        <div className="container" id="Film">
            {films.map((film) => (
                <div className="column" key={film.id}>
                    <div className="film-card">
                        <div className="film-image">
                            <img src={film.image} alt="" />
                        </div>
                        <div className="film-details">
                            <h2 className="film-title">{film.name}</h2>
                            <p className="film-year">Year: {film.year}</p>
                            <p className="film-nation">Nation: {film.nation}</p>
                        </div>
                        <div className="watch-film-btn">
                            <button onClick={() => handleOpenPopup(film)}>Detail</button>
                        </div>
                    </div>
                </div>
            ))}

            {selectedFilm && (
                <div id="popupContainer" className="popup-container">
                    <div className="popup-content">
                        <div className="close-popup-row">
                            <button id="closePopup" onClick={handleClosePopup}>
                                &times;
                            </button>
                        </div>
                        <div className="film-details-popup">
                            <div className="film-image">
                                <img src={selectedFilm.image} alt="" />
                            </div>
                            <div className="film-info">
                                <h2>{selectedFilm.name}</h2>
                                <p>
                                    <span className="info-tag">Year:</span> {selectedFilm.year}
                                </p>
                                <p>
                                    <span className="info-tag">Nation:</span>{" "}
                                    {selectedFilm.nation}
                                </p>
                                <p>
                                    <span className="info-tag">Director:</span>{" "}
                                    {selectedFilm.director}
                                </p>
                                <p>
                                    <span className="info-tag">Description:</span>{" "}
                                    {selectedFilm.description}
                                </p>
                            </div>
                            <div className="youtube-video">
                                <iframe
                                    title="YouTube Video"

                                    src={selectedFilm.youtubeURL}
                                    frameBorder="0"
                                    allow="autoplay; encrypted-media"
                                    allowFullScreen
                                ></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
