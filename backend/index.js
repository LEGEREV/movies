//create package.json: npm init
//go to backend directory:
// cd C:\Development\MERN\mv-review\backend
// cd..
// and run:
// nodemon server
//C:\Development\MERN\mv-review\frontend
// npm start
//http://localhost:5000/api/v1/movies?title=dragon&moviesPerPage=15$page=0
//http://localhost:5000/api/v1/movies
//http://localhost:5000/api/v1/movies?rated=G
//http://localhost:5000/api/v1/movies?title=seven

//http://localhost:5000/api/v1/movies/review
//http://localhost:5000/api/v1/movies?_id="573a1391f29313caabcd68d0"
//http://localhost:5000/api/v1/movies/ratings
//http://localhost:5000/api/v1/movies/id/573a1391f29313caabcd68d0

import app from './server.js'
import mongodb from "mongodb"
import dotenv from "dotenv"
import MoviesDAO from './dao/moviesDAO.js'
import ReviewsDAO from './dao/reviewsDAO.js'

async function main() {
    dotenv.config()

    const client = new mongodb.MongoClient(
        process.env.MOVIEREVIEVIEWS_DB_URI,
        {useNewUrlParser:true, useUnifiedTopology:true}
    )
    const port = process.env.PORT || 8000

    try {
        await client.connect()
        console.log("Connected")        
        
        await MoviesDAO.injectDB(client)
        console.log("Got mov.DAO")

        await ReviewsDAO.injectDB(client)
        console.log("Got rev.DAO")

        app.listen( port, () => {
            console.log('server is running on port: ' + port);
            console.log('reloaded time: ' + new Date().toLocaleTimeString())
        })
    } catch(e) {
        console.error(e);
        process.exit(1)
    }
} //main

main().catch(console.error);