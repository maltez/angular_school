interface ComplexObject {
    a: {
        b: 
            {
                c: {
                    z: number,
                    s: string,
                    q: {
                        l: boolean
                    }
                }
            }
    },
    b: string,
    c: {
        a: {
            b: boolean
        }
    }
}

const instComplexObj: ComplexObject = {
    a: {
        b: 
            {
                c: {
                    z: 1234567,
                    s: 'str',
                    q: {
                        l: true
                    }
                }
            }
    },
    b: 'str',
    c: {
        a: {
            b: true
        }
    }
}

const { a: { b : { c: { z, s } } }, a: { b } } = instComplexObj;

const { b: z1 } = instComplexObj;

const { c: { a : zz } } = instComplexObj;

console.log(zz);

const arr: Array<string> = ['st', 'z', 'k', 'l', 'y', 'u', 't'];
const[first,,third,...other ] = arr;
