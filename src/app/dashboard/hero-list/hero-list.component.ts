import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Hero } from 'src/app/hero';

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.css']
})
export class HeroListComponent implements OnInit {
  @Output() 
  deleteRequest = new EventEmitter<Hero>();

  @Input()
  data: Hero[];

  constructor() { }

  ngOnInit() {
  }

  delete(hero: Hero) {
    console.log('Delete call to parent');
    this.deleteRequest.emit(hero);

  }

}
