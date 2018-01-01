const Sequelize = require('sequelize');
const sequelize = new Sequelize('mindfeed', 'root', 'root', {
  host: 'localhost',
  dialect: 'mysql',

  pool: {
    max: 10,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
});

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

//drop


const Users = sequelize.define('Users', {

  email: Sequelize.STRING,
  password: Sequelize.STRING
},
  {
    updatedAt: false,
    createdAt: 'joinDate'
  }
  );

const Videos = sequelize.define('Videos', {
  videoId: Sequelize.STRING,
  url: Sequelize.STRING,
  linkType: Sequelize.STRING,
  description: Sequelize.STRING,
  viewCount: Sequelize.INTEGER,
  category: Sequelize.STRING,
  subcategory: Sequelize.STRING,
  thumbnail: Sequelize.STRING,
  createdBy: Sequelize.STRING,
  submittedBy: Sequelize.STRING
},
  {
    updatedAt: false,
    createdAt: 'dateSubmitted'
  }
  );


const Likes = sequelize.define('Likes',{
  videoId: {
    type: Sequelize.STRING,
    references: {
      model: Videos,
      key: 'videoId'
    }
  },
  email: {
    type: Sequelize.STRING,
    references: {
      model: Users,
      key: 'email'
    }
  }
},
  {
  updatedAt: 'date',
  createdAt: false
});



//Test Create user
Users.create({
  email: 'Test@gmail.com',
  password: '1a2a3a'
}).then(()=> {
  console.log('saved');
});
// Test Create video
Videos.create({
  videoId: 'asiudh',
  url: 'asdasd',
  linkType: "asdasd",
  description: "asdasd",
  viewCount: 0,
  category: "asdasd",
  subcategory: "asdasd",
  thumbnail: "asdasd",
  createdBy: "asdasd",
  submittedBy: "Test@gmail.com"
}).then(()=> {
  console.log("saved");
  Videos.findOne({
    where: {
      url: 'asdasd'
    },
    attributes: ['videoId', 'url', 'linkType']
  }).then(output => {
    console.log("Output:", output);
  });
});



// Users.findOne({
//   where: {
//     email: 'Test@gmail.com'
//   },
//   attributes: ['id','email','joinDate']
// }).then(output => {
//   console.log(output.dataValues);
// })


Likes.create({
  videoId: 'asiudh',
  email: 'Test@gmail.com'
}).then(()=> {
  console.log("saved");
});