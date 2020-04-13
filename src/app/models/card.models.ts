export class Card {
	title : string;
	description : string;
	comments : string[] = [];

	constructor(title : string, description? : string, comments? : string[]){ this.title = title; this.description = description; this.comments = comments; };
}
