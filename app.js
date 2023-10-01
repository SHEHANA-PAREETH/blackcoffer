const express=require('express')
require('dotenv').config()
const cors =require('cors')
const connectDB=require('./database/config.js')
// import from files
const reportRouter=require('./routes/index.js') 
const REPORT=require('./models/index.js')


//creates a new instance of an Express application
const app = express();

//setting up config.env file so that we can use content of it


//connecting server and database, just call this func^
connectDB();


// <------------ middlewares ------------> 

//we'll be sending data in json format, that's why it is required to use this middleware
app.use(express.json());

//we'll be using dynamic routes, in order to read the data from url we have to use this
app.use(express.urlencoded({ extended: true }));

//set 'credentials: true' to pass --> headers, cookies, etc to browser/frontend
const corsOptions = {
    origin: '*',
    credentials:true,
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
  }
app.use(cors(corsOptions))
// route splitting
app.use("/", reportRouter)

// <-----------------------------------------------------------------------> 


// variables
app.listen(process.env.PORT,
    ()=>console.log('server running'));


    const fs = require('fs')

    const data = JSON.parse(fs.readFileSync('./data/data.json', 'utf-8'))
    
    console.log(data)
    
    // import data to MongoDB
    const importData = async () => {
        try {
          await REPORT.create(data)
          console.log('data successfully imported')
          // to exit the process
          process.exit()
        } catch (error) {
          console.log('error', error)
        }
      }
      
    //  importData()


