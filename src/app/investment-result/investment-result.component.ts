import { Component, inject, input } from '@angular/core';
import { CurrencyPipe } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { UserInputModel } from '../userInput.model';
import { InvestmentService } from './investment.service';

@Component({
  selector: 'app-investment-result',
  standalone: true,
  imports: [FormsModule, CurrencyPipe],
  templateUrl: './investment-result.component.html',
  styleUrl: './investment-result.component.css',
})
export class InvestmentResultComponent {
  userInput = input<UserInputModel | undefined>();

  private investmentService = inject(InvestmentService);
  // constructor(private investmentService: InvestmentService) { }

  get annualData() {
    return this.investmentService.resultData;
  }
}
