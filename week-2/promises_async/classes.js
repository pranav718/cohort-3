class rectangle {
    constructor(height, width, color){
        this.height = height
        this.width = width
        this.color = color
    }  // initialized all of em

    area() {
        return this.height * this.width ;
    }

    paint(){
        console.log(`Your rectangle is painted as ${this.color}`);
    }
}

const rect = new rectangle(2,3);
const area = rect.area();
console.log(area);   