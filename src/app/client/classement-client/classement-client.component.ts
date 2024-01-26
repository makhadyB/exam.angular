import { Component } from '@angular/core';
import { AdminComponent } from '../../admin/admin.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-classement-client',
  standalone: true,
  imports: [FormsModule,CommonModule,AdminComponent],
  templateUrl: './classement-client.component.html',
  styleUrl: './classement-client.component.css'
})
export class ClassementClientComponent {

}
