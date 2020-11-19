import { LightningElement } from 'lwc';

export default class ForEatchLWC extends LightningElement {
    contacts = [
        {
            Id: 'C1',
            Name: 'Mahesh',
            Email: 'mahesh@gmail.com',
        },
        {
            Id: 'C2',
            Name: 'Michael Jones',
            Email: 'Michael@gmail.com',
        },
        {
            Id: 'C3',
            Name: 'Jennifer Wu',
            Email: 'Jennifer@gmail.com',
        },
        {
            Id: 'C4',
            Name: 'Amy Taylor',
            Email: 'Amy@gmail.com',
        }
    ];
}