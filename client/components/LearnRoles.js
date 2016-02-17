// Child of Board.js
// Renders all missions

var LearnRoles = ({players}) => (
  <div>
    {players.map(player => 
        <Role name={player[0]} role={player[1]}/>
        )}
  </div>
)

window.LearnRoles = LearnRoles;