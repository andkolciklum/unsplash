import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from '@views/app/app.component'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { StoreModule } from '@ngrx/store'
import { uiReducer } from '@state/ui/ui.reducer';
import { topicsReducer } from '@state/topics/topics.reducer';

import { MatToolbarModule } from '@angular/material/toolbar'
import { MatSidenavModule } from '@angular/material/sidenav'
import { MatButtonModule } from '@angular/material/button'
import { MatListModule } from '@angular/material/list'
import { MatDividerModule } from '@angular/material/divider'
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner'

import { TopicsListComponent } from '@components/topics-list/topics-list.component'
import { TopicControlsComponent } from '@components/topic-controls/topic-controls.component'
import { TopicPicturesComponent } from '@components/topic-pictures/topic-pictures.component'

@NgModule({
  declarations: [
    AppComponent,
    TopicsListComponent,
    TopicControlsComponent,
    TopicPicturesComponent
  ],
  imports: [
    HttpClientModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatListModule,
    MatDividerModule,
    MatProgressSpinnerModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    StoreModule.forRoot({
      ui: uiReducer,
      topics: topicsReducer,
    }, {})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
