import React, { useState } from 'react';
import { ListOfPlayers } from './Share/ListOfPlayers';

export default function Players() {
  const [player, setPlayer] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  const handleClosePopup = () => {
    setIsOpen(false);
  };

  return (
    <div className="container">
      {ListOfPlayers.map((player) => (
        <div className="column" key={player.id}>
          <div className="card">
            <img src={player.img} alt="" />
            <h3>{player.name}</h3>
            <p className="title">{player.club}</p>
            <p>
              <button onClick={() => setPlayer(player)}>
                <a href="#popupContainer" className="openPopup" onClick={() => setIsOpen(true)}>
                  Detail
                </a>
              </button>
            </p>
          </div>
        </div>
      ))}
      {isOpen && (
        <div id="popupContainer" className="popup-container">
          <div className="popup-content">
            <div className="close-popup-row">
              <button id="closePopup" onClick={handleClosePopup}>
                &times;
              </button>
            </div>
            <div className="player-details">
              <img src={player.img} alt="Player Img" />
              <h2>{player.name}</h2>
              <p>{player.club}</p>
              <p>{player.info}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
