import { Component } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Board } from '../models/board.models';
import { List } from '../models/list.models';
import { Card } from '../models/card.models';
//import { Overlay, OverlayOrigin, OverlayConfig, OverlayRef } from '@angular/cdk/overlay';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss'],
})


export class TaskComponent {

	board : Board = new Board("First Board", [
		new List("TODO", [ new Card("First Card"), new Card("Second Card") ]),
		new List("Doing", [ new Card("Third Card"), new Card("Forth Card") ]),
		new List("Done", [ new Card("Sixth Card"), new Card("Seventh Card") ])
		]
	);

	constructor(){
		console.log(this.board.lists);
	}

	cardClick(){
		console.log("Card clicked");
	}

  dropList(event : CdkDragDrop<Card[]>) {
    if (event.previousContainer === event.container) {
			console.log("Same List, list = " + event);
			moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
		} else {
			console.log("Not Same List");
      transferArrayItem(event.previousContainer.data,
          event.container.data,
          event.previousIndex,
          event.currentIndex);
    }
  }
}
