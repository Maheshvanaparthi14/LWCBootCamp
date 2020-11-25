import { api, LightningElement } from 'lwc';

export default class CalculateChild extends LightningElement {
    @api expressionValue;
    @api result;
}