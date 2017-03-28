import {Component} from "@angular/core";
import {Location} from "@angular/common";
import * as ApplicationSettings from "application-settings";

@Component({
    selector: "create",
    templateUrl: `./components/create/create.html`,
})
export class CreateComponent {
    
    private location: Location;
    public firstname: string;
    public lastname: string;
    private personList: Array<Object>;

    constructor(location: Location){
        this.location = Location; 
        this.personList = JSON.parse(ApplicationSettings.getString("people", "[]"));
        this.firstname="";
        this.lastname="";
    }
    save(){
        if (this.firstname !="" && this.lastname !=""){
            this.personList.push({firstname: this.firstname, lastname:this.lastname});
            ApplicationSettings.setString("people", JSON.stringify(this.personList));
            this.location.back;
        }
    }

}