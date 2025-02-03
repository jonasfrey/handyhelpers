// i want to have an possibly nested object that is a
// proxy and if something is written to the object
// this should also be a proxy then 
// like this for example 
// if any change happens on the object a 'callback' should be triggered
// the callback should receive the path of the property in the nested object / proxy

let o = fop({
    n: 2, 
    o: {
        n: 3
    }
});

o.n = 3 // trigger 'callback' with 'n'
o.o.n = 5 // trigger 'callback' with 'o.n'

o.o2 = {n:4}// trigger 'callback' with 'o2'
o.o2.n = 5 // trigger 'callback' with 'o2.n'

o.a = [1,2,3]; // trigger 'callback' with 'a'

o.a.push({n:6}) // trigger 'callback' with 'a'

let onew = o.a[3]; 
onew.s = 'test' // trigger 'callback' with 'a.3.s'

// now a problem that i can think of would be this. 
// i want to be able to initialize an object and have its reference like this 

let o_test = {n: 5}; // o is now the reference 
//then i want to push it to an array of the proxy object 
o.a.push(o_test);

// and now if i manipulate that object
// the callback should be triggered with 'o.a.5.n' 
o_test.n = 10 // trigger 'callback' 

// is this event possible?
