import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { Image, Images } from 'src/app/models/images.interface';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-image-detail',
  templateUrl: './image-detail.component.html',
  styleUrls: ['./image-detail.component.scss'],
})
export class ImageDetailComponent implements OnInit {
  images$: Observable<Image[]>;

  constructor(
    private store: Store<{ img: Image[] }>,
    private _location: Location,
    private route: ActivatedRoute
  ) {
    this.images$ = store.select('img');
  }

  imageFilter!: any;

  ngOnInit(): void {
    // this.store.dispatch({
    //   type: '[HOME PAGE] LOAD IMAGES',
    //   q: 'paisajes',
    //   c: '',
    // });
    this.route.params.subscribe((params: Params) => {
      const id = params.id;
      this.images$.subscribe(
        (data) => (this.imageFilter = data.filter((i) => i.id == id))
      );

      // console.log(id);
    });
    // console.log(this.tags);
  }

  backClicked() {
    this._location.back();
  }
}
