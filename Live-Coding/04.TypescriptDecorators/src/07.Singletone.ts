const Singleton = (function(){
    class A {

    }

    let instance: A;

    const getInstance = function() {
        instance = instance ? instance : new A();
        return instance;
    }

    return {
        getInstance 
    }
})();