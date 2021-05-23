class Car{
    constructor(public engineSize: number){

    }
}
class BMW extends Car {
    constructor(engineSize: number){
        super(engineSize);
    }
}
class Porsche extends Car{
    constructor(engineSize: number){
        super(engineSize);
    }
}

const PrintDetails = <T extends Car>(make:T, description: string):void => {
        console.log(description+  make.engineSize)
}

let bmw = new BMW(1998);
PrintDetails<BMW>(bmw,'BMW with Enginesize: ');
let porsche = new Porsche(3595);
PrintDetails<Porsche>(porsche,'Porsche with Engine size: ');