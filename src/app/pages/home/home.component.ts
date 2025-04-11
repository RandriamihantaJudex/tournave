import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';


interface Device {
  id: number; 
  name: string;
  flag: string;
}
interface Hotels{
  name: string;
  etoile: number;
  localisation: string;
  prix: number;
  image: string;
}
interface Faq {
  id: number;
  question: string;
  reponse: string;
  show: boolean;
}

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
devise_actuel= signal({id:1,name:'EUR0',flag:'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Flag_of_France.svg/2560px-Flag_of_France.svg.png'});  
devises:Device[] =[
  {id:1,name:'EUR0',flag:'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Flag_of_France.svg/2560px-Flag_of_France.svg.png'},
  {id:2,name:'DOLLAR',flag:'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Flag_of_the_United_States_%28Pantone%29.svg/langfr-225px-Flag_of_the_United_States_%28Pantone%29.svg.png'},
  {id:3,name:'ARIARY',flag:'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Flag_of_Madagascar.svg/1024px-Flag_of_Madagascar.svg.png'}
]

hotels : Hotels[]= [
  {name:'Pietra Hotel',etoile:3,localisation:'Antananarivo, Madagascar',prix:300,image:'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTR4W80mr2qicazQpjRMAZ91MHiB1BofvJWC3Dt_g098ENGvxQh'},
  {name:'Vieux cep',etoile:2,localisation:'La Reunion, Cilaos',prix:450,image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRP_UVTN0JHyuCRKj8sdTZ4Qa5cerp_Y_ttOB3ud6DfbYtwDUM'},
  {name:'Melville',etoile:2,localisation:'Tamatave, Madagascar',prix:280,image:'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/04/68/24/2c/indigo-sky-hotel.jpg?w=700&h=-1&s=1'},
  {name:'Hiloha hotel',etoile:2,localisation:'Majunga, Madagascar',prix:280,image:'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/13/59/7b/2d/double-queen-on-new-side.jpg?w=700&h=-1&s=1'},
  {name:'Pietra Hotel',etoile:3,localisation:'Antananarivo, Madagascar',prix:300,image:'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTR4W80mr2qicazQpjRMAZ91MHiB1BofvJWC3Dt_g098ENGvxQh'}
]

avis = [
  {nom:'Jean Phillipe',ville:'Paris,France',commentaire:`Nos sejour a Nosy Be etait vraiment super, j'ai pu visiter la ville toute entiere car leur prix etait abordable`},
  {nom:'Vololoniana Stephanie',ville:'Antananarivo, Madagascar',commentaire:`Ce site est vraiment super j’avoue ! J’ai enfin visiter DisneyLand qui était mon rêve d’enfance.`},
  {nom:'Jean Phillipe',ville:'Paris,France',commentaire:`Nos sejour a Nosy Be etait vraiment super, j'ai pu visiter la ville toute entiere car leur prix etait abordable`},
  {nom:'Vololoniana Stephanie',ville:'Antananarivo, Madagascar',commentaire:`Ce site est vraiment super j’avoue ! J’ai enfin visiter DisneyLand qui était mon rêve d’enfance.`},
]

faqs:Faq[] =[
  {id:1,question:`Les hébergements incluent-ils le petit déjeuner ?`,reponse:`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,show:false},
  {id:2,question:`Proposez-vous des réductions ou des offres spéciales ?`,reponse:`Oui, nous proposons des réductions et offres spéciales, comme des promotions saisonnières, des tarifs pour groupes ou des offres de dernière minute. Abonnez-vous à notre newsletter pour ne rien manquer !`,show:false},
  {id:3,question:`Puis-je louer directement mes moyens de transport locaux ?`,reponse:`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,show:false},
  {id:4,question:`Votre service client est-il disponible 24/7 ?`,reponse:`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,show:false},
  {id:5,question:`Que se passe-t-il si mon voyage est annulé pour des raisons indépendantes de ma volonté ?`,reponse:`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,show:false},
]

hideShow(faq:Faq){
  this.faqs.forEach(element => {
    if(element.id!== faq.id)
    element.show=false;
  });
  faq.show?faq.show=false:faq.show=true;
}


getEtoilesArray(hotel:Hotels): number[] {
  return Array(hotel.etoile).fill(0);
}

getDivices(name:Device){
this.devise_actuel.set(name);
this.toggleDiv();
}

show = signal(false);

toggleDiv() {
  this.show.set(!this.show());
}



}
