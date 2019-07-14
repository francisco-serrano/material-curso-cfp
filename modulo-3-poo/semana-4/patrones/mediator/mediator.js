var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var User = /** @class */ (function () {
    function User(mediator, name) {
        this.mediator = mediator;
        this.name = name;
    }
    return User;
}());
var ChatMediatorImpl = /** @class */ (function () {
    function ChatMediatorImpl() {
        this.users = new Array();
    }
    ChatMediatorImpl.prototype.addUser = function (user) {
        this.users.push(user);
    };
    ChatMediatorImpl.prototype.sendMessage = function (msg, user) {
        for (var i = 0; i < this.users.length; i++) {
            if (this.users[i] != user)
                this.users[i].receive(msg);
        }
    };
    return ChatMediatorImpl;
}());
var UserImpl = /** @class */ (function (_super) {
    __extends(UserImpl, _super);
    function UserImpl(med, name) {
        return _super.call(this, med, name) || this;
    }
    UserImpl.prototype.send = function (msg) {
        console.log(this.name + ": Sending Message=" + msg);
        this.mediator.sendMessage(msg, this);
    };
    UserImpl.prototype.receive = function (msg) {
        console.log(this.name + ": Received Message:" + msg);
    };
    return UserImpl;
}(User));
var mediator = new ChatMediatorImpl();
var user1 = new UserImpl(mediator, "Pankaj");
var user2 = new UserImpl(mediator, "Lisa");
var user3 = new UserImpl(mediator, "Saurabh");
var user4 = new UserImpl(mediator, "David");
mediator.addUser(user1);
mediator.addUser(user2);
mediator.addUser(user3);
mediator.addUser(user4);
user1.send("Hi All");
