export default class Rain {
    constructor(p) {
        this.p = p;
    }
    init(count) {
        this.t = this.p.createVector(0, 1000);
        this.drops = new Array(count).fill(null).map(() => this.getNewDrop());
    }
    update() {
        this.drops = this.drops.map((d) => {
            let drop = Object.assign({}, d);
            drop.position.add(drop.velocity);

            if (drop.position.y > this.p.height + drop.size.y) {
                drop = this.getNewDrop();
            }

            return drop;
        });
    }
    draw() {
        this.drops.map((d) => {
            this.p.fill(200);
            this.p.ellipse(d.position.x, d.position.y, d.size.x, d.size.y);
        });
    }
    getNewDrop() {
        this.t.add(this.p.createVector(0.01, 0.01));
        let size = this.p.createVector(this.p.randomGaussian(6, 1), this.p.randomGaussian(8, 2));
        return {
            size: size,
            position: this.p.createVector(
                // this.p.randomGaussian(this.p.width / 2, this.p.width / 5),
                this.p.map(this.p.noise(this.t.x), 0, 1, 0, this.p.width),
                -size.y,
            ),
            velocity: this.p.createVector(
                this.p.map(this.p.noise(this.t.x), 0, 1, -2, 5),
                // this.p.map(this.p.noise(this.t.y), 0, 1, 3, 15),
                this.p.randomGaussian(8, 2),
            ),
        };
    }
}