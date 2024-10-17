import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-results-screen',
  templateUrl: './results-screen.component.html',
  styleUrls: ['./results-screen.component.css']
})
export class ResultsScreenComponent {
  score: number = 0; // Initialize score
  resultMessage: string = ''; // Message to display
  needSupport: boolean = false; // Default for support needed

  constructor(private router: Router) {
    const navigation = this.router.getCurrentNavigation();
    if (navigation?.extras.state) {
      this.score = navigation.extras.state['score'] || 0; // Set score from navigation state
    }
    this.calculateResult();
  }

  calculateResult() {
    // Reset resultMessage
    this.resultMessage = ''; 

    // Adjust the threshold as needed
    if (this.score >= 3) { // Consider adjusting threshold
      this.resultMessage = 'You do not need mental support.';
      this.needSupport = false;
    } else {
      this.resultMessage = 'You may need mental support.';
      this.needSupport = true;
    }
  }

  goBackToQuestions() {
    this.router.navigate(['/questions']);
  }
}
