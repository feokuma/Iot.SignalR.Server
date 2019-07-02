import { Component, OnInit } from '@angular/core';
import { HubConnectionBuilder, HubConnection } from '@aspnet/signalr';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {

  public hubConnection: HubConnection;
  public state: boolean;

  ngOnInit(): void {
    let builder = new HubConnectionBuilder();
    this.hubConnection = builder
      .withUrl('/IotServerHub')
      .build();

    this.hubConnection.on('Notify', (state) => {
      this.state = state;
    });

    this.hubConnection.start();
  }

  onChange(e) {
    this.hubConnection.send("SendStateToDevice", this.state);
    console.log(e);
  }
}
