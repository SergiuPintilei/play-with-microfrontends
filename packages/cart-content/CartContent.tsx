// import React from 'react';
import { Box, Title, Grid } from '@mantine/core';

import { useStore } from 'store';
import { ProductCard } from 'card';

export const Cart = () => {
  const { movies } = useStore();
  return (
    <>
      <Box>
        <Title>Cart</Title>
      </Box>
      <Grid
        mt={20}
        sx={{
          gap: '1rem',
        }}
      >
        {movies.map((movie) => (
          <ProductCard {...movie} key={movie.title} />
        ))}
      </Grid>
    </>
  );
};
