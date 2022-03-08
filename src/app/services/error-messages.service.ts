import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ErrorMessagesService {
  private errorMessages: any = {
    name: {
      required: {
        ESP: 'Este campo es requerido',
        USA: 'This field is required',
      },
      pattern: {
        ESP: 'El nombre no puede compenzar ni terminar por espacio y no debe contener caracteres extraños',
        USA: "The name mustn't start nor end with space and it mustn't have odd caracters",
      },
      minlength: {
        ESP: 'El nombre tiene que contener al menos 3 caracteres',
        USA: "The name's length must be at least 3 characters",
      },
      maxlength: {
        ESP: 'El nombre tiene que contener como máximo 254 caracteres',
        USA: "The name's length mustn't be more than 254 characters",
      },
    },
    surname: {
      required: {
        ESP: 'Este campo es requerido',
        USA: 'This field is required',
      },
      pattern: {
        ESP: 'El apellido no puede compenzar ni terminar por espacio y no debe contener caracteres extraños',
        USA: "The surname mustn't start nor end with space and it mustn't have odd caracters",
      },
      minlength: {
        ESP: 'El apellido tiene que contener al menos 3 caracteres',
        USA: "The surname's length must be at least 3 characters",
      },
      maxlength: {
        ESP: 'El apellido tiene que contener como máximo 254 caracteres',
        USA: "The surname's length mustn't be more than 254 characters",
      },
    },
    age: {
      required: {
        ESP: 'Este campo es requerido',
        USA: 'this field is required',
      },
      pattern: {
        ESP: 'La edad solo puede contener números',
        USA: 'The age must be just numbers',
      },
      min: {
        ESP: 'Tienes que tener al menos 12 años',
        USA: 'You must be more than 12 years',
      },
      max: {
        ESP: 'No puedes tener mas de 150 años',
        USA: "You can't be less than 150 years",
      },
    },
    zip: {
      required: {
        ESP: 'Este campo es requerido',
        USA: 'This field is required',
      },
      pattern: {
        ESP: 'Los cp españoles tienen el siguiente formato: XXXXX',
        USA: 'the ZIP code have the following format: XXXXX or XXXXX-XXXX',
      },
    },
    phone: {
      required: {
        ESP: 'Este campo es requerido',
        USA: 'This field is required',
      },
      pattern: {
        ESP: 'No es un formato de teléfono válido',
        USA: "That isn't a valid phone format",
      },
    },
    web: {
      required: {
        ESP: 'Este campo es requerido',
        USA: 'This field is required',
      },
      pattern: {
        ESP: 'Tienes que introducir una web válida',
        USA: 'You have to write a valid url',
      },
    },
  };

  get(input: string, errorCode: string, language: string) {
    return this.errorMessages[input][errorCode][language];
  }
}
