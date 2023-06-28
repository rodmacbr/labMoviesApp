import React, { useEffect, useState } from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import HomeIcon from "@mui/icons-material/Home";

const styles = {
  root: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    flexWrap: "wrap",
    padding: 1.5,
  },
};

const MovieHeader = (props) => {
  const movie = props.movie;
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    // Get favorites from localStorage
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];

    // Check if current movie is a favorite
    const isCurrentMovieFavorite = favorites.some(
      (favMovie) => favMovie.id === movie.id
    );

    setIsFavorite(isCurrentMovieFavorite);
  }, [movie.id]);

  return (
    <Paper component="div" sx={styles.root}>
      <IconButton aria-label="go back">
        <ArrowBackIcon color="primary" fontSize="large" />
      </IconButton>

      <Typography variant="h4" component="h3">
        {movie.title}{"   "}
        <a href={movie.homepage}>
          <HomeIcon color="primary" fontSize="large" />
        </a>
        <br />
        <span>{`${movie.tagline}`} </span>
      </Typography>

      {/* Render the red heart icon if the movie is a favorite */}
      {isFavorite && (
        <IconButton aria-label="favorite">
          <FavoriteIcon color="error" fontSize="large" />
        </IconButton>
      )}

      <IconButton aria-label="go forward">
        <ArrowForwardIcon color="primary" fontSize="large" />
      </IconButton>
    </Paper>
  );
};

export default MovieHeader;

