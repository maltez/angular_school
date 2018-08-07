interface Item {
    count: number;
}

interface HipHop<T> {
    staff: T[];
    addStaff(staff:T):T[]
}

class RapMusic<T, M extends Item> implements HipHop<T> {
    staff: T[];

    addStaff(staff: T): T[] {
        this.superHipHop.count;
        throw new Error("Method not implemented.");
    }

    superHipHop: M;
}