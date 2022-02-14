import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-topic-pictures',
  templateUrl: './topic-pictures.component.html',
  styleUrls: ['./topic-pictures.component.scss']
})
export class TopicPicturesComponent implements OnInit {
  pictures: String[] = []

  ngOnInit(): void {
    for (let i=0; i<100; i++) {
      this.pictures.push('Picture ' + i)
    }
  }
}
