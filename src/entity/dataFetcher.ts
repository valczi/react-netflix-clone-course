import { MovieInterface } from "./movies";

export default class dataFatcher {


    static async getAllMovies(page:number) {  
        const axios = require('axios');
        try {
            const response = await axios.get('https://api.themoviedb.org/3/movie/popular?api_key='+process.env.REACT_APP_API_KEY+'&language=fr-FR&page='+page);
            return response;
        } catch (error) {
            console.error(error);
            return null;
        }
    }

    static async getAllCategories() {  
        const axios = require('axios');
        try {
            const response = await axios.get('https://api.themoviedb.org/3/genre/movie/list?api_key='+process.env.REACT_APP_API_KEY+'&language=fr-FR');
            return response;
        } catch (error) {
            console.error(error);
            return null;
        }
    }


}