import { Component, Input } from '@angular/core';


@Component({
  selector: 'question-choice',
  templateUrl: './question-choice.component.html',
  styleUrls: ['./question-choice.component.css'],
})

export class QuestionChoiceComponent {
  @Input() answer: string;
  constructor() {
    this.answer = ''
  }
}