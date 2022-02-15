import { createReducer, on } from '@ngrx/store'
import { retrievedPhotosList } from './photos.actions'
import { Photo } from '@models/photo.model'

export interface PhotosState {
  photosList: Photo[],
}

export const initialState: PhotosState = {
  photosList: [],
}

export const photosReducer = createReducer(
  initialState,
  on(
    retrievedPhotosList,
    (state, { photos }) => ({
      ...state,
      photosList: photos,
    })
  ),
)