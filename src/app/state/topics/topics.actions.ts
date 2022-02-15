import { createAction, props } from '@ngrx/store'
import { Topic } from '@models/topic.model'

export const retrievedTopicsList = createAction(
  '[Topics] Retrieve topics success',
  props<{ topics: Topic[] }>()
)

export const topicSelected = createAction(
  '[Topics] Topic selected',
  props<{ topic: Topic }>()
)

export const prevPageClicked = createAction(
  '[Topics] Prev page clicked'
)

export const nextPageClicked = createAction(
  '[Topics] Next page clicked'
)