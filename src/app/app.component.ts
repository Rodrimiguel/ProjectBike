import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AutosService } from './services/autos.service';
import { ImageGalleryComponent } from "./components/image-gallery/image-gallery.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, ImageGalleryComponent]
})
export class AppComponent {
  title = 'ProjectBike';

  constructor(private autosService : AutosService){// INYECTAMOS EL CONSTRUCTOR. -- NO LLAMAS AL CONSTRUCTOR (ACA ESTAMOS INYECTAMOS LA DEPENDENCIA)
    console.log(autosService.getAutos());// A PARTIR DE ACA SERIA LLEVAR ESTA RESPUESTA AL HTML.
// Delegar (inject dependency)
  }
  
// COMO A UN COMPONENTE INVOCAR O INYECTAR UN SERVICIO, Y QUE ESE SERVICIO NOS TRAIGA UNA DETERMINADA INFORMACION.
// LUEGO SE HACE EL BLINDEO Y SE LLEVA AL HTML.

}
