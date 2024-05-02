import { Component } from '@angular/core';
import { AutosService } from './services/autos.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'test';

  constructor(private autosService: AutosService) {
    console.log(autosService.getAutos());
  }

}
