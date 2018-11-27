import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-list-post',
  templateUrl: './list-post.component.html',
  styleUrls: ['./list-post.component.css']
})
export class ListPostComponent implements OnInit {
  @Input() tabPost ;
  constructor() { }

  ngOnInit() {
  }

}
