import { Component, OnInit } from '@angular/core';
import { apiService } from '../shared/services/api.service';

@Component({
  selector: 'game-window',
  templateUrl: './game-window.component.html',
  styleUrls: ['./game-window.component.css'],
})


export class GameWindowComponent implements OnInit {
  constructor(private _apiService: apiService ) {
    
  }
  
  ngOnInit() {
    this._apiService.getQuiz(window.location.pathname.split('/')[1]);
  }
}
