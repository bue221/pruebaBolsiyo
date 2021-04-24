import { Loadable, createDefaultLoadable } from './apiconsume.interface';

export interface Image {
  id: number;
  pageURL: string;
  type: string;
  tags: string;
  previewURL: string;
  previewWidth: number;
  previewHeight: number;
  webformatURL: string;
  webformatWidth: number;
  webformatHeight: number;
  largeImageURL: string;
  imageWidth: number;
  imageHeight: number;
  imageSize: number;
  views: number;
  downloads: number;
  favorites: number;
  likes: number;
  comments: number;
  user_id: number;
  user: string;
  userImageURL: string;
}

export interface responseGet {
  total: number;
  totalHits: number;
  hits: Image[];
}

export interface Images extends Loadable {
  images: Image[];
}

export function createDefaultImages(): Images {
  return {
    ...createDefaultLoadable(),
    images: [],
  };
}
