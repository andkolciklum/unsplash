import { createAction, props } from '@ngrx/store'
import { Photo } from '@models/photo.model'

export const retrievedPhotosList = createAction(
  '[Photos] Retrieve photos success',
  props<{ photos: Photo[] }>()
)