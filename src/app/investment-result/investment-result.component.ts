import { Component, computed, inject, input } from '@angular/core';
import { CurrencyPipe } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { InvestmentService } from './investment.service';

@Component({
  selector: 'app-investment-result',
  standalone: true,
  imports: [FormsModule, CurrencyPipe],
  templateUrl: './investment-result.component.html',
  styleUrl: './investment-result.component.css',
})
export class InvestmentResultComponent {
  private investmentService = inject(InvestmentService);

  annualData = this.investmentService.resultData.asReadonly();
}
