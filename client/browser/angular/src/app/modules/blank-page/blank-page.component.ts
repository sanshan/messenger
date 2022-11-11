import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-blank-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './blank-page.component.html',
  styleUrls: ['./blank-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BlankPageComponent {
}
