import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './vist/page/home/home.component';
import { MenuComponent } from './vist/component/menu/menu.component';
import { BannerComponent } from './vist/component/banner/banner.component';
import { SliderComponent } from './vist/component/slider/slider.component';
import { FooterComponent } from './vist/component/footer/footer.component';
import { FichaOfertaComponent } from './vist/component/ficha-oferta/ficha-oferta.component';

import { configService } from './api/config.service';
import { UserService } from './api/user.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuComponent,
    BannerComponent,
    SliderComponent,
    FooterComponent,
    FichaOfertaComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    configService,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
