const {Sequelize,DataTypes,QueryTypes} =require('sequelize')
const sequelize=new Sequelize({
    dialect:'sqlite',
    storage:'./assets/database/database.sqlite'
})

var searches
async function database(){
try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }

  searches=sequelize.define('Searches',{
      searchString:{
          type:DataTypes.STRING,
      }
  });
  
  searches.sync()
}
database()

async function strings_like(str){
    return await sequelize.query(`SELECT searchString from Searches WHERE searches.searchString LIKE '%${str}%'`,{
        type:QueryTypes.SELECT
    })
}

function push_string_to_database(str){
    searches.create({
        searchString:str
    })
}

module.exports={
    push_string_to_database,
    strings_like
}