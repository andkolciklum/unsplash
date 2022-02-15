import { createAction, props } from '@ngrx/store'
import { Topic } from '@models/topic.model'

export const retrievedTopicsList = createAction(
  '[Topics] Retrieve topics success',
  props<{ topics: Topic[] }>()
);

export const topicSelected = createAction(
  '[Topics] Topic selected',
  props<{ topic: Topic }>()
);