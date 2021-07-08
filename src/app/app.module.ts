import { BrowserModule, HammerModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TeamCollaborationComponent } from './team-collaboration/team-collaboration.component';
import { IgxAvatarModule, IgxIconModule, IgxNavigationDrawerModule, IgxListModule, IgxButtonModule, IgxGridModule } from 'igniteui-angular';
import { FormsModule } from '@angular/forms';
import { MasterViewComponent } from './master-view/master-view.component';

@NgModule({
  declarations: [
    AppComponent,
    TeamCollaborationComponent,
    MasterViewComponent
  ],
  imports: [
    BrowserModule,
    HammerModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    IgxAvatarModule,
    IgxIconModule,
    IgxNavigationDrawerModule,
    IgxListModule,
    IgxButtonModule,
    IgxGridModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
