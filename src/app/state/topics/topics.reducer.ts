import { createReducer, on } from '@ngrx/store'
import { nextPageClicked, prevPageClicked, retrievedTopicsList, topicSelected } from './topics.actions'
import { Topic } from '@models/topic.model'

const photosPerPage = 30

export interface TopicsState {
  topicsList: Topic[],
  activeTopic: Topic | null,
  currentPage: number,
  totalPages: number,
}

export const initialState: TopicsState = {
  topicsList: [],
  activeTopic: null,
  currentPage: 1,
  totalPages: 1,
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
      currentPage: 1,
      totalPages: Math.ceil(topic.total_photos / photosPerPage),
    })
  ),
  on(
    prevPageClicked,
    (state) => ({
      ...state,
      currentPage: state.currentPage > 1 ? (state.currentPage - 1) : state.currentPage,
    })
  ),
  on(
    nextPageClicked,
    (state) => ({
      ...state,
      currentPage: state.currentPage < state.totalPages ? (state.currentPage + 1) : state.currentPage,
    })
  ),
)