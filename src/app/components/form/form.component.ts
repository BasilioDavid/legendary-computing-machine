import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  MaxLengthValidator,
  MaxValidator,
  MinLengthValidator,
  MinValidator,
  Validators,
} from '@angular/forms';
import {
  nameValidator,
  ageValidator,
  zipValidator,
  phoneValidator,
  webValidator,
} from 'src/app/validators/form.validator';
import { Countries } from 'src/app/app.const';
import { ErrorMessagesService } from 'src/app/services/error-messages.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  // TODO: find a way to join this two variables in one
  public countrySelected = Countries.ESP;
  public stringCountrySelected = 'ESP';

  public form = this.formBuilder.group({
    name: [
      '',
      [
        Validators.required,
        new MinLengthValidator(),
        new MaxLengthValidator(),
        nameValidator(),
      ],
    ],
    surname: [
      '',
      [
        Validators.required,
        new MinLengthValidator(),
        new MaxLengthValidator(),
        nameValidator(),
      ],
    ],
    age: [
      '',
      [
        Validators.required,
        new MinValidator(),
        new MaxValidator(),
        ageValidator(),
      ],
    ],
    zip: ['', [Validators.required, zipValidator(() => this.countrySelected)]],
    phone: [
      '',
      [Validators.required, phoneValidator(() => this.countrySelected)],
    ],
    // shipDate: ["", Validators.required],
    web: ['', [Validators.required, webValidator()]],
  });

  constructor(
    private readonly formBuilder: FormBuilder,
    private readonly errorMessagesService: ErrorMessagesService
  ) {}

  ngOnInit(): void {
    console.log(this.form);
  }

  public setCountryToESP(): void {
    this.countrySelected = Countries.ESP;
    this.stringCountrySelected = 'ESP';
  }

  public setCountryToUSA(): void {
    this.countrySelected = Countries.USA;
    this.stringCountrySelected = 'USA';
  }

  public onSubmit(): void {}

  getError(input: string, errorCode: any, country: string) {
    return errorCode === null
      ? ''
      : this.errorMessagesService.get(
          input,
          Object.keys(errorCode || {})[0],
          country
        );
  }

  public countryIsSpain(): boolean {
    return this.countrySelected === Countries.ESP;
  }
  public countryIsUSA(): boolean {
    return !this.countryIsSpain();
  }
}
