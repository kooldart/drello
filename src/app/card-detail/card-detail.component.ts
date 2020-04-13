import { Component, OnInit } from '@angular/core';
import { Card } from '../models/card.models';

@Component({
  selector: 'app-card-detail',
  templateUrl: './card-detail.component.html',
  styleUrls: ['./card-detail.component.scss']
})
export class CardDetailComponent implements OnInit {

	card : Card = new Card("Hello", "Desc", [ "Hey", "Another Hey", "Triple Hey" ]);

  constructor() { }

  ngOnInit(): void {
  }

}
