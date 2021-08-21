import React, { ReactElement, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import { Button, IconButton, Typography } from '@material-ui/core';
import { Favorite, FavoriteBorderOutlined } from '@material-ui/icons';
import {
  getFavorites,
  removeFromFavorites,
  addToFavorites,
} from 'utils/favorites';
import './style.scss';

type Props = {
  movieData: any;
};

function MovieCard(props: Props): ReactElement {
  const history = useHistory();

  const favorites = getFavorites();

  const [isFavorite, setFavorite] = useState(
    favorites.includes(props.movieData.imdbID),
  );

  const handleFavorite = () => {
    if (isFavorite) {
      removeFromFavorites(props.movieData.imdbID);
      setFavorite(false);
    } else {
      addToFavorites(props.movieData.imdbID);
      setFavorite(true);
    }
  };

  return (
    <Card className="movie-card">
      <CardMedia
        image={props.movieData.Poster}
        title={props.movieData.Title}
        className="movie-card-img"
        onClick={() => {
          history.push(`/movie/${props.movieData.imdbID}`);
        }}
      />
      <CardContent>
        <Typography variant="h5" className="movie-card-title" component="p">
          {props.movieData.Title}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites" onClick={handleFavorite}>
          {isFavorite ? <Favorite /> : <FavoriteBorderOutlined />}
        </IconButton>
        <Button
          variant="contained"
          color="primary"
          onClick={() => {
            history.push(`/movie/${props.movieData.imdbID}`);
          }}
          style={{ marginLeft: 'auto' }}>
          Open
        </Button>
      </CardActions>
    </Card>
  );
}

export default MovieCard;
