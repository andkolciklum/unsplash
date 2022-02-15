import { Component } from '@angular/core'
import { Store } from '@ngrx/store'
import { UnsplashApiService } from '../../unsplashApi.service'
import { selectTopicsList } from '@state/topics/topics.selectors'
import { selectTopicsListLoading } from '@state/ui/ui.selectors'
import { topicSelected } from '@state/topics/topics.actions'
import { retrievedPhotosList } from '@state/photos/photos.actions'
import { photosLoadingStarted, photosLoadingFinished } from '@state/ui/ui.actions'
import { Topic } from '@models/topic.model'
import { delay } from 'rxjs'

@Component({
  selector: 'app-topics-list',
  templateUrl: './topics-list.component.html',
  styleUrls: ['./topics-list.component.scss']
})
export class TopicsListComponent {
  topics$ = this.store.select(selectTopicsList)
  topicsListLoading$ = this.store.select(selectTopicsListLoading)

  constructor(
    private store: Store,
    private apiService: UnsplashApiService,
  ) {}

  topicClick (topic: Topic) {
    this.store.dispatch(topicSelected({ topic }))
    this.store.dispatch(photosLoadingStarted())
    this.apiService
      .getPhotos(topic, 1)
      .pipe(delay(1000)) // delay here just to simulate some latency
      .subscribe(photos => {
        this.store.dispatch(retrievedPhotosList({ photos }))
        this.store.dispatch(photosLoadingFinished())
      })
  }
}
