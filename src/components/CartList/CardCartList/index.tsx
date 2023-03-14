import { ICardCartProps } from "../../../Providers/GameContext/@types";
import { StyledCardList } from "./style";
import { FaTrashAlt } from "react-icons/fa";

export const CardCartList = ({ product, removeProduct }: ICardCartProps) => {
  return (
    <StyledCardList key={product.id}>
      <img src={product.image} alt="Imagem do Produto" />
      <div>
        <h4>{product.name}</h4>
        <p>
          {product.price.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })}
        </p>
        <button onClick={() => removeProduct(product)}>
          <img src="" alt="" />
          <FaTrashAlt />
        </button>
      </div>
    </StyledCardList>
  );
};
