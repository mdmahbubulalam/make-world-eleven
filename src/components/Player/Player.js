import React from 'react';
import './Player.css';
import { Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

const Player = (props) => {
    const {name,image,country,club,position,salary,shortDescription} = props.player;
    const handleAddPlayer = props.handleAddPlayer;
    return (
        <div className="container"> 
            <div className="row mt-3 mb-3 border rounded">
                <div className="col-lg-4 mt-3 mb-3 d-flex align-self-center">
                    <div>
                        <img src={image} alt="" className="img-fluid img-thumbnail rounded"/>  
                    </div> 
                </div>
                <div className="col-lg-8 d-flex align-self-center">
                    <div className="mt-3 mb-3">
                        <h3 className="pb-2 text-info">{name}</h3>
                        <p className="text-white"><b>Country : </b>{country}</p>
                        <p className="text-white"><b>Club : </b>{club}</p>
                        <p className="text-white"><b>Position : </b>{position}</p>
                        <p className="text-white"><b>Salary : </b> &euro;{salary}</p>
                        <p className="text-white text-justify"><b>Short Description : </b> {shortDescription}</p>
                        <Button className="btn btn-success" onClick={ () => handleAddPlayer(props.player)} ><FontAwesomeIcon icon={faPlus}/> Add Player</Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Player;