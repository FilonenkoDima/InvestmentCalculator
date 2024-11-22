import { Component, signal } from '@angular/core';
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
  userInputModel = signal<UserInputModel | undefined>(undefined);

  handleUserInput(userInputModel: UserInputModel) {
    console.log(userInputModel);
    this.userInputModel.set(userInputModel);
  }
}
