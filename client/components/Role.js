class Role extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      name: props.name,
      role: props.role,
      clicked: 0 
    }
  }

  handleClick() {
  	this.setState({
  	  clicked: this.state.clicked + 1
  	})
  }

  render(props) {
    if (this.state.clicked === 0) {
      return  <div>
      			<button className="learnRole" onClick={this.handleClick.bind(this)}>
                  {this.state.name}
                </button>
  	          </div>
  	} else if (this.state.clicked === 1) {
  	  return  <div>
      			<button className="learnRole" onClick={this.handleClick.bind(this)}>
                  {this.state.role}
                </button>
  	          </div>  
  	}
  	else {
  	  return  <div>

  	          </div>   
  	}
  }
}

window.Role = Role;