const _object = {
    "name": "John",
    "age": 30
};

const handler = {
    get: function (target, prop, receiver) {
        return "404";
    }
};

const proxyObject = new Proxy(_object, handler);

console.log(proxyObject.name);
console.log(proxyObject.age);
console.log(proxyObject.anyProperty);