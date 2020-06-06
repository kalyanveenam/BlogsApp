import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RouterModule } from '@angular/router';
import { BlogService } from '../blog.service';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from "ngx-spinner";
import { BlogHttpService } from '../blog-http.service';
import { error } from '@angular/compiler/src/util';
@Component({
  selector: 'app-blog-view',
  templateUrl: './blog-view.component.html',
  styleUrls: ['./blog-view.component.css']
})

export class BlogViewComponent implements OnInit {
  public currentBlog;
  constructor(private _route: ActivatedRoute, private router: Router, public blogService: BlogHttpService, private toastr: ToastrService, public spinner: NgxSpinnerService) {
    console.log('constructor is called');
  }

  ngOnInit(): void {
    this.spinner.show();

    setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.spinner.hide();
    }, 1000);
    let selectedBlogId = this._route.snapshot.paramMap.get('blogId');
    console.log(selectedBlogId)

    let blogResponse = this.blogService.getSelectedBlog(this._route.snapshot.paramMap.get('blogid')).subscribe(

      data => {
        console.log(data)
        this.currentBlog = data["data"];
        console.log('before getting view blogid')
        //  console.log(this.currentBlog.blogId)

      },
      error => {
        console.log(error)

      }

    )
    console.log('blogresponse')
    console.log(blogResponse)


  }

  public blogDelete(): any {

    console.log('Delete blog');
    this.blogService.deleteBlog(this.currentBlog.blogId).subscribe(
      data => {
        console.log(data);
        this.toastr.success('Blog is Deleted successfully');
        setTimeout(() => {
          this.router.navigate(['/home'])
        }, 1000)

      }
    )

  }





}
