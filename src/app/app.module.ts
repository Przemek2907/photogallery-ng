import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {RouterModule, Routes} from '@angular/router';
import {MaterialModule} from './shared/material.module';
import { MainDisplayComponent } from './components/main-display/main-display.component';
import {FormsModule} from '@angular/forms';
import { MainNavComponent } from './components/main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { ContactComponent } from './components/contact/contact.component';
import { PricingComponent } from './components/pricing/pricing.component';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { SingleAlbumComponent } from './components/portfolio/single-album/single-album.component';
import { HeroComponent } from './components/hero/hero.component';

const routes: Routes = [
  { path: '', component: HeroComponent},
  { path: 'contact', component: ContactComponent},
  { path: 'about', component: AboutMeComponent},
  { path: 'portfolio', component: PortfolioComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    MainDisplayComponent,
    MainNavComponent,
    ContactComponent,
    PricingComponent,
    AboutMeComponent,
    PortfolioComponent,
    SingleAlbumComponent,
    HeroComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    RouterModule.forRoot(routes),
    FormsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
