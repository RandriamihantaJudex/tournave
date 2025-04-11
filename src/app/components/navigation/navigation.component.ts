import { Component, signal } from '@angular/core';
interface Device {
  id: number; 
  name: string;
  flag: string;
}
@Component({
  selector: 'app-navigation',
  imports: [],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.css'
})
export class NavigationComponent {
  devise_actuel= signal({id:1,name:'EUR0',flag:'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Flag_of_France.svg/2560px-Flag_of_France.svg.png'});  
  devises:Device[] =[
    {id:1,name:'EUR0',flag:'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Flag_of_France.svg/2560px-Flag_of_France.svg.png'},
    {id:2,name:'DOLLAR',flag:'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Flag_of_the_United_States_%28Pantone%29.svg/langfr-225px-Flag_of_the_United_States_%28Pantone%29.svg.png'},
    {id:3,name:'ARIARY',flag:'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Flag_of_Madagascar.svg/1024px-Flag_of_Madagascar.svg.png'}
  ]

  show = signal(false);

  toggleDiv() {
    this.show.set(!this.show());
  }

  getDivices(name:Device){
    this.devise_actuel.set(name);
    this.toggleDiv();
    }

}
