import { useContext } from "react";
import { GameContext } from "../../../../Providers/GameContext/GameContext";
import { StyledCardTotalValue } from "./styled";

export const CartTotalValue = () => {
  const { amount, removeAllProduct } = useContext(GameContext);

  return (
    <StyledCardTotalValue>
      <div>
        {amount ? (
          <>
            <span>Total: </span>
            <span>R$ {amount} </span>
          </>
        ) : (
          <p>Carrinho vazio</p>
        )}
      </div>

      <button type="button" onClick={() => removeAllProduct()}>
        <strong>Limpar Carrinho</strong>
      </button>
    </StyledCardTotalValue>
  );
};
