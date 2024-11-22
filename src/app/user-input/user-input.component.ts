import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UserInputModel } from '../userInput.model';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css',
})
export class UserInputComponent {
  userInput: UserInputModel = {
    initialInvestment: 10,
    annualInvestment: 5,
    expectedReturn: 10,
    duration: 10,
  };
  @Output() calculate = new EventEmitter<UserInputModel>();

  onSubmit() {
    const results = this.userInput;
    this.calculate.emit(results);
  }
}
