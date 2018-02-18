import { Component, OnInit } from '@angular/core';
import {AppServiceService} from '../app-service.service';
import { User } from './user.model';


@Component({
selector: 'app-user',
templateUrl: './user.component.html',
styleUrls: ['./user.component.css']
})

export class UserComponent implements OnInit {

    users : [User]
    constructor(private AppServiceService: AppServiceService) { }
   
    ngOnInit() {
        this.AppServiceService.getUsers().subscribe(
            (users : [User]) => this.users = users);
}

}