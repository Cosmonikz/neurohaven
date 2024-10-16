import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; // Import Router

@Component({
  selector: 'app-landing-screen',
  templateUrl: './landing-screen.component.html',
  styleUrls: ['./landing-screen.component.css']
})
export class LandingScreenComponent implements OnInit {

  constructor(private router: Router) { } // Inject Router

  ngOnInit(): void {
  }

  navigateToQuestionScreen(): void { // Add this method
    this.router.navigate(['/question-screen']);
  }
}
