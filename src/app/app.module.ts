import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from '@views/app/app.component'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { StoreModule } from '@ngrx/store'
import { uiReducer } from '@state/ui/ui.reducer'
import { topicsReducer } from '@state/topics/topics.reducer'
import { photosReducer } from '@state/photos/photos.reducer'

import { MatToolbarModule } from '@angular/material/toolbar'
import { MatSidenavModule } from '@angular/material/sidenav'
import { MatButtonModule } from '@angular/material/button'
import { MatListModule } from '@angular/material/list'
import { MatDividerModule } from '@angular/material/divider'
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner'
import { MatCardModule } from '@angular/material/card'

import { TopicsListComponent } from '@components/topics-list/topics-list.component'
import { TopicControlsComponent } from '@components/topic-controls/topic-controls.component'
import { TopicPhotosComponent } from '@components/topic-photos/topic-photos.component'

@NgModule({
  declarations: [
    AppComponent,
    TopicsListComponent,
    TopicControlsComponent,
    TopicPhotosComponent
  ],
  imports: [
    HttpClientModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatListModule,
    MatDividerModule,
    MatProgressSpinnerModule,
    MatCardModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    StoreModule.forRoot({
      ui: uiReducer,
      topics: topicsReducer,
      photos: photosReducer,
    }, {})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
