var generateRoles = (num) => {
  var Roles = ['Assasin', 'Merlin', 'Normal Good'];
  if (num < 6) {
    Roles = Roles.concat(['Normal Good', 'Normal Baddie']);
  } else {
    var moreRoles = ['Percy', 'Morgana', 'Normal Good'];
    if (num % 2 === 0) {
      console.log(num);
      for (var i = 0; i < (num - 6) / 2; i++) {
        moreRoles = moreRoles.concat(['Normal Good', 'Normal Baddie']);
      }
    } else {
      for (var i = 0; i < num - 7; i++) {
        moreRoles = moreRoles.concat(['Normal Good']);
      }
      moreRoles = moreRoles.concat(['Normal Baddie']);
    }
    Roles = Roles.concat(moreRoles);
  }
  return Roles;
};

var generateMissions = (num) => {
  var missions = [];
  var missionSizes;
  var needDoubleFail;
  if (num > 7) {
    missionSizes = [3, 4, 4, 5, 5];
    needDoubleFail = true;
  } else if (num === 7) {
    missionSizes = [2, 3, 3, 4, 4];
    needDoubleFail = true;
  } else if (num === 6) {
    missionSizes = [2, 3, 4, 3, 4];
    needDoubleFail = false;
  } else {
    missionSizes = [2, 3, 2, 3, 3];
    needDoubleFail = false;
  }

  for (var i = 0; i < 5; i++) {
    if (i === 3) {
      var mission = new Mission(missionSizes[i], needDoubleFail);  
    } else {
      var mission = new Mission(missionSizes[i], false);
    }
    missions.push(mission);
  }
  return missions;
}

class Mission {
  constructor(missionSize, needDoubleFail) {
    this.size = missionSize;
    this.needDoubleFail = needDoubleFail;
    this.fails = null;
    this.members = [];
    this.success = null;
  }
}

var generateBoard = (names) => {
  var length = names.length;
  var roles = generateRoles(length);
  var missions = generateMissions(length);

  var players = {};
  var shuffledNames = _.shuffle(names);
  var shuffledRoles = _.shuffle(roles);
  // debugger;
  for (var i = 0; i < length; i++) {
    players[shuffledNames[i]] = shuffledRoles[i];
  }
  
  return {players: players, missions: missions};
};

// window.generateMissions = generateMissions;
// window.generateRoles = generateRoles;
window.generateBoard = generateBoard;