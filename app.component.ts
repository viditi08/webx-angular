import { Component, OnInit } from '@angular/core';

@Component({
selector:'app-root',
templateUrl:'./app.component.html',
styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
constructor() {
console.log('Called Constructor');
}

ngOnInit() {
console.log('Called ngOnInit method');
}

}