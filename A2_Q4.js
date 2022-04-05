var chatroom1 = {
    user1: {
        name: "Ritambhara",
        message: {
            messagesSent: ["Hey", "How are you"],
            messagesRec: ["Bye"]
        }
    },
    user2: {
        name: "Bindushree",
        messages: {
            messagesSent: ["Hi", "How are you?!"],
            messagesRec: ["Hello", "Ok", "Tata"]
        }
    },
    user3: {
        name: "Manisha",
        messages: {
            messagesSent: ["Hello", "How are you!!"],
            messagesRec: ["Hey", "Ok", "Bye"]
        }
    }
};
var chatroom2 = {
    user1: {
        name: "Subham",
        messages: {
            messagesSent: ["Hey", "How are you"],
            messagesRec: ["Hello", "Ok", "Bye"]
        }
    },
    user2: {
        name: "Vedant",
        messages: {
            messagesSent: ["Hi", "How are you?!"],
            messagesRec: ["Hello", "Ok", "Tata"]
        }
    },
    user3: {
        name: "Rohan",
        messages: {
            messagesSent: ["Hello", "How are you!!"],
            messagesRec: ["Suspense", "Ok", "Bye"]
        }
    }
};
var map_cr = new Map();
map_cr.set('all_users_cr1', chatroom1);
map_cr.set('msg_user1_cr1', chatroom1.user1.message);
map_cr.set('msg_user2_cr1', chatroom1.user2.messages);
map_cr.set('msg_user3_cr1', chatroom1.user3.messages);
map_cr.set('all_users_cr2', chatroom2);
map_cr.set('msg_user1_cr2', chatroom2.user1.messages);
map_cr.set('msg_user2_cr2', chatroom2.user2.messages);
map_cr.set('msg_user3_cr2', chatroom2.user3.messages);
console.log(map_cr);
