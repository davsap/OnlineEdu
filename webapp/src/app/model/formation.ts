import { Cours } from './cours';
export class Formation {
    id: Number;
    titre: String;
    dateDebut: Date;
    description: String;
    courses: Cours[];
    constructor (id: Number, titre: String, dateDebut: Date, description: String ) {
    }

    addCours(cours: Cours) {
        this.courses.push(cours);
    }
}
