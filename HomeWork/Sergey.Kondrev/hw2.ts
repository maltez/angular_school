abstract class Obj234 {
	public abstract valueOf<T extends number | string>(arg: T): string | number | object;
	public abstract toStringCustom<T>(param: T): string;

}

class Obj235 extends  Obj234 {
	public valueOf<T>(arg: T): string | number | object {
		return arg.valueOf();
	}

	public toStringCustom<T>(param: T): string {
		return param + '';
	}
}