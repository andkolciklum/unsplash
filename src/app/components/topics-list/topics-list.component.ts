import { Component } from '@angular/core'
import { Store } from '@ngrx/store'
import { selectTopicsList } from '@state/topics/topics.selectors'
import { selectTopicsListLoading } from '@state/ui/ui.selectors'
import { Topic } from '@models/topic.model'

@Component({
  selector: 'app-topics-list',
  templateUrl: './topics-list.component.html',
  styleUrls: ['./topics-list.component.scss']
})
export class TopicsListComponent {
  topics$ = this.store.select(selectTopicsList)
  topicsListLoading$ = this.store.select(selectTopicsListLoading)

  constructor(
    private store: Store
  ) {}

  topicClick (topic: Topic) {
    console.log(topic)
  }
}
