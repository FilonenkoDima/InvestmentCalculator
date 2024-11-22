import { Component, Input } from '@angular/core';
import { CurrencyPipe } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { UserInputModel } from '../userInput.model';

@Component({
  selector: 'app-investment-result',
  standalone: true,
  imports: [FormsModule, CurrencyPipe],
  templateUrl: './investment-result.component.html',
  styleUrl: './investment-result.component.css',
})
export class InvestmentResultComponent {
  calculate: boolean = false;
  @Input() userInput: UserInputModel = {
    annualInvestment: 0,
    duration: 0,
    expectedReturn: 0,
    initialInvestment: 0,
  };

  get annualData() {
    return this.calculateInvestmentResults();
  }

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
}
