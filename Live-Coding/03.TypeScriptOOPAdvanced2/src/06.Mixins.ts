// Disposable mixin
class Disposable{
    isDisposed: boolean = false;
    dispose(){
        this.isDisposed = true;
    }
}

// Activate mixin
class Activate{
    isActive: boolean = false;
    activate(){
        this.isActive = true;
    }
}

class SmartObject implements Disposable, Activate {
    constructor(){
        console.log('Created smart class');
    }

    interact(){
        this.activate();
    }

    // Disposable
    isDisposed : boolean = false;
    dispose(): void {};

    // Activate
    isActive: boolean = false;
    activate():void {};
}

applyMixins(SmartObject, [Disposable, Activate]);

function applyMixins(derivedCtor: any, baseCtors: any[]){
    baseCtors.forEach(baseCtor => {
        Object.getOwnPropertyNames(baseCtor.prototype).forEach(name => {
            derivedCtor.prototype[name] = baseCtor.prototype[name];
        });
    });
}

var smm = new SmartObject();
smm.interact();
console.log(smm.isActive);
smm.activate();
