const obj1 = {
    a: 1,
    b: {
        a: 12,
        c: {
            a: 42,
            d:'very short string'
        }
    }
}
// const d: string = obj1.b.c.d;
const { b: {c: {d: string }}, b: { c }} = obj1;

const arr3: number[] = [1,2,3,4,5,6,7,8,9,0];
const[first, second,,... arrSlice] = arr3;