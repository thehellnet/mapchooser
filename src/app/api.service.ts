import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private static API_URL = '/api/cod4.py';

  private _running = false;

  constructor(private http: HttpClient) {
  }


  get running(): boolean {
    return this._running;
  }

  public mapRestart() {
    this.doPost({
      action: 'mapRestart'
    });
  }

  public fastRestart() {
    this.doPost({
      action: 'fastRestart'
    });
  }

  public changeMap(gametype: string, mapTag: string) {
    this.doPost({
      action: 'changeMap',
      gametype: gametype,
      mapTag: mapTag,
    });
  }

  public sendMessage(message: string) {
    this.doPost({
      action: 'sendMessage',
      message: message
    });
  }

  private doPost(requestBody) {
    if (this._running === true) {
      return;
    }

    this._running = true;

    this.http.post(ApiService.API_URL, requestBody).subscribe(value => {
      this._running = false;
    }, error => {
      console.log(error);
      this._running = false;
    });
  }
}
