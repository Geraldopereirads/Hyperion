import { ICardProps } from "../../../Providers/GameContext/@types";
import { StyledGameCard } from "./style";

export const Card = ({ product, addProduct }: ICardProps) => {
  return (
    <StyledGameCard>
      <img src={product.image} alt="game image" />
      <div className="info__container">
        <h4>
          {product.name.length > 20
            ? `${product.name.substring(0, 20)}...`
            : product.name}
        </h4>
        <span className="infor__sistem">{product.sistem}</span>
        <div>
          {product.categories.map((category) => (
            <span className="info__category" key={category.categoryId}>
              {" "}
              {category.label} |
            </span>
          ))}
        </div>
      </div>
      <div className="footer__container">
        <p>R$ {product.price}</p>
        <button onClick={() => addProduct(product)}>Comprar</button>
      </div>
    </StyledGameCard>
  );
};
