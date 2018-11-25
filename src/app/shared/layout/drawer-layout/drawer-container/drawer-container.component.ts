import { AfterViewInit, Component, ContentChild, Renderer2 } from '@angular/core';
import { DrawerContentComponent }                            from "../drawer-content/drawer-content.component";
import { DrawerComponent }                                   from "../drawer/drawer.component";

@Component({
  selector: 'app-drawer-container',
  templateUrl: './drawer-container.component.html',
  styleUrls: ['./drawer-container.component.scss']
})
export class DrawerContainerComponent implements AfterViewInit {
  @ContentChild(DrawerComponent) drawer: DrawerComponent;
  @ContentChild(DrawerContentComponent) content: DrawerContentComponent;

  ngAfterViewInit(): void {
    this.setDrawerClosed();

    this.drawer.stateChanged.subscribe(newState => {
      switch (newState){
        case 'open':
          this.setDrawerOpen();
          break;
        case 'close':
          this.setDrawerClosed();
          break;
      }
    });
  }

  setDrawerOpen(){
    this.content.setStyle('width', 'calc(100% - 280px)');
    this.content.setStyle('left', '280px');
    this.drawer.setStyle('left', '0');
  }

  setDrawerClosed(){
    this.content.setStyle('width', '100%');
    this.content.setStyle('left', '0');
    this.drawer.setStyle('left', '-280px');
  }

}
