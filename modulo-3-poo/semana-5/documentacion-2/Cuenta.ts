import Item from "./Item";

export default class Cuenta {
    private lineItems: Item[] = [];

    public addLineItem(lineItem: Item): void {
        this.lineItems.push(lineItem);
    }
    public removeLineItem(lineItem: Item): void {
        for (let i = 0; i < this.lineItems.length; i++) {
            if (this.lineItems[i].equals(lineItem))
                this.lineItems.splice(i, 1);
        }
    }
    public getCostInCents(): number {
        return this.lineItems
            .map(item => item.getCosto())
            .reduce((a, b) => a + b, 0);
    }
    public pay(method: PaymentMethod): void {
        method.pay(getCostInCents());
    }
}