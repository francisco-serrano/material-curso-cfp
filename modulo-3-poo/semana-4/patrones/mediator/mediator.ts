interface ChatMediator {
    sendMessage(msg: string, user: User): void;
    addUser(user: User): void;
}

abstract class User {
    protected mediator: ChatMediator;
    protected name: string;

    public constructor(mediator: ChatMediator, name: string) {
        this.mediator = mediator;
        this.name = name;
    }

    public abstract send(msg: string): void;
    public abstract receive(msg: string): void;
}

class ChatMediatorImpl implements ChatMediator {

    private users: Array<User>;

    public constructor() {
        this.users = new Array<User>();
    }

    public addUser(user: User): void {
        this.users.push(user);
    }

    public sendMessage(msg: string, user: User): void {
        for (let i = 0; i < this.users.length; i++) {
            if (this.users[i] != user)
                this.users[i].receive(msg);
        }
    }
}

class UserImpl extends User {

    public constructor(med: ChatMediator, name: string) {
        super(med, name);
    }

    public send(msg: string): void {
        console.log(this.name + ": Sending Message=" + msg);
        this.mediator.sendMessage(msg, this);
    }

    public receive(msg: string): void {
        console.log(this.name + ": Received Message:" + msg);
    }

}

let mediator: ChatMediator = new ChatMediatorImpl();
let user1: User = new UserImpl(mediator, "Pankaj");
let user2: User = new UserImpl(mediator, "Lisa");
let user3: User = new UserImpl(mediator, "Saurabh");
let user4: User = new UserImpl(mediator, "David");
mediator.addUser(user1);
mediator.addUser(user2);
mediator.addUser(user3);
mediator.addUser(user4);

user1.send("Hi All");