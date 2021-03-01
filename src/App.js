import logo from './logo.svg';
import './App.css';
import playerData from './playerData/playerData.json'
import { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Player from './components/Player/Player';
import SelectedPlayer from './components/SelectedPlayer/SelectedPlayer';


function App() {
  const [players,setPlayers] = useState([]);
  const [selectedPlayer, setSelectedPlayer] = useState([]);
  useEffect(()=>{
    setPlayers(playerData);
  },[])

  const handleAddPlayer = (player) =>{

    if (selectedPlayer.indexOf(player)==-1) {
      const newSelectedPlayer = [...selectedPlayer, player];
      setSelectedPlayer(newSelectedPlayer);
    }
    
  } 
  return (
    <div className="app"> 
      <div className="text-center mt-3">
        <img src="https://i.ibb.co/PrQ0NZ4/Logo-Makr-6-Yekzl.png"  alt=""/>
      </div>
      <div className="text-center mt-3">
        <SelectedPlayer selectedPlayer={selectedPlayer} ></SelectedPlayer>
      </div>
      {
        players.map((player)=><Player player={player} handleAddPlayer={handleAddPlayer} key={player.id} ></Player>)
      }
    </div>
  );
}

export default App;
