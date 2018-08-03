class MyFirstClass {
    static myMeaningOfLife: number = 42;
    count: number;
    constructor();
    constructor(count: number);

    constructor(count: number = 0){
        this.count = count + MyFirstClass.myMeaningOfLife;
    }
}

console.log(MyFirstClass.myMeaningOfLife);

const firstClass = new MyFirstClass()