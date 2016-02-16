// Child view of App.js
// Passed function to set state for App.js

class Init extends React.Component {
  constructor (props) {
    super(props);
  
    this.state = {
      numOfPlayers: undefined,
      names: [],
      setInitialGameVariables: props.setInitialGameVariables
    } 
  }
  
  setNumOfPlayers(event) {
    event.preventDefault();
    var input = this.refs.numOfPlayers.value;
    
    this.setState({
      numOfPlayers: input
    })
  }

  addName(event) {
    event.preventDefault();
    var input = this.refs.playerName.value;

    this.setState({
      names: this.state.names.concat([input])
    })
  }

  // onSubmit(event){
  //   event.preventDefault();
  //   var input = React.findDOMNode(this.refs.num);
  //   var newItem = input.value;
  //   this.props.addEvent({ newItem });
  //   input.value = '';
  // }

  render(){
    var numOfPlayers = this.state.numOfPlayers;
    var names = this.state.names;

    if (!numOfPlayers) {
    return   (<div>
                <form onSubmit={this.setNumOfPlayers.bind(this)}> 
                  Enter number of adventuers: <br/>
                  <input ref="numOfPlayers" type="text"/>
                </form>
              </div>);
    } else if (names.length < numOfPlayers) {
    var namesEntered = names.map((name) => { return <li>{name}</li>; })
    return   <div>
                <form onSubmit={this.addName.bind(this)}> 
                  Enter names of {numOfPlayers - names.length} adventuers: <br/>
                  <input ref="playerName" type="text"/>
                </form>
                <ol>
                {namesEntered}
                </ol>
              </div>
    } else {
      var initVariables = generateBoard(names);
      return  <div>
                <button onClick={ (e) => { this.state.setInitialGameVariables(initVariables); } }>
                WELCOME TO AVALON
                </button>
              </div>
    }
  }
}

window.Init = Init;