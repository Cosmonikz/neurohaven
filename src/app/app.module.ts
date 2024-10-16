import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // Import this
import { HttpClientModule } from '@angular/common/http'; // Import this
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingScreenComponent } from './landing-screen/landing-screen.component';
import { QuestionScreenComponent } from './question-screen/question-screen.component';
import { ResultsScreenComponent } from './results-screen/results-screen.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingScreenComponent,
    QuestionScreenComponent,
    ResultsScreenComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule, // Add here
    HttpClientModule, // Add here
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
