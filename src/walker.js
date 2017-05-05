export default class Walker {
    constructor(p) {
        this.p = p;
    }
    init(count=1) {
        this.walkers = new Array(count);
        this.walkers.fill({
            x: this.p.width / 2,
            y: this.p.height / 2,
        });
    }
    update() {
        this.walkers = this.walkers.map((w) => {
            let walker = Object.assign({}, w);
            walker.x += this.chooseDir(walker.x, this.p.mouseX);
            walker.y += this.chooseDir(walker.y, this.p.mouseY);
            walker.x = this.p.constrain(walker.x, 0, this.p.width - 1);
            walker.y = this.p.constrain(walker.y, 0, this.p.height - 1);
            return walker;
        });
    }
    draw() {
        this.p.stroke(0);
        this.walkers.map((walker) => this.p.point(walker.x, walker.y));
    }
    chooseDir(source, target) {
        if (source - target > 0) {
            return this.p.random([-1, -1, 1, 0]);
        }
        return this.p.random([-1, 1, 1, 0]);
    }
}
