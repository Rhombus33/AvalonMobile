// Parent view
// Holds state: {#ofPlayers, roles & players} 
// Has set state for all states

class App extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      numOfPlayers: undefined,
      names: undefined,
      roles: undefined
    }
  }

  setNumOfPlayers(num) {
    this.setState({
      numOfPlayers: num
    })
  }

  setNames(names) {
    // var names = input.join(',');
    this.setState({
      names: names
    })
  }

  // setRoles(videoList) {
  //   this.setState({
  //     roles: roles
  //   })
  // }

  render(){
    if (!this.state.numOfPlayers) {
      console.log('should be in here');
      return <div>
                <Init setPlayers={this.setNumOfPlayers.bind(this)}
                  setNames={this.setNames.bind(this)}/>
              </div>
    } else { 
      var players = generatePlayers(this.state.names); //Returns object with name:role pairs
      return <div>
                <Board players={players}/>
              </div>
    } 
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
