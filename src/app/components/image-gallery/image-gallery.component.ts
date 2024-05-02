import { Component } from '@angular/core';
import { ImagesService } from '../../services/images.service';
import { Bike } from '../../models/bike';

@Component({
  selector: 'app-image-gallery',
  standalone: true,
  imports: [],
  templateUrl: './image-gallery.component.html',
  styleUrl: './image-gallery.component.css'
})
export class ImageGalleryComponent {

  allImages: Bike[] = []; // array de bicicletas/ muchas maneras de inyectar las bicicletas.
  filterBy: string = 'all';

  constructor(private imageService:ImagesService){// inyectamos servicio
    
  this.allImages = imageService.getImages();// me traigo todas imagenes.
  console.log("Todas las imagenes que me retorno el servicio previamente inyectado "); // llamamos a un metodo service para traer todos los datos de las imagenes (profesor)
  //this.allImages = imageService.getImages();
  console.dir(this.allImages);

  console.log("Buscamos la imagen de id 6 "); // traer / buscamos imagen por id, en este caso 6.
  console.dir(imageService.getImageById(6)); // 6 podria venir por el imput de un formulario.
}

//  filterBy(brand :string ) {
//    this.allImages = this.allImages.filter(image => image.brand == brand);
//    console.log(this.allImages);
//  }

  }





