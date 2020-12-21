export class Satellite {
    name: string;
    orbitTye: string;
    type: string;
    operational: boolean;
    launchDate: string;
    constructor(name: string, type: string, launchDate: string, orbitType: string, operational: boolean) {
        this.name = name
        this.orbitTye = orbitType
        this.type = type
        this.operational = operational
        this.launchDate =launchDate
   
    }
}
