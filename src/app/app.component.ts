import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { UserInputComponent } from './user-input/user-input.component';
import { InvestmentResultComponent } from './investment-result/investment-result.component';
import { UserInputModel } from './userInput.model';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [HeaderComponent, UserInputComponent, InvestmentResultComponent],
})
export class AppComponent {
  userInputModel: UserInputModel = {
    annualInvestment: 0,
    duration: 0,
    expectedReturn: 0,
    initialInvestment: 0,
  };
  calculate: boolean = false;

  handleUserInput(userInputModel: UserInputModel) {
    console.log(userInputModel);
    this.userInputModel = userInputModel;
  }
}
