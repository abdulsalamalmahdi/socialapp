const database = require('./database');



async function getUserProfile() {

  selectUser =  'select * from user order by user_id';
  return database.query(selectUser);
}


module.exports = {
  getUserProfile
};