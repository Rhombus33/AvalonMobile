// Child of Missions
// Passed singleMission
// Always renders a cirle and the number of members in the mission 

var SingleMission = ({mission}) => (
  // var missionDetails = _.each(attribute => { return <li>{mission[attribute]}</li>; });
  <div className='mission'>
    <p>
      Size: {mission.size}<br/>
      Need Double Fail: {JSON.stringify(mission.needDoubleFail)}<br/>
      Fails: {JSON.stringify(mission.fails)}<br/>
      Members: {JSON.stringify(mission.members)}<br/>
      Suceess: {JSON.stringify(mission.success)}<br/>
    </p>
  </div>
);



window.SingleMission = SingleMission;

    // <p>
    //   {listAttributes(mission)}
    // </p>