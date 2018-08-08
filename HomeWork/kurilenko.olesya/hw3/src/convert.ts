namespace HW3 {
    interface Convert {
        from(value: number): string;
        to(value: string): number;
    }
    // Version 1
    class BinaryConverter implements Convert {
        from(value: number): string {
            if (value <= 0) return '0';

            let str = '';
            do {
                let ostatok = value % 2;
                str = ostatok > 0 ? '1' + str : '0' + str;

                value = Math.floor(value / 2);
            }
            while (value >= 1);
            return str;
        }
        to(value: string): number {
            if (value.match(/[^0-1]/)) return 0;

            var numb = 0;
            for (var i = 0; i < value.length; i++) {
                numb = numb * 2;
                if (value[i] === '1') {
                    numb += 1;
                }
            }
            return numb;
        }

    }
    console.log(new BinaryConverter().from(10)); //'1010'
    console.log(new BinaryConverter().from(120)); //'1111000'
    console.log(new BinaryConverter().to('1010')); //10
    console.log(new BinaryConverter().to('1111000')); //120

    class OctalConverter implements Convert {
        mask: string[] = ['0', '1', '2', '3', '4', '5', '6', '7'];

        from(value: number): string {
            if (value < 0) return '0';
            if (value <= 7) return this.mask[value];
            let str: string = '';
            do {
                var res = Math.floor(value / 8);
                str = (this.mask[value - (8 * res)]) + str;
                value = res;
                if (value < 8)
                    str = (this.mask[value]) + str;
            }
            while (value >= 8)
            return str;
        }
        to(value: string): number {
            if (value.match(/[^0-7]/)) return 0;
            if (value.length === 1) return this.mask.indexOf(value);

            let res: number = 0;
            for (let i = 0; i < value.length; i++) {

                let indexChar = this.mask.indexOf(value[i]);
                res = 8 * res + indexChar;
            }
            return res;
        }
    }
    console.log(new OctalConverter().from(120)); //'78'
    console.log(new OctalConverter().from(10)); //'a'

    console.log(new OctalConverter().to('170')); //'78'
    console.log(new OctalConverter().to('12')); //'a'

    class HexadecimalConverter implements Convert {
        mask: string[] = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9',
            'A', 'B', 'C', 'D', 'E', 'F'];
        from(value: number): string {
            let str: string = '';

            if (value < 0) return '0';
            if (value <= 16) return this.mask[value];

            do {
                var res = Math.floor(value / 16);
                str = (this.mask[value - (16 * res)]) + str;
                value = res;
                if (value < 16)
                    str = (this.mask[value]) + str;
            }
            while (value >= 16)
            return str;
        }
        to(value: string): number {
            if (value.match(/[^0-9,A-F]/)) return 0;

            if (value.length === 1) return this.mask.indexOf(value);

            let res: number = 0;
            for (let i = 0; i < value.length; i++) {

                let indexChar = this.mask.indexOf(value[i]);
                res = 16 * res + indexChar;
            }
            return res;
        }

    }
    console.log(new HexadecimalConverter().from(120)); //'78'
    console.log(new HexadecimalConverter().from(10)); //'a'

    console.log(new HexadecimalConverter().to('78')); //'78'
    console.log(new HexadecimalConverter().to('A')); //'a'


    // version 2 with toString and ParseInt
    class BinaryConverter1 implements Convert {
        from(value: number): string {
            if (value < 0) {
                value = 0xFFFFFFFF + value + 1;
            }
            return value.toString(2);
        }
        to(value: string): number {
            return parseInt(value, 2);
        }

    }

    class OctalConverter1 implements Convert {
        from(value: number): string {
            if (value < 0) {
                value = 0xFFFFFFFF + value + 1;
            }
            return value.toString(8);
        }
        to(value: string): number {
            return parseInt(value, 8);
        }
    }

    class HexadecimalConverter1 implements Convert {
        from(value: number): string {
            if (value < 0) {
                value = 0xFFFFFFFF + value + 1;
            }
            return value.toString(16);
        }
        to(value: string): number {
            return parseInt(value, 16);
        }

    }
    console.log(new BinaryConverter1().from(120)); //'1111000'
    console.log(new BinaryConverter1().to('1111000')); //120

    console.log(new OctalConverter1().from(120)); // 78
    console.log(new OctalConverter1().to('78')); //120

    console.log(new HexadecimalConverter1().from(120)); //170
    console.log(new HexadecimalConverter1().to('170')); //120

    
    // Version 3
    class Converter<T extends number=2 | 16 | 8> implements Convert {
        convertType: T;

        from(value: number): string {
            if (value < 0) {
                value = 0xFFFFFFFF + value + 1;
            }
            return value.toString(this.convertType);
        }

        to(value: string): number {
            return parseInt(value, this.convertType);
        }
    }

    console.log(new Converter<2>().from(120)); //'1111000'
    console.log(new Converter<2>().to('1111000')); //120

    console.log(new Converter<8>().from(120)); // 78
    console.log(new Converter<8>().to('78')); //120

    console.log(new Converter<16>().from(120)); //170
    console.log(new Converter<16>().to('170')); //120
}