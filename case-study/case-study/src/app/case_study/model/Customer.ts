import {CustomerType} from "./CustomerType";

export interface Customer {
  id? : number;
  name ? : string;
  nameGroup? : string;
  nameSubjects? : string;
  idCard? : string;
  phoneNumber? : string;
  email ? :string;
  address ? : string
  customerType? : CustomerType
}
