export class ChatRoom {

    name: string;
    description: string;
    backgound: string;
    ppalColor: string;
    secondaryColor: string;
    icon: string;

    constructor(name?: string, description?: string, background?: string, ppalColor?: string, secondaryColor?: string, icon?: string) {
        this.name = name;
        this.description = description;
        this.backgound = background;
        this.ppalColor = ppalColor;
        this.secondaryColor = secondaryColor;
        this.icon = icon;
    }
    
}
