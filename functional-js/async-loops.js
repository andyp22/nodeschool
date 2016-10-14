function loadUsers(userIds, load, done) {
  var users = [];
  userIds.forEach(function (id, idx) {
    load(id, function (result) {
      users[idx] = result;
      if (users.length === userIds.length) {
        done(users);
      }
    });
  });
}

module.exports = loadUsers;
