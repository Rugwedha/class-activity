class Gifts {
    constructor(x, y, w, h) {
        let options = {
            isStatic: true
        }
        this.body = Bodies.rectangle(x, y, w, h, options);
        this.w = w;
        this.h = h;
        this.image = loadImage('assets/gift.png')
        World.add(world, this.body);



    }
    show() {
        push()
        imageMode(CENTER);
        image(this.image, this.body.position.x, this.body.position.y, this.w, this.h)
        pop()

    }
}

