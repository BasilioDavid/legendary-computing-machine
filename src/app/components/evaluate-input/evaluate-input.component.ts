import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-evaluate-input',
  templateUrl: './evaluate-input.component.html',
  styleUrls: ['./evaluate-input.component.css'],
})
export class EvaluateInputComponent implements OnInit {
  @Input() dirty: boolean | null | undefined;
  @Input() valid: boolean | null | undefined;
  @Input() errorMessage: string | null | undefined;

  constructor() {}

  ngOnInit(): void {}
}
