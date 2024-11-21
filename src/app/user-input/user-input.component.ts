import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UserInputModel } from './userInput.model';
import { AnnualDataModel } from '../annualData.model';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css',
})
export class UserInputComponent {
  @Input() userInput: UserInputModel = {
    initialInvestment: 10,
    annualInvestment: 5,
    expectedReturn: 10,
    duration: 10,
  };
  @Output() annualData = new EventEmitter<AnnualDataModel[]>();

  calculateInvestmentResults() {
    const annualData = [];
    let investmentValue = this.userInput.initialInvestment;

    for (let i = 0; i < this.userInput.duration; i++) {
      const year = i + 1;
      const interestEarnedInYear =
        investmentValue * (this.userInput.expectedReturn / 100);
      investmentValue += interestEarnedInYear + this.userInput.annualInvestment;
      const totalInterest =
        investmentValue -
        this.userInput.annualInvestment * year -
        this.userInput.initialInvestment;
      annualData.push({
        year: year,
        interest: interestEarnedInYear,
        valueEndOfYear: investmentValue,
        annualInvestment: this.userInput.annualInvestment,
        totalInterest: totalInterest,
        totalAmountInvested:
          this.userInput.initialInvestment +
          this.userInput.annualInvestment * year,
      });
    }

    return annualData;
  }

  onSubmit() {
    const results = this.calculateInvestmentResults();
    this.annualData.emit(results);
  }
}
