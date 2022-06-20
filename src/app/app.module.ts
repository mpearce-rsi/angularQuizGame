import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { apiService } from './shared/services/api.service';
import { AppComponent } from './app.component';
import { AppHeaderComponent } from './app-header/app-header.component';
import { QuestionFormComponent } from './question-form/question-form.component';
import { QuestionChoiceComponent } from './question-choice/question-choice.component';
import { HighscorePageComponent } from './highscore-page/highscore-page.component';
import { HighscoreCardComponent } from './highscore-card/highscore-card.component';

@NgModule({
  declarations: [
    AppComponent,
    AppHeaderComponent,
    routingComponents,
    QuestionFormComponent,
    QuestionChoiceComponent,
    HighscorePageComponent,
    HighscoreCardComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, NgbModule, HttpClientModule],
  providers: [apiService],
  bootstrap: [AppComponent],
})
export class AppModule {}
