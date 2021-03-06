import { createFeatureSelector, createSelector } from '@ngrx/store'
import { TopicsState } from './topics.reducer'

export const selectTopics = createFeatureSelector<TopicsState>('topics')

export const selectTopicsList = createSelector(
  selectTopics,
  (state: TopicsState) => state.topicsList
)

export const selectActiveTopic = createSelector(
  selectTopics,
  (state: TopicsState) => state.activeTopic
)

export const selectCurrentPage = createSelector(
  selectTopics,
  (state: TopicsState) => state.currentPage
)

export const selectTotalPages = createSelector(
  selectTopics,
  (state: TopicsState) => state.totalPages
)