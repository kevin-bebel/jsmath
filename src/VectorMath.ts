import Vector from './Vector'

export default class VectorMath {
    static VectorAdd(...vectors: Array<Vector>): Vector {
        if (vectors.length === 0) throw Error("No argument passed in to the vector addition function");
        //First we need to check that the vector are matching in dimension.
        const size = VectorMath.isValidVectors(vectors)
        return VectorMath.operatorVector("addition", size, vectors);
    }
    static VectorSubtract(...vectors: Array<Vector>): Vector {
        if (vectors.length === 0) throw Error("No argument passed in to the vector addition function");
        //First we need to check that the vector are matching in dimension.
        const size = VectorMath.isValidVectors(vectors)
        return VectorMath.operatorVector("subtraction", size, vectors);
    }

    private static isValidVectors(vectors: Array<Vector>): number {
        //First we need to check that the vector are matching in dimension.
        let size: number;
        for (let i = 0; i < vectors.length; i++) {
            if (i === 0) {
                size = vectors[i].size();
                continue;
            }

            if (vectors[i].size() !== size) {
                throw Error("Cannot add vectors of different dimensions")
                break;
            }
        }

        return size;
    }

    private static operatorVector(operator: string, size: number, vectors: Array<Vector>): Vector {
        let count = 0;
        let output_vector = new Vector();

        while (count < size) {
            //The sum of all the values at given index
            let index_total = 0;
            let _internal_count = 0;
            //This loop will allow us to add the all the components at the same level for the vector add istion
            while (_internal_count < vectors.length) {
                //I have to break
                if (operator === "addition") {
                    index_total = index_total + vectors[_internal_count].getValueAtIndex(count)
                } else {
                    index_total = index_total - vectors[_internal_count].getValueAtIndex(count)
                }
                _internal_count = _internal_count + 1;
            }

            output_vector.add(index_total);
            //we then push the index total into the Vector that we are return back. 
            count = count + 1;
        }

        return output_vector;
    }
}