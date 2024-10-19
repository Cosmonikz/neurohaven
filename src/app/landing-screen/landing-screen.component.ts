import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing-screen',
  templateUrl: './landing-screen.component.html',
  styleUrls: ['./landing-screen.component.css']
})
export class LandingScreenComponent implements OnInit {
  listOfQuestions: any = []; // Initialize with an empty array
  constructor(private router: Router) { }

  ngOnInit(): void { }

  navigateToQuestionScreen(): void {
    this.router.navigate(['/questions']); // Change to '/questions'
  }

  makeSelectionGreen(arg0: string, arg1: string): void {
    // Add your implementation here
  }
}
