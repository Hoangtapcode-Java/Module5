import {Customer} from './Customer';
import {Service} from './Service';

export interface Contract {
  id: number;
  customer: Customer;
  service: Service;
  dateBegin: string;
  dateEnd: string;
}
