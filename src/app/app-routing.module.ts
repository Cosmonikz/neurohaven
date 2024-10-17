import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingScreenComponent } from './landing-screen/landing-screen.component';
import { QuestionScreenComponent } from './question-screen/question-screen.component';
import { ResultsScreenComponent } from './results-screen/results-screen.component';

const routes: Routes = [
  { path: '', component: LandingScreenComponent }, // Landing page route
  { path: 'questions', component: QuestionScreenComponent },
  { path: 'results-screen', component: ResultsScreenComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
