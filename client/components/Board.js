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
      Players: props.players,
      missions: props.missions,
      currentMission: 0,
      victor: undefined 
    }
  }

  set(num) {
    this.setState({
      numOfPlayers: num
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
    if (!this.state.roles) {
      return <div>
                <Init setPlayers={this.setNumOfPlayers.bind(this)}
                  setNames={this.setNames.bind(this)}
                  setRoles={this.setRoles.bind(this)}/>
              </div>
    } else { 
      var players = generatePlayers(this.state.names, this.state.roles); //Returns object with name:role pairs
      return <div>
                <Board players={players}/>
              </div>
    } 
  }
}