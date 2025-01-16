import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { RoutesRoutingModule } from './routes/routes-routing.module';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RoutesRoutingModule, CommonModule, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'kanban';
}
