// Parent view
// Holds state: {#ofPlayers, roles & players} 
// Has set state for all states

class App extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      players: undefined,
      missions: undefined
    }
  }

  setInitialGameVariables(gameVariables) {
    
    this.setState({
      players: gameVariables.players,
      missions: gameVariables.missions 
    })
  }

  render(){
    if (!this.state.players) {
      return (<div>
                <Init setInitialGameVariables={this.setInitialGameVariables.bind(this)} />
              </div>);
    } else { 
      return  <div>
                <Board players={this.state.players} missions={this.state.missions}/>
              </div>
    } 
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
