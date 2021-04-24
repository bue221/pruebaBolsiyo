import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, exhaustMap, catchError } from 'rxjs/operators';
import { ApiService } from '../../services/api/api.service';

@Injectable()
export class ImagesEffects {
  loadImages$ = createEffect(() =>
    this.actions$.pipe(
      ofType('[HOME PAGE] LOAD IMAGES'),
      exhaustMap((action: { q: string; c: string }) =>
        this.imagesService.getImage(action.q, action.c, action).pipe(
          map((images) => ({
            type: '[HOME PAGE] LOAD IMAGES SUCCESS',
            payload: images.hits,
          })),
          catchError(() =>
            of({
              type: '[HOME PAGE] LOAD IMAGES ERROR',
              payload: 'error in the get',
            })
          )
        )
      )
    )
  );

  constructor(private actions$: Actions, private imagesService: ApiService) {}
}
