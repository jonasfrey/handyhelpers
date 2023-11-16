<!-- {"s_msg":"this file was automatically generated","s_by":"f_generate_markdown.module.js","s_ts_created":"Thu Nov 16 2023 15:12:38 GMT+0100 (Central European Standard Time)","n_ts_created":1700143958743} -->
![handy helpers logo](./logo_banner.png)
# Handy Helpers
this is a collection of useful functions
```javascript
            
```
## f_s_n_beautified
beautify/format a number,
12341234
becomes
12'341'234
```javascript
            f_assert_equals(
                f_s_n_beautified(12341234), 
                "12'341'234"
            )
            f_assert_equals(
                f_s_n_beautified(12345, '_'), 
                "12_345"
            )
            f_assert_equals(
                f_s_n_beautified(111333222555, ' '), 
                "111 333 222 555"
            )
            
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
            
```
## f_a_v__recursive
get a n-dimensional array with a value of choice
```javascript
            let a = f_a_v__recursive(3,3,function(n_x, n_y){return `${[n_x, n_y].join(',')}`})
            console.log(a);
            
```
## f_move_in_array
moves a value in an array, it does not swap the elements!
```javascript

            let a_n = [2,0,1,0,0]
            f_move_in_array(a_n, 2, 0)
            f_assert_equals(
                JSON.stringify(a_n), 
                `[1,2,0,0,0]`
            )
            f_move_in_array(a_n, 1, a_n.length-1)
            f_assert_equals(
                JSON.stringify(a_n), 
                `[1,0,0,0,2]`
            )
            f_move_in_array(a_n, 2, a_n.length-1)
            f_assert_equals(
                JSON.stringify(a_n), 
                `[1,0,0,2,0]`
            )
            f_move_in_array(a_n, 0, -1)
            f_assert_equals(
                JSON.stringify(a_n), 
                `[0,0,2,0,1]`
            )
            f_move_in_array(a_n, -1, 0)
            f_assert_equals(
                JSON.stringify(a_n), 
                `[1,0,0,2,0]`
            )
            let o1 = {n:1}
            let o2 = {n:2}
            let o3 = {n:3}
            let o4 = {n:4} 
            let o5 = {n:5}
            let a_o = [o1,o2,o3,o4,o5];
            var n_idx_from = 0;
            var n_idx_to = 2;
            var o_from = a_o[n_idx_from];
            var o_to = a_o[n_idx_to];
            f_move_in_array(a_o, n_idx_from, n_idx_to)
            f_assert_equals(
                a_o[n_idx_to], 
                o_from
            )
            
```
## f_swap_in_array
swaps two values in an array
```javascript

            let a_n = [2,0,1,0,0]
            f_swap_in_array(a_n, 2, 0)
            f_assert_equals(
                JSON.stringify(a_n), 
                `[1,0,2,0,0]`
            )
            f_swap_in_array(a_n, 0, a_n.length-1)
            f_assert_equals(
                JSON.stringify(a_n), 
                `[0,0,2,0,1]`
            )
            f_swap_in_array(a_n, 2, a_n.length-1)
            f_assert_equals(
                JSON.stringify(a_n), 
                `[0,0,1,0,2]`
            )
            f_swap_in_array(a_n, -1, 2)
            f_assert_equals(
                JSON.stringify(a_n), 
                `[0,0,2,0,1]`
            )
            f_swap_in_array(a_n, 2, -1)
            f_assert_equals(
                JSON.stringify(a_n), 
                `[0,0,1,0,2]`
            )
            
```
## f_move_v_in_array
moves a value in an array by a index difference
```javascript

            let a_s = ["a","b","c","d"];
            f_move_v_in_array(a_s, "a", 2)
            f_assert_equals(
                JSON.stringify(a_s),
                '["b","c","a","d"]'
            )
            f_move_v_in_array(a_s, "d", -3)
            f_assert_equals(
                JSON.stringify(a_s),
                '["d","b","c","a"]'
            )
            let o1 = {n:1}
            let o2 = {n:2}
            let o3 = {n:3}
            let o4 = {n:4} 
            let o5 = {n:5}
            let a_o = [o1,o2,o3,o4,o5];
            f_move_v_in_array(a_o, o1, -1)
            f_assert_equals(
                a_o.at(-1) == o1, 
                true
            )
            
```
## f_swap_v_in_array
moves a value in an array by a index difference
```javascript

            let a_s = ["a","b","c","d"];
            f_swap_v_in_array(a_s, "a", "d")
            f_assert_equals(
                JSON.stringify(a_s),
                '["d","b","c","a"]'
            )
            f_swap_v_in_array(a_s, "b", "c")
            f_assert_equals(
                JSON.stringify(a_s),
                '["d","c","b","a"]'
            )
            let o1 = {n:1}
            let o2 = {n:2}
            let o3 = {n:3}
            let o4 = {n:4} 
            let o5 = {n:5}
            let a_o = [o1,o2,o3,o4,o5];
            f_swap_v_in_array(a_o, o1, o5)
            f_assert_equals(
                a_o.at(-1) == o1, 
                true
            )
            f_assert_equals(
                a_o.at(0) == o5, 
                true
            )
```
## f_sleep_ms
```javascript
            let n_ms = window.performance.now();
            await f_sleep_ms(333);
            f_assert_equals(
                (window.performance.now() - n_ms) >= 333, 
                true
            )
```
## Handy snippets
extend a file name by '_thumb'
```javascript
            // extend the prototype 
            f_assert_equals(
                'some_image.png'
                    .split('.')
                    .map((v, n_idx, a)=>{
                        return (n_idx == a.length-2) ? `${v}_thumb`: v
                    })
                    .join('.'), 
                'some_image_thumb.png'
            )

            
```
## f_o_resp__fetch_cached
makes a fetch but caches the response meta (status, statusText, headers) and data as a_n_u8
```javascript

            var o_resp = await f_o_resp__fetch_cached(
                fetch, // f_fetch 
                [ // a_v_arg__for_f_fetch
                    'https://deno.com/', 
                    {'headers': {'User-Agent': "Test 1.2/3"}}
                ], 
                true,// b_overwrite_cached_file
                1000, // n_ms_diff__overwrite_cached_file  
                async (
                    s_url
                )=>{ // f_s_name_file_cached
                    // available functions 
                    // f_s_name_file_cached__base64encoded -> 'aHR0cHM6Ly9kZW5vLmNvbS8='
                    // f_s_name_file_cached__hashed -> 'd2a68e83cffd1f8dc53143c95006f862f199082b'
                    // f_s_name_file_cached__readable_ignore_fragment_and_getparams -> 'https______deno__com'
                    return `${s_url.split('?').shift().replaceAll('/', '--').replaceAll(':', '__')}}`
                },
                './.cache'//a custom path to a folder for the cache
            );
            f_assert_equals(
                o_resp?.b_from_disk, 
                undefined
            );
```
## f_b_deno
check if script is running with https://deno.com/
```javascript
            f_assert_equals(f_b_denojs(), ("Deno" in window))
```
## f_o_html_element__from_s_tag
returns a html element
browser:  document.createElement
denojs: using /x/deno_dom
```javascript
            f_assert_equals((await f_o_html_element__from_s_tag('h1')).tagName, 'H1');
```
## f_o_html__from_s_html
returns a html element
browser:  div.innerHTML = s_html
denojs: using /x/deno_dom
```javascript
            f_assert_equals(
                (await f_o_html__from_s_html('<div><h1>hello</h1><h1>world</h1></div>')).querySelectorAll('h1')[1].innerText,
                'world'
            );
```
## f_download_file__from_s_url
download a file, pass an optional callback, or let log the download state by default
```javascript
            await f_download_file__from_s_url(
                // 'https://www.dwsamplefiles.com/?dl_id=409'
                // 'https://images.unsplash.com/photo-1533144188434-eb0442504392?auto=format&fit=crop&q=80&w=3948&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                // 'a_picture_in_bird_perspective.png'
                'https://www.w3schools.com/html/pic_trulli.jpg', 
                './.gitignored/lol/test.jpg'//if denojs  we can pass a path
            )

```
## f_a_n_u8__from_s_url_with_download_speed_easy
get the response body as Uint8array (a_n_u8) from an url, while the download is pending a callback will be executed every nth millisecond
in this callback one can print download speed, if the response header 'content-length' is present and its value is legit
one can also print the download percentage
```javascript

            let a_n_u8 = await f_a_n_u8__from_s_url_with_download_speed_easy(
                'https://www.dwsamplefiles.com/?dl_id=406', 
                function(
                    n_mb_downloaded, 
                    n_mb_per_sec_domwnload_speed, 
                    n_mb_to_download_total
                ){
                    let s_from_total = ''
                    if(n_mb_to_download_total != -1){
                        s_from_total = (`/${(n_mb_to_download_total).toFixed(0)}`)
                    }
                    console.log(`downloaded ${(n_mb_downloaded).toFixed(0)}${s_from_total}(MB) @ ${n_mb_per_sec_domwnload_speed.toFixed(2)} MB/s`)
                },
                555// callback gets called every 555 milliseconds
            )

            f_assert_equals(a_n_u8.length, 15944874)
            
```
## Overwrite / 'Monkey-Patch' the fetch function
replace the original fetch function, with a custom fetch function, for example to change some headers
this can be used in combination with `f_o_resp__fetch_cached`, `f_download_file__from_s_url`
```javascript
            let f_fetch_original = window.fetch
            window.fetch = async function(){
                let a_v_arg = Array.from(arguments);
                let s_url = a_v_arg?.[0];
                if(s_url?.includes('httbin_non_existing_lol.org')){
                    a_v_arg[0] = s_url.replace('httbin_non_existing_lol.org', 'httpbin.org')
                }
                // we can cache some sites
                if(s_url == 'https://httpbin.org/status/418'){
                    return f_o_resp__fetch_cached(
                        f_fetch_original, 
                        a_v_arg
                    );
                }
                // we could ignore the patching on some fetch calls
                if(s_url.includes('#dont_monkey_patch')){
                    return f_fetch_original(...a_v_arg)
                }
                return f_fetch_original(
                    a_v_arg[0], 
                    {
                        headers: {
                            'User-Agent': [
                                `Gozilla/${(Math.random()*5+1).toFixed(1)}`, 
                                `(Dingos TN 2.1; Din64; x128; rv:27.0)`, 
                                `Lizzard/20100101 Waterwhale/42.0`
                            ].join(' ')
                        }
                    }
                )
            }
            var o_data = await (await fetch('https://httpbin.org/headers')).json();
            f_assert_equals(o_data.headers['User-Agent'].includes('Gozilla/'),true)

            var o_data = await (await fetch('https://httbin_non_existing_lol.org/headers')).json();
            f_assert_equals(o_data.headers['User-Agent'].includes('Gozilla/'),true)
            
            var o_data = await (await fetch('https://httpbin.org/headers#dont_monkey_patch')).json();
            f_assert_equals(o_data.headers['User-Agent'].includes('Deno/'),true)

            var o_data = await fetch('https://httpbin.org/status/418');
            var o_data = await fetch('https://httpbin.org/status/418');
            f_assert_equals(o_data.b_from_disk, true)

            // restore the original function 
            window.fetch = f_fetch_original

            // test the restored function
            var o_data = await (await fetch('https://httpbin.org/headers')).json();
            f_assert_equals(
                o_data.headers['User-Agent'].includes('Deno/'),
                true
            )
            
```
## f_o_html__from_s_url
a handy function to directly get a js object html document from a url, works in deno and browser
```javascript
            let o_doc = (await f_o_html__from_s_url(
                `https://deno.land`
            ))
            f_assert_equals(
                typeof o_doc.body.querySelectorAll, 
                'function'
            )
            
```
## f_s_hashed
hash a string, using the window.crypto.subtle API, available functions at the moment are
'sha-1', 'sha-256', 'sha-384', 'sha-512'
```javascript

            f_assert_equals(
                await f_s_hashed('lol this is a text', 'SHA-1'),
                'd2a68e83cffd1f8dc53143c95006f862f199082b'
            )
            
```
## f_o_cpu_stats
get information about the cpu
this will parse /proc/stat so we have to await it
```javascript
            let o_cpu_stats = await f_o_cpu_stats();
```
the number of cpus is in fact the length of the cpu core stats
```javascript
            console.log(o_cpu_stats.n_cpus == o_cpu_stats.a_o_cpu_core_stats.length);
```
more infos about the cpu cores can be found here
```javascript
            console.log(o_cpu_stats.a_o_cpu_core_stats)
            
        }),
        f_o_test("f_o_cpu_stats__diff", async ()=>{
            
            
```
## f_o_cpu_stats__diff
## f_o_cpu_stats__diff
this will returna difference to the last call of f_o_cpu_stats__diff
this will returna difference to the last call of f_o_cpu_stats__diff
the important and usefull value here is `o_cpu_stats__diff.a_o_cpu_core_stats__diff[0].n_usage_nor`
the important and usefull value here is `o_cpu_stats__diff.a_o_cpu_core_stats__diff[0].n_usage_nor`
which is the normalized usage 0.0-1.0 of the cpu core
which is the normalized usage 0.0-1.0 of the cpu core
this will parse /proc/stat so we have to await it
this will parse /proc/stat so we have to await it
```javascript
            var o_cpu_stats__diff = await f_o_cpu_stats__diff();
            var o_cpu_stats__diff = await f_o_cpu_stats__diff();
            await f_sleep_ms(1000/60);
            await f_sleep_ms(1000/60);
            var o_cpu_stats__diff = await f_o_cpu_stats__diff();
            var o_cpu_stats__diff = await f_o_cpu_stats__diff();
            console.log(
            console.log(
                [
                [
                    `cpu usage (in the last ${parseInt(o_cpu_stats__diff.n_diff_n_ms_window_performance_now)} milliseconds)`,
                    `cpu usage (in the last ${parseInt(o_cpu_stats__diff.n_diff_n_ms_window_performance_now)} milliseconds)`,
                    ...o_cpu_stats__diff.a_o_cpu_core_stats__diff.map(
                    ...o_cpu_stats__diff.a_o_cpu_core_stats__diff.map(
                        (o_cpu_core_stats__diff,n_idx)=>{
                        (o_cpu_core_stats__diff,n_idx)=>{
                            return [
                            return [
                                `CPU ${(n_idx+1).toString().padStart(3,' ')}`,
                                `CPU ${(n_idx+1).toString().padStart(3,' ')}`,
                                `${(o_cpu_core_stats__diff.n_usage_nor.toFixed(2)*100).toString().padStart(4, ' ')}%`
                                `${(o_cpu_core_stats__diff.n_usage_nor.toFixed(2)*100).toString().padStart(4, ' ')}%`
                            ].join(':')
                            ].join(':')
                            
                            
                        }
                        }
                    )
                    )
                ].join('\n')
                ].join('\n')
            )
            )


        }),
        }),




    ]
    ]


if(Deno.args[0] == 'cpu_monitor'){
if(Deno.args[0] == 'cpu_monitor'){
    let f_print = async function(){
    let f_print = async function(){


        let n = window.performance.now();
        let n = window.performance.now();
        var o_cpu_stats__diff = await f_o_cpu_stats__diff();
        var o_cpu_stats__diff = await f_o_cpu_stats__diff();
        // console.log(`ms:${window.performance.now()-n}`)
        // console.log(`ms:${window.performance.now()-n}`)
        // console.log()
        // console.log()
        
        
        let s_sep = '.';
        let s_sep = '.';
        let s_cpu = '|'
        let s_cpu = '|'
        let s = o_cpu_stats__diff.a_o_cpu_core_stats__diff.map(
        let s = o_cpu_stats__diff.a_o_cpu_core_stats__diff.map(
            o_cpu_core_stats__diff=>{
            o_cpu_core_stats__diff=>{
                // console.log(o_cpu_core_stats__diff)
                // console.log(o_cpu_core_stats__diff)
                return [
                return [
                    `${o_cpu_core_stats__diff.n_usage_nor.toFixed(1)}|`, 
                    `${o_cpu_core_stats__diff.n_usage_nor.toFixed(1)}|`, 
                    `${s_sep}${s_cpu.repeat(parseInt(o_cpu_core_stats__diff.n_usage_nor*5)).padEnd(5,' ')}`
                    `${s_sep}${s_cpu.repeat(parseInt(o_cpu_core_stats__diff.n_usage_nor*5)).padEnd(5,' ')}`
                ] .join(' ')
                ] .join(' ')
                
                
            }
            }
        ).join('')
        ).join('')
        console.log(s)
        console.log(s)
        await f_sleep_ms(1000/60);
        await f_sleep_ms(1000/60);
        f_print();
        f_print();
    }
    }
    f_print()
    f_print()
}
}
if(Deno.arg?.[0] != 'all'){
if(Deno.arg?.[0] != 'all'){
    console.log('run with "all" to run all tests')
    console.log('run with "all" to run all tests')
    console.log('running last test'); 
    console.log('running last test'); 


    await f_deno_test_all_and_print_summary(
    await f_deno_test_all_and_print_summary(
        a_o_test.slice(-1).map(o=>{
        a_o_test.slice(-1).map(o=>{
            f_deno_test(...o.a_v_arg)
            f_deno_test(...o.a_v_arg)
        })
        })
    )
    )
}else{
}else{
    await f_deno_test_all_and_print_summary(
    await f_deno_test_all_and_print_summary(
        a_o_test.map(o=>{
        a_o_test.map(o=>{
            f_deno_test(...o.a_v_arg)
            f_deno_test(...o.a_v_arg)
        })
        })
    )
    )
}
}


```