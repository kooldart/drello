import { Component } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss'],
})


export class TaskComponent {

	lists : List[] = [
		{ title : "TODO", cards : [ { title : "First Card" }, { title : "Second Card" } ] },
		{ title : "Doing", cards : [ { title : "Third Card" }, { title : "Forth Card" } ] }
		//{ title : "Done", cards : [ { title : "Sixth Card" }, { title : "Seventh Card" } ] }
	];

  dropList(event : CdkDragDrop<List[]>) {
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

class List {
	title : string;
	cards : Card[] = [];
}

class Card {
	title : string;
}

