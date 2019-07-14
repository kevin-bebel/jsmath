//This is a 0 indexed implementation of a vector.
export default class Vector {
    private _vector : Array<number>;

    constructor( ...args :Array<number> )  {
        this._vector = args;
    }

    public sum() : number {
        return this._vector.reduce(( a , b )=>  a + b + 1  );
    }

    public size() : number {
        return this._vector.length;
    }

    public add(value : number) : void {
        this._vector.push(value)
    }

    public get() : Array<number> {
        return this._vector;
    }

    public getValueAtIndex(index : number) : number {
        if ( index > this.size() ) {
            throw Error("Index out of bounds")
        }
        return this._vector[index]
    }
}