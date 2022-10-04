/*import * as events from "events";

interface PlayerType {
    firstName: string;
    lastName: string;

    doSomething<T>(item: T[]): T;
}

class Player implements PlayerType {
    protected score: number = 0;

    constructor(public firstName: string, public lastName: string) {
    }

    get newScore() {
        return this.score;
    }

    set changedScore(value: number) {
        if (value < 0) {
            console.log(`error!`);
        } else {
            this.score = value;
        }
    }

    doSomething<T>(item: T[]): T {
        const random = Math.floor(item.length * Math.random());
        return item[random];
    }
}

class IsAdmin extends Player {
    public isAdmin: boolean;
    #score: number = 9;

    constructor(firstName: string, lastName: string, isAdmin: boolean) {
        super(firstName, lastName);
        this.isAdmin = isAdmin;
    }

    get adminScore() {
        return this.#score;
    }
}

const playerOne = new Player("Alex", "Daemen");
console.log(playerOne.newScore);
console.log(playerOne.changedScore = 15);
console.log(playerOne.newScore);
const adminPlayerOne = new IsAdmin("Dennis", "Anderson", true);
console.log(adminPlayerOne.adminScore);

function identity<T>(item: T): T {
    return item;
}

console.log(playerOne.doSomething([5, 6, 7, 8, 8]));
console.log(playerOne.doSomething(["a", "b", "s"]));*/

interface ButtonContent{
    description: string,
    value: string | number,
}

class Button implements ButtonContent {
    constructor(public description: string, public value: string | number) {
    }
    printContent(): void {
        console.log(`printed: ${this.description} & ${this.value}`);
    }
}

const textInput = document.querySelector<HTMLFormElement>("#text")!;
const onClick = function (e: Event): void {
    e.preventDefault();
    const btnObj = new Button("new Button Object", textInput.value);
    console.dir(btnObj);
    btnObj.printContent();
}

const btn = document.querySelector<HTMLFormElement>("#btn")!;
btn.addEventListener("click", onClick);