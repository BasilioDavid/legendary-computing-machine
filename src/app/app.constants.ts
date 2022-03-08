export const COUNTRIES = {
  USA: {
    code: 'USA',
    currency: '$',
  },
  ESP: {
    code: 'ESP',
    currency: '€',
  },
};

export interface FormAttributes {
  name: string;
  surname: string;
  age: string;
  zip: string;
  phone: string;
  shipDate: string;
  web: string;
}

export interface FormAttributesStatus {
  name: boolean;
  surname: boolean;
  age: boolean;
  zip: boolean;
  phone: boolean;
  shipDate: boolean;
  web: boolean;
}
