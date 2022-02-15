import { Component } from '@angular/core'
import { Store } from '@ngrx/store'
import { selectActiveTopic, selectTopicsList } from '@state/topics/topics.selectors'
import { selectTopicsListLoading } from '@state/ui/ui.selectors'
import { topicSelected } from '@state/topics/topics.actions'
import { Topic } from '@models/topic.model'

@Component({
  selector: 'app-topics-list',
  templateUrl: './topics-list.component.html',
  styleUrls: ['./topics-list.component.scss']
})
export class TopicsListComponent {
  topics$ = this.store.select(selectTopicsList)
  topicsListLoading$ = this.store.select(selectTopicsListLoading)
  activeTopic$ = this.store.select(selectActiveTopic)

  constructor(
    private store: Store,
  ) {}

  topicClick (topic: Topic) {
    this.store.dispatch(topicSelected({ topic }))
  }
}
