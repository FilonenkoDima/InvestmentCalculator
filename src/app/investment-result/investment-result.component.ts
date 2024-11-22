import { Component, input } from '@angular/core';
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
  userInput = input<UserInputModel | undefined>();

  get annualData() {
    return this.calculateInvestmentResults();
  }

  calculateInvestmentResults() {
    const userInputValue = this.userInput();

    if (!userInputValue) {
      return [];
    }

    const annualData = [];
    let investmentValue = userInputValue.initialInvestment;

    for (let i = 0; i < userInputValue.duration; i++) {
      const year = i + 1;
      const interestEarnedInYear =
        investmentValue * (userInputValue.expectedReturn / 100);
      investmentValue += interestEarnedInYear + userInputValue.annualInvestment;
      const totalInterest =
        investmentValue -
        userInputValue.annualInvestment * year -
        userInputValue.initialInvestment;
      annualData.push({
        year: year,
        interest: interestEarnedInYear,
        valueEndOfYear: investmentValue,
        annualInvestment: userInputValue.annualInvestment,
        totalInterest: totalInterest,
        totalAmountInvested:
          userInputValue.initialInvestment +
          userInputValue.annualInvestment * year,
      });
    }

    return annualData;
  }
}
