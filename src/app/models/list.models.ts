import { Card } from './card.models'

export class List {
	title : string;
	cards : Card[] = [];
	constructor(title : string,	cards : Card[] = []){ this.title = title; this.cards = cards; };
}

