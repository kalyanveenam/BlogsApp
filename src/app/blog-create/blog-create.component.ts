import { Component, OnInit } from '@angular/core';
import { BlogHttpService } from '../blog-http.service';
import { error } from '@angular/compiler/src/util';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-blog-create',
  templateUrl: './blog-create.component.html',
  styleUrls: ['./blog-create.component.css']
})
export class BlogCreateComponent implements OnInit {

  constructor(public BlogHttpService: BlogHttpService, private toastr: ToastrService) {
  }

  public blogTitle: string;
  public blogBodyHtml: string;
  public blogDescription: string;
  // public possibleCategories = ["comedy", "Drama", "Action", "Travel"];
  public possibleCategories = "comedy";

  ngOnInit() { }

  public createBlog(): any {
    let blogPostData = {
      "title": this.blogTitle,
      "blogBody": this.blogBodyHtml,
      "description": this.blogDescription,
      "category": this.possibleCategories
    }
    console.log(blogPostData)
    this.BlogHttpService.createBlog(blogPostData).subscribe(
      data => {
        console.log(data)
        this.toastr.success('Blog is created successfully');
      },
      error => {
        console.log(error.errorMessage);
        alert('error occured')
      }
    )

  }
}

