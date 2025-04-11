import { Component } from '@angular/core';

interface Faq {
  id: number;
  question: string;
  reponse: string;
  show: boolean;
}
@Component({
  selector: 'app-faq',
  imports: [],
  templateUrl: './faq.component.html',
  styleUrl: './faq.component.css'
})
export class FaqComponent {
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
}
