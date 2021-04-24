// import { Action } from '@ngrx/store';
// import { Image } from 'src/app/models/images.interface';

// // this are the types of action
// export enum ImagesActionsTypes {
//   Load = '[HOME PAGE] LOAD IMAGES',
//   LoadSuccess = '[HOME PAGE] LOAD IMAGES SUCCESS',
//   LoadError = '[HOME PAGE] LOAD IMAGES ERROR',
// }

// //action funtions
// export class LoadIMages implements Action {
//   readonly type = ImagesActionsTypes.Load;
// }

// export class LoadImagesSuccess implements Action {
//   readonly type = ImagesActionsTypes.LoadSuccess;
//   constructor(public payload: { images: Image[] }) {}
// }

// export class LoadImagesError implements Action {
//   readonly type = ImagesActionsTypes.LoadError;
//   constructor(public error: any) {}
// }
// export type ImagesActions = LoadIMages | LoadImagesSuccess | LoadImagesError;

import { createAction, props } from '@ngrx/store';

export const Load = createAction(
  '[HOME PAGE] LOAD IMAGES',
  props<{ q: string; c: string }>()
);
export const LoadSuccess = createAction(
  '[HOME PAGE] LOAD IMAGES SUCCESS',
  props<{ payload: any }>()
);
export const LoadError = createAction(
  '[HOME PAGE] LOAD IMAGES ERROR',
  props<{ error: any }>()
);
