export default class SD {
    constructor(p) {
        this.p = p;
    }
    init() {
        this.centerX = this.p.width / 2;
        this.centerY = this.p.height / 2;
    }
    update() {
        let sd = 60;
        this.x = this.p.int(this.p.randomGaussian(this.centerX, sd));
        this.y = this.p.int(this.p.randomGaussian(this.centerY, sd));
    }
    draw() {
        this.p.noStroke();
        this.p.fill(0, 10);
        this.p.ellipse(this.x, this.y, 16, 16);
    }
}
