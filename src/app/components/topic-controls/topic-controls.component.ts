import { Component } from '@angular/core'
import { Store } from '@ngrx/store'
import { selectSidebarOpened } from '@state/ui/ui.selectors'
import { toggleSidebarClicked } from '@state/ui/ui.actions';

@Component({
  selector: 'app-topic-controls',
  templateUrl: './topic-controls.component.html',
  styleUrls: ['./topic-controls.component.scss']
})
export class TopicControlsComponent {
  constructor(
    private store: Store
  ) {}

  sidebarOpened$ = this.store.select(selectSidebarOpened)
  
  toggleSidenav() {
    this.store.dispatch(toggleSidebarClicked())
  }
}
