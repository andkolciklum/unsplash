import { createReducer, on } from '@ngrx/store'
import { retrievedTopicsList, topicSelected } from './topics.actions'
import { Topic } from '@models/topic.model'

export interface TopicsState {
  topicsList: Topic[],
  activeTopic: Topic | null,
}

export const initialState: TopicsState = {
  topicsList: [],
  activeTopic: null,
}

export const topicsReducer = createReducer(
  initialState,
  on(
    retrievedTopicsList,
    (state, { topics }) => ({
      ...state,
      topicsList: topics,
    })
  ),
  on(
    topicSelected,
    (state, { topic }) => ({
      ...state,
      activeTopic: topic,
    })
  ),
)