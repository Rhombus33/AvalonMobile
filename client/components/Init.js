// Child view of App.js
// Passed function to set state for App.js

class Init extends React.Component {
  constructor (props) {
    super(props);
  
    this.state = {
      numOfPlayers: undefined,
      nameInput: []
    } 
  }
  

  setNumOfPlayers(event) {
    event.preventDefault();
    console.log('event', event);
    var input = React.findDOMNode(this.refs.num);
    // var num = input.value.num;
    // this.setState({
    //   numOfPlayers: num
    // })
  }

  setNameInput(names) {
    // var names = input.join(',');
    this.setState({
      namesInput: names
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
    if (!this.state.numOfPlayers) {
    console.log(this.numOfPlayers);
    return   <div>
                <form onSubmit={this.setNumOfPlayers}> 
                  Enter number of adventuers: <br/>
                  <input ref="num" type="text"/>
                </form>
              </div>
    } else {
    return   <div>
                <form> 
                  Enter adventuers: <br/>
                  <input type="text"/>
                </form>
              </div>
    }
  }
}

window.Init = Init;