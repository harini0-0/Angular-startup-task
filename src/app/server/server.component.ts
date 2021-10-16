import { Component } from "@angular/core";

@Component({
    selector:"app-server",
    templateUrl: "./server.component.html",
    styleUrls: ["./server.component.css"],
})


export class ServerComponent{
    serverId: number = 10;
    serverStatus: string = "";
    numb = 1;
    serverNumbers: number[] = [];
    serverDate: Date[] = [];
    constructor(){
        this.serverStatus = Math.random() > 0.5 ? "Online" : "Offline";
    }
    getServerStatus(){
        return this.serverStatus;   
    }
    getColor(){
        return this.serverStatus === "Online" ? "aquamarine" : "red";
    }
    clearing(){
        this.serverDate = [];
        this.serverNumbers = [];
        this.numb = 1;
    }
    onPush(){
        this.serverNumbers.push(this.numb);
        this.numb = this.numb + 1;
        this.serverDate.push(new Date());
    }
    
    getVisibility(){
        return this.numb % 2 === 0 ? "hidden" : "visible";
    }
}