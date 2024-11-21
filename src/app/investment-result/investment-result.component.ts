import { Component, Input } from '@angular/core';
import { CurrencyPipe } from '@angular/common';

import { AnnualDataModel } from '../annualData.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-investment-result',
  standalone: true,
  imports: [FormsModule, CurrencyPipe],
  templateUrl: './investment-result.component.html',
  styleUrl: './investment-result.component.css',
})
export class InvestmentResultComponent {
  calculate: boolean = false;
  @Input() annualData: AnnualDataModel[] = [];
}
