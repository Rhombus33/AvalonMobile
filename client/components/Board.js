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
      players: props.players, // {name: role}
      missions: props.missions, // [mission{}, mission{}...]
      currentMission: 0,
      victor: undefined 
    }
  }

  updateMissionsDetails(num) {
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
    return  <div>
              <div> 
                <Missions missions={this.state.missions}/>
              </div>
            </div>
  }
}

window.Board = Board;
              // <div>
              //   <GamePhase />
              // </div>

              // <div>
              //   <LearnRoles players={this.state.players}/>
              // </div>
