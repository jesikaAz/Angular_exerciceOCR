import { Component, Input , OnInit } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  @Input() title: string;
  @Input() content: string;
  @Input() loveIts: number  ;
  @Input() create_at: Date;
  constructor() {

    this.create_at = new Date();
  }

  ngOnInit() {

  }
  upNote() {
    if(isNaN(this.loveIts)){
      this.loveIts = 0;
    }
    this.loveIts++;
  }
  downNote() {
    if(isNaN(this.loveIts)){
      this.loveIts = 0;
    }
    this.loveIts--;
  }
  getColor() {
    if ( this.loveIts > 0 ) {
      return 'green';
    } else if (this.loveIts < 0 ) {
      return 'red';
    }
  }
}
