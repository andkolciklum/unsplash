import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { StoreModule } from '@ngrx/store'

import { MatToolbarModule } from '@angular/material/toolbar'
import { MatSidenavModule } from '@angular/material/sidenav'
import { MatButtonModule } from '@angular/material/button'
import { MatIconModule } from '@angular/material/icon'

import { TopicsListComponent } from './topics-list/topics-list.component'
import { TopicControlsComponent } from './topic-controls/topic-controls.component'
import { TopicPicturesComponent } from './topic-pictures/topic-pictures.component'

@NgModule({
  declarations: [
    AppComponent,
    TopicsListComponent,
    TopicControlsComponent,
    TopicPicturesComponent
  ],
  imports: [
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    StoreModule.forRoot({}, {})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
