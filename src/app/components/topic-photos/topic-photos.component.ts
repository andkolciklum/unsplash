import { Component } from '@angular/core'
import { Topic } from '@models/topic.model'
import { Store } from '@ngrx/store'
import { retrievedPhotosList } from '@state/photos/photos.actions'
import { selectPhotosList } from '@state/photos/photos.selectors'
import { selectActiveTopic, selectCurrentPage } from '@state/topics/topics.selectors'
import { photosLoadingFinished, photosLoadingStarted } from '@state/ui/ui.actions'
import { selectPhotosListLoading } from '@state/ui/ui.selectors'
import { combineLatest, debounceTime, delay } from 'rxjs'
import { UnsplashApiService } from 'src/app/unsplashApi.service'

@Component({
  selector: 'app-topic-photos',
  templateUrl: './topic-photos.component.html',
  styleUrls: ['./topic-photos.component.scss']
})
export class TopicPhotosComponent {
  photos$ = this.store.select(selectPhotosList)
  photosListLoading$ = this.store.select(selectPhotosListLoading)
  activeTopic$ = this.store.select(selectActiveTopic)
  currentPage$ = this.store.select(selectCurrentPage)

  constructor(
    private store: Store,
    private apiService: UnsplashApiService,
  ) {}

  loadPhotos (topic: Topic, page: number) {
    this.store.dispatch(photosLoadingStarted())
    this.apiService
      .getPhotos(topic, page)
      .pipe(delay(1000)) // delay here to simulate some latency
      .subscribe(photos => {
        this.store.dispatch(retrievedPhotosList({ photos }))
        this.store.dispatch(photosLoadingFinished())
      })
  }

  ngOnInit(): void {
    combineLatest({
      topic: this.activeTopic$,
      page: this.currentPage$,
    })
    .pipe(debounceTime(0))
    .subscribe(({ topic, page }) => {
      if (topic) {
        this.loadPhotos(topic, page)
      }
    })
  }
}
