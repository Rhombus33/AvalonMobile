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
      victor: undefined,
      rolesLeft: props.players.length 
    }
  }

  finishRolePhase() {
    this.setState({
      learnRoles: this.rolesLeft - 1
    })
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

  render() {
    if (this.rolesLeft !== 0) {
      return  <div>
                <div id="missions"> 
                  <Missions missions={this.state.missions}/>
                </div>
                <div>
                  <LearnRoles players={this.state.players} finishRole={this.finishRolePhase.bind(this)}/>
                </div>
              </div>
    } else {
      return  <div>
          <div id="missions"> 
            <Missions missions={this.state.missions}/>
          </div>
          <div>
            <GamePhase players={this.state.players} finishRole={this.finishRolePhase.bind(this)}/>
          </div>
        </div>
    }
  }
}

window.Board = Board;