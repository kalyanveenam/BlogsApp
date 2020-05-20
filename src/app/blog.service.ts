import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  public currentBlog;
  public blogData = [
    {
      "blogid": 1,
      "title": "My Shirdi travel",
      "description": "my 4 day trip to the beautiful piligrimage"

    },
    {
      "blogid": 2,
      "title": "Kerala trip",
      "description": "Journey to the gods home place"

    },
    {
      "blogid": 3,
      "title": "Tirumala trip",
      "description": "Divine trip to tirumala hills"
    },
    {
      "blogid": 4,
      "title": "Rameshwaram",
      "description": "Beautiful Pamban bridge"

    },
    {
      "blogid": 5,
      "title": "Kodaikanal",
      "description": "One of the best hill stations in india"

    },
    {
      "blogid": 6,
      "title": "Munnar",
      "description": "Visit the grenery everywhere"
    },
    {
      "blogid": 7,
      "title": "Nandi Hills",
      "description": "Early mornings in Nandihills will fill your soul with happiness"

    }

  ]


  constructor() { }
  public getBlogData() {

    return this.blogData;
  }
  getSelectedBlog(selectedBlogid) {
    for (let blog of this.blogData) {
      if (blog.blogid == selectedBlogid) {
        this.currentBlog = blog;
      }
    }
    console.log(this.currentBlog)
    return this.currentBlog;

  }
}
