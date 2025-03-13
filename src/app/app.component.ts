import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  yourExperience: boolean = true; 
  jobType: string = 'part-time';
  selectedWorkplace: string = 'hybrid';

  onTabChange(event: any) {
    this.yourExperience = event.index === 0;
  }

  selectWorkplace(type: string) {
    this.selectedWorkplace = type;
  }
  
}
