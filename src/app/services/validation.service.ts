import { Injectable } from '@angular/core';

enum Countries {
  USA,
  ESP,
}
enum FormAttributesName {
  name,
  surname,
  age,
  zip,
  phone,
  shipDate,
  web,
}

interface FormAttributesRegex {
  [FormAttributesName.name]: RegExp;
  [FormAttributesName.surname]: RegExp;
  [FormAttributesName.age]: RegExp;
  [FormAttributesName.zip]: RegExp;
  [FormAttributesName.phone]: RegExp;
  [FormAttributesName.shipDate]: RegExp;
  [FormAttributesName.web]: RegExp;
}
interface RegexCountry {
  [Countries.USA]: FormAttributesRegex;
  [Countries.ESP]: FormAttributesRegex;
}

@Injectable({
  providedIn: 'root',
})
export class ValidationService {
  public expReg: RegexCountry = {
    [Countries.USA]: {
      [FormAttributesName.name]: /^[a-z][\w]{2,254}/i,
      [FormAttributesName.surname]: /^[a-z][\w]{2,254}/i,
      [FormAttributesName.zip]: /(^\d{5}$)|(^\d{5}-\d{4}$)/,
      [FormAttributesName.phone]:
        /^\(?([0-9]{3})\)?[-.●]?([0-9]{3})[-.●]?([0-9]{4})$/,
      [FormAttributesName.shipDate]:
        /^(0?[1-9]|1[1-2])([\-\/.])(3[01]|[12][0-9]|0?[1-9])-\d{4}$/,
      [FormAttributesName.web]:
        /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/,
      [FormAttributesName.age]: /([1][3-9])|([2-9]\d{1})|([1][0-4][0-9])/,
    },
    [Countries.ESP]: {
      [FormAttributesName.name]: /^[a-z][\w]{2,254}/i,
      [FormAttributesName.surname]: /^[a-z][\w]{2,254}/i,
      [FormAttributesName.zip]: /^(?:0[1-9]|[1-4]\d|5[0-2])\d{3}$/,
      [FormAttributesName.phone]: /(\+34|0034|34)?[-]*(6|7)[-]*([0-9][-]*){8}/,
      [FormAttributesName.shipDate]:
        /^(?:3[01]|[12][0-9]|0?[1-9])([\-/.])(0?[1-9]|1[1-2])\1\d{4}$/,
      [FormAttributesName.web]:
        /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/,
      [FormAttributesName.age]: /([1][3-9])|([2-9]\d{1})|([1][0-4][0-9])/,
    },
  };

  isValidName = (name: string, country: Countries) =>
    this.isValid(FormAttributesName.name, name, country);
  isValidSurname = (surname: string, country: Countries) =>
    this.isValid(FormAttributesName.surname, surname, country);
  isValidPhone = (phone: string, country: Countries) =>
    this.isValid(FormAttributesName.phone, phone, country);
  isValidZIP = (zip: string, country: Countries) =>
    this.isValid(FormAttributesName.zip, zip, country);
  isValidShippingDate = (shippingDate: string, country: Countries) =>
    this.isValid(FormAttributesName.shipDate, shippingDate, country);
  isValidWeb = (web: string, country: Countries) =>
    this.isValid(FormAttributesName.web, web, country);
  isValidAge = (age: string, country: Countries) =>
    this.isValid(FormAttributesName.age, age, country);

  isValid = (
    elementName: FormAttributesName,
    value: string,
    country: Countries = Countries.ESP
  ) => this.expReg[country][elementName].test(value);
}
