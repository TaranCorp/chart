import { Component } from '@angular/core';

export interface Post {
  title: string,
  imageUrl: string,
  username: string,
  content: string
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  posts: Array<Post> = [
    {
      title: 'Neat Tree',
      imageUrl: 'assets/tree.jpeg',
      username: 'nature',
      content: 'Saw this tree during my nap today.'
    },
    {
      title: 'Snowy Mountain',
      imageUrl: 'assets/mountain.jpeg',
      username: 'mountainlover',
      content: 'Here is a picture of a snowy mountain.'
    },
    {
      title: 'Mountain Biking',
      imageUrl: 'assets/biking.jpeg',
      username: 'biking1',
      content: 'I did some biking today.'
    }
  ];
}
