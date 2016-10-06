import {Page} from "ionic-angular";
import {ViewChild} from "angular2/core";
import {BlankPage} from "./blank/blank";


@Page({
    templateUrl: 'build/pages/home/home.html',
    queries: {
        slider: new ViewChild('mySlider'),
        tabs: new ViewChild('myTabs')
    }
})
export class HomePage {

    constructor() {
        this.blank = BlankPage;
    }

    onSlideChanged() {
        var tab_index = this.tabs.getSelected().index;
        var slider_index = this.slider.getActiveIndex();
        if (tab_index != slider_index) {
          document.querySelector('#my-slider .swiper-wrapper').classList.remove('cannot-go-left');
          document.querySelector('#my-slider .swiper-wrapper').classList.remove('cannot-go-right');
          this.tabs.select(slider_index);
        }
    }

    onTabsChange() {
        var tab_index = this.tabs.getSelected().index;
        var slider_index = this.slider.getActiveIndex();
        if (tab_index != slider_index) {
          document.querySelector('#my-slider .swiper-wrapper').classList.remove('cannot-go-left');
          document.querySelector('#my-slider .swiper-wrapper').classList.remove('cannot-go-right');
          this.slider.slideTo(tab_index);
        }
    }

}
