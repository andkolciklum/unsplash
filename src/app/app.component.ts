import { Component, ViewChild } from '@angular/core'
import { MatSidenav } from '@angular/material/sidenav'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild('sidenav') sidenav: MatSidenav;

  sidenavOpened = true

  toggleSidenav() {
    this.sidenavOpened = !this.sidenavOpened
    // this.sidenav.close()
  }
}
