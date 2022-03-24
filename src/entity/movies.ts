import { Category } from "@mui/icons-material";

export default class Movies{
    public movies:MovieInterface[]=[];
    public categories:CategoryInterface[]=[];

    public setMovies(data:MovieInterface[]){
        this.movies=[];
        data.forEach(movie => {
            this.addMovie({
                adult:movie.adult,
                genre_ids:movie.genre_ids,
                id:movie.id,
                title:movie.title,
                overview:movie.overview,
                popularity:movie.popularity,
                poster_path:movie.poster_path,
                release_date: movie.release_date,
                backdrop_path: movie.backdrop_path,
            });
        });
    }


    public setCategories(categories : CategoriesInterface){
        this.categories=[];
        categories.genres.forEach(category => {
            this.addCategory({
                id:category.id,
                name:category.name,
            });
        });

    }

    public getData():MovieInterface[]{
        return this.movies;
    }

    public addMovie(movie: MovieInterface){
            this.movies.push(movie);
  
    }

    public addCategory(category: CategoryInterface){
        this.categories.push(category);

}

    public removeMovie(movie: MovieInterface){
        let result = this.movies.find(Element => Element.id === movie.id);
        let poz = -1;
        if (result)
            poz = this.movies.indexOf(result);
        if (poz !== -1) {
            this.movies.splice(poz, 1);

        }
    }

    public filtersBy(name: string):MovieInterface[]{
        let filtered: MovieInterface[]=[];
        this.movies.forEach(movie=>{
            if(movie.title.includes(name))
                filtered.push(movie);
        })
        return filtered;
    }

    public getLists():ListInterface[]{
        let Lists:ListInterface[]=[];
        this.categories.forEach(category => {
            let List:ListInterface={
                category:category,
                movies:[]
            }
            this.movies.forEach(movie=>{
                if(movie.genre_ids.includes(category.id)){
                    List.movies.push(movie);
                }
            });
            Lists.push(List);
        });
        return Lists;
    };
}

export interface MoviesInterface{
    results:MovieInterface[],
  }

 export interface MovieInterface{
    adult:boolean,
    poster_path:string,
    genre_ids:number[],
    id:number,
    title:string,
    overview:string,
    popularity:number,
    release_date:string;
    backdrop_path:string,
  }

  export interface CategoryInterface{
      id:number,
      name:string
  }

  export interface CategoriesInterface{
    genres:CategoryInterface[],
  }

  export interface ListInterface{
      category:CategoryInterface,
      movies:MovieInterface[]
  }