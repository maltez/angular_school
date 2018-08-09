class WhiskeyMadeHouse {
    constructor(
        name: string,
        ingredients: string[],
        isBottled: boolean,
        a: number,
        b: string,
        c: boolean
    ){

    }

    public static makeWhiskey(name: string) {
        return new WhiskeyMadeHouse(name, ['yachmen'], true, 12,'b', false);
    }
}

const whiskey = WhiskeyMadeHouse.makeWhiskey('jameson');