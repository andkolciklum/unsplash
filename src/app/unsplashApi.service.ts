import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { map } from 'rxjs/operators'
import { environment } from '../environments/environment'
import { Topic } from '@models/topic.model'
import { Photo } from '@models/photo.model'

const baseUrl = 'https://api.unsplash.com/'
const options = {
  headers: new HttpHeaders({
    Authorization: `Client-ID ${environment.unsplashAccessKey}`
  })
}
 
@Injectable({ providedIn: 'root' })
export class UnsplashApiService {
  constructor(private http: HttpClient) {}
 
  getTopics(): Observable<Array<Topic>> {
    return this.http
      .get<Topic[]>(
        baseUrl + '/topics', options
      )
      .pipe(map(topics => topics || []));
  }

  getPhotos(topic: Topic, page: number): Observable<Array<any>> {
    return this.http
      .get<Photo[]>(
        baseUrl + `/topics/${topic}/photos?page=${page}`, options
      )
      .pipe(map(photos => photos || []));
  }
}