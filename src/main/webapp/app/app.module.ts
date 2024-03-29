import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import './vendor';
import { Jh641SharedModule } from 'app/shared/shared.module';
import { Jh641CoreModule } from 'app/core/core.module';
import { Jh641AppRoutingModule } from './app-routing.module';
import { Jh641HomeModule } from './home/home.module';
import { Jh641EntityModule } from './entities/entity.module';
// jhipster-needle-angular-add-module-import JHipster will add new module here
import { JhiMainComponent } from './layouts/main/main.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { PageRibbonComponent } from './layouts/profiles/page-ribbon.component';
import { ActiveMenuDirective } from './layouts/navbar/active-menu.directive';
import { ErrorComponent } from './layouts/error/error.component';

@NgModule({
  imports: [
    BrowserModule,
    Jh641SharedModule,
    Jh641CoreModule,
    Jh641HomeModule,
    // jhipster-needle-angular-add-module JHipster will add new module here
    Jh641EntityModule,
    Jh641AppRoutingModule
  ],
  declarations: [JhiMainComponent, NavbarComponent, ErrorComponent, PageRibbonComponent, ActiveMenuDirective, FooterComponent],
  bootstrap: [JhiMainComponent]
})
export class Jh641AppModule {}
