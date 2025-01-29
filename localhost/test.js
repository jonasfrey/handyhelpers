

// Example usage:
let o = f_o_proxified({ n: 2 });
o.n = 3; // Triggers callback
o.o_nested = { n: 1 }; // Proxifies nested object and triggers callback
o.o_nested.n = 55; // Triggers callback
o.a = [1, 2, 3, 4, { n: 9 }]; // Proxifies array and nested objects
o.a.push(99); // Triggers callback once with added indices
o.a[4] = 3
o.a = o.a.filter((n_idx, v)=>{return n_idx < 3})
o.a = [1,2,3,4,5,6,7,8,9]
let n_idx_start = 3
let n_delete_count = 3
o.a.splice(
    n_idx_start,
    n_delete_count
)
o.o_nested.n = 4
o.a[2] = 2

o.a = o.a.map(v=>v+2)

o.a.splice(
    n_idx_start,
    n_delete_count
)
console.log(o)