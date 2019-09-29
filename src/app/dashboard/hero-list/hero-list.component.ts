import { Component, OnInit, Input } from '@angular/core';
import { Hero } from 'src/app/hero';

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.css']
})
export class HeroListComponent implements OnInit {

  @Input()
  data: Hero[];

  constructor() { }

  ngOnInit() {
  }

}
