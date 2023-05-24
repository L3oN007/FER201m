import React from "react";
export default function FilmsPresentation({ films }) {
    return (
        <div className="container" id='Film'>
            {films.map((films) => (
                <div className="column">
                    <div className="film-card" key={films.id}>
                        <div className="film-image">
                            <img src={films.image} alt="" />
                        </div>
                        <div className="film-details">
                            <h2 className="film-title">{films.name}</h2>
                            <p className="film-year">Year: {films.year}</p>
                            <p className="film-nation">Nation: {films.nation}</p>
                        </div>
                        <div className="watch-film-btn">
                            <button>Watch Film</button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}