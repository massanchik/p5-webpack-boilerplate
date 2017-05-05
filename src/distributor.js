export default class Distributor {
    constructor(p) {
        this.p = p;
    }
    init() {
        this.cols = new Array(20);
    }
    update() {
        let i = this.p.int(this.p.random(this.cols.length));
        this.cols[i] = this.cols[i] ? this.cols[i]+1 : 1;
        this.cols[i] = this.p.constrain(this.cols[i], 0, this.p.height);
    }
    draw() {
        this.p.stroke(0);
        this.p.fill(200);
        let w = this.p.width/this.cols.length;
        this.cols.map((v, i) => this.p.rect(w*i, this.p.height-v, w-1, v));
    }
}
