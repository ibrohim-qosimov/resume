import { Component } from '@angular/core';
import { ResumeComponent } from "./comps/resume/resume.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ResumeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'test.ui';
}
