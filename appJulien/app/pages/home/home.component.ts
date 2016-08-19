import {Component, OnInit} from "@angular/core";
import {Router} from "@angular/router";
import {Page} from "ui/page";
import {alert} from "../../utils/dialog-util";

@Component({
    selector: "my-app",
    templateUrl: "./pages/home/home.component.html",
    styleUrls: ["./pages/home/home.css"]
    
})
export class HomeComponent implements OnInit{

//public router:Router;
constructor(private _router: Router, private page:Page){
    
}

ngOnInit(){

}
    public onTap() {
        //this.router.navigate(["/"]);
       // alert(String(this._router==null));
        this._router.navigate(["/list"]);
    }
}
