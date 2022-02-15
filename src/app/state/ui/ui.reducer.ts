import { createReducer, on } from '@ngrx/store'
import { toggleSidebarClicked, topicsLoadingStarted, topicsLoadingFinished, photosLoadingStarted, photosLoadingFinished } from './ui.actions'

export interface UiState {
  sidebarOpened: boolean,
  topicsListLoading: boolean,
  photosListLoading: boolean,
}

export const initialState: UiState = {
  sidebarOpened: true,
  topicsListLoading: false,
  photosListLoading: false,
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
  on(
    photosLoadingStarted,
    state => ({
      ...state,
      photosListLoading: true,
    })
  ),
  on(
    photosLoadingFinished,
    state => ({
      ...state,
      photosListLoading: false,
    })
  ),
)