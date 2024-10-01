import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ss4-hacker-news-like',
  templateUrl: './ss4-hacker-news-like.component.html',
  styleUrls: ['./ss4-hacker-news-like.component.css']
})
export class Ss4HackerNewsLikeComponent implements OnInit {
  like = 0;

  constructor() { }

  ngOnInit(): void {
  }

  likeThis() {
    this.like ++;
  }
}
