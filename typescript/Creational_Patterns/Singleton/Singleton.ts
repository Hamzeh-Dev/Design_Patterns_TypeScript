
class Singleton {
    private static instance: Singleton;
    private static _value: number;

    private constructor() {}

    public static getInstance(): Singleton {
        if (!Singleton.instance) {
            Singleton.instance = new Singleton();
        }
        return Singleton.instance;
    }

    set value(value: number) {
        Singleton._value = value;
    }

    get value(): number {
        return Singleton._value;
    }
}

const instance = Singleton.getInstance();

instance.value = 5;
console.log(instance.value);
