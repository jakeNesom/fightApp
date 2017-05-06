import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: './views/app-root.html',
  styleUrls: ['./css/app.component.css']
})
export class AppComponent {

  SWIPE_ACTION = { LEFT: 'swipeleft', RIGHT: 'swiperight' };

  avatars = [{
    name: 'kristy',
    image: 'http://semantic-ui.com/images/avatar2/large/kristy.png',
    visible: true
  }];

  swipe(currentIndex: number, action: any = this.SWIPE_ACTION.RIGHT) {
        console.log(currentIndex);
        if (currentIndex > this.avatars.length || currentIndex < 0) return;

        let nextIndex = 0;
        
        // next
        if (action === this.SWIPE_ACTION.RIGHT) {
            const isLast = currentIndex === this.avatars.length - 1;
            nextIndex = isLast ? 0 : currentIndex + 1;
        }

        // previous
        if (action === this.SWIPE_ACTION.LEFT) {
            const isFirst = currentIndex === 0;
            nextIndex = isFirst ? this.avatars.length - 1 : currentIndex - 1;
        }

        // toggle avatar visibility
        this.avatars.forEach((x, i) => x.visible = (i === nextIndex));
    }
  
}
