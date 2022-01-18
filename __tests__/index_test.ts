import 'jest'
import {SayHello} from "../index"

describe('SayHello', () => {
    let instance: SayHello;

    beforeEach(() => {
        instance = new SayHello("Henry");
    });

    it('should print hello string', async () => {
        let greeting = instance.sayHello();
        expect(greeting).toBe("Hello Henry!");
    });

});