import { createFeatureSelector, createSelector } from '@ngrx/store'
import { UiState } from './ui.reducer'

export const selectUi = createFeatureSelector<UiState>('ui')

export const selectSidebarOpened = createSelector(
  selectUi,
  (state: UiState) => state.sidebarOpened
)

export const selectTopicsListLoading = createSelector(
  selectUi,
  (state: UiState) => state.topicsListLoading
)

export const selectPhotosListLoading = createSelector(
  selectUi,
  (state: UiState) => state.photosListLoading
)