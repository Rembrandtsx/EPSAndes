import { Component } from '@angular/core';
import { EPSAndesService } from './epsandes.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'front';
  epsList = [];
  constructor(private epsService: EPSAndesService){
    this.epsService.getAllEps().subscribe(result=>{
      console.log(result);      
      this.epsList = result;
    });
  }

}
