import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';

import {Bot} from './bot';

@Injectable()
export class BotService {
    url = "http://localhost:9000/chatbotResponse/hi";
	constructor(private http:Http) { }
    getBotWithObservable(): Observable<Bot[]> {
        return this.http.get(this.url)
		        .map(this.extractData)
		        .catch(this.handleErrorObservable);
    }
  
	private extractData(res: Response) {
	    let body = res.json();
        return body;
    }
    private handleErrorObservable (error: Response | any) {
		console.error(error.message || error);
		return Observable.throw(error.message || error);
    }
   	
}