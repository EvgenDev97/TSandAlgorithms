var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Product = /** @class */ (function () {
    function Product(id, title, price) {
        this.id = id;
        this.title = title;
        this.price = price;
    }
    return Product;
}());
var Delivery = /** @class */ (function () {
    function Delivery(date) {
        this.date = date;
    }
    return Delivery;
}());
var homeDelivery = /** @class */ (function (_super) {
    __extends(homeDelivery, _super);
    function homeDelivery(date, address) {
        var _this = _super.call(this, date) || this;
        _this.address = address;
        return _this;
    }
    return homeDelivery;
}(Delivery));
var shopDelivery = /** @class */ (function (_super) {
    __extends(shopDelivery, _super);
    function shopDelivery(shopId) {
        var _this = _super.call(this, new Date()) || this;
        _this.shopId = shopId;
        return _this;
    }
    return shopDelivery;
}(Delivery));
var Cart = /** @class */ (function () {
    function Cart() {
        this.product = [];
    }
    Cart.prototype.addProduct = function (product) {
        this.product.push(product);
    };
    Cart.prototype.deleteProduct = function (productId) {
        this.product.filter(function (product) { return product.id !== productId; });
    };
    Cart.prototype.getSum = function () {
        return this.product
            .map(function (p) { return p.price; })
            .reduce(function (p1, p2) { return p1 + p2; });
    };
    Cart.prototype.serDelivery = function (delivery) {
        this.delivery = delivery;
    };
    Cart.prototype.checkOut = function () {
        if (this.product.length === 0) {
            throw new Error("cart is empty");
        }
        if (!this.delivery) {
            throw new Error("delivery`s method is unknown");
        }
        return { success: true };
    };
    return Cart;
}());
var cart = new Cart();
cart.addProduct((new Product(1, "cookies", 20)));
cart.addProduct((new Product(2, "oranges", 30)));
cart.deleteProduct(2);
cart.serDelivery(new homeDelivery(new Date(), "address"));
console.log(cart.getSum());
console.log(cart.checkOut());
