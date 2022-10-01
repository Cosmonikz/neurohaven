import { Component, OnInit } from '@angular/core';
import { ApplicationService } from '../application.service';

@Component({
  selector: 'app-question-screen',
  templateUrl: './question-screen.component.html',
  styleUrls: ['./question-screen.component.css']
})
export class QuestionScreenComponent implements OnInit {

  constructor(private applicationService: ApplicationService) { }

  listOfQuestions: any[] = [];

  questionProgress = {
    a: 0,
    b: 0,
    c: 0,
    total: 0,
    answered: 0,
  };

  ngOnInit(): void {

    this.applicationService.returnListOfQuestions().subscribe((res: any) => {
      console.log(res);
      this.listOfQuestions = res;
      // this.listOfQuestions.forEach((question:any) => {
      // })

      this.questionProgress = {
        a: 0,
        b: 0,
        c: 0,
        total: this.listOfQuestions.length,
        answered: 0,
      }
    })
  }


  makeSelectionGreen(classGiven: any, count: string) {


    let position = classGiven.split("_")[1];

    // @ts-ignore
    console.log(document.querySelector(`.${classGiven}`).style.backgroundColor)
    // @ts-ignore
    if (document.querySelector(`.${classGiven}`).style.backgroundColor != "green") {
      switch (count) {
        case "a":
          // @ts-ignore

          this.questionProgress.a++;



          // @ts-ignore
          document.querySelector(`.b_${position}`).style.visibility = "hidden";
          // @ts-ignore
          document.querySelector(`.c_${position}`).style.visibility = "hidden";

          break;
        case "b":
          this.questionProgress.b++;
          // @ts-ignore
          document.querySelector(`.a_${position}`).style.visibility = "hidden";
          // @ts-ignore
          document.querySelector(`.c_${position}`).style.visibility = "hidden";
          break;
        case "c":
          // @ts-ignore
          document.querySelector(`.b_${position}`).style.visibility = "hidden";
          // @ts-ignore
          document.querySelector(`.a_${position}`).style.visibility = "hidden";
          this.questionProgress.c++;
          break;
      }
      this.questionProgress.answered++;

    }
    if (this.questionProgress.answered == this.questionProgress.total) {
      console.log("ANSWERED ALL OF THE QUESTIONS");
      this.proceedFurther();
    }

    // @ts-ignore
    document.querySelector(`.${classGiven}`).style.backgroundColor = "green";

    console.log(this.questionProgress)


  }


  proceedFurther() {

    let percentageComposition;
    
  }


}