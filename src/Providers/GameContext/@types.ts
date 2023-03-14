export interface ICategories {
  categoryId: number;
  label: string;
  slug: string;
}
export interface IGames {
  id: number;
  name: string;
  categories: ICategories[];
  publisher: string;
  image: string;
  price: number;
  description: string;
  trailer: string;
  sistem: string;
  classificacao: number;
}

export interface ICardProps {
  product: IGames;
  addProduct: (product: IGames) => void;
}

export interface ICardCartProps {
  product: IGames;
  removeProduct: (product: IGames) => void;
}

export interface IGameContext {
  games: IGames[];
  categories: ICategories[];
  addProduct: (product: IGames) => void;
  removeProduct: (product: IGames) => void;
  removeAllProduct: () => void;
  currentSale: IGames[];
  amount: number;
}
