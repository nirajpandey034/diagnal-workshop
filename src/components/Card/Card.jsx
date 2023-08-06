import React from "react";
import { Stack, Box, Typography } from "@mui/material";
import "./Card.style.css";

export default function Card({ imageTitle = "", imgSrc = "", title = "" }) {
  const [imgError, setImgError] = React.useState(false);
  return (
    <Stack direction="column" className="cardBody">
      <Box
        component="img"
        alt={imageTitle}
        src={
          imgError
            ? "https://test.create.diagnal.com/images/placeholder_for_missing_posters.png"
            : imgSrc
        }
        onError={() => {
          setImgError(true);
        }}
      />
      <Typography className="cardTitle">{title}</Typography>
    </Stack>
  );
}
