import { Component, IterableDiffers, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
//models
import { Image, Images } from 'src/app/models/images.interface';
//service
import { ApiService } from 'src/app/services/api/api.service';
//redux
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  imagenes$: Observable<Image[]>;

  states: string[] = [
    'backgrounds',
    'fashion',
    'nature',
    'science',
    'education',
    'feelings',
    'health',
    'people',
    'religion',
    'places',
    'animals',
    'industry',
    'computer',
    'food',
    'sports',
    'transportation',
    'travel',
    'buildings',
    'business',
    'music',
  ];

  constructor(private api: ApiService, private store: Store<any>) {
    this.imagenes$ = this.store.select('img');
  }

  ngOnInit(): void {
    // this.store.dispatch({
    //   type: '[HOME PAGE] LOAD IMAGES',
    //   q: 'paisajes',
    //   c: '',
    // });
    // console.log(this.imagenes$.subscribe((data) => console.log(data)));
  }

  form = new FormGroup({
    category: new FormControl(this.states[3]),
    query: new FormControl(''),
  });

  searchImage() {
    this.store.dispatch({
      type: '[HOME PAGE] LOAD IMAGES',
      q: this.form.value.query,
      c: this.form.value.category,
    });
  }
}
