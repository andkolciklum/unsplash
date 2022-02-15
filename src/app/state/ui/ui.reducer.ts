import { createReducer, on } from '@ngrx/store'
import { toggleSidebarClicked, topicsLoadingStarted, topicsLoadingFinished } from './ui.actions'

export interface UiState {
  sidebarOpened: boolean,
  topicsListLoading: boolean,
  picturesListLoading: boolean,
}

export const initialState: UiState = {
  sidebarOpened: true,
  topicsListLoading: false,
  picturesListLoading: false,
}

export const uiReducer = createReducer(
  initialState,
  on(
    toggleSidebarClicked,
    state => ({
      ...state,
      sidebarOpened: !state.sidebarOpened
    })
  ),
  on(
    topicsLoadingStarted,
    state => ({
      ...state,
      topicsListLoading: true,
    })
  ),
  on(
    topicsLoadingFinished,
    state => ({
      ...state,
      topicsListLoading: false,
    })
  ),
)