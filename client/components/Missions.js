// Child of Board.js
// Renders all missions

var Missions = ({missions}) => (
  <div>
    {missions.map(mission => 
        <SingleMission mission={mission} />
        )}
  </div>
)

window.Missions = Missions;