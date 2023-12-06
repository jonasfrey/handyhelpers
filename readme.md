<!-- {"s_msg":"this file was automatically generated","s_by":"f_generate_markdown.module.js","s_ts_created":"Wed Dec 06 2023 16:39:52 GMT+0100 (Central European Standard Time)","n_ts_created":1701877192021} -->
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
            
```
## create a small canvas with a shader
oh how i hate it to write 100+ lines of code 'just' to get a small shader running
this function is a shortcut
```javascript

            if(f_b_denojs()){
                console.log('f_o_canvas_from_vertex_shader is not supported yet on denojs just in the browser')
            }else{
                let o_canvas = f_o_canvas_from_vertex_shader(
                    `
                    precision mediump float;
                    varying vec2 o_trn_pixel_nor;
                    uniform float n_t;
            
                    void main() {
                        float n_dist = length(o_trn_pixel_nor-0.5);
                        float n1 = sin(n_dist*3.*3.+n_t*0.003)*.5+.5;
                        float n2 = sin(n_dist*6.*3.+n_t*0.003)*.5+.5;
                        float n3 = sin(n_dist*9.*3.+n_t*0.003)*.5+.5;
                        gl_FragColor = vec4(
                            n1,
                            n2, 
                            n3,
                            1.
                        );
                    }
                    `, 
                    500, 
                    500
                )   
                document.body.appendChild(o_canvas);
                window.setInterval(
                    function(){
                        o_canvas.f_render(window.performance.now())
                    }, 
                    1000/60
                )
            }

```