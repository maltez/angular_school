interface Music {
    play(trackName: string): void;
}

interface Rock extends Music {
    ugar(isUgar: boolean): void;
}

interface Drum {
    tuc(): void;
}

class ClassicalMusic implements Music {
     play(trackName:string): void {
         console.log(`Mozart playing ${trackName}`);
     }

     public violin: boolean = true;
}

class RockMusic implements Music, Drum {
    tuc(): void {
        console.log('Tuc tuc tuc');
    }
    play(trackName:string): void {
        console.log(`THUNDER!!!! THUNDER!!! ${trackName}!!!!`);
    }

    public guitar: boolean = true;
}

const music: Music = new ClassicalMusic();
let rockNRoll: Drum = new RockMusic();


