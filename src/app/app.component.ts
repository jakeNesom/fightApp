import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: '..//views/app-root.html',
  styleUrls: ['../css/app.component.css']
})
export class AppComponent {

  public hp = 700;
  public maxHp = 1000;
  public damage = 1;
  public progressPercentage = "70%";

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

    tapToKill() {
      this.hp = this.hp - this.damage;
      this.progressPercentageCheck();
    }

    progressPercentageCheck() {
     let  hp = this.hp;
     let max = this.maxHp;
     
     let newProgress = Math.round( (hp / max) * 100 );
     console.log(newProgress);
     
     this.progressPercentage = newProgress.toString() + "%";

    }

    
    // generate an id to store in javascript cookies 
    // onLoad = we'll first check for an ID then make one if we don't have one stored
    // id will be Put on node server mongodb via express RESTApi
    makeid()
{
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for( var i=0; i < 50; i++ )
        text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
}
  
}
