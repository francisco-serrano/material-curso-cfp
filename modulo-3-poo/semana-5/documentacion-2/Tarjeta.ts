import PaymentMethod from "./PaymentMethod";

export default class Targeta implements PaymentMethod {
    public pay(costo: number): void {
        console.log('Se pagó ' + costo + ' empleando tarjeta');        
    }
}