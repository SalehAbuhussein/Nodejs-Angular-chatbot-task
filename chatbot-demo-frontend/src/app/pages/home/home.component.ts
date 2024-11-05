import { Component } from '@angular/core';

import { ChatContainerComponent } from '../../components/chat-container/chat-container.component';
import { SpinnerComponent } from '../../components/spinner/spinner.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    SpinnerComponent,
    ChatContainerComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
