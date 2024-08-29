<!-- {"s_msg":"this file was automatically generated","s_by":"f_generate_markdown.module.js","s_ts_created":"Thu Aug 29 2024 15:17:13 GMT+0200 (Central European Summer Time)","n_ts_created":1724937433404} -->
![handy helpers logo](./logo_banner.png)
# Handy Helpers
this is a collection of useful functions
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
## f_n_idx_ensured_inside_array
get an index of an item in an array relative to the first argument as a number,
the index will be wrapped around if negative or bigger than array length
so it is ensured that it stays in the array
```javascript
            let n_len = 3; 
            f_assert_equals(f_n_idx_ensured_inside_array(0, n_len), 0)
            f_assert_equals(f_n_idx_ensured_inside_array(1, n_len), 1)
            f_assert_equals(f_n_idx_ensured_inside_array(2, n_len), 2)
            f_assert_equals(f_n_idx_ensured_inside_array(3, n_len), 0)
            f_assert_equals(f_n_idx_ensured_inside_array(4, n_len), 1)
            f_assert_equals(f_n_idx_ensured_inside_array(5, n_len), 2)
            f_assert_equals(f_n_idx_ensured_inside_array(6, n_len), 0)
            f_assert_equals(f_n_idx_ensured_inside_array(0, n_len), 0)
            f_assert_equals(f_n_idx_ensured_inside_array(-1, n_len), 2)
            f_assert_equals(f_n_idx_ensured_inside_array(-2, n_len), 1)
            f_assert_equals(f_n_idx_ensured_inside_array(-3, n_len), 0)
            f_assert_equals(f_n_idx_ensured_inside_array(-4, n_len), 2)
            f_assert_equals(f_n_idx_ensured_inside_array(-5, n_len), 1)
            f_assert_equals(f_n_idx_ensured_inside_array(-6, n_len), 0)
            
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
## f_a_v_add_v_circular_to_array
adds a value to an array at the beginning or at the end and shifts all items +1 or -1 index respectively
```javascript
            let a_v = ["a","b",0,"d"];
            let n_len_max = 7;
            
            f_assert_equals(
                JSON.stringify(
                    f_a_v_add_v_circular_to_array(
                        a_v,
                        'e',
                        n_len_max,
                        true
                    )
                ),
                '["e","a","b",0,"d"]'
            ),
            f_assert_equals(
                JSON.stringify(
                    f_a_v_add_v_circular_to_array(
                        a_v,
                        'f',
                        n_len_max,
                        true
                    )
                ),
                '["f","e","a","b",0,"d"]'
            )
            f_assert_equals(
                JSON.stringify(
                    f_a_v_add_v_circular_to_array(
                        a_v,
                        7,
                        n_len_max,
                        true
                    )
                ),
                '[7,"f","e","a","b",0,"d"]'
            )
            f_assert_equals(
                JSON.stringify(
                    f_a_v_add_v_circular_to_array(
                        a_v,
                        'h',
                        n_len_max,
                        true
                    )
                ),
                '["h",7,"f","e","a","b",0]'
            )
            f_assert_equals(
                JSON.stringify(
                    f_a_v_add_v_circular_to_array(
                        a_v,
                        'i',
                        n_len_max,
                        true
                    )
                ),
                '["i","h",7,"f","e","a","b"]'
            )
            f_assert_equals(
                JSON.stringify(
                    f_a_v_add_v_circular_to_array(
                        a_v,
                        'asdf',
                        n_len_max,
                        true
                    )
                ),
                '["asdf","i","h",7,"f","e","a"]'
            )
            // insert at end
            f_assert_equals(
                JSON.stringify(
                    f_a_v_add_v_circular_to_array(
                        a_v,
                        'lol',
                        n_len_max,
                        false
                    )
                ),
                '["i","h",7,"f","e","a","lol"]'
            )
            f_assert_equals(
                JSON.stringify(
                    f_a_v_add_v_circular_to_array(
                        a_v,
                        1234,
                        n_len_max,
                        false
                    )
                ),
                '["h",7,"f","e","a","lol",1234]'
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
            
```
## f_o_cpu_stats__diff
this will returna difference to the last call of f_o_cpu_stats__diff
the important and usefull value here is `o_cpu_stats__diff.a_o_cpu_core_stats__diff[0].n_usage_nor`
which is the normalized usage 0.0-1.0 of the cpu core
this will parse /proc/stat so we have to await it
```javascript
            var o_cpu_stats__diff = await f_o_cpu_stats__diff();
            await f_sleep_ms(1000/60);
            var o_cpu_stats__diff = await f_o_cpu_stats__diff();
            console.log(
                [
                    `cpu usage (in the last ${parseInt(o_cpu_stats__diff.n_diff_n_ms_window_performance_now)} milliseconds)`,
                    ...o_cpu_stats__diff.a_o_cpu_core_stats__diff.map(
                        (o_cpu_core_stats__diff,n_idx)=>{
                            return [
                                `CPU ${(n_idx+1).toString().padStart(3,' ')}`,
                                `${(o_cpu_core_stats__diff.n_usage_nor.toFixed(2)*100).toString().padStart(4, ' ')}%`
                            ].join(':')
                            
                        }
                    )
                ].join('\n')
            )
            let n_ms_duration = 1000;
            let n_ms_window_performance_now = window.performance.now();
            let f_print = async function(){
        
                let n = window.performance.now();
                var o_cpu_stats__diff = await f_o_cpu_stats__diff();
                // console.log(`ms:${window.performance.now()-n}`)
                // console.log()
                
                let s_sep = '.';
                let s_cpu = '|'
                let s = o_cpu_stats__diff.a_o_cpu_core_stats__diff.map(
                    o_cpu_core_stats__diff=>{
                        // console.log(o_cpu_core_stats__diff)
                        return [
                            `${o_cpu_core_stats__diff.n_usage_nor.toFixed(1)}|`, 
                            `${s_sep}${s_cpu.repeat(parseInt(o_cpu_core_stats__diff.n_usage_nor*5)).padEnd(5,' ')}`
                        ] .join(' ')
                        
                    }
                ).join('')
                console.log(s)
                await f_sleep_ms(1000/60);
                if(Math.abs(window.performance.now() - n_ms_window_performance_now) < n_ms_duration){
                    f_print();
                }
            }
            f_print()
            
```
## f_s_type__from_typed_array
get a string matching the typed array type
the default string is how a type in rust looks like
so Uint8Array ->'u8', Float32Array -> 'f32 ...
```javascript
            f_assert_equals(
                f_s_type__from_typed_array(Uint16Array), 
                'u16'
            );

            f_assert_equals(
                f_s_type__from_typed_array(Array), 
                'unknown'
            );
            let o_error = null;
            try {
                f_s_type__from_typed_array(
                    Array, 
                    true // b_throw_error
                )
            } catch (o_e) {
                o_error = o_e 
            }
            f_assert_equals(
                typeof o_error,
                'object'
            );

            f_assert_equals(
                f_s_type__from_typed_array(
                    BigUint64Array,
                    false,//b_throw_error 
                    {u64:'uint64'}
                ), 
                'uint64'
            );
                        
```
## f_download_text_file
download a text file
```javascript
            await f_download_text_file
                ('A'.repeat(1_000_000_000), 
                'my_hello_file.txt'
            )
                        
```
## f_s_type_mime__from_s_extension
get a mime type from an extension
```javascript
            f_assert_equals(
                f_s_type_mime__from_s_extension('webm'),
                'video/webm'
            )
            f_assert_equals(
                f_s_type_mime__from_s_extension('.ogg'),
                'audio/ogg'
            )
            f_assert_equals(
                f_s_type_mime__from_s_extension('.ogg'),
                'audio/ogg'
            )
            f_assert_equals(
                f_s_type_mime__from_s_extension('compiled.wasm'),
                'application/wasm'
            )
            return true
            
                        
```
## f_o_meminfo
linux only , get info about the RAM usage
```javascript
            let o = await f_o_meminfo()
            console.log(o)
            console.log(o.o_meminfo_property_MemTotal.n_gigabytes); // 31GB on my ssytem
            // the normalized number of currently used memory 1.0 = all ram is in use, no free memory :()
            console.log(o.o_meminfo_property_memory_used_calculated.n_nor_by_mem_total);//0.3, currently on my system
            

            let n_ms_duration = 4000;
            let n_ms_window_performance_now = window.performance.now();
            let a_a_n_u8 = []
            let f_print = async function(){
                let n_ms_diff_abs_nor = Math.abs(window.performance.now() - n_ms_window_performance_now) / n_ms_duration;
                if(n_ms_diff_abs_nor > 0.5){
                    a_a_n_u8 = [] // de-allocate ? 
                }else{
                    a_a_n_u8.push(new Float64Array(1024*1024*4).fill(0))          
                }
                
                // allocate some memory to see usage
                let n = window.performance.now();
                let o = await f_o_meminfo()
                // console.log(o.o_meminfo_property_MemFree)

                let n_max = 80;
                let s_used_gb = `${o.o_meminfo_property_memory_used_calculated.n_gigabytes.toFixed(0).padStart(2, ' ')}GB/`
                let s_total_gb = `${o.o_meminfo_property_MemTotal.n_gigabytes.toFixed(0).padStart(2, ' ')}GB`

                let s = [
                    `RAM Memory usage: `,
                    `${'|'.repeat(o.o_meminfo_property_memory_used_calculated.n_nor_by_mem_total*n_max-5)}`,
                    `${s_used_gb}`,
                    `${' '.repeat(o.o_meminfo_property_MemFree.n_nor_by_mem_total*n_max)}${s_total_gb}`
                ].join('')
                console.log(s)

                await f_sleep_ms(1000/60);
                if(n_ms_diff_abs_nor< 1.){
                    await f_print();
                }
            }
            await f_print()
            return true;
            
            
```
## f_v_s__between
get a string between strings
```javascript
            f_assert_equals(
                f_v_s__between(
                    'hello world ! yes', 
                    'world', 
                    'yes'
                ), 
                " ! "
            )
            f_assert_equals(
                f_v_s__between(
                    'hello not found 404', 
                    'not', 
                    '500'
                ), 
                null
            )
            f_assert_equals(
                f_v_s__between(
                    'hello not found 404', 
                    ':)', 
                    '404'
                ), 
                null
            )
```
to get info about the gpu you first have
to get all available properties
```javascript
            let o_nvidia_smi_help_info = await f_o_nvidia_smi_help_info();
            console.log(o_nvidia_smi_help_info.a_o_nvidia_smi_metric)
            let a_o_metric = o_nvidia_smi_help_info.a_o_nvidia_smi_metric.filter(
                o=>{
                    return o.a_s_name.includes('memory.used') || 
                    o.a_s_name.includes('memory.total')
                }
            );

            // if the metric is available we can not get information 
            let o_nvidia_smi_info = await f_o_nvidia_smi_info(
                a_o_metric
            );
            o_nvidia_smi_info['memory.used']

            let n_ms_duration = 200000;
            let n_ms_window_performance_now = window.performance.now();
            let a_a_n_u8 = []
            let f_print = async function(){
                let n_ms_diff_abs_nor = Math.abs(window.performance.now() - n_ms_window_performance_now) / n_ms_duration;
                if(n_ms_diff_abs_nor > 0.5){
                    a_a_n_u8 = [] // de-allocate ? 
                }else{
                    a_a_n_u8.push(new Float64Array(1024*1024*4).fill(0))          
                }
                
                // allocate some memory to see usage
                let n = window.performance.now();
                let n_max = 80;
                let o_nvidia_smi_info = await f_o_nvidia_smi_info(
                    a_o_metric
                );
                let s_used_gb = `${o_nvidia_smi_info['memory.used'].n_gigabytes.toFixed(0).padStart(2, ' ')}GB/`
                let s_total_gb = `${o_nvidia_smi_info['memory.total'].n_gigabytes.toFixed(0).padStart(2, ' ')}GB`
                let n_used_nor = o_nvidia_smi_info['memory.used'].n_gigabytes / o_nvidia_smi_info['memory.total'].n_gigabytes
                let n_free_nor = 1.-n_used_nor
                let s = [
                    `GPU Memory usage: `,
                    `${'|'.repeat(n_used_nor*n_max-5)}`,
                    `${s_used_gb}`,
                    `${' '.repeat(n_free_nor*n_max)}${s_total_gb}`
                ].join('')
                console.log(s)

                await f_sleep_ms(1000/60);
                if(n_ms_diff_abs_nor< 1.){
                    await f_print();
                }
            }
            await f_print()

            // we can also parse the value 
            // console.log(o_nvidia_smi_info['o_memory.used'])
        //     //md: #f_o_number_value__from_s_input
        //     let o = f_o_number_value__from_s_input(
        //         "123.443 [Mb]"
        //     );
        //     f_assert_equals(
        //         o.n_bytes, 
        //         123443000
        //     )
        //     o = f_o_number_value__from_s_input(
        //         " 908 MiB "
        //     );
        //     f_assert_equals(
        //         o.n_Mebibytes, 
        //         908
        //     )

            f_assert_equals(
                (
                    true == f_b_uuid('c6fa6520-2dd0-4860-932d-4ccd52ab97b5')
                    &&
                    false == f_b_uuid('sdf-2-4860-932d-4ccd52ab97b5') // changed some chars
                    &&
                    false == f_b_uuid('c!fa6520-2dd0-4860-932d-4ccd52ab97b5') // replaced second char with !
                    &&
                    true == f_b_uuid('4c104dd0-4821-30d5-9ce3-0e7a1f8b7c0d') // uuidv3
                    && 
                    true == f_b_uuid('000003e8-95cc-21ee-ac00-325096b39f47') //uuidv2
                    && 
                    true == f_b_uuid('7ee4525c-95cc-11ee-9b9c-325096b39f47') //uuidv1
                    &&
                    false == f_b_uuid('xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx')
                )
                ,
                true
            );


            let s_uuidv4 = f_s_uuidv4();
            console.log({s_uuidv4});
            f_assert_equals(
                (
                    s_uuidv4.length == 36
                    &&
                    Array.from(s_uuidv4).filter(s=>s=='-').length == 4
                    &&
                    true == f_b_uuid(s_uuidv4)
                ),
                true, 
            )



            f_assert_equals(
                f_a_n_nor__rgb__from_a_n_nor__hsl(
                    0,
                     1.0,
                      0.5
                ), 
                [1, 0 ,0]
            );


            f_assert_equals(
                f_a_n_nor__hsl__from_a_n_nor__rgb(
                    1, 
                    0, 
                    0
                ), 
                [0, 1,0.5]
            );

            for(let n = 0; n < 10; n+=1){
                // let a_n_static = [0.2, 0.3, 0.4]
                let a_n_rand = new Array(3).fill(0).map(n=>Math.random());
                let a_n = a_n_rand
                let a_n_nor__rgb = f_a_n_nor__rgb__from_a_n_nor__hsl(...a_n) 
                let a_n_nor__hsl = f_a_n_nor__hsl__from_a_n_nor__rgb(...a_n_nor__rgb)
                let n_delta_allowed = 0.001;
                console.log(`---`)
                console.log(`hsl original: ${a_n}`)
                console.log(`rgb converted: ${a_n_nor__rgb}`)
                console.log(`hsl converted: ${a_n_nor__hsl}`)
                f_assert_equals(
                    Math.abs(a_n_nor__hsl[0] - a_n[0]) < n_delta_allowed
                    && Math.abs(a_n_nor__hsl[1] - a_n[1]) < n_delta_allowed
                    && Math.abs(a_n_nor__hsl[2] - a_n[2]) < n_delta_allowed, 
                    true
                )
            }

            // let a_n_rand = new Array(3).fill(0).map(n=>Math.random());
            // let a_n_nor__rgb = f_a_n_nor__rgb__from_hsl(...a_n_rand) 
            // console.log(a_n_nor__rgb)
            // f_assert_equals(
            //     f_a_n_nor__hsl__from_rgb(a_n_nor__rgb), 
            //     a_n_rand
            // )

```
#creates a 'empty' object recursivly
```javascript
            let o_empty = f_o_empty_recursive(
                {
                    n: 2, 
                    b: false, 
                    b2: true,
                    s: 'ab',
                    a_n: [1,2], 
                    a_v: [{}, 2, false, 'a'], 
                    o1: {
                        n: 2, 
                        o2: {
                            n:3, 
                            o4: {
                                a: [1,2,3], 
                                b: false
                            }
                        }
                    } 

                }, 
                (v, s_prop)=>{
                    if(Array.isArray(v)){
                        return []
                    }
                    if(typeof v == 'number'){
                        return 0
                    }
                    if(typeof v == 'string'){
                        return ''
                    }
                    if(typeof v == 'boolean'){
                        return (v) ? 1 : 0
                    }
                }
            )
            f_assert_equals(
                o_empty, 
                {
                    n: 0,
                    b: 0,
                    b2: 1,
                    s: "",
                    a_n: [],
                    a_v: [],
                    o1: { n: null, o2: { n: null, o4: { a: [], b: null } } }
                  }
            )

            f_assert_equals(f_v_s_type__from_value(false),null)
            f_assert_equals(f_v_s_type__from_value(true),null)
            f_assert_equals(f_v_s_type__from_value(0),'n_f64')
            f_assert_equals(f_v_s_type__from_value(1),'n_f64')
            f_assert_equals(f_v_s_type__from_value(-32.231),'n_f64')
            f_assert_equals(f_v_s_type__from_value(255),'n_f64')
            f_assert_equals(f_v_s_type__from_value('hello'),'s')
            f_assert_equals(f_v_s_type__from_value(new Uint8Array([1,2,3])),'a_n_u8')
            f_assert_equals(f_v_s_type__from_value(new Float32Array([1,2,3])),'a_n_f32')
            f_assert_equals(f_v_s_type__from_value(new BigInt64Array([42n,420n])),'a_n_i64')
            f_assert_equals(f_v_s_type__from_value([1,2,3,4,5,6]),null)
            f_assert_equals(f_v_s_type__from_value({n:2,n2:3}),null)
            f_assert_equals(f_v_s_type_from_array([1,2]),'a_n_f64')
            f_assert_equals(f_v_s_type_from_array([false, false]),'a_v')
            f_assert_equals(f_v_s_type_from_array([1,false, {}, [1]]),'a_v')
            f_assert_equals(f_v_s_type_from_array(['h', 'e','l','l', 'o','!']),'a_s')
            f_assert_equals(f_v_s_type_from_array(new Int32Array([1,2,3])),'a_n_i32')
            let o_image_data = await f_o_image_data_from_s_url('./deno_logo.jpg');
            f_assert_equals(
                o_image_data.width, 
                600
            )
            f_assert_equals(
                o_image_data.height, 
                600
            )
            f_assert_equals(
                o_image_data.colorSpace, 
                'srgb'
            )
            f_assert_equals(
                o_image_data.data.length, 
                600*600*4// wtf why 4 channels when srgb...
            )
            console.log(o_image_data)
```
# 'f_dd'
function dump and die
console.logs and deno.exit (if available)
```javascript
            console.log(1);
            f_dd({s:'test'});
            console.log(2);


```
# 'f_ddd' same as f_dd but print current date as heading
```javascript
            console.log(1);
            f_ddd({s:'test'});
            console.log(2);

```
# 'f_o_object_assign_nested'
assign properties of nested objects, 'extend' the properties instead of overwriting them
```javascript
            let o_options = {
                headers: {
                    'Accept': 'image/png'
                }
            }
            let o_options_def = {
                headers: {
                    'Content-Type': 'application/json'
                }
            }
            f_o_object_assign_nested(
                o_options_def,
                o_options
            );
            f_assert_equals(
                o_options_def,
                {
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'image/png',
                    }
                }
                
            )
```
# 'f_b_check_type_and_potentially_throw_error'
check the type according to the prefix
```javascript
            let b = f_b_check_type_and_potentially_throw_error(
                {
                    s_test: "hello", 
                    a_v: [1,true],
                    a_n_u8: new Uint8Array(),
                    b_bool: true, 
                    o: {
                        n: 1
                    }
                }
            );
            f_assert_equals(
                b,
                true
            )
            //recursive check 
            let b2 = f_b_check_type_and_potentially_throw_error(
                {
                    o: {
                        a: [1]
                    }, 
                    o2: {}, 
                    o3: {
                        o4: {
                            o5: {
                                n:1, 
                                b: true, 
                                o: [1,2,3]
                            }
                        }
                    }
                }
            );
            f_assert_equals(
                b2,
                false
            )
```
# 'f_a_n_u8_from_s_b64'
convert a base 64 b64 string to a a_n_u8 uint8array
```javascript
            // let s_expected = 'Hellö'
            // let s_b64 = btoa(s_expected);
            // let a_n_u8_expected = new TextEncoder().encode(s_expected) // this wont work since it encodes as utf8
            // we want the unicode code point of each caracter which is 246 for 'ö'
            let s_b64 = 'SGVsbPY=';
            let a_n_u8 = f_a_n_u8_from_s_b64(
                s_b64
            );
            f_assert_equals(
                a_n_u8,
                new Uint8Array([72, 101, 108, 108, 246])
            )
```
# 'f_a_n_trn__relative_to_o_html__nor' and 'f_a_n_trn__relative_to_o_html'
get the relative position of an element [o.clientX, o.clientY] inside another element
_nor => normalized , returns translation arra/vector between 0.0 and 1.0
```javascript
            let o_el = document.createElement('div');
            o_el.style.width = '500px'
            o_el.style.height = '500px'
            o_el.style.position = 'relative'
            o_el.style.background = 'blue'
            let o_c = document.createElement('div');
            o_c.style.width = '50px'
            o_c.style.height = '50px'
            o_c.style.background = 'red';
            o_c.style.position = 'absolute';
            o_el.appendChild(o_c);
            o_el.addEventListener('pointermove', (o_e)=>{
                let a_n_trn = f_a_n_trn__relative_to_o_html__nor(
                    [
                        o_e.clientX,
                        o_e.clientY,
                    ],
                    o_e.target
                );
                o_c.style.left = `${a_n_trn[0]*100}%`
                o_c.style.top = `${a_n_trn[1]*100}%`
            })
            document.body.appendChild(
                o_el
            )
```
# 'f_a_o_entry__from_s_path'
returns all entries from a directory path
```javascript
            let a_o = await f_a_o_entry__from_s_path('./test_dir');
            console.log(a_o)
            f_assert_equals(a_o.length, 2);


            let b_recursive = true;
            let a_o2 = await f_a_o_entry__from_s_path('./test_dir', b_recursive);
            console.log({a_o2})
            f_assert_equals(a_o2.length, 3);

```
# 'f_s_bordered'
add border to text
```javascript
            let s1 = await f_s_bordered(`
            this 
            is
            a
            test
            `);
            // prints 
            // +___________________+
            // |                   |
            // |                   |
            // |             this  |
            // |             is    |
            // |             a     |
            // |             test  |
            // |                   |
            // +___________________+
            console.log(s1)
            let s2 = await f_s_bordered(`four different corners`, 
            '=', 
            '_', 
            ['$', '+', '#', '?'], 
            );
            console.log(s2)
            // prints 
            // $========================+
            // |                        |
            // | four different corners |
            // ?________________________#


            let s3 = await f_s_bordered(
                [
                    'heading',
                    `and four different corners`, 
                ],
            '=', 
            '_', 
            ['$', '+', '#', '?'], 
            );
            console.log(s3)
            // prints 
            // $============================+
            // |                            |
            // | heading                    |
            // $============================+
            // |                            |
            // | and four different corners |
            // ?____________________________#


            let s4 = await f_s_bordered(
                [
                    'this',
                    `gets`, 
                    `out of`, 
                    `control`, 
                ],
            '=', 
            '_', 
            ['+'], 
            );
            console.log(s4)
            // prints 
            // +=========+
            // |         |
            // | this    |
            // +=========+
            // |         |
            // | gets    |
            // +=========+
            // |         |
            // | out of  |
            // +=========+
            // |         |
            // | control |
            // +_________+
```
# 'f_s_color_rgba_from_a_n_nor_channelcolorrgba'
'rgba(127, 64, 255, 1)' from [0.5, 0.25, 1, 1]
```javascript
            f_assert_equals(
                'rgba(127.5,63.75,255,1)', 
                f_s_color_rgba_from_a_n_nor_channelcolorrgba([0.5, 0.25, 1, 1])
            );

```
# 'f_s_color_hex_from_a_n_nor_channelcolorrgba'
'#ff7f3f' from '[1,0.5,0.25]'
```javascript
            f_assert_equals(
                '#ff7f3f', 
                f_s_color_hex_from_a_n_nor_channelcolorrgba([1,0.5,0.25])
            );

```
# 'f_a_n_nor_channelcolorrgba_from_color_hex'
will add a alpha channel of 1 if not existing!
'[1, 0.4980392156862745, 0.24705882352941178, 1]' from '#ff7f3f'
```javascript
            f_assert_equals(
                [1, 0.4980392156862745, 0.24705882352941178, 1],
                f_a_n_nor_channelcolorrgba_from_color_hex('#ff7f3f'), 
            );
```
# 'f_o_webgl_program','f_delete_o_webgl_program','f_resize_canvas_from_o_webgl_program','f_render_from_o_webgl_program'
some simple helper functions to create a webgl programm, using GLSL shader code to control the GPU
```javascript
            // it is our job to create or get the cavas
            let o_canvas = document.createElement('canvas'); // or document.querySelector("#my_canvas");
            // just for the demo 
            // o_canvas.style.position = 'fixed';
            // o_canvas.style.width = '100vw';
            // o_canvas.style.height = '100vh';
            let o_webgl_program = f_o_webgl_program(
                o_canvas,
                `#version 300 es
                in vec4 a_o_vec_position_vertex;
                void main() {
                    gl_Position = a_o_vec_position_vertex;
                }`, 
                `#version 300 es
                precision mediump float;
                out vec4 fragColor;
                uniform vec2 o_scl_canvas; // is here by default
                void main() {
                    // gl_FragCoord is the current pixel coordinate and available by default
                    vec2 o_trn_pix_nor = (gl_FragCoord.xy - o_scl_canvas.xy*.5) / vec2(min(o_scl_canvas.x, o_scl_canvas.y));
                    float n = (o_trn_pix_nor.x*o_trn_pix_nor.y);
                    fragColor = vec4(
                        sin(n*33.+0.1), 
                        sin(n*33.+0.0), 
                        sin(n*33.-0.1), 
                        1.
                    );
                }`
            )
            document.body.appendChild(o_canvas);
            window.addEventListener('resize', ()=>{
                // this will resize the canvas and also update 'o_scl_canvas'
                f_resize_canvas_from_o_webgl_program(
                    o_webgl_program,
                    window.innerWidth, 
                    window.innerHeight
                )
                f_render_from_o_webgl_program(o_webgl_program);

            });

            // this will render the webgl program once
            f_render_from_o_webgl_program(o_webgl_program);

            // when finished or if we want to reinitialize a new programm with different GPU code
            // we have to first delete the program
            f_delete_o_webgl_program(o_webgl_program)

            // now an example of passing data to a webgl programm will follow
            // for arrays we have to know the length of them before we compile the shader
            
            let a_n = new Float32Array([0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8]);
            // arrays with vectors are always one dimensional and have to be interpreted multidimensional by
            // a 'scale dimension'
            // the arrays are then automatically converted to vec2, vec3, or vec4 inside the GLSL shader code

            // here the dimension would be (2,3) 2 per x axis, 3 per y axis
            let a_o_vec2 = new Float32Array([ 
                0.1, 0.2, // vec2(0.1, 0.2) / a_o_vec2[0]
                0.3, 0.4, // vec2(0.3, 0.4) / a_o_vec2[1]
                0.5, 0.6  // vec2(0.5, 0.6) / a_o_vec2[2]
            ]);
            // (3,5) 
            let a_o_vec3 = new Float32Array([
                0.1, 0.2, 0.4, // vec2(0.1, 0.2, 0.4) / a_o_vec3[0]
                0.3, 0.4, 0.4, // vec2(0.3, 0.4, 0.4) / a_o_vec3[1]
                0.3, 0.4, 0.4, // vec2(0.3, 0.4, 0.4) / a_o_vec3[2]
                0.3, 0.4, 0.4, // vec2(0.3, 0.4, 0.4) / a_o_vec3[3]
                0.3, 0.4, 0.4, // vec2(0.3, 0.4, 0.4) / a_o_vec3[4]
            ]);
            // (4,2)
            let a_o_vec4 = new Float32Array([
                0.1, 0.2, 0.2, 0.1, // vec2(0.1, 0.2, 0.2, 0.1) / a_o_vec4[0]
                0.3, 0.4, 0.2, 0.1, // vec2(0.3, 0.4, 0.2, 0.1) / a_o_vec4[1]
            ]);
            

            o_webgl_program = f_o_webgl_program(
                o_canvas,
                `#version 300 es
                in vec4 a_o_vec_position_vertex;
                void main() {
                    gl_Position = a_o_vec_position_vertex;
                }`, 
                `#version 300 es
                precision mediump float;
                out vec4 fragColor;
                uniform vec2 o_scl_canvas;
                uniform float n_ms_time; // we expect the float variable here in the shader
                uniform vec2 o_vec2;
                uniform vec3 o_vec3;
                uniform vec4 o_vec4;
                uniform float a_n[${a_n.length}];
                uniform vec2 a_o_vec2[${a_o_vec2.length/2}];
                uniform vec2 a_o_vec3[${a_o_vec3.length/3}];
                uniform vec2 a_o_vec4[${a_o_vec4.length/4}];

                uniform sampler2D o_texture_0;
                uniform sampler2D o_texture_1;

                void main() {
                    // gl_FragCoord is the current pixel coordinate and available by default
                    vec2 o_trn_pix_nor = (gl_FragCoord.xy - o_scl_canvas.xy*.5) / vec2(min(o_scl_canvas.x, o_scl_canvas.y));
                    vec2 o_trn_pix_nor2 = (o_trn_pix_nor+.5);
                    o_trn_pix_nor2.y = 1.-o_trn_pix_nor2.y;
                    float n1 = (o_trn_pix_nor.x*o_trn_pix_nor.y);
                    float n2 = sin(length(o_trn_pix_nor)*3.);
                    float n_t = n_ms_time *0.005;
                    float n = sin(n_t*0.2)*n1 + 1.-cos(n_t*0.2)*n2; 

                    vec4 o_pixel_from_image_0 = texture(o_texture_0, o_trn_pix_nor2+vec2(0.009, -0.08));
                    vec4 o_pixel_from_image_1 = texture(o_texture_1, o_trn_pix_nor2+vec2(0.009, -0.08));

                    fragColor = (clamp(vec4(
                        sin(n*33.+0.1+n_t), 
                        sin(n*33.+0.0+n_t), 
                        sin(n*33.-0.1+n_t), 
                        1.
                    ), 0., 1.)
                    +(1.-o_pixel_from_image_0))
                    *(1.-o_pixel_from_image_1);
                }`
            )
            // passing variables
            
            let o_ufloc__n_ms_time = o_webgl_program?.o_ctx.getUniformLocation(o_webgl_program?.o_shader__program, 'n_ms_time');
            o_webgl_program?.o_ctx.uniform1f(o_ufloc__n_ms_time, 0.5);

            let o_ufloc__o_vec2 = o_webgl_program?.o_ctx.getUniformLocation(o_webgl_program?.o_shader__program, 'o_vec2');
            o_webgl_program?.o_ctx.uniform2f(o_ufloc__o_vec2, 0.5, 0.5);

            let o_ufloc__o_vec3 = o_webgl_program?.o_ctx.getUniformLocation(o_webgl_program?.o_shader__program, 'o_vec3');
            o_webgl_program?.o_ctx.uniform3f(o_ufloc__o_vec3, 0.5, 0.5, 0.5);

            let o_ufloc__o_vec4 = o_webgl_program?.o_ctx.getUniformLocation(o_webgl_program?.o_shader__program, 'o_vec4');
            o_webgl_program?.o_ctx.uniform4f(o_ufloc__o_vec4, 0.5, 0.5, 0.5, 0.5);

            let o_ufloc__a_n = o_webgl_program?.o_ctx.getUniformLocation(o_webgl_program?.o_shader__program, 'a_n');
            o_webgl_program?.o_ctx.uniform1fv(o_ufloc__a_n, a_n);

            let o_ufloc__a_o_vec2 = o_webgl_program?.o_ctx.getUniformLocation(o_webgl_program?.o_shader__program, 'a_o_vec2');
            o_webgl_program?.o_ctx.uniform2fv(o_ufloc__a_o_vec2, a_o_vec2);

            let o_ufloc__a_o_vec3 = o_webgl_program?.o_ctx.getUniformLocation(o_webgl_program?.o_shader__program, 'a_o_vec3');
            o_webgl_program?.o_ctx.uniform3fv(o_ufloc__a_o_vec3, a_o_vec3);

            let o_ufloc__a_o_vec4 = o_webgl_program?.o_ctx.getUniformLocation(o_webgl_program?.o_shader__program, 'a_o_vec4');
            o_webgl_program?.o_ctx.uniform4fv(o_ufloc__a_o_vec4, a_o_vec4);

            // passing a texture 
            let f_o_img = async function(s_url){
                return new Promise((f_res, f_rej)=>{
                    let o = new Image();
                    o.onload = function(){
                        return f_res(o)
                    }
                    o.onerror = (o_err)=>{return f_rej(o_err)}
                    o.src = s_url;
                })
            }
            let o_img_0 = await f_o_img('./deno_logo.jpg')
            let o_gl = o_webgl_program?.o_ctx;
            const o_texture_0 = o_gl.createTexture();
            o_gl.bindTexture(o_gl.TEXTURE_2D, o_texture_0);
            o_gl.texImage2D(o_gl.TEXTURE_2D, 0, o_gl.RGBA, o_gl.RGBA, o_gl.UNSIGNED_BYTE, o_img_0);
            o_gl.texParameteri(o_gl.TEXTURE_2D, o_gl.TEXTURE_WRAP_S, o_gl.CLAMP_TO_EDGE);
            o_gl.texParameteri(o_gl.TEXTURE_2D, o_gl.TEXTURE_WRAP_T, o_gl.CLAMP_TO_EDGE);
            o_gl.texParameteri(o_gl.TEXTURE_2D, o_gl.TEXTURE_MIN_FILTER, o_gl.LINEAR);
            o_gl.texParameteri(o_gl.TEXTURE_2D, o_gl.TEXTURE_MAG_FILTER, o_gl.LINEAR);
    
            o_gl.bindTexture(o_gl.TEXTURE_2D, null);  // Unbind the texture

            let o_img_1 = await f_o_img('./module_banner.png')
            const o_texture_1 = o_gl.createTexture();
            o_gl.bindTexture(o_gl.TEXTURE_2D, o_texture_1);
            o_gl.texImage2D(o_gl.TEXTURE_2D, 0, o_gl.RGBA, o_gl.RGBA, o_gl.UNSIGNED_BYTE, o_img_1);
            o_gl.texParameteri(o_gl.TEXTURE_2D, o_gl.TEXTURE_WRAP_S, o_gl.CLAMP_TO_EDGE);
            o_gl.texParameteri(o_gl.TEXTURE_2D, o_gl.TEXTURE_WRAP_T, o_gl.CLAMP_TO_EDGE);
            o_gl.texParameteri(o_gl.TEXTURE_2D, o_gl.TEXTURE_MIN_FILTER, o_gl.LINEAR);
            o_gl.texParameteri(o_gl.TEXTURE_2D, o_gl.TEXTURE_MAG_FILTER, o_gl.LINEAR);
            o_gl.bindTexture(o_gl.TEXTURE_2D, null);  // Unbind the texture

            document.body.appendChild(o_canvas);

            // this will render the webgl program once
            f_render_from_o_webgl_program(o_webgl_program);

            // to create an animation we have to render multiple frames 
            // with a short delay this will create the impression of moving things
            let n_id_raf = 0;
            let f_raf = function(){

                o_webgl_program?.o_ctx.uniform1f(o_ufloc__n_ms_time, window.performance.now());

                // it is important to update each texture binding on each render call
                let n_idx_texture = 0;
                o_gl.activeTexture(o_gl.TEXTURE0+n_idx_texture);
                o_gl.bindTexture(o_gl.TEXTURE_2D, o_texture_0);
                const o_uloc_o_texture = o_gl.getUniformLocation(o_webgl_program?.o_shader__program, 'o_texture_0');
                o_gl.uniform1i(o_uloc_o_texture, n_idx_texture);  


                n_idx_texture = 1;
                o_gl.activeTexture(o_gl.TEXTURE0+n_idx_texture);
                o_gl.bindTexture(o_gl.TEXTURE_2D, o_texture_1);
                const o_uloc_o_texture_1 = o_gl.getUniformLocation(o_webgl_program?.o_shader__program, 'o_texture_1');
                o_gl.uniform1i(o_uloc_o_texture_1, n_idx_texture);  

                
                f_render_from_o_webgl_program(o_webgl_program);

                n_id_raf = requestAnimationFrame(f_raf)

            }
            n_id_raf = requestAnimationFrame(f_raf)

            // when finished or if we want to reinitialize a new programm with different GPU code
            // we have to first delete the program
            f_delete_o_webgl_program(o_webgl_program)


```
# 'f_o_data_from_google_sheet'
fetches information from a google sheet by s_id and s_sheet_name (default 'Sheet1')
also will create an array of object with the first column as the property name
so that stuff can be accessed by 'o.a_o[20].s_name', for example
```javascript
            let s_id = '1Sfywi55sApSeKO-CerfpMPq9R-6luo6-jbtjKiLoeU4';
            let s_name_sheet = 'custom_named_sheet'
            let o_data = await f_o_data_from_google_sheet(s_id, s_name_sheet);
            console.log(o_data)
            // o_data will be something like 
            let o_data_demo = {
                "o": [
                    {
                        "b_bool": {
                            "o_sheet_col_info": {
                                "id": "A",
                                "label": "b_bool",
                                "type": "boolean"
                            },
                            "v": false,
                            "f": "FALSE"
                        },
                        "n_num": {
                            "o_sheet_col_info": {
                                "id": "B",
                                "label": "n_num",
                                "type": "number",
                                "pattern": "General"
                            },
                            "v": -123,
                            "f": "-123"
                        },
                        "s_string": {
                            "o_sheet_col_info": {
                                "id": "C",
                                "label": "s_string",
                                "type": "string"
                            },
                            "v": "once upon a time..."
                        }
                    }
                ],
                "o_resp_data": {
                    "version": "0.6",
                    "reqId": "0",
                    "status": "ok",
                    "sig": "1810700530",
                    "table": {
                        "cols": [
                            {
                                "id": "A",
                                "label": "b_bool",
                                "type": "boolean"
                            },
                            {
                                "id": "B",
                                "label": "n_num",
                                "type": "number",
                                "pattern": "General"
                            },
                            {
                                "id": "C",
                                "label": "s_string",
                                "type": "string"
                            }
                        ],
                        "rows": [
                            {
                                "c": [
                                    {
                                        "v": false,
                                        "f": "FALSE"
                                    },
                                    {
                                        "v": -123,
                                        "f": "-123"
                                    },
                                    {
                                        "v": "once upon a time..."
                                    }
                                ]
                            }
                        ],
                        "parsedNumHeaders": 1
                    }
                }
            }
            // f_assert_equals(
            //     [1, 0.4980392156862745, 0.24705882352941178, 1],
            //     f_o_data_from_google_sheet('#ff7f3f'), 
            // );
```