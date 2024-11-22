# Investment Calculator

## About the Project

The **Investment Calculator** is a web application designed to simplify financial planning. It helps users calculate potential investment returns based on principal amount, interest rate, and investment duration.

## Demo

![](demo.gif)

## Getting Started

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/FilonenkoDima/InvestmentCalculator.git
   ```
2. Navigate to the project directory:
   ```bash
   cd InvestmentCalculator
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

### Running the Application

To run the application in development mode:

```bash
ng serve
```

or

```bash
npm start
```

Then open your browser and navigate to `http://localhost:4200/`.

## Project Structure

Here’s an overview of the project structure:

```
InvestmentCalculator/
├── src/
│   ├── app/
│   │   ├── header/              # Header components
│   │   ├── investment-result/   # Displays calculated results
│   │   ├── user-input/          # Form for user data input
│   │   ├── app.module.ts        # Main Angular module
│   │   └── app.component.ts     # Root component of the application
│   ├── main.ts                  # Entry point for Angular application
│   └── index.html               # Application's base HTML file
└── angular.json                 # Angular CLI configuration file

```

## Feedback

Feel free to open an issue or submit a pull request. Contributions are welcome!
