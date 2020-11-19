import { LightningElement, track } from 'lwc';
export default class IfelseDemo extends LightningElement {
    tomImg='https://i.pinimg.com/originals/76/65/78/76657870f44b49e13d59cc2fdd52083f.png';
    jerryImg='https://i.pinimg.com/originals/32/4d/af/324daf67a0280a7fa679472e993755f8.jpg';
    @track show=true;
    showTomHandler(){
    this.show=false;
    }
    showJerryHandler(){
        this.show=true;
    }
}