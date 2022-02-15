import { Component } from '@angular/core'
import { Store } from '@ngrx/store'
import { selectSidebarOpened } from '@state/ui/ui.selectors'
import { selectActiveTopic, selectCurrentPage, selectTotalPages } from '@state/topics/topics.selectors'
import { toggleSidebarClicked } from '@state/ui/ui.actions'
import { nextPageClicked, prevPageClicked } from '@state/topics/topics.actions'

@Component({
  selector: 'app-topic-controls',
  templateUrl: './topic-controls.component.html',
  styleUrls: ['./topic-controls.component.scss']
})
export class TopicControlsComponent {
  constructor(
    private store: Store,
  ) {}

  sidebarOpened$ = this.store.select(selectSidebarOpened)
  activeTopic$ = this.store.select(selectActiveTopic)
  currentPage$ = this.store.select(selectCurrentPage)
  totalPages$ = this.store.select(selectTotalPages)
  
  toggleSidenav() {
    this.store.dispatch(toggleSidebarClicked())
  }

  previousPageClicked () {
    this.store.dispatch(prevPageClicked())
  }

  nextPageClicked () {
    this.store.dispatch(nextPageClicked())
  }
}
