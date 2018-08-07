class Funk {
    sexyMthFka(): void {
        console.log('You sexy mothfka');
    }
}

class Pop implements Funk {
    sexyMthFka(): void {
        throw new Error("Method not implemented.");
    }

}