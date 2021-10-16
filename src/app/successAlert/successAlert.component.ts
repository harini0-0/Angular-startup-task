import { Component } from '@angular/core';

@Component({
    selector: "app-successAlert",
    templateUrl: "./successAlert.component.html",
    styleUrls: ["./successAlert.component.css"]
})

export class SuccessAlertComponent{
    title = 'firstAssignment';
    serverText = "Server not created!";
    userName = "";
    serverButton =  false;
    serverName = "";
    // constructor(){
    //     setTimeout(() => {
    //         this.serverButton = true;
    //     }, 2000);
    // }
    onGetServer(){
        this.serverText = "Server Created!!! Server Name is " + this.serverName;
    }
    onUpdateName(event: Event){
        this.serverName = (<HTMLInputElement>event.target).value;
    }
    resetUser(){
        this.serverButton = true;
        // this.userName = '';
    }
}