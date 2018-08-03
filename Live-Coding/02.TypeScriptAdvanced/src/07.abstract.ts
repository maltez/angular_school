abstract class Rocket {
    protected fuel: number = 100;
    public abstract launch(ignition: boolean): void; 
}

class Shuttle extends Rocket {
    public launch(ignition: boolean):void {
        ignition ? this.fuel = this.fuel - 99 : console.log('Psssssssss');
    }
}