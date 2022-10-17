import React from 'react';
import {
  Card,
  Image,
  Text,
  Button,
  Group,
  useMantineTheme,
} from '@mantine/core';
import { useStore } from 'store';

export const ProductCard: React.FunctionComponent<{
  title: string;
  thumbnail: string;
  showAddButton?: boolean;
}> = ({ title, thumbnail, showAddButton }) => {
  const theme = useMantineTheme();
  const { addMovie } = useStore();

  return (
    <Card shadow="sm" p="lg">
      <Card.Section>
        <Image src={thumbnail} height={100} width={200} alt={title} />
      </Card.Section>

      <Group
        position="apart"
        style={{ marginBottom: 5, marginTop: theme.spacing.sm }}
      >
        <Text weight={500}>{title}</Text>
      </Group>

      {showAddButton && (
        <Button
          variant="light"
          color="blue"
          fullWidth
          style={{ marginTop: 14 }}
          onClick={() => addMovie({ title, thumbnail })}
        >
          Add To Cart
        </Button>
      )}
    </Card>
  );
};
