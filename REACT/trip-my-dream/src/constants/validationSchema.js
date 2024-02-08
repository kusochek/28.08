import {
  object, string, number, date,
} from 'yup';

export const loginSchema = object({
  email: string().email().required('Ooops! We need your email address.'),
  password: string().min(8, 'Should be more then 8').max(20).required(),
});
