import React from 'react';
import './SelectedPlayer.css'

const SelectedPlayer = (props) => {
    const selectedPlayer = props.selectedPlayer;
    let totalBudget = 0;
    for (let i = 0; i < selectedPlayer.length; i++) {
        const player = selectedPlayer[i];
        totalBudget = totalBudget + player.salary; 
    } 
    return (
        <div>
            <div className="container mb-5">
                <div className="row">
                    <div className="col-lg-3"></div>
                    <div className="col-lg-6">
                        <h4 className="text-success">Total Selected Player : {selectedPlayer.length}</h4> 
                        <table className="table table-dark table-hover">
                            <tbody>
                                {
                                    selectedPlayer.map((player) => 
                                        <tr className="added-player-style" key={player.id}>
                                            <td>
                                                <img src={player.image} className="img-fluid rounded-circle" alt=""/>
                                            </td>
                                            <td>
                                                <h5 className="text-white pt-2">{player.name}</h5>
                                            </td>
                                            <td>
                                                <p className="text-white pt-2">&euro;{player.salary}</p>
                                            </td>
                                        </tr>
                                    )                                  
                                }
                            </tbody>
                        </table>
                        <h4 className="text-success">Total Budget : &euro;{totalBudget}</h4> 
                    </div>
                    <div className="col-lg-3"></div>
                </div>
            </div>  
        </div>
    );
};

export default SelectedPlayer;