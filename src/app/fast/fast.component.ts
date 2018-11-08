import {Component, OnInit} from '@angular/core';
import {ApiService} from '../api.service';

@Component({
  selector: 'app-fast',
  templateUrl: './fast.component.html',
  styleUrls: ['./fast.component.scss']
})
export class FastComponent implements OnInit {

  constructor(private api: ApiService) {
  }

  ngOnInit() {
  }

  mapRestart() {
    this.api.mapRestart();
  }

  fastRestart() {
    this.api.fastRestart();
  }

  sendMessage(message: string) {
    this.api.sendMessage(message);
  }
}
