import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ResultService {
  private results: any; // Change 'any' to a specific type if needed

  setResults(data: any) {
    this.results = data;
  }

  getResults() {
    return this.results;
  }
}
