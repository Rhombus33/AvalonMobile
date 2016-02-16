// Child of App.js
// Passed roles and players from App.js
// Has state: {players/roles, missions, currentMission, gameOver} 
// and set state functions for each state

// Renders Missions on top 
// Renders MissionProposal || MissionPhase || Assasination || GameOver on bottom
// Renders MissionStats on side (advanced)

class Board extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      players: props.players,
      missions: props.missions,
      currentMission: 0,
      victor: undefined 
    }
  }

  updateMissions(num) {
    this.setState({
      missions: num
    })
  }

  setVictor(victor) {
    this.setState({
      victor: victor
    })
  }

  incrementMission() {
    this.setState({
      roles: roles
    })
  }

  render(){
    console.log(this.state.players);
    return  <div> 
              {this.state.missions} 
            </div>
  }
}

window.Board = Board;
