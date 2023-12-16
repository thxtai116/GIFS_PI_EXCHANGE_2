import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { GLOBAL_SETTINGS } from './global-settings';
import { GIF } from 'src/app/utils/gif';
import { finalize, take } from 'rxjs';
import { Meta } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class GifServiceService {
  private apiKey = environment.apiKey;
  constructor(private http: HttpClient) { }
  URL = `${GLOBAL_SETTINGS.domain}/${GLOBAL_SETTINGS.apiVersion}/gifs/`
  URL_TAG = `${GLOBAL_SETTINGS.domain}/${GLOBAL_SETTINGS.apiVersion}/trending/`
  URL_TAG_RELATE = `${GLOBAL_SETTINGS.domain}/${GLOBAL_SETTINGS.apiVersion}/tags/related/`

  getGifList$(options: HTTPParams) {
    options['type'] = TypeData.GIF;
    return this.getItems<GIF>(`${this.URL}`, options)
  }

  getTrending$(options: HTTPParams) {
    options['type'] = TypeData.GIF;
    return this.getItems<GIF>(`${this.URL}trending`, options);
  }

  getRandom$(options: HTTPParams) {
    options['type'] = TypeData.GIF;
    return this.getItems<GIF>(`${this.URL}random`, options);
  }
  getTags(term?: string) {
    return this.getItems<string>(`${this.URL_TAG_RELATE}${term}`, {})
  }

  getTrendingKeyword() {
    return this.getItems<string>(`${this.URL_TAG}searches`, {});
  }

  searchByTrendingKeyword$(options?: HTTPParams) {
    return this.getItems<GIF>(`${this.URL}search`, options);
  }
  loadGifList(options: HTTPParams) {
    this.getTrending$(options).pipe(
      take(1),
      finalize(() => {
      })
    ).subscribe({
      next: (res) => {
        return res;
      },
      error: (err) => {
        throw err
      }
    })
  };
  protected getItems<T>(url: string, options?: HTTPParams) {
    let params: HTTPParams = {}
    params['api_key'] = this.apiKey;
    console.log('params...', params)
    if (options) {
      if (options.limit) {
        params['limit'] = options.limit;
      };
      if (options.rating) {
        params['rating'] = options.rating;
      };
      if (options.lang) {
        params['lang'] = options.lang;
      };
      if (options.offset) {
        params['offset'] = options.offset;
      };
      if (options.q) {
        params['q'] = options.q;
      };

      if (options.type) {
        params['type'] = options.type;
      }
      return this.http.get<HTTPResponseItems<T>>(url, { params: params })
    } else {
      return this.http.get<HTTPResponseItems<T>>(url);
    };
  }
  
}
export type HTTPParams = {
  limit?: number,
  offset?: number,
  rating?: string,
  q?: string,
  api_key?: string,
  lang?: string,
  type?: TypeData
}
export enum TypeData {
  STICKER = 'sticker',
  GIF = 'gif',
}
export type HTTPResponseItem<T> = {
  value: T;
}
export type HTTPResponseItems<T> = {
  data: Array<T>,
  meta: Meta,
  pagination: Pagination
}
export interface Pagination {
  count: number,
  offset: number,
  total_count: number
}