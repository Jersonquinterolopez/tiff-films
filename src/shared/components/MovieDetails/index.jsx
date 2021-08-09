import './index.css';
const image_base_url = 'https://image.tmdb.org/t/p/original/';

const MovieDetails = ({ film }) => {
  const {
    title,
    overview,
    popularity,
    poster_path,
    genres,
    runtime,
    release_date,
    tagline,
  } = film;

  return (
    <div className="featured is-family-sans-serif">
      <div className="img-container">
        <img
          className="img-back"
          src={`${image_base_url}${poster_path}`}
          alt=""
        />
      </div>

      <div className="info">
        <img src={`${image_base_url}${poster_path}`} width="130" alt="" />

        <span className="desc">
          <h3 className="title is-3 has-text-white">{title}</h3>
          <h4 className="subtitle is-4 has-text-white">{tagline}</h4>
        </span>
        <span className="desc is-family-primary">{overview}</span>

        <div>
          {genres && (
            <div className="mb-3">
              <ul className="is-flex">
                {genres.map((genre) => (
                  <li key={genre.id}>
                    <span className="tag is-light">{genre.name}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
          <p>
            Release Date:{' '}
            <strong className="has-text-white">{release_date}</strong>
          </p>
          <p>
            Popularity:{' '}
            <strong className="has-text-white">{parseInt(popularity)}</strong>
          </p>
          <p>
            Runtime:{' '}
            <strong className="has-text-white">{runtime} Minutes</strong>
          </p>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
