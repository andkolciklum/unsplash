import { createFeatureSelector, createSelector } from '@ngrx/store'
import { PhotosState } from './photos.reducer'

export const selectPhotos = createFeatureSelector<PhotosState>('photos')

export const selectPhotosList = createSelector(
  selectPhotos,
  (state: PhotosState) => state.photosList
)