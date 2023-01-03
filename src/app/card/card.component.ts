import { Component, Input } from '@angular/core';
import { Post } from '../app.component';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input() post: Post | undefined = undefined;
  title = this.post?.title;

  getTitle(): string | undefined {
    return this.post?.title;
  }

  getContent(): string | undefined {
    return this.post?.content;
  }

  getUsername(): string | undefined {
    return this.post?.username;
  }

  getImageUrl(): string | undefined {
    return this.post?.imageUrl;
  }
}
