import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import Swal from 'sweetalert2';

interface Alert {
  type: 'success' | 'error' | 'warning' | 'info';
  message: string;
}

@Injectable({
    providedIn: 'root',
  })
  export class AlertService {
    private alertSubject = new BehaviorSubject<Alert | null>(null);
    alerts = this.alertSubject.asObservable();
  
    showAlert(type: 'success' | 'error' | 'warning' | 'info', title: string, message: string) {
        Swal.fire({
          title: title,
          text: message,
          icon: type,
          confirmButtonText: 'OK',
          confirmButtonColor:'#facc15',

          width: '400px',
        });
      }

  }