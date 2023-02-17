function add(a: number, b: number, c?: number): number {

    if (typeof c !== 'undefined') {
        return a + b + c;
    }
    return a + b;
}
console.log(add(10,20,30))