import {Teacher} from './teacher';

export interface Student {
  id ?: number;
  name ?: string;
  nameGroup ?: string;
  nameSubjects ?: string;
  email ?: string ;
  phoneNumber ?: string;
  teacher ?: Teacher;
}
