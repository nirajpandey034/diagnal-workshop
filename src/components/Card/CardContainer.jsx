import React, { useState, useEffect } from "react";
import { Grid, Container } from "@mui/material";
import { CircularProgress } from "@mui/material";
// import InfiniteScroll from "react-infinite-scroll-component";
import InfiniteScroll from "react-infinite-scroller";

import Card from "./Card";
import "./Card.style.css";

// import util function
import getPosterData from "./Card.util";

export default function CardContainer({ searchText = "" }) {
  const [scrollData, setScrollData] = useState([]);

  const [page, setPage] = useState(1);

  const handleOnRowsScrollEnd = () => {
    if (page < 3 && searchText.length === 0) {
      setPage((page) => page + 1);
    }
  };

  const fetchPrimaryPokemonData = async () => {
    try {
      const posterData = await getPosterData(page);
      setScrollData([...scrollData, ...posterData]);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    if (searchText.length > 0) {
      // eslint-disable-next-line array-callback-return
      const filterdData = scrollData.filter((item) => {
        const title = item.name.toUpperCase();
        let searchString = searchText.toUpperCase();
        if (title.includes(searchString)) return item;
      });
      if (filterdData.length > 0) setScrollData(filterdData);
      else setScrollData([]);
    } else {
      setPage(1);
      setScrollData([]);
    }
  }, [searchText]);

  useEffect(() => {
    fetchPrimaryPokemonData();
  }, [page]);

  useEffect(() => {
    if (scrollData.length === 0) fetchPrimaryPokemonData();
  }, [scrollData]);
  return (
    <Container
      id="scrollableDiv"
      className="container"
      sx={{
        overflow: "auto",
        height: "100vh",
        pt: 2,
      }}
      maxWidth="xl"
    >
      {scrollData.length > 0 ? (
        <InfiniteScroll
          pageStart={1}
          loadMore={handleOnRowsScrollEnd}
          hasMore={page < 3}
          loader={
            <div className="loader" key={0}>
              Loading ...
            </div>
          }
          useWindow={false}
          // threshold={1}
        >
          <Grid container spacing={2} className="pokemonCardsArea">
            {scrollData.map((item, index) => (
              <Grid item xs={4} key={index}>
                <Card
                  imageTitle={item["poster-image"]}
                  imgSrc={item["poster-image-url"]}
                  title={item.name}
                />
              </Grid>
            ))}
          </Grid>
        </InfiniteScroll>
      ) : (
        <CircularProgress color={"success"} className="progress" size={200} />
      )}
    </Container>
  );
}
