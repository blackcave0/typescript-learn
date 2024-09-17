"use strict";
// * In TypeScript when enum constans are exlicitly assigned numeric values, they are automatically assigned incremental numric values starting from 0. the default numeric value for first enum constant is 0, and subsequent enum constant receiv value incrementad by 1.
// defining enum
var Roles;
(function (Roles) {
    Roles["user"] = "user";
    Roles["admin"] = "admin";
})(Roles || (Roles = {}));
const user1 = {
    name: 'user',
    email: 'user@gmail.com',
    password: 'abcd',
    role: Roles.user
};
const user2 = {
    email: 'admin@gmail.com',
    password: 'abc3',
    role: Roles.admin
};
// checking which are admin
const isAdmin = (user) => {
    const { name, role, email } = user;
    return role === 'admin' ? `${!name ? email : name} is allow to edit this website` : `${!name ? email : name} is not allow to edit this website`;
};
console.log(isAdmin(user1));
console.log(isAdmin(user2));
