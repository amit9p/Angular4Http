import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { AppComponent }  from './app.component';
import { ObservableComponent }  from './observable.component';
import { BotService } from './bot.service';

@NgModule({
  imports: [     
        BrowserModule,
		HttpModule
  ],
  declarations: [
        AppComponent,
		ObservableComponent
  ],
  providers: [
       
        BotService
  ],
  bootstrap: [
        AppComponent
  ]
})
export class AppModule { }
