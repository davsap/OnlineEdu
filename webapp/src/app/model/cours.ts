export class Cours {
    id: Number;
    titre: String;
    description: String;
    contenu: String;
    support: String;

    constructor(id: Number, titre: String, description: String, contentu: String, support: String) {
        this.id = id;
        this.titre = titre;
        this.description = description;
        this.contenu = contentu;
        this.support = support;
    }
}
