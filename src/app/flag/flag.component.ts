import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { Input, Output, EventEmitter } from '@angular/core';

import countries from './flags.json'

@Component({
  selector: 'app-flag',
  templateUrl: './flag.component.html',
  styleUrls: ['./flag.component.scss']
})
export class FlagComponent implements OnInit {

  @Input()
  country: string

  @Output()
  onClick = new EventEmitter<any>();

  imageSrc: string

  ngOnInit() {
    this.imageSrc = countries[this.country]
  }

  ngOnChanges(changes: SimpleChanges) {
    this.imageSrc = countries[this.country]
  }

}
