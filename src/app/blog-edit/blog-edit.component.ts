import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogHttpService } from '../blog-http.service';

@Component({
  selector: 'app-blog-edit',
  templateUrl: './blog-edit.component.html',
  styleUrls: ['./blog-edit.component.css']
})
export class BlogEditComponent implements OnInit {
  public currentBlog;
  public blogTitle: string = 'sampletitle';
  public blogDescription: string = 'Description';
  public blogBodyHtml: string = 'body';
  public possibleCategories = 'comedy';
  public storedData;
  public selectedBlogId;
  constructor(public _route: ActivatedRoute, public httpService: BlogHttpService) {
    console.log('constructor is called')
  }

  ngOnInit(): void {

    this.selectedBlogId = this._route.snapshot.paramMap.get('blogid');

    this.httpService.getSelectedBlog(this.selectedBlogId).subscribe(
      data => {

        this.currentBlog = this.storedData = data['data'];
        console.log(data)

      }

    );


  }
  public editBlog(): void {
    console.log('edit')
    console.log(this.currentBlog)
    this.httpService.editBlog(this.selectedBlogId, this.currentBlog).subscribe(
      data => {
        console.log(data)
        alert('BLOG IS EDITED SUCCESSFULLY')
      }

    )
  }


}
