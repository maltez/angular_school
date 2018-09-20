import { Component } from '@angular/core';
import { ConvertFromMorse, ConvertToMorse} from './pipe/morse.pipe';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ ConvertFromMorse,ConvertToMorse ]
})
export class AppComponent {
  title = 'hw9';
  textToMorse:string='';
  morseToText:string='';
}
