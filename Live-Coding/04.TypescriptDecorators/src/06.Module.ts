const Module = (function () {
    class A {

    }

    class B {
        private a: A;
    }

    return {
        B
    }
})();

Module.B