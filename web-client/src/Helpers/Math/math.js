//@flow
export function moneyFormat(amount : number) {
  return `$${amount.toFixed(2)}`;
}