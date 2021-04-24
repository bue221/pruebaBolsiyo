// import { createDefaultImages, Images } from 'src/app/models/images.interface';
// import { ImagesActions, ImagesActionsTypes } from '../actions/images.action';
// import {
//   onLoadableError,
//   onLoadableSuccess,
//   onLoadableLoad,
// } from '../../models/apiconsume.interface';

// export function imagesReducer(
//   state: Images = createDefaultImages(),
//   action: ImagesActions
// ): Images {
//   switch (action.type) {
//     case ImagesActionsTypes.Load:
//       return {
//         ...onLoadableLoad(),
//         images: [],
//       };
//     case ImagesActionsTypes.LoadSuccess:
//       return {
//         ...onLoadableSuccess(),
//         images: action.payload.images,
//       };
//     case ImagesActionsTypes.LoadError:
//       return { ...onLoadableError(action.error), images: [] };
//     default:
//       return state;
//   }
// // }

import { Action, createReducer, on } from '@ngrx/store';
import { Load, LoadError, LoadSuccess } from '../actions/images.action';
import {
  createDefaultImages,
  Image,
  Images,
} from 'src/app/models/images.interface';
import {
  onLoadableError,
  onLoadableSuccess,
  onLoadableLoad,
} from '../../models/apiconsume.interface';

export const initialState = [];

const _counterReducer = createReducer(
  initialState,
  on(Load, (state) => state),
  on(LoadError, (state, { error }) => state),
  on(LoadSuccess, (state, { payload }) => payload)
);

export function imagesReducer(
  state: any = initialState,
  action: Action
): Image[] {
  return _counterReducer(state, action);
}
