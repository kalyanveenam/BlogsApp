import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RouterModule } from '@angular/router';
import { BlogService } from '../blog.service';
import { BlogHttpService } from '../blog-http.service';
import { error } from '@angular/compiler/src/util';
@Component({
  selector: 'app-blog-view',
  templateUrl: './blog-view.component.html',
  styleUrls: ['./blog-view.component.css']
})

export class BlogViewComponent implements OnInit {
  public currentBlog;
  // public blogData = [
  //   {
  //     "blogid": 1,
  //     "title": "My Shirdi travel",
  //     "description": "my 4 day trip to the beautiful piligrimage"

  //   },
  //   {
  //     "blogid": 2,
  //     "title": "Kerala trip",
  //     "description": "Journey to the gods home place"

  //   },
  //   {
  //     "blogid": 3,
  //     "title": "Tirumala trip",
  //     "description": "Divine trip to tirumala hills"
  //   },
  //   {
  //     "blogid": 4,
  //     "title": "Rameshwaram",
  //     "description": "Beautiful Pamban bridge"

  //   },
  //   {
  //     "blogid": 5,
  //     "title": "Kodaikanal",
  //     "description": "One of the best hill stations in india"

  //   },
  //   {
  //     "blogid": 6,
  //     "title": "Munnar",
  //     "description": "Visit the grenery everywhere"
  //   },
  //   {
  //     "blogid": 7,
  //     "title": "Nandi Hills",
  //     "description": "Early mornings in Nandihills will fill your soul with happiness"

  //   }

  // ]
  // getSelectedBlog(selectedBlogid) {
  //   for (let blog of this.blogData) {
  //     if (blog.blogid == selectedBlogid) {
  //       this.currentBlog = blog;
  //     }
  //   }

  // }
  constructor(private _route: ActivatedRoute, private router: Router, public blogService: BlogHttpService) {
    console.log('constructor is called');
  }

  ngOnInit(): void {
    let selectedBlogId = this._route.snapshot.paramMap.get('blogId');
    console.log(selectedBlogId)

    this.blogService.getSelectedBlog(this._route.snapshot.paramMap.get('blogid')).subscribe(

      data => {
        console.log(data)
        this.currentBlog = data["data"];
      },
      error => {
        console.log(error)

      }

    )
    console.log('before getting view')




  }


}
