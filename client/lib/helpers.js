var generatePlayers = (names, roles) => {
  if (names.length !== roles.length) {
    console.error('Different number of names and roles!!');
    return;
  }

  var players = {};
  var shuffledNames = _.shuffle(names);
  var shuffledRoles = _.shuffle(roles);
  
  for (var i = 0; i < names.length; i++) {
    players.shuffledNames[i] = players.shuffledRoles[i];
  }
  return players;
};

window.generatePlayers = generatePlayers;