// Child of Board.js
// Renders all missions

var LearnRoles = ({players}) => (
  <div>
    {players.each(player => 
        <Role role={player}/>
        )}
  </div>
)

window.LearnRoles = LearnRoles;