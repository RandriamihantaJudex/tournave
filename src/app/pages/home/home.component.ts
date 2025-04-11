import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { NavigationComponent } from '../../components/navigation/navigation.component';
import { ActivitiesComponent } from '../../components/activities/activities.component';
import { DevisComponent } from '../../components/devis/devis.component';
import { PopulaireComponent } from '../../components/populaire/populaire.component';
import { OffreSpecialComponent } from '../../components/offre-special/offre-special.component';
import { FavorisComponent } from '../../components/favoris/favoris.component';
import { AvisComponent } from "../../components/avis/avis.component";
import { FaqComponent } from '../../components/faq/faq.component';
import { FooterComponent } from '../../components/footer/footer.component';






@Component({
  selector: 'app-home',
  imports: [
    CommonModule,
    NavigationComponent,
    ActivitiesComponent,
    DevisComponent,
    PopulaireComponent,
    OffreSpecialComponent,
    FavorisComponent,
    AvisComponent,
    FaqComponent,
    FooterComponent
],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {












}
