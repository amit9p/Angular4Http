import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { BotService } from './bot.service';
import { Bot } from './bot';

@Component({
   selector: 'app-observable',
   templateUrl: './observable.component.html'
})
export class ObservableComponent implements OnInit { 
   
   observableBot: Observable<Bot[]>;
   bot: Bot[];

   errorMessage: String;

   constructor(private botService: BotService) { }
   ngOnInit(): void {
        

            this.observableBot = this.botService.getBotWithObservable();
            this.observableBot.subscribe(
                bot => this.bot = bot,
                error =>  this.errorMessage = <any>error);

        
   }
}
    