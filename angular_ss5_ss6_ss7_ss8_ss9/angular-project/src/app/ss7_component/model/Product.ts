import {Category} from "./Category";

export interface Product {
  id? : number;
  name? : string;
  price? : number;
  descriptions? : string;
  category? : Category
}
