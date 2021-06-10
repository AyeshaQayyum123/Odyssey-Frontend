import { ServiceNames } from './../shared/constants/constant';
import { environment } from './../../environments/environment';
import { HttpClient, HttpResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class FileService{
    constructor(private httpClient: HttpClient,
        private router: Router){

    }

    getAllFile() : any{
        return this.httpClient.get<any>(`${environment.BASE_URL}/${ServiceNames.GET_ALL_FILES}`);
    }
}