import MoviesDAO from '../dao/moviesDAO.js'
import ReviewsDAO from '../dao/reviewsDAO.js'

export default class MoviesController{

    //------------------------------------------
    static async apiPostReview(req, res, next) {
        try{
            const movieId = req.body.movie_id
            const review = req.body.review
            const userInfo = {
                name: req.body.name,
                _id:req.body.user_id
            }

            const date = new Date()

            const Reviewresponse = await ReviewsDAO.addReviews(
                movieId,
                userInfo,
                review,
                date
            )

            res.json(
                {status: "success"}
            )
        } catch(e) {
            res.status(500).json(
                {error: e.message}
            )
        }
    }

    //------------------------------------------
    static async apiGetMovies(req, res, next) {
        const moviesPerPage = req.query.moviesPerPage ? parseInt(req.query.moviesPerPage):20
        const page = req.query.page ? parseInt(req.query.page):0

        let filters = {}
        if(req.query.rated) {
            filters.rated = req.query.rated
        }
        else if(req.query.title) {
            filters.title = req.query.title
        }
        
        const { moviesList, totalNumMovies } = await MoviesDAO.getMovies( {filters, page, moviesPerPage} )
        //console.log("MoviesDAO.getMovies: " + filters + " " + page + " " + moviesPerPage);

        let response = {
            movies: moviesList,
            page: page,
            filters: filters,
            entries_per_page: moviesPerPage,
            total_results: totalNumMovies,
        }
        res.json(response)

        //URL example: http://localhost:8000/api/v1/movies?title=dragon&moviesPerPage=15&page=0
        //http://localhost:8000/api/v1/movies
        //stopped p39 of158 = 28%
    }

    //------------------------------------------
    static async apiGetMovieById(req, res, next) {
        try {
            let id = req.params.id || {}
            let movie = await MoviesDAO.getMovieById(id)
            if (!movie) {
                res.status(404).json({ error: "not found"})
                return
            }
            res.json(movie)

        } catch(e) {
            console.log('api, ${e}')
            res.status(500).json({error: e})
        }
    }

    //------------------------------------------
    static async apiGetRatings(req, res, next) {
        try {
            let propertyTypes = await MoviesDAO.getRatings()
            res.json(propertyTypes)
        } catch(e) {
            console.log('api, ${e}')
            res.status(500).json({error: e})
        }
    }


} //class MoviesController