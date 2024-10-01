import {Component, OnInit} from '@angular/core';
import {ArticleModel} from "../model-ss4/article-model";

@Component({
  selector: 'app-ss4-hacker-news',
  templateUrl: './ss4-hacker-news.component.html',
  styleUrls: ['./ss4-hacker-news.component.css']
})
export class Ss4HackerNewsComponent implements OnInit {
  articles : ArticleModel[] = [
    {
      title: 'The Evolution of Async JavaScript: From Callbacks, to Promises, to Async/Await',
      url: 'https://medium.freecodecamp.org/the-evolution-of-async-javascript-from-callbacks-to-promises-to-async-await-e73b047f2f40'
    }
  ];

  article: ArticleModel = {
    title: 'The Evolution of Async JavaScript: From Callbacks, to Promises, to Async/Await',
    url: 'https://medium.freecodecamp.org/the-evolution-of-async-javascript-from-callbacks-to-promises-to-async-await-e73b047f2f40'
  };

  constructor() {
  }


  ngOnInit(): void {
  }

  addNewArticle() {
    this.articles.push(this.article);
  }
}
