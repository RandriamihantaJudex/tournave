import { Component } from '@angular/core';

@Component({
  selector: 'app-avis',
  imports: [],
  templateUrl: './avis.component.html',
  styleUrl: './avis.component.css'
})
export class AvisComponent {
  avis = [
    {nom:'Jean Phillipe',ville:'Paris,France',commentaire:`Nos sejour a Nosy Be etait vraiment super, j'ai pu visiter la ville toute entiere car leur prix etait abordable`},
    {nom:'Vololoniana Stephanie',ville:'Antananarivo, Madagascar',commentaire:`Ce site est vraiment super j’avoue ! J’ai enfin visiter DisneyLand qui était mon rêve d’enfance.`},
    {nom:'Jean Phillipe',ville:'Paris,France',commentaire:`Nos sejour a Nosy Be etait vraiment super, j'ai pu visiter la ville toute entiere car leur prix etait abordable`},
    {nom:'Vololoniana Stephanie',ville:'Antananarivo, Madagascar',commentaire:`Ce site est vraiment super j’avoue ! J’ai enfin visiter DisneyLand qui était mon rêve d’enfance.`},
  ]
}
