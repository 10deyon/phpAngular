import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { IPost } from '../components/user/user';
import { Observable } from 'rxjs';

// this is for HTTP error handling
// import 'rxjs/add/operator/catch';
// import 'rxjs/add/observable/throw';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  // private _url: string = 'http://jsonplaceholder.typicode.com/posts'
  // this._url...

  constructor(public http:HttpClient) { 
    console.log('Data service connected...');
  }

  getPosts(): Observable<IPost[]>{
    return this.http.get<IPost[]>('http://jsonplaceholder.typicode.com/posts');
            // .catch(this.errorHandler);
  }

  errorHandler(error: HttpErrorResponse){
    return Observable.throw(error.message || "Server Error");
  }

}
