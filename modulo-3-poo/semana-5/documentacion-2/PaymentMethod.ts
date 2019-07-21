export default interface PaymentMethod {
    pay(cost: number): void;
}