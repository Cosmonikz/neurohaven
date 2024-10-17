import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ApplicationService } from '../application.service';
import { Router } from '@angular/router';

// Declare external libraries (MediaPipe components)
declare var Camera: any;
declare var FaceMesh: any;
declare var drawConnectors: any;
declare var FACEMESH_TESSELATION: any;

@Component({
  selector: 'app-question-screen',
  templateUrl: './question-screen.component.html',
  styleUrls: ['./question-screen.component.css']
})
export class QuestionScreenComponent implements OnInit, AfterViewInit {
  videoElement: any;
  canvasElement: any;
  contextElem: any;
  camera: any;

  listOfQuestions: any[] = [];
  questionProgress = {
    a: 0,
    b: 0,
    c: 0,
    total: 0,
    answered: 0,
  };

  constructor(private applicationService: ApplicationService, private router: Router) {}

  ngOnInit(): void {
    this.applicationService.returnListOfQuestions().subscribe((res: any) => {
      this.listOfQuestions = res;
      this.questionProgress.total = this.listOfQuestions.length;
    });
  }

  ngAfterViewInit(): void {
    this.setupCameraAndCanvas();
  }

  setupCameraAndCanvas() {
    this.videoElement = document.querySelector("#cameraInput");
    this.canvasElement = document.querySelector("#canvasInput");
    this.contextElem = this.canvasElement.getContext('2d');

    const faceMesh = new FaceMesh({
      locateFile: (file: any) => `https://cdn.jsdelivr.net/npm/@mediapipe/face_mesh/${file}`,
    });

    this.camera = new Camera(this.videoElement, {
      onFrame: async () => {
        await faceMesh.send({ image: this.videoElement });
      },
      width: 1280,
      height: 720
    });

    this.camera.start();

    faceMesh.onResults((results: any) => {
      this.handleFaceMeshResults(results);
    });
  }

  handleFaceMeshResults(results: any) {
    this.contextElem.clearRect(0, 0, this.canvasElement.width, this.canvasElement.height);
    this.contextElem.drawImage(results.image, 0, 0, this.canvasElement.width, this.canvasElement.height);

    if (results.multiFaceLandmarks) {
      for (const landmarks of results.multiFaceLandmarks) {
        drawConnectors(this.contextElem, landmarks, FACEMESH_TESSELATION, {
          color: '#C0C0C070',
          lineWidth: 1,
        });
      }
    }
  }

  makeSelectionGreen(classGiven: string, count: string) {
    let position = classGiven.split("_")[1];

    const element = document.querySelector(`.${classGiven}`) as HTMLElement;
    if (element && element.style.backgroundColor !== "green") {
      switch (count) {
        case "a":
          this.questionProgress.a++;
          this.disableOtherOptions(position, "a");
          break;
        case "b":
          this.questionProgress.b++;
          this.disableOtherOptions(position, "b");
          break;
        case "c":
          this.questionProgress.c++;
          this.disableOtherOptions(position, "c");
          break;
      }
      this.questionProgress.answered++;
      element.style.backgroundColor = "green";
    }

    if (this.questionProgress.answered === this.questionProgress.total) {
      this.proceedFurther();
    }
  }

  disableOtherOptions(position: string, selectedOption: string) {
    const options = ["a", "b", "c"].filter(opt => opt !== selectedOption);
    options.forEach(opt => {
      const optionElement = document.querySelector(`.${opt}_${position}`) as HTMLElement;
      if (optionElement) {
        optionElement.style.visibility = "hidden";
      }
    });
  }

  proceedFurther() {
    const totalScore = this.questionProgress.a * 3 + this.questionProgress.b * 2 + this.questionProgress.c * 1;
    const averageScore = totalScore / (this.questionProgress.answered || 1);
    let resultMessage = '';
  
    // Set conditions based on the averageScore
    if (averageScore >= 3) {
      resultMessage = 'You do not need mental support.'; // Good mental health
    } else if (averageScore >= 2) {
      resultMessage = 'You’re doing okay, but there’s room for improvement.'; // Okay
    } else {
      resultMessage = 'Consider seeking support for better mental health.'; // Need support
    }
  
    this.router.navigate(['/results-screen'], { state: { result: resultMessage, score: Math.round(averageScore) } });
  }
}  