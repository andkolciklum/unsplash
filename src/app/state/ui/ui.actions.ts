import { createAction } from '@ngrx/store'
 
export const toggleSidebarClicked = createAction('[UI] toggle sidebar')
export const topicsLoadingStarted = createAction('[UI] topics loading started')
export const topicsLoadingFinished = createAction('[UI] topics loading finished')
export const photosLoadingStarted = createAction('[UI] photos loading started')
export const photosLoadingFinished = createAction('[UI] photos loading finished')