export class Weather {
    id:number;
    date:number;
    name:string;
    main:string;
    icon:string;
    description:string;
    temperature:number;
    
    constructor(id, date, name, main, icon, description, temperature) {
        this.id = id;
        this.date = date;
        this.name = name;
        this.main = main;
        this.icon = icon;
        this.description = description;
        this.temperature = temperature;
    }
}