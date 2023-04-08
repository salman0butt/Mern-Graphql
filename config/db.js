const Sequelize = require('sequelize');
const sequelize = new Sequelize('graphql', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
  logging: true
});

sequelize.authenticate()
.then(() => {
    console.log('connected');
})
.catch((e) => {
    console.log('error' + e);
});

module.exports = sequelize;