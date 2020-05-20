import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http'
import { Observable } from 'rxjs';
// import { observable } from 'rxjs/Observable'
// import { Observable, of, Subject } from 'rxjs';
// import 'rxjs/add/operator/catch'
// import 'rxjs/add/operator/do'
// import { from } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class BlogHttpService {
  public blogData;
  public currentBlog;
  public baseurl = 'https://blogapp.edwisor.com/api/v1/blogs';

  constructor(public _http: HttpClient) {
    console.log('blog http service')
  }
  public getBlogData(): any {
    let response = this._http.get(this.baseurl + '/all?authToken=MWIzNzkyNzJjN2ZkZWE1ZjFiYzE5OTI3MzcxZjMwYjI3ZGZiZjU3ZDZlY2RkMzFkNDNiMWQ0MzYxMzRhYjczNmFjMTYxNDdjNDM2ZmM1MGIzNTFkNzI3ZjYwYzUyMmQ0ZTNjOWNkNTVmNmQyZGQ3YTExZDA4MjI1ZTY2MDBlNzY5YQ==')
    console.log(response)

    return response;
  }
  public getSelectedBlog(selectedBlog) {
    let response = this._http.get(this.baseurl + '/view/' + selectedBlog + '?authToken=MWIzNzkyNzJjN2ZkZWE1ZjFiYzE5OTI3MzcxZjMwYjI3ZGZiZjU3ZDZlY2RkMzFkNDNiMWQ0MzYxMzRhYjczNmFjMTYxNDdjNDM2ZmM1MGIzNTFkNzI3ZjYwYzUyMmQ0ZTNjOWNkNTVmNmQyZGQ3YTExZDA4MjI1ZTY2MDBlNzY5YQ==')
    console.log(response)

    return response;

  }
  public handleError(err: HttpErrorResponse) {
    console.log(err.message)
    return Observable.throw(err.message)
  }
  public createBlog(postData) {

    console.log(this.baseurl + '/create' + '?authToken=MWIzNzkyNzJjN2ZkZWE1ZjFiYzE5OTI3MzcxZjMwYjI3ZGZiZjU3ZDZlY2RkMzFkNDNiMWQ0MzYxMzRhYjczNmFjMTYxNDdjNDM2ZmM1MGIzNTFkNzI3ZjYwYzUyMmQ0ZTNjOWNkNTVmNmQyZGQ3YTExZDA4MjI1ZTY2MDBlNzY5YQ==');
    let response = this._http.post(this.baseurl + '/create' + '?authToken=MWIzNzkyNzJjN2ZkZWE1ZjFiYzE5OTI3MzcxZjMwYjI3ZGZiZjU3ZDZlY2RkMzFkNDNiMWQ0MzYxMzRhYjczNmFjMTYxNDdjNDM2ZmM1MGIzNTFkNzI3ZjYwYzUyMmQ0ZTNjOWNkNTVmNmQyZGQ3YTExZDA4MjI1ZTY2MDBlNzY5YQ==', postData)
    return response;
  }
  public editBlog(blogid, postData) {
    let resonse = this._http.put(this.baseurl + '/' + blogid + '/edit/' + '?authToken=MWIzNzkyNzJjN2ZkZWE1ZjFiYzE5OTI3MzcxZjMwYjI3ZGZiZjU3ZDZlY2RkMzFkNDNiMWQ0MzYxMzRhYjczNmFjMTYxNDdjNDM2ZmM1MGIzNTFkNzI3ZjYwYzUyMmQ0ZTNjOWNkNTVmNmQyZGQ3YTExZDA4MjI1ZTY2MDBlNzY5YQ==', this.blogData)
    return resonse;
  }
  public deleteBlog(blogid) {
    let response = this._http.delete(this.baseurl + '/' + blogid + '/delete' + '?authToken=MWIzNzkyNzJjN2ZkZWE1ZjFiYzE5OTI3MzcxZjMwYjI3ZGZiZjU3ZDZlY2RkMzFkNDNiMWQ0MzYxMzRhYjczNmFjMTYxNDdjNDM2ZmM1MGIzNTFkNzI3ZjYwYzUyMmQ0ZTNjOWNkNTVmNmQyZGQ3YTExZDA4MjI1ZTY2MDBlNzY5YQ==')
  }
}
