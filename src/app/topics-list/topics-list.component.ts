import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-topics-list',
  templateUrl: './topics-list.component.html',
  styleUrls: ['./topics-list.component.scss']
})
export class TopicsListComponent implements OnInit {
  topics: String[] = []

  ngOnInit(): void {
    for (let i=0; i<100; i++) {
      this.topics.push('Topic ' + i)
    }
  }
}
