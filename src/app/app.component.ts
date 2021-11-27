import { Component } from '@angular/core';
import { UserService } from './user.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'GS';
  cardData: any = []
  constructor (private user : UserService){
    this.user.getData().subscribe(res=>{
      this.cardData = res;
      console.log(this.cardData);
    });
  }
}
