import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';
import { SkeloadDirective } from './skeload.directive';
import { SkeloadComponent } from './skeload/skeload.component';

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    SkeloadDirective,
    SkeloadComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
