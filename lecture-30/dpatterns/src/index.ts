class Earth {
    private people : Array<Human> = [];
    private static instance :  null | Earth = null;

    static getInstance = function () {
        if(Earth.instance)
        {
            return Earth.instance;
        } 
        Earth.instance = new Earth();
        return Earth.instance;
    };

    addHuman  =  (human :  Human) => {
        this.people.push(human);
    }

    getPeople = () => {
        return this.people;
    }

}
class Human {
    name : string ;
    constructor(name :  string) {
        this.name = name;
        Earth.getInstance().addHuman(this);

    }

}




let e1 = Earth.getInstance();
let e2 = Earth.getInstance();

console.log(e1 ===e2);



let anuj = new Human ("Anuj Gusain");
let vasu = new Human("VAsudex");
console.log(Earth.getInstance().getPeople());