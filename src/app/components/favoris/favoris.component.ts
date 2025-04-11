import { Component } from '@angular/core';

interface Hotels{
  name: string;
  etoile: number;
  localisation: string;
  prix: number;
  image: string;
}
@Component({
  selector: 'app-favoris',
  imports: [],
  templateUrl: './favoris.component.html',
  styleUrl: './favoris.component.css'
})
export class FavorisComponent {
  hotels : Hotels[]= [
    {name:'Pietra Hotel',etoile:3,localisation:'Antananarivo, Madagascar',prix:300,image:'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTR4W80mr2qicazQpjRMAZ91MHiB1BofvJWC3Dt_g098ENGvxQh'},
    {name:'Vieux cep',etoile:2,localisation:'La Reunion, Cilaos',prix:450,image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRP_UVTN0JHyuCRKj8sdTZ4Qa5cerp_Y_ttOB3ud6DfbYtwDUM'},
    {name:'Melville',etoile:2,localisation:'Tamatave, Madagascar',prix:280,image:'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/04/68/24/2c/indigo-sky-hotel.jpg?w=700&h=-1&s=1'},
    {name:'Hiloha hotel',etoile:2,localisation:'Majunga, Madagascar',prix:280,image:'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/13/59/7b/2d/double-queen-on-new-side.jpg?w=700&h=-1&s=1'},
    {name:'Pietra Hotel',etoile:3,localisation:'Antananarivo, Madagascar',prix:300,image:'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTR4W80mr2qicazQpjRMAZ91MHiB1BofvJWC3Dt_g098ENGvxQh'}
  ]

  getEtoilesArray(hotel:Hotels): number[] {
    return Array(hotel.etoile).fill(0);
  }
}
