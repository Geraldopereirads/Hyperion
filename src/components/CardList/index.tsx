import { useContext } from "react";
import { GameContext } from "../../Providers/GameContext/GameContext";
import { Card } from "./Card";
import { StyledCardList } from "./syted";

export const CardList = () => {
  const { games, addProduct } = useContext(GameContext);
  return (
    <StyledCardList>
      {games.map((product) => (
        <Card product={product} addProduct={addProduct} key={product.id} />
      ))}
    </StyledCardList>
  );
};
