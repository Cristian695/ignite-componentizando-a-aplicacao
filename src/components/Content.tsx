import { MovieCard } from "./MovieCard"

import { GenreResponseProps } from "../App"
import { MovieProps } from "../App"

interface ContentProps {
  selectedGenre: GenreResponseProps,
  movies: MovieProps[],
}

export function Content({ movies, selectedGenre }: ContentProps) {
  return (
    <div className="container">
        <header>
          <span className="category">Categoria:<span> {selectedGenre.title}</span></span>
        </header>

        <main>
          <div className="movies-list">
            {movies.map(movie => (
              <MovieCard key ={movie.imdbID} title={movie.Title} poster={movie.Poster} runtime={movie.Runtime} rating={movie.Ratings[0].Value} />
            ))}
          </div>
        </main>
      </div>
  )
}