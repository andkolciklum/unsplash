import { Component } from '@angular/core'
import { Store } from '@ngrx/store'
import { selectPhotosList } from '@state/photos/photos.selectors'
import { selectPhotosListLoading } from '@state/ui/ui.selectors'

@Component({
  selector: 'app-topic-photos',
  templateUrl: './topic-photos.component.html',
  styleUrls: ['./topic-photos.component.scss']
})
export class TopicPhotosComponent {
  photos$ = this.store.select(selectPhotosList)
  photosListLoading$ = this.store.select(selectPhotosListLoading)

  constructor(
    private store: Store
  ) {}
}
