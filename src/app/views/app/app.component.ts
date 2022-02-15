import { Component, OnInit } from '@angular/core'
import { Store } from '@ngrx/store'
import { selectSidebarOpened } from '@state/ui/ui.selectors'
import { UnsplashApiService } from '../../unsplashApi.service'
import { retrievedTopicsList } from '@state/topics/topics.actions'
import { topicsLoadingStarted, topicsLoadingFinished } from '@state/ui/ui.actions'
import { delay } from 'rxjs'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(
    private store: Store,
    private apiService: UnsplashApiService,
  ) {}

  sidebarOpened$ = this.store.select(selectSidebarOpened)

  ngOnInit() {
    this.store.dispatch(topicsLoadingStarted())
    this.apiService
      .getTopics()
      .pipe(delay(2000)) // delay here just to simulate some latency
      .subscribe(topics => {
        this.store.dispatch(retrievedTopicsList({ topics }))
        this.store.dispatch(topicsLoadingFinished())
      })
  }
}
