import { Component, OnInit } from '@angular/core';
import { BlogService } from '../blog.service';
import { BlogHttpService } from '../blog-http.service';
import { error } from '@angular/compiler/src/util';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public blogData;
  constructor(public blogHttpService: BlogHttpService) { }

  ngOnInit(): void {

    this.blogData = this.blogHttpService.getBlogData().subscribe(
      data => {
        console.log(data);
        this.blogData = data["data"];

      },
      error => {
        console.log('some error message')
        console.log(error.errorMessage)
      }


    )
  }

}
