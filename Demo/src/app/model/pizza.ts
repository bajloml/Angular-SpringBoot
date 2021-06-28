export class Pizza {
    name: string;
    ingredients: string;
    _links:string;

    constructor( name:string, ingredients: string, _links:string){
        this.name=name;
        this.ingredients=ingredients;
        this._links = _links;
    }
}
