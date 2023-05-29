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
                                <p>Year: {selectedFilm.year}</p>
                                <p>Nation: {selectedFilm.nation}</p>
                                <p>Director: {selectedFilm.director}</p>
                                <p>Description: {selectedFilm.description}</p>
                            </div>
                        </div>
                    </div>
                </div>

            )}
        </div>
    );
}
