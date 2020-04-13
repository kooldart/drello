import { List } from '../models/list.models';

export class Board {
	title : string;
	lists : List[] = [];
	constructor(ntitle : string,	nlists : List[]){ this.title = ntitle; this.lists = nlists; };
}

