import { Box, Grid, Title } from '@mantine/core';
import { ProductCard } from 'card';

const products = [
  {
    title: 'iPhone 9',
    thumbnail: 'https://dummyjson.com/image/i/products/1/thumbnail.jpg',
  },
  {
    title: 'iPhone X',
    thumbnail: 'https://dummyjson.com/image/i/products/2/thumbnail.jpg',
  },
  {
    title: 'Samsung Universe 9',
    thumbnail: 'https://dummyjson.com/image/i/products/3/thumbnail.jpg',
  },
  {
    title: 'OPPOF19',
    thumbnail: 'https://dummyjson.com/image/i/products/4/thumbnail.jpg',
  },
  {
    title: 'Huawei P30',
    thumbnail: 'https://dummyjson.com/image/i/products/5/thumbnail.jpg',
  },
  {
    title: 'MacBook Pro',
    thumbnail: 'https://dummyjson.com/image/i/products/6/thumbnail.png',
  },
  {
    title: 'Samsung Galaxy Book',
    thumbnail: 'https://dummyjson.com/image/i/products/7/thumbnail.jpg',
  },
  {
    title: 'Microsoft Surface Laptop 4',
    thumbnail: 'https://dummyjson.com/image/i/products/8/thumbnail.jpg',
  },
  {
    title: 'Infinix INBOOK',
    thumbnail: 'https://dummyjson.com/image/i/products/9/thumbnail.jpg',
  },
  {
    title: 'HP Pavilion 15-DK1056WM',
    thumbnail: 'https://dummyjson.com/image/i/products/10/thumbnail.jpeg',
  },
];

const ProductsContent = () => (
  <>
    <Box>
      <Title>Products Feature - v 1.0.0</Title>
    </Box>
    <Grid
      mt={20}
      sx={{
        gap: '1rem',
      }}
    >
      {products.map((movie) => (
        <ProductCard {...movie} key={movie.title} showAddButton />
      ))}
    </Grid>
  </>
);

export default ProductsContent;
