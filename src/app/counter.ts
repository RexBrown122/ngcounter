export class Counter {
    public count: number;

    constructor(n?: number) {
        if (n) {
            this.count = n;
        } else {
            this.count = 0;
        }
    }
}
