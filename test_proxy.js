function fop(obj, callback) {
    const proxies = new WeakMap();
    const arrayMutatorMethods = ['push', 'pop', 'shift', 'unshift', 'splice', 'sort', 'reverse'];

    function createProxy(target, path) {
        if (typeof target !== 'object' || target === null) {
            return target;
        }

        if (proxies.has(target)) {
            return proxies.get(target);
        }

        const handler = {
            get(target, key, receiver) {
                if (Array.isArray(target) && arrayMutatorMethods.includes(key)) {
                    return function(...args) {
                        const originalLength = target.length;
                        let newArgs = args.map((arg, index) => {
                            if (typeof arg === 'object' && arg !== null) {
                                const elementPath = `${path}.${originalLength + index}`;
                                return createProxy(arg, elementPath);
                            }
                            return arg;
                        });

                        const result = Array.prototype[key].apply(target, newArgs);

                        callback(path);
                        return result;
                    };
                }

                const value = Reflect.get(target, key, receiver);
                const childPath = path ? `${path}.${key}` : key.toString();

                if (typeof value === 'object' && value !== null) {
                    return createProxy(value, childPath);
                }
                return value;
            },

            set(target, key, value, receiver) {
                const fullPath = path ? `${path}.${key}` : key.toString();

                const newValue = (typeof value === 'object' && value !== null) ? createProxy(value, fullPath) : value;
                const result = Reflect.set(target, key, newValue, receiver);

                callback(fullPath);

                return result;
            }
        };

        const proxy = new Proxy(target, handler);
        proxies.set(target, proxy);
        return proxy;
    }

    return createProxy(obj, '');
}

// Example Usage
let o = fop({
    n: 2,
    o: { n: 3 }
}, 
(s_path)=>{
    console.log(`s1:${s_path}`)
});


// Handling external references correctly
let o_test = fop({ n: 5 }, (s)=>{console.log(`s2:${s}`)});
o.a.push(o_test); // Changed: a

o_test.n = 10; // should log 'a.4.n' but logs s2:n
o_test.n = 11; // should log 'a.4.n' but logs s2:n
o_test.n = 12; // should log 'a.4.n' but logs s2:n
