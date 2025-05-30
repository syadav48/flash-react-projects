function createDiscountCalculator(discountRate) {
    return function (price) {
        return price * (1 - discountRate);
    };
}

const regularDiscount = createDiscountCalculator(0.10); // 10% discount
const premiumDiscount = createDiscountCalculator(0.20); // 20% discount
const studentDiscount = createDiscountCalculator(0.15); // 15% discount

console.log("Regular customer price for $100:", regularDiscount(100)); // Output: Regular customer price for $100: 90
console.log("Premium customer price for $100:", premiumDiscount(100)); // Output: Premium customer price for $100: 80
console.log("Student price for $100:", studentDiscount(100));     // Output: Student price for $100: 85