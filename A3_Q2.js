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
var Account = /** @class */ (function () {
    function Account(id_new, name_new, balance_new) {
        this.id = id_new;
        this.name = name_new;
        this.balance = balance_new;
    }
    return Account;
}());
var SavingsAccount = /** @class */ (function (_super) {
    __extends(SavingsAccount, _super);
    function SavingsAccount(id_new, name_new, balance_new, int) {
        var _this = _super.call(this, id_new, name_new, balance_new) || this;
        _this.interest = int;
        return _this;
    }
    SavingsAccount.prototype.totalBalance = function () {
        var totalbalance = this.balance * (this.interest / 100) * 4;
        return totalbalance;
    };
    return SavingsAccount;
}(Account));
var CurrentAccount = /** @class */ (function (_super) {
    __extends(CurrentAccount, _super);
    function CurrentAccount(id_new, name_new, balance_new, int) {
        var _this = _super.call(this, id_new, name_new, balance_new) || this;
        _this.interest = int;
        return _this;
    }
    CurrentAccount.prototype.totalBalance = function () {
        var totalbalance = this.balance * (this.interest / 100) * 4;
        return totalbalance;
    };
    return CurrentAccount;
}(Account));
var saving1 = new SavingsAccount(12, "Ritambhara", 7000, 7);
var current1 = new CurrentAccount(13, "Ritambhara", 90000, 5);
console.log(saving1.totalBalance());
console.log(current1.totalBalance());
