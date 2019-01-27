import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route } from '@angular/router';
import { BlogService } from '../blog.service';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Location } from '@angular/common';
import { Post } from '../posts';
import { EditorComponent } from '../editor/editor.component';
import { NbToastrService } from '@nebular/theme';


@Component({
  selector: 'anon-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  post: any;
  postID: string;
  postSaved = false;
  private index = 0;
  constructor(
    private activatedroute: ActivatedRoute,
    private blog_api: BlogService,
    private location: Location,
    private toastrService: NbToastrService,
  ) {
    this.postID = this.activatedroute.snapshot.paramMap.get('post_id'); // Get PostID from url
    // this.showPost();
  }

  async ngOnInit() {

    // this.post = this.blog_api.getOnePost(this.postID).pipe( map(data => data.results) );
    // console.log(this.post);

    this.post = await this.blog_api.getOnePost(this.postID);
    // console.log('From OnInit: ', this.post);
  }

  goBack() {
    this.location.back();
  }
  showPost() {
    this.blog_api.getOnePost(this.postID).subscribe(data => { this.post = data; });
  }

  savePost(postID, title, content) {
    this.post.content = content.model.editorData;
    this.post.title = title.model.editorData;
    this.post.image = 'https://picsum.photos/2000/1000?random';
    // console.log( this.post );
    this.blog_api.updatePost(postID, this.post).subscribe();
    console.log('Blog Post has been updated..');
    this.showToast('success', 'Blog Post Successfully Saved.');
    // this.postSaved = true;
    // setTimeout(() => this.postSaved = false, 4500);
  }

  deletePost(postID) {
    this.blog_api.deletePost(postID).subscribe();
    this.goBack();
  }


//  TOASTR FUNCTIONS
  showToast(status, message) {
    this.index += 1;
    console.log(`Toast ${this.index} was just called.`);
    this.toastrService.show(
        message,
        'Heads Up..',
        { status });
  }

}
