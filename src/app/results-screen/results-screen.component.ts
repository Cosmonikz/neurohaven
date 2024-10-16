import { Component } from '@angular/core';

@Component({
  selector: 'app-results-screen',
  templateUrl: './results-screen.component.html',
  styleUrls: ['./results-screen.component.css']
})
export class ResultsScreenComponent {
  score: number = 0; // Initialize score
  resultMessage: string = ''; // Message to display
  backgroundColor: string = '#ffffff'; // Default background color
  textColor: string = '#000000'; // Default text color
  needSupport: boolean = false; // Default for support needed

  ngOnInit() {
    this.calculateResult();
  }

  calculateResult() {
    // Adjust this logic based on your scoring system
    if (this.score < 5) { // Adjust the threshold as needed
      this.resultMessage = 'You do not need mental support.';
      this.needSupport = false;
    } else {
      this.resultMessage = 'You may need mental support.';
      this.needSupport = true;
    }
  }

  goBackToQuestions() {
    // Logic to navigate back to questions
  }
}
