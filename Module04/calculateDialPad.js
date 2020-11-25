import { LightningElement, track } from 'lwc';

export default class CalculateDialPad extends LightningElement {
    @track expression='';
    @track result;
    handleClick(event){
        console.log('event value==>'+event.target.label);
     this.expression=this.expression+event.target.label;
     console.log('expression value==>'+this.expression);
    }
    clear(){
        this.expression='';
        this.result='';
    }
    submit(){
        console.log('Expression==>'+this.expression);
        try{
            this.result = eval(this.expression);
            //this.expression= ;
        }catch(Exception){
            this.result = "Invalid Expression"; 
            console.log('error ' + this.result);
        }
    }
}