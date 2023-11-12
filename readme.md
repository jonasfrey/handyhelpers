<!-- {"s_msg":"this file was automatically generated","s_by":"f_generate_markdown.module.js","s_ts_created":"Sun Nov 12 2023 11:05:37 GMT+0100 (Central European Standard Time)","n_ts_created":1699783537833} -->
![handy helpers logo](./logo_banner.png)
# Handy Helpers
this is a collection of useful functions
```javascript
            
```
## f_a_a_v__combinations
get all possible combinations of all items without caring about the order
```javascript
            let a = f_a_a_v__combinations(['a','b','c','d'])
            f_assert_equals(
                JSON.stringify(a),
                JSON.stringify([
                    ["a"],
                    ["b"],
                    ["a","b"],
                    ["c"],
                    ["a","c"],
                    ["b","c"],
                    ["a","b","c"],
                    ["d"],
                    ["a","d"],
                    ["b","d"],
                    ["a","b","d"],
                    ["c","d"],
                    ["a","c","d"],
                    ["b","c","d"],
                    ["a","b","c","d"]
                ])
            )

            console.log(a);
        }),
        f_deno_test("f_a_v__recursive", async () => {
            
            
```
## f_a_v__recursive
## f_a_v__recursive
get a n-dimensional array with a value of choice
get a n-dimensional array with a value of choice
```javascript
            let a = f_a_v__recursive(3,3,function(n_x, n_y){return `${[n_x, n_y].join(',')}`})
            let a = f_a_v__recursive(3,3,function(n_x, n_y){return `${[n_x, n_y].join(',')}`})
            console.log(a);
            console.log(a);
        }),
        }),
        f_deno_test("f_n_idx_ensured_inside_array", async () => {
        f_deno_test("f_n_idx_ensured_inside_array", async () => {
            // only internally used and tested
            // only internally used and tested
            let n_len = 3; 
            let n_len = 3; 
            f_assert_equals(f_n_idx_ensured_inside_array(0, n_len), 0)
            f_assert_equals(f_n_idx_ensured_inside_array(0, n_len), 0)
            f_assert_equals(f_n_idx_ensured_inside_array(1, n_len), 1)
            f_assert_equals(f_n_idx_ensured_inside_array(1, n_len), 1)
            f_assert_equals(f_n_idx_ensured_inside_array(2, n_len), 2)
            f_assert_equals(f_n_idx_ensured_inside_array(2, n_len), 2)
            f_assert_equals(f_n_idx_ensured_inside_array(3, n_len), 0)
            f_assert_equals(f_n_idx_ensured_inside_array(3, n_len), 0)
            f_assert_equals(f_n_idx_ensured_inside_array(4, n_len), 1)
            f_assert_equals(f_n_idx_ensured_inside_array(4, n_len), 1)
            f_assert_equals(f_n_idx_ensured_inside_array(5, n_len), 2)
            f_assert_equals(f_n_idx_ensured_inside_array(5, n_len), 2)
            f_assert_equals(f_n_idx_ensured_inside_array(6, n_len), 0)
            f_assert_equals(f_n_idx_ensured_inside_array(6, n_len), 0)
            f_assert_equals(f_n_idx_ensured_inside_array(0, n_len), 0)
            f_assert_equals(f_n_idx_ensured_inside_array(0, n_len), 0)
            f_assert_equals(f_n_idx_ensured_inside_array(-1, n_len), 2)
            f_assert_equals(f_n_idx_ensured_inside_array(-1, n_len), 2)
            f_assert_equals(f_n_idx_ensured_inside_array(-2, n_len), 1)
            f_assert_equals(f_n_idx_ensured_inside_array(-2, n_len), 1)
            f_assert_equals(f_n_idx_ensured_inside_array(-3, n_len), 0)
            f_assert_equals(f_n_idx_ensured_inside_array(-3, n_len), 0)
            f_assert_equals(f_n_idx_ensured_inside_array(-4, n_len), 2)
            f_assert_equals(f_n_idx_ensured_inside_array(-4, n_len), 2)
            f_assert_equals(f_n_idx_ensured_inside_array(-5, n_len), 1)
            f_assert_equals(f_n_idx_ensured_inside_array(-5, n_len), 1)
            f_assert_equals(f_n_idx_ensured_inside_array(-6, n_len), 0)
            f_assert_equals(f_n_idx_ensured_inside_array(-6, n_len), 0)


        }),
        }),


        f_deno_test("f_move_in_array", async () => {
        f_deno_test("f_move_in_array", async () => {
            
            
            
```
## f_move_in_array
## f_move_in_array
## f_move_in_array
moves a value in an array, it does not swap the elements!
moves a value in an array, it does not swap the elements!
moves a value in an array, it does not swap the elements!
```javascript



            let a_n = [2,0,1,0,0]
            let a_n = [2,0,1,0,0]
            let a_n = [2,0,1,0,0]
            f_move_in_array(a_n, 2, 0)
            f_move_in_array(a_n, 2, 0)
            f_move_in_array(a_n, 2, 0)
            f_assert_equals(
            f_assert_equals(
            f_assert_equals(
                JSON.stringify(a_n), 
                JSON.stringify(a_n), 
                JSON.stringify(a_n), 
                `[1,2,0,0,0]`
                `[1,2,0,0,0]`
                `[1,2,0,0,0]`
            )
            )
            )
            f_move_in_array(a_n, 1, a_n.length-1)
            f_move_in_array(a_n, 1, a_n.length-1)
            f_move_in_array(a_n, 1, a_n.length-1)
            f_assert_equals(
            f_assert_equals(
            f_assert_equals(
                JSON.stringify(a_n), 
                JSON.stringify(a_n), 
                JSON.stringify(a_n), 
                `[1,0,0,0,2]`
                `[1,0,0,0,2]`
                `[1,0,0,0,2]`
            )
            )
            )
            f_move_in_array(a_n, 2, a_n.length-1)
            f_move_in_array(a_n, 2, a_n.length-1)
            f_move_in_array(a_n, 2, a_n.length-1)
            f_assert_equals(
            f_assert_equals(
            f_assert_equals(
                JSON.stringify(a_n), 
                JSON.stringify(a_n), 
                JSON.stringify(a_n), 
                `[1,0,0,2,0]`
                `[1,0,0,2,0]`
                `[1,0,0,2,0]`
            )
            )
            )
            f_move_in_array(a_n, 0, -1)
            f_move_in_array(a_n, 0, -1)
            f_move_in_array(a_n, 0, -1)
            f_assert_equals(
            f_assert_equals(
            f_assert_equals(
                JSON.stringify(a_n), 
                JSON.stringify(a_n), 
                JSON.stringify(a_n), 
                `[0,0,2,0,1]`
                `[0,0,2,0,1]`
                `[0,0,2,0,1]`
            )
            )
            )
            f_move_in_array(a_n, -1, 0)
            f_move_in_array(a_n, -1, 0)
            f_move_in_array(a_n, -1, 0)
            f_assert_equals(
            f_assert_equals(
            f_assert_equals(
                JSON.stringify(a_n), 
                JSON.stringify(a_n), 
                JSON.stringify(a_n), 
                `[1,0,0,2,0]`
                `[1,0,0,2,0]`
                `[1,0,0,2,0]`
            )
            )
            )
            let o1 = {n:1}
            let o1 = {n:1}
            let o1 = {n:1}
            let o2 = {n:2}
            let o2 = {n:2}
            let o2 = {n:2}
            let o3 = {n:3}
            let o3 = {n:3}
            let o3 = {n:3}
            let o4 = {n:4} 
            let o4 = {n:4} 
            let o4 = {n:4} 
            let o5 = {n:5}
            let o5 = {n:5}
            let o5 = {n:5}
            let a_o = [o1,o2,o3,o4,o5];
            let a_o = [o1,o2,o3,o4,o5];
            let a_o = [o1,o2,o3,o4,o5];
            var n_idx_from = 0;
            var n_idx_from = 0;
            var n_idx_from = 0;
            var n_idx_to = 2;
            var n_idx_to = 2;
            var n_idx_to = 2;
            var o_from = a_o[n_idx_from];
            var o_from = a_o[n_idx_from];
            var o_from = a_o[n_idx_from];
            var o_to = a_o[n_idx_to];
            var o_to = a_o[n_idx_to];
            var o_to = a_o[n_idx_to];
            f_move_in_array(a_o, n_idx_from, n_idx_to)
            f_move_in_array(a_o, n_idx_from, n_idx_to)
            f_move_in_array(a_o, n_idx_from, n_idx_to)
            f_assert_equals(
            f_assert_equals(
            f_assert_equals(
                a_o[n_idx_to], 
                a_o[n_idx_to], 
                a_o[n_idx_to], 
                o_from
                o_from
                o_from
            )
            )
            )
        }),
        }),


        f_deno_test("f_swap_in_array", async () => {
        f_deno_test("f_swap_in_array", async () => {
            
            
            
```
## f_swap_in_array
## f_swap_in_array
## f_swap_in_array
swaps two values in an array
swaps two values in an array
swaps two values in an array
```javascript



            let a_n = [2,0,1,0,0]
            let a_n = [2,0,1,0,0]
            let a_n = [2,0,1,0,0]
            f_swap_in_array(a_n, 2, 0)
            f_swap_in_array(a_n, 2, 0)
            f_swap_in_array(a_n, 2, 0)
            f_assert_equals(
            f_assert_equals(
            f_assert_equals(
                JSON.stringify(a_n), 
                JSON.stringify(a_n), 
                JSON.stringify(a_n), 
                `[1,0,2,0,0]`
                `[1,0,2,0,0]`
                `[1,0,2,0,0]`
            )
            )
            )
            f_swap_in_array(a_n, 0, a_n.length-1)
            f_swap_in_array(a_n, 0, a_n.length-1)
            f_swap_in_array(a_n, 0, a_n.length-1)
            f_assert_equals(
            f_assert_equals(
            f_assert_equals(
                JSON.stringify(a_n), 
                JSON.stringify(a_n), 
                JSON.stringify(a_n), 
                `[0,0,2,0,1]`
                `[0,0,2,0,1]`
                `[0,0,2,0,1]`
            )
            )
            )
            f_swap_in_array(a_n, 2, a_n.length-1)
            f_swap_in_array(a_n, 2, a_n.length-1)
            f_swap_in_array(a_n, 2, a_n.length-1)
            f_assert_equals(
            f_assert_equals(
            f_assert_equals(
                JSON.stringify(a_n), 
                JSON.stringify(a_n), 
                JSON.stringify(a_n), 
                `[0,0,1,0,2]`
                `[0,0,1,0,2]`
                `[0,0,1,0,2]`
            )
            )
            )
            f_swap_in_array(a_n, -1, 2)
            f_swap_in_array(a_n, -1, 2)
            f_swap_in_array(a_n, -1, 2)
            f_assert_equals(
            f_assert_equals(
            f_assert_equals(
                JSON.stringify(a_n), 
                JSON.stringify(a_n), 
                JSON.stringify(a_n), 
                `[0,0,2,0,1]`
                `[0,0,2,0,1]`
                `[0,0,2,0,1]`
            )
            )
            )
            f_swap_in_array(a_n, 2, -1)
            f_swap_in_array(a_n, 2, -1)
            f_swap_in_array(a_n, 2, -1)
            f_assert_equals(
            f_assert_equals(
            f_assert_equals(
                JSON.stringify(a_n), 
                JSON.stringify(a_n), 
                JSON.stringify(a_n), 
                `[0,0,1,0,2]`
                `[0,0,1,0,2]`
                `[0,0,1,0,2]`
            )
            )
            )
        }),
        }),
        f_deno_test("f_move_v_in_array", async () => {
        f_deno_test("f_move_v_in_array", async () => {
            
            
            
```
## f_move_v_in_array
## f_move_v_in_array
## f_move_v_in_array
moves a value in an array by a index difference
moves a value in an array by a index difference
moves a value in an array by a index difference
```javascript



            let a_s = ["a","b","c","d"];
            let a_s = ["a","b","c","d"];
            let a_s = ["a","b","c","d"];
            f_move_v_in_array(a_s, "a", 2)
            f_move_v_in_array(a_s, "a", 2)
            f_move_v_in_array(a_s, "a", 2)
            f_assert_equals(
            f_assert_equals(
            f_assert_equals(
                JSON.stringify(a_s),
                JSON.stringify(a_s),
                JSON.stringify(a_s),
                '["b","c","a","d"]'
                '["b","c","a","d"]'
                '["b","c","a","d"]'
            )
            )
            )
            f_move_v_in_array(a_s, "d", -3)
            f_move_v_in_array(a_s, "d", -3)
            f_move_v_in_array(a_s, "d", -3)
            f_assert_equals(
            f_assert_equals(
            f_assert_equals(
                JSON.stringify(a_s),
                JSON.stringify(a_s),
                JSON.stringify(a_s),
                '["d","b","c","a"]'
                '["d","b","c","a"]'
                '["d","b","c","a"]'
            )
            )
            )
            let o1 = {n:1}
            let o1 = {n:1}
            let o1 = {n:1}
            let o2 = {n:2}
            let o2 = {n:2}
            let o2 = {n:2}
            let o3 = {n:3}
            let o3 = {n:3}
            let o3 = {n:3}
            let o4 = {n:4} 
            let o4 = {n:4} 
            let o4 = {n:4} 
            let o5 = {n:5}
            let o5 = {n:5}
            let o5 = {n:5}
            let a_o = [o1,o2,o3,o4,o5];
            let a_o = [o1,o2,o3,o4,o5];
            let a_o = [o1,o2,o3,o4,o5];
            f_move_v_in_array(a_o, o1, -1)
            f_move_v_in_array(a_o, o1, -1)
            f_move_v_in_array(a_o, o1, -1)
            f_assert_equals(
            f_assert_equals(
            f_assert_equals(
                a_o.at(-1) == o1, 
                a_o.at(-1) == o1, 
                a_o.at(-1) == o1, 
                true
                true
                true
            )
            )
            )
        }),
        }),
        f_deno_test("f_swap_v_in_array", async () => {
        f_deno_test("f_swap_v_in_array", async () => {
            
            
            
```
## f_swap_v_in_array
## f_swap_v_in_array
## f_swap_v_in_array
moves a value in an array by a index difference
moves a value in an array by a index difference
moves a value in an array by a index difference
```javascript



            let a_s = ["a","b","c","d"];
            let a_s = ["a","b","c","d"];
            let a_s = ["a","b","c","d"];
            f_swap_v_in_array(a_s, "a", "d")
            f_swap_v_in_array(a_s, "a", "d")
            f_swap_v_in_array(a_s, "a", "d")
            f_assert_equals(
            f_assert_equals(
            f_assert_equals(
                JSON.stringify(a_s),
                JSON.stringify(a_s),
                JSON.stringify(a_s),
                '["d","b","c","a"]'
                '["d","b","c","a"]'
                '["d","b","c","a"]'
            )
            )
            )
            f_swap_v_in_array(a_s, "b", "c")
            f_swap_v_in_array(a_s, "b", "c")
            f_swap_v_in_array(a_s, "b", "c")
            f_assert_equals(
            f_assert_equals(
            f_assert_equals(
                JSON.stringify(a_s),
                JSON.stringify(a_s),
                JSON.stringify(a_s),
                '["d","c","b","a"]'
                '["d","c","b","a"]'
                '["d","c","b","a"]'
            )
            )
            )
            let o1 = {n:1}
            let o1 = {n:1}
            let o1 = {n:1}
            let o2 = {n:2}
            let o2 = {n:2}
            let o2 = {n:2}
            let o3 = {n:3}
            let o3 = {n:3}
            let o3 = {n:3}
            let o4 = {n:4} 
            let o4 = {n:4} 
            let o4 = {n:4} 
            let o5 = {n:5}
            let o5 = {n:5}
            let o5 = {n:5}
            let a_o = [o1,o2,o3,o4,o5];
            let a_o = [o1,o2,o3,o4,o5];
            let a_o = [o1,o2,o3,o4,o5];
            f_swap_v_in_array(a_o, o1, o5)
            f_swap_v_in_array(a_o, o1, o5)
            f_swap_v_in_array(a_o, o1, o5)
            f_assert_equals(
            f_assert_equals(
            f_assert_equals(
                a_o.at(-1) == o1, 
                a_o.at(-1) == o1, 
                a_o.at(-1) == o1, 
                true
                true
                true
            )
            )
            )
            f_assert_equals(
            f_assert_equals(
            f_assert_equals(
                a_o.at(0) == o5, 
                a_o.at(0) == o5, 
                a_o.at(0) == o5, 
                true
                true
                true
            )
            )
            )
        }),
        }),
        f_deno_test("f_sleep_ms", async () => {
        f_deno_test("f_sleep_ms", async () => {
```
## f_sleep_ms
## f_sleep_ms
## f_sleep_ms
```javascript
            let n_ms = window.performance.now();
            let n_ms = window.performance.now();
            let n_ms = window.performance.now();
            await f_sleep_ms(333);
            await f_sleep_ms(333);
            await f_sleep_ms(333);
            f_assert_equals(
            f_assert_equals(
            f_assert_equals(
                (window.performance.now() - n_ms) >= 333, 
                (window.performance.now() - n_ms) >= 333, 
                (window.performance.now() - n_ms) >= 333, 
                true
                true
                true
            )
            )
            )
        }),
        }),
        f_deno_test("Handy snippets", () => {
        f_deno_test("Handy snippets", () => {
```
## Handy snippets
## Handy snippets
## Handy snippets
extend a file name by '_thumb'
extend a file name by '_thumb'
extend a file name by '_thumb'
```javascript
            // extend the prototype 
            // extend the prototype 
            // extend the prototype 
            f_assert_equals(
            f_assert_equals(
            f_assert_equals(
                'some_image.png'
                'some_image.png'
                'some_image.png'
                    .split('.')
                    .split('.')
                    .split('.')
                    .map((v, n_idx, a)=>{
                    .map((v, n_idx, a)=>{
                    .map((v, n_idx, a)=>{
                        return (n_idx == a.length-2) ? `${v}_thumb`: v
                        return (n_idx == a.length-2) ? `${v}_thumb`: v
                        return (n_idx == a.length-2) ? `${v}_thumb`: v
                    })
                    })
                    })
                    .join('.'), 
                    .join('.'), 
                    .join('.'), 
                'some_image_thumb.png'
                'some_image_thumb.png'
                'some_image_thumb.png'
            )
            )
            )



        }),
        }),
        f_deno_test("f_o_resp__fetch_cached", async () => {
        f_deno_test("f_o_resp__fetch_cached", async () => {
            
            
            
```
## f_o_resp__fetch_cached
## f_o_resp__fetch_cached
## f_o_resp__fetch_cached
makes a fetch but caches the response meta (status, statusText, headers) and data as a_n_u8
makes a fetch but caches the response meta (status, statusText, headers) and data as a_n_u8
makes a fetch but caches the response meta (status, statusText, headers) and data as a_n_u8
```javascript



            var o_resp = await f_o_resp__fetch_cached(
            var o_resp = await f_o_resp__fetch_cached(
            var o_resp = await f_o_resp__fetch_cached(
                fetch, // f_fetch 
                fetch, // f_fetch 
                fetch, // f_fetch 
                [ // a_v_arg__for_f_fetch
                [ // a_v_arg__for_f_fetch
                [ // a_v_arg__for_f_fetch
                    'https://deno.com/', 
                    'https://deno.com/', 
                    'https://deno.com/', 
                    {'headers': {'User-Agent': "Test 1.2/3"}}
                    {'headers': {'User-Agent': "Test 1.2/3"}}
                    {'headers': {'User-Agent': "Test 1.2/3"}}
                ], 
                ], 
                ], 
                true,// b_overwrite_cached_file
                true,// b_overwrite_cached_file
                true,// b_overwrite_cached_file
                1000, // n_ms_diff__overwrite_cached_file  
                1000, // n_ms_diff__overwrite_cached_file  
                1000, // n_ms_diff__overwrite_cached_file  
                async (
                async (
                async (
                    s_url
                    s_url
                    s_url
                )=>{ // f_s_name_file_cached
                )=>{ // f_s_name_file_cached
                )=>{ // f_s_name_file_cached
                    // available functions 
                    // available functions 
                    // available functions 
                    // f_s_name_file_cached__base64encoded -> 'aHR0cHM6Ly9kZW5vLmNvbS8='
                    // f_s_name_file_cached__base64encoded -> 'aHR0cHM6Ly9kZW5vLmNvbS8='
                    // f_s_name_file_cached__base64encoded -> 'aHR0cHM6Ly9kZW5vLmNvbS8='
                    // f_s_name_file_cached__hashed -> 'd2a68e83cffd1f8dc53143c95006f862f199082b'
                    // f_s_name_file_cached__hashed -> 'd2a68e83cffd1f8dc53143c95006f862f199082b'
                    // f_s_name_file_cached__hashed -> 'd2a68e83cffd1f8dc53143c95006f862f199082b'
                    // f_s_name_file_cached__readable_ignore_fragment_and_getparams -> 'https______deno__com'
                    // f_s_name_file_cached__readable_ignore_fragment_and_getparams -> 'https______deno__com'
                    // f_s_name_file_cached__readable_ignore_fragment_and_getparams -> 'https______deno__com'
                    return `${s_url.split('?').shift().replaceAll('/', '--').replaceAll(':', '__')}}`
                    return `${s_url.split('?').shift().replaceAll('/', '--').replaceAll(':', '__')}}`
                    return `${s_url.split('?').shift().replaceAll('/', '--').replaceAll(':', '__')}}`
                },
                },
                },
                './.cache'//a custom path to a folder for the cache
                './.cache'//a custom path to a folder for the cache
                './.cache'//a custom path to a folder for the cache
            );
            );
            );
            f_assert_equals(
            f_assert_equals(
            f_assert_equals(
                o_resp?.b_from_disk, 
                o_resp?.b_from_disk, 
                o_resp?.b_from_disk, 
                undefined
                undefined
                undefined
            );
            );
            );
            
            
            // testing the timeout
            // testing the timeout
            var o_resp = await f_o_resp__fetch_cached(
            var o_resp = await f_o_resp__fetch_cached(
                fetch, // passing the original fetch function 
                fetch, // passing the original fetch function 
                ['https://deno.com/'], 
                ['https://deno.com/'], 
                true, 
                true, 
                24*60*60*100,
                24*60*60*100,
            );
            );
            f_assert_equals(
            f_assert_equals(
                o_resp?.b_from_disk, 
                o_resp?.b_from_disk, 
                undefined
                undefined
            );
            );
            var o_resp = await f_o_resp__fetch_cached(
            var o_resp = await f_o_resp__fetch_cached(
                fetch, // passing the original fetch function 
                fetch, // passing the original fetch function 
                [
                [
                    'https://deno.com/', 
                    'https://deno.com/', 
                ], 
                ], 
            );
            );
            f_assert_equals(
            f_assert_equals(
                o_resp?.b_from_disk,
                o_resp?.b_from_disk,
                true
                true
            );
            );
            var o_resp = await f_o_resp__fetch_cached(
            var o_resp = await f_o_resp__fetch_cached(
                fetch, // passing the original fetch function 
                fetch, // passing the original fetch function 
                ['https://deno.com/'], 
                ['https://deno.com/'], 
                true, 
                true, 
                24*60*60*100,
                24*60*60*100,
            );
            );
            f_assert_equals(
            f_assert_equals(
                o_resp?.b_from_disk, 
                o_resp?.b_from_disk, 
                undefined
                undefined
            );
            );


        }),
        }),


        f_deno_test("f_b_deno", () => {
        f_deno_test("f_b_deno", () => {
```
## f_b_deno
## f_b_deno
## f_b_deno
check if script is running with https://deno.com/
check if script is running with https://deno.com/
check if script is running with https://deno.com/
```javascript
            f_assert_equals(f_b_denojs(), ("Deno" in window))
            f_assert_equals(f_b_denojs(), ("Deno" in window))
            f_assert_equals(f_b_denojs(), ("Deno" in window))
        }),
        }),
        f_deno_test("f_o_html_element__from_s_tag", async () => {
        f_deno_test("f_o_html_element__from_s_tag", async () => {
```
## f_o_html_element__from_s_tag
## f_o_html_element__from_s_tag
## f_o_html_element__from_s_tag
returns a html element
returns a html element
returns a html element
browser:  document.createElement
browser:  document.createElement
browser:  document.createElement
denojs: using /x/deno_dom
denojs: using /x/deno_dom
denojs: using /x/deno_dom
```javascript
            f_assert_equals((await f_o_html_element__from_s_tag('h1')).tagName, 'H1');
            f_assert_equals((await f_o_html_element__from_s_tag('h1')).tagName, 'H1');
            f_assert_equals((await f_o_html_element__from_s_tag('h1')).tagName, 'H1');
        }),
        }),
        f_deno_test("f_o_html__from_s_html", async () => {
        f_deno_test("f_o_html__from_s_html", async () => {
```
## f_o_html__from_s_html
## f_o_html__from_s_html
## f_o_html__from_s_html
returns a html element
returns a html element
returns a html element
browser:  div.innerHTML = s_html
browser:  div.innerHTML = s_html
browser:  div.innerHTML = s_html
denojs: using /x/deno_dom
denojs: using /x/deno_dom
denojs: using /x/deno_dom
```javascript
            f_assert_equals(
            f_assert_equals(
            f_assert_equals(
                (await f_o_html__from_s_html('<div><h1>hello</h1><h1>world</h1></div>')).querySelectorAll('h1')[1].innerText,
                (await f_o_html__from_s_html('<div><h1>hello</h1><h1>world</h1></div>')).querySelectorAll('h1')[1].innerText,
                (await f_o_html__from_s_html('<div><h1>hello</h1><h1>world</h1></div>')).querySelectorAll('h1')[1].innerText,
                'world'
                'world'
                'world'
            );
            );
            );
        }),
        }),


        f_deno_test("f_download_file__from_s_url", async () => {
        f_deno_test("f_download_file__from_s_url", async () => {
```
## f_download_file__from_s_url
## f_download_file__from_s_url
## f_download_file__from_s_url
download a file, pass an optional callback, or let log the download state by default
download a file, pass an optional callback, or let log the download state by default
download a file, pass an optional callback, or let log the download state by default
```javascript
            await f_download_file__from_s_url(
            await f_download_file__from_s_url(
            await f_download_file__from_s_url(
                // 'https://www.dwsamplefiles.com/?dl_id=409'
                // 'https://www.dwsamplefiles.com/?dl_id=409'
                // 'https://www.dwsamplefiles.com/?dl_id=409'
                // 'https://images.unsplash.com/photo-1533144188434-eb0442504392?auto=format&fit=crop&q=80&w=3948&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                // 'https://images.unsplash.com/photo-1533144188434-eb0442504392?auto=format&fit=crop&q=80&w=3948&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                // 'https://images.unsplash.com/photo-1533144188434-eb0442504392?auto=format&fit=crop&q=80&w=3948&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                // 'a_picture_in_bird_perspective.png'
                // 'a_picture_in_bird_perspective.png'
                // 'a_picture_in_bird_perspective.png'
                'https://www.w3schools.com/html/pic_trulli.jpg', 
                'https://www.w3schools.com/html/pic_trulli.jpg', 
                'https://www.w3schools.com/html/pic_trulli.jpg', 
                './.gitignored/lol/test.jpg'//if denojs  we can pass a path
                './.gitignored/lol/test.jpg'//if denojs  we can pass a path
                './.gitignored/lol/test.jpg'//if denojs  we can pass a path
            )
            )
            )



        }),
        }),
        f_deno_test("f_a_n_u8__from_s_url_with_download_speed_easy", async () => {
        f_deno_test("f_a_n_u8__from_s_url_with_download_speed_easy", async () => {
```
## f_a_n_u8__from_s_url_with_download_speed_easy
## f_a_n_u8__from_s_url_with_download_speed_easy
## f_a_n_u8__from_s_url_with_download_speed_easy
get the response body as Uint8array (a_n_u8) from an url, while the download is pending a callback will be executed every nth millisecond
get the response body as Uint8array (a_n_u8) from an url, while the download is pending a callback will be executed every nth millisecond
get the response body as Uint8array (a_n_u8) from an url, while the download is pending a callback will be executed every nth millisecond
in this callback one can print download speed, if the response header 'content-length' is present and its value is legit
in this callback one can print download speed, if the response header 'content-length' is present and its value is legit
in this callback one can print download speed, if the response header 'content-length' is present and its value is legit
one can also print the download percentage
one can also print the download percentage
one can also print the download percentage
```javascript



            let a_n_u8 = await f_a_n_u8__from_s_url_with_download_speed_easy(
            let a_n_u8 = await f_a_n_u8__from_s_url_with_download_speed_easy(
            let a_n_u8 = await f_a_n_u8__from_s_url_with_download_speed_easy(
                'https://www.dwsamplefiles.com/?dl_id=406', 
                'https://www.dwsamplefiles.com/?dl_id=406', 
                'https://www.dwsamplefiles.com/?dl_id=406', 
                function(
                function(
                function(
                    n_mb_downloaded, 
                    n_mb_downloaded, 
                    n_mb_downloaded, 
                    n_mb_per_sec_domwnload_speed, 
                    n_mb_per_sec_domwnload_speed, 
                    n_mb_per_sec_domwnload_speed, 
                    n_mb_to_download_total
                    n_mb_to_download_total
                    n_mb_to_download_total
                ){
                ){
                ){
                    let s_from_total = ''
                    let s_from_total = ''
                    let s_from_total = ''
                    if(n_mb_to_download_total != -1){
                    if(n_mb_to_download_total != -1){
                    if(n_mb_to_download_total != -1){
                        s_from_total = (`/${(n_mb_to_download_total).toFixed(0)}`)
                        s_from_total = (`/${(n_mb_to_download_total).toFixed(0)}`)
                        s_from_total = (`/${(n_mb_to_download_total).toFixed(0)}`)
                    }
                    }
                    }
                    console.log(`downloaded ${(n_mb_downloaded).toFixed(0)}${s_from_total}(MB) @ ${n_mb_per_sec_domwnload_speed.toFixed(2)} MB/s`)
                    console.log(`downloaded ${(n_mb_downloaded).toFixed(0)}${s_from_total}(MB) @ ${n_mb_per_sec_domwnload_speed.toFixed(2)} MB/s`)
                    console.log(`downloaded ${(n_mb_downloaded).toFixed(0)}${s_from_total}(MB) @ ${n_mb_per_sec_domwnload_speed.toFixed(2)} MB/s`)
                },
                },
                },
                555// callback gets called every 555 milliseconds
                555// callback gets called every 555 milliseconds
                555// callback gets called every 555 milliseconds
            )
            )
            )



            f_assert_equals(a_n_u8.length, 15944874)
            f_assert_equals(a_n_u8.length, 15944874)
            f_assert_equals(a_n_u8.length, 15944874)
        }),
        }),






        f_deno_test("Overwrite / 'Monkey-Patch' the fetch function", async () => {
        f_deno_test("Overwrite / 'Monkey-Patch' the fetch function", async () => {
            
            
            
```
## Overwrite / 'Monkey-Patch' the fetch function
## Overwrite / 'Monkey-Patch' the fetch function
## Overwrite / 'Monkey-Patch' the fetch function
replace the original fetch function, with a custom fetch function, for example to change some headers
replace the original fetch function, with a custom fetch function, for example to change some headers
replace the original fetch function, with a custom fetch function, for example to change some headers
this can be used in combination with `f_o_resp__fetch_cached`, `f_download_file__from_s_url`
this can be used in combination with `f_o_resp__fetch_cached`, `f_download_file__from_s_url`
this can be used in combination with `f_o_resp__fetch_cached`, `f_download_file__from_s_url`
```javascript
            let f_fetch_original = window.fetch
            let f_fetch_original = window.fetch
            let f_fetch_original = window.fetch
            window.fetch = async function(){
            window.fetch = async function(){
            window.fetch = async function(){
                let a_v_arg = Array.from(arguments);
                let a_v_arg = Array.from(arguments);
                let a_v_arg = Array.from(arguments);
                let s_url = a_v_arg?.[0];
                let s_url = a_v_arg?.[0];
                let s_url = a_v_arg?.[0];
                if(s_url?.includes('httbin_non_existing_lol.org')){
                if(s_url?.includes('httbin_non_existing_lol.org')){
                if(s_url?.includes('httbin_non_existing_lol.org')){
                    a_v_arg[0] = s_url.replace('httbin_non_existing_lol.org', 'httpbin.org')
                    a_v_arg[0] = s_url.replace('httbin_non_existing_lol.org', 'httpbin.org')
                    a_v_arg[0] = s_url.replace('httbin_non_existing_lol.org', 'httpbin.org')
                }
                }
                }
                // we can cache some sites
                // we can cache some sites
                // we can cache some sites
                if(s_url == 'https://httpbin.org/status/418'){
                if(s_url == 'https://httpbin.org/status/418'){
                if(s_url == 'https://httpbin.org/status/418'){
                    return f_o_resp__fetch_cached(
                    return f_o_resp__fetch_cached(
                    return f_o_resp__fetch_cached(
                        f_fetch_original, 
                        f_fetch_original, 
                        f_fetch_original, 
                        a_v_arg
                        a_v_arg
                        a_v_arg
                    );
                    );
                    );
                }
                }
                }
                // we could ignore the patching on some fetch calls
                // we could ignore the patching on some fetch calls
                // we could ignore the patching on some fetch calls
                if(s_url.includes('#dont_monkey_patch')){
                if(s_url.includes('#dont_monkey_patch')){
                if(s_url.includes('#dont_monkey_patch')){
                    return f_fetch_original(...a_v_arg)
                    return f_fetch_original(...a_v_arg)
                    return f_fetch_original(...a_v_arg)
                }
                }
                }
                return f_fetch_original(
                return f_fetch_original(
                return f_fetch_original(
                    a_v_arg[0], 
                    a_v_arg[0], 
                    a_v_arg[0], 
                    {
                    {
                    {
                        headers: {
                        headers: {
                        headers: {
                            'User-Agent': [
                            'User-Agent': [
                            'User-Agent': [
                                `Gozilla/${(Math.random()*5+1).toFixed(1)}`, 
                                `Gozilla/${(Math.random()*5+1).toFixed(1)}`, 
                                `Gozilla/${(Math.random()*5+1).toFixed(1)}`, 
                                `(Dingos TN 2.1; Din64; x128; rv:27.0)`, 
                                `(Dingos TN 2.1; Din64; x128; rv:27.0)`, 
                                `(Dingos TN 2.1; Din64; x128; rv:27.0)`, 
                                `Lizzard/20100101 Waterwhale/42.0`
                                `Lizzard/20100101 Waterwhale/42.0`
                                `Lizzard/20100101 Waterwhale/42.0`
                            ].join(' ')
                            ].join(' ')
                            ].join(' ')
                        }
                        }
                        }
                    }
                    }
                    }
                )
                )
                )
            }
            }
            }
            var o_data = await (await fetch('https://httpbin.org/headers')).json();
            var o_data = await (await fetch('https://httpbin.org/headers')).json();
            var o_data = await (await fetch('https://httpbin.org/headers')).json();
            f_assert_equals(o_data.headers['User-Agent'].includes('Gozilla/'),true)
            f_assert_equals(o_data.headers['User-Agent'].includes('Gozilla/'),true)
            f_assert_equals(o_data.headers['User-Agent'].includes('Gozilla/'),true)



            var o_data = await (await fetch('https://httbin_non_existing_lol.org/headers')).json();
            var o_data = await (await fetch('https://httbin_non_existing_lol.org/headers')).json();
            var o_data = await (await fetch('https://httbin_non_existing_lol.org/headers')).json();
            f_assert_equals(o_data.headers['User-Agent'].includes('Gozilla/'),true)
            f_assert_equals(o_data.headers['User-Agent'].includes('Gozilla/'),true)
            f_assert_equals(o_data.headers['User-Agent'].includes('Gozilla/'),true)
            
            
            
            var o_data = await (await fetch('https://httpbin.org/headers#dont_monkey_patch')).json();
            var o_data = await (await fetch('https://httpbin.org/headers#dont_monkey_patch')).json();
            var o_data = await (await fetch('https://httpbin.org/headers#dont_monkey_patch')).json();
            f_assert_equals(o_data.headers['User-Agent'].includes('Deno/'),true)
            f_assert_equals(o_data.headers['User-Agent'].includes('Deno/'),true)
            f_assert_equals(o_data.headers['User-Agent'].includes('Deno/'),true)



            var o_data = await fetch('https://httpbin.org/status/418');
            var o_data = await fetch('https://httpbin.org/status/418');
            var o_data = await fetch('https://httpbin.org/status/418');
            var o_data = await fetch('https://httpbin.org/status/418');
            var o_data = await fetch('https://httpbin.org/status/418');
            var o_data = await fetch('https://httpbin.org/status/418');
            f_assert_equals(o_data.b_from_disk, true)
            f_assert_equals(o_data.b_from_disk, true)
            f_assert_equals(o_data.b_from_disk, true)



            // restore the original function 
            // restore the original function 
            // restore the original function 
            window.fetch = f_fetch_original
            window.fetch = f_fetch_original
            window.fetch = f_fetch_original



            // test the restored function
            // test the restored function
            // test the restored function
            var o_data = await (await fetch('https://httpbin.org/headers')).json();
            var o_data = await (await fetch('https://httpbin.org/headers')).json();
            var o_data = await (await fetch('https://httpbin.org/headers')).json();
            f_assert_equals(
            f_assert_equals(
            f_assert_equals(
                o_data.headers['User-Agent'].includes('Deno/'),
                o_data.headers['User-Agent'].includes('Deno/'),
                o_data.headers['User-Agent'].includes('Deno/'),
                true
                true
                true
            )
            )
            )
        }),
        }),




        f_deno_test("f_o_html__from_s_url", async () => {
        f_deno_test("f_o_html__from_s_url", async () => {
            
            
            
```
## f_o_html__from_s_url
## f_o_html__from_s_url
## f_o_html__from_s_url
a handy function to directly get a js object html document from a url, works in deno and browser
a handy function to directly get a js object html document from a url, works in deno and browser
a handy function to directly get a js object html document from a url, works in deno and browser
```javascript
            let o_doc = (await f_o_html__from_s_url(
            let o_doc = (await f_o_html__from_s_url(
            let o_doc = (await f_o_html__from_s_url(
                `https://deno.land`
                `https://deno.land`
                `https://deno.land`
            ))
            ))
            ))
            f_assert_equals(
            f_assert_equals(
            f_assert_equals(
                typeof o_doc.body.querySelectorAll, 
                typeof o_doc.body.querySelectorAll, 
                typeof o_doc.body.querySelectorAll, 
                'function'
                'function'
                'function'
            )
            )
            )
        }),
        }),


        f_deno_test("f_s_hashed", async () => {
        f_deno_test("f_s_hashed", async () => {
            
            
            
```
## f_s_hashed
## f_s_hashed
## f_s_hashed
hash a string, using the window.crypto.subtle API, available functions at the moment are
hash a string, using the window.crypto.subtle API, available functions at the moment are
hash a string, using the window.crypto.subtle API, available functions at the moment are
'sha-1', 'sha-256', 'sha-384', 'sha-512'
'sha-1', 'sha-256', 'sha-384', 'sha-512'
'sha-1', 'sha-256', 'sha-384', 'sha-512'
```javascript



            f_assert_equals(
            f_assert_equals(
            f_assert_equals(
                await f_s_hashed('lol this is a text', 'SHA-1'),
                await f_s_hashed('lol this is a text', 'SHA-1'),
                await f_s_hashed('lol this is a text', 'SHA-1'),
                'd2a68e83cffd1f8dc53143c95006f862f199082b'
                'd2a68e83cffd1f8dc53143c95006f862f199082b'
                'd2a68e83cffd1f8dc53143c95006f862f199082b'
            )
            )
            )
        }),
        }),








    ]
    ]
)
)






```