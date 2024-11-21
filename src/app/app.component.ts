import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { UserInputComponent } from './user-input/user-input.component';
import { InvestmentResultComponent } from './investment-result/investment-result.component';
import { AnnualDataModel } from './annualData.model';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [HeaderComponent, UserInputComponent, InvestmentResultComponent],
})
export class AppComponent {
  annualData: AnnualDataModel[] = [];
  calculate: boolean = false;

  handleAnnualData(annualData: AnnualDataModel[]) {
    console.log(annualData);
    this.annualData = annualData;
  }
}
