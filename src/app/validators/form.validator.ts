import { AbstractControl, ValidatorFn } from '@angular/forms';
import { Countries } from '../app.const';

// TODO: change this into @angular/PatternValidator()

export function nameValidator(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null =>
    /^[a-zA-ZáéíóúÁÉÍÓÚñ',.\-][a-zA-ZáéíóúÁÉÍÓÚñ ',.\-]*[a-zA-ZáéíóúÁÉÍÓÚñ',.\-]$/i.test(
      control.value
    )
      ? null
      : { pattern: control.value };
}

export function ageValidator(): ValidatorFn {
  //^(1[3-9]|[2-9]\d|1[0-4]\d)$
  return (control: AbstractControl): { [key: string]: any } | null =>
    /^[\d]+$/.test(control.value) ? null : { pattern: control.value };
}

export function zipValidator(knowContry: () => Countries): ValidatorFn {
  const rexegs = {
    [Countries.ESP]: /^(0[1-9]|[1-4]\d|5[0-2])\d{3}$/,
    [Countries.USA]: /^\d{5}(-\d{4})?$/,
  };
  return (control: AbstractControl): { [key: string]: any } | null =>
    rexegs[knowContry()].test(control.value)
      ? null
      : { pattern: control.value };
}

export function phoneValidator(knowContry: () => Countries): ValidatorFn {
  const rexegs = {
    [Countries.ESP]: /^(0034|\+34|34)?([986]\d{8}|7[1-4]\d{7})$/,
    [Countries.USA]: /^(0001|\+01)?[2-9]\d{2}-\d{4}$/,
  };
  return (control: AbstractControl): { [key: string]: any } | null =>
    rexegs[knowContry()].test(control.value)
      ? null
      : { pattern: control.value };
}

export function webValidator(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null =>
    /^((http|https):\/\/)?[a-zA-Z023456789\-\._]+\.[a-zA-Z]{1,63}(\.)?[a-zA-Z.\-\._\/]*$/.test(
      control.value
    )
      ? null
      : { pattern: control.value };
}
