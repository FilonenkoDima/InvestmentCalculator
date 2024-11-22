import { Component, output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { UserInputModel } from '../userInput.model';
import { InvestmentService } from '../investment-result/investment.service';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css',
})
export class UserInputComponent {
  userInput = signal<UserInputModel>({
    initialInvestment: 10,
    annualInvestment: 5,
    expectedReturn: 10,
    duration: 10,
  });

  constructor(private investmentService: InvestmentService) {}

  // calculate = output<UserInputModel>();

  onSubmit() {
    const results = this.userInput();
    this.investmentService.calculateInvestmentResults(results);
    // this.calculate.emit(results);
  }
}
