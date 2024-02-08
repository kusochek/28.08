import { IMAGE, NUMERIC } from './regexp';

const rulesText = {
  required: 'This field is required',
  minLength: (min) => `This field should be at least ${min} characters long`,
  maxLength: (max) => `This field should be at most ${max} characters long`,
};

export const tripRules = {
  country: {
    required: { value: true, message: rulesText.required },
    minLength: { value: 3, message: rulesText.minLength(3) },
    maxLength: { value: 30, message: rulesText.maxLength(30) },
  },
  city: {
    required: { value: true, message: rulesText.required },
    minLength: { value: 2, message: rulesText.minLength(2) },
    maxLength: { value: 30, message: rulesText.maxLength(30) },
  },
  image: {
    required: { value: true, message: rulesText.required },
    pattern: {
      value: IMAGE,
      message: 'Image should be a valid URL',
    },
  },
  description: {
    required: { value: true, message: rulesText.required },
    minLength: { value: 10, message: rulesText.minLength(10) },
    maxLength: { value: 600, message: rulesText.maxLength(300) },
  },
  age: {
    required: { value: true, message: rulesText.required },
    pattern: { value: NUMERIC, message: 'Age should be a number' },
  },
};
