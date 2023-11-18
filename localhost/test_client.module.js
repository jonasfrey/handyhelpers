
import {
    f_assert_equals, 
    f_deno_test, 
    f_deno_test_summary,
    f_deno_test_all_and_print_summary 
} from "https://deno.land/x/deno_test_server_and_client_side@0.4/mod.js"

import {
    f_b_denojs, 
    f_o_html_element__from_s_tag, 
    f_o_html__from_s_html,
    f_a_n_u8__from_s_url_with_download_speed_easy,
    f_download_file__from_s_url,
    f_o_html__from_s_url,
    f_o_resp__fetch_cached,
    f_s_hashed,
    f_o__from_o_fetch_response, 
    f_sleep_ms, 
    f_s_name_file_cached__base64encoded, 
    f_s_name_file_cached__hashed, 
    f_s_name_file_cached__readable_ignore_fragment_and_getparams,
    f_move_in_array,
    f_swap_in_array,
    f_n_idx_ensured_inside_array,
    f_move_v_in_array,
    f_swap_v_in_array,
    f_a_v__recursive,
    f_a_a_v__combinations, 
    f_s_n_beautified,
    f_o_cpu_stats,
    f_o_cpu_stats__diff,
    f_s_type__from_typed_array,
    f_download_text_file,
    f_s_type_mime__from_s_extension,
    f_o_meminfo
} from "./module.js"


//readme.md:start
//md: ![handy helpers logo](./logo_banner.png)
//md: # Handy Helpers
//md: this is a collection of useful functions
//readme.md:end
let f_o_test = function(){
    return {a_v_arg: arguments}
}

let a_o_test = 
    [

        f_o_test("f_s_n_beautified", async () => {
            //readme.md:start
            
            //md: ## f_s_n_beautified
            //md: beautify/format a number, 
            //md: 12341234 
            //md: becomes
            //md: 12'341'234
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
            //readme.md:end

        }),
        
        f_o_test("f_a_a_v__combinations", async () => {
            //readme.md:start
            
            //md: ## f_a_a_v__combinations
            //md: get all possible combinations of all items without caring about the order 
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
            //readme.md:end

        }),
        f_o_test("f_a_v__recursive", async () => {
            //readme.md:start
            
            //md: ## f_a_v__recursive
            //md: get a n-dimensional array with a value of choice
            let a = f_a_v__recursive(3,3,function(n_x, n_y){return `${[n_x, n_y].join(',')}`})
            console.log(a);
            //readme.md:end

        }),
        f_o_test("f_n_idx_ensured_inside_array", async () => {
            //readme.md:start_disabled
            // only internally used and tested
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

            //readme.md:end_disabled
        }),

        f_o_test("f_move_in_array", async () => {
            //readme.md:start
            
            //md: ## f_move_in_array
            //md: moves a value in an array, it does not swap the elements!

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
            //readme.md:end
        }),

        f_o_test("f_swap_in_array", async () => {
            //readme.md:start
            
            //md: ## f_swap_in_array
            //md: swaps two values in an array

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
            //readme.md:end
        }),
        f_o_test("f_move_v_in_array", async () => {
            //readme.md:start
            
            //md: ## f_move_v_in_array
            //md: moves a value in an array by a index difference

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
            //readme.md:end
        }),
        f_o_test("f_swap_v_in_array", async () => {
            //readme.md:start
            
            //md: ## f_swap_v_in_array
            //md: moves a value in an array by a index difference

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
            //readme.md:end
        }),
        f_o_test("f_sleep_ms", async () => {
            //readme.md:start
            //md: ## f_sleep_ms
            let n_ms = window.performance.now();
            await f_sleep_ms(333);
            f_assert_equals(
                (window.performance.now() - n_ms) >= 333, 
                true
            )
            //readme.md:end
        }),
        f_o_test("Handy snippets", () => {
            //readme.md:start
            //md: ## Handy snippets
            //md: extend a file name by '_thumb' 
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

            //readme.md:end
        }),
        f_o_test("f_o_resp__fetch_cached", async () => {
            //readme.md:start
            
            //md: ## f_o_resp__fetch_cached
            //md: makes a fetch but caches the response meta (status, statusText, headers) and data as a_n_u8

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
            //readme.md:end
            
            // testing the timeout
            var o_resp = await f_o_resp__fetch_cached(
                fetch, // passing the original fetch function 
                ['https://deno.com/'], 
                true, 
                24*60*60*100,
            );
            f_assert_equals(
                o_resp?.b_from_disk, 
                undefined
            );
            var o_resp = await f_o_resp__fetch_cached(
                fetch, // passing the original fetch function 
                [
                    'https://deno.com/', 
                ], 
            );
            f_assert_equals(
                o_resp?.b_from_disk,
                true
            );
            var o_resp = await f_o_resp__fetch_cached(
                fetch, // passing the original fetch function 
                ['https://deno.com/'], 
                true, 
                24*60*60*100,
            );
            f_assert_equals(
                o_resp?.b_from_disk, 
                undefined
            );

        }),

        f_o_test("f_b_deno", () => {
            //readme.md:start
            //md: ## f_b_deno
            //md: check if script is running with https://deno.com/
            f_assert_equals(f_b_denojs(), ("Deno" in window))
            //readme.md:end
        }),
        f_o_test("f_o_html_element__from_s_tag", async () => {
            //readme.md:start
            //md: ## f_o_html_element__from_s_tag
            //md: returns a html element
            //md: browser:  document.createElement 
            //md: denojs: using /x/deno_dom 
            f_assert_equals((await f_o_html_element__from_s_tag('h1')).tagName, 'H1');
            //readme.md:end
        }),
        f_o_test("f_o_html__from_s_html", async () => {
            //readme.md:start
            //md: ## f_o_html__from_s_html
            //md: returns a html element
            //md: browser:  div.innerHTML = s_html 
            //md: denojs: using /x/deno_dom 
            f_assert_equals(
                (await f_o_html__from_s_html('<div><h1>hello</h1><h1>world</h1></div>')).querySelectorAll('h1')[1].innerText,
                'world'
            );
            //readme.md:end
        }),

        f_o_test("f_download_file__from_s_url", async () => {
            //readme.md:start
            //md: ## f_download_file__from_s_url
            //md: download a file, pass an optional callback, or let log the download state by default
            await f_download_file__from_s_url(
                // 'https://www.dwsamplefiles.com/?dl_id=409'
                // 'https://images.unsplash.com/photo-1533144188434-eb0442504392?auto=format&fit=crop&q=80&w=3948&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                // 'a_picture_in_bird_perspective.png'
                'https://www.w3schools.com/html/pic_trulli.jpg', 
                './.gitignored/lol/test.jpg'//if denojs  we can pass a path
            )

            //readme.md:end
        }),
        f_o_test("f_a_n_u8__from_s_url_with_download_speed_easy", async () => {
            //readme.md:start
            //md: ## f_a_n_u8__from_s_url_with_download_speed_easy
            //md: get the response body as Uint8array (a_n_u8) from an url, while the download is pending a callback will be executed every nth millisecond
            //md: in this callback one can print download speed, if the response header 'content-length' is present and its value is legit
            //md: one can also print the download percentage

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
            //readme.md:end
        }),



        f_o_test("Overwrite / 'Monkey-Patch' the fetch function", async () => {
            //readme.md:start
            
            //md: ## Overwrite / 'Monkey-Patch' the fetch function
            //md: replace the original fetch function, with a custom fetch function, for example to change some headers
            //md: this can be used in combination with `f_o_resp__fetch_cached`, `f_download_file__from_s_url`
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
            //readme.md:end
        }),


        f_o_test("f_o_html__from_s_url", async () => {
            //readme.md:start
            
            //md: ## f_o_html__from_s_url
            //md: a handy function to directly get a js object html document from a url, works in deno and browser
            let o_doc = (await f_o_html__from_s_url(
                `https://deno.land`
            ))
            f_assert_equals(
                typeof o_doc.body.querySelectorAll, 
                'function'
            )
            //readme.md:end
        }),

        f_o_test("f_s_hashed", async () => {
            //readme.md:start
            
            //md: ## f_s_hashed
            //md: hash a string, using the window.crypto.subtle API, available functions at the moment are 
            //md: 'sha-1', 'sha-256', 'sha-384', 'sha-512'

            f_assert_equals(
                await f_s_hashed('lol this is a text', 'SHA-1'),
                'd2a68e83cffd1f8dc53143c95006f862f199082b'
            )
            //readme.md:end
        }),

        f_o_test("f_o_cpu_stats", async ()=>{
            //readme.md:start
            
            //md: ## f_o_cpu_stats
            //md: get information about the cpu
            //md: this will parse /proc/stat so we have to await it
            let o_cpu_stats = await f_o_cpu_stats();
            //md: the number of cpus is in fact the length of the cpu core stats
            console.log(o_cpu_stats.n_cpus == o_cpu_stats.a_o_cpu_core_stats.length);
            //md: more infos about the cpu cores can be found here 
            console.log(o_cpu_stats.a_o_cpu_core_stats)
            //readme.md:end
            
            
        }),
        f_o_test("f_o_cpu_stats__diff", async ()=>{
            //readme.md:start
            
            //md: ## f_o_cpu_stats__diff
            //md: this will returna difference to the last call of f_o_cpu_stats__diff
            //md: the important and usefull value here is `o_cpu_stats__diff.a_o_cpu_core_stats__diff[0].n_usage_nor`
            //md: which is the normalized usage 0.0-1.0 of the cpu core
            //md: this will parse /proc/stat so we have to await it
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
            //readme.md:end

        }),
        f_o_test("f_s_type__from_typed_array", async ()=>{
            //readme.md:start
            
            //md: ## f_s_type__from_typed_array
            //md: get a string matching the typed array type
            //md: the default string is how a type in rust looks like
            //md: so Uint8Array ->'u8', Float32Array -> 'f32 ...

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
            //readme.md:end


        }),
        f_o_test("f_download_text_file", async ()=>{
            //readme.md:start
                        
            //md: ## f_download_text_file
            //md: download a text file 
            await f_download_text_file
                ('A'.repeat(1_000_000_000), 
                'my_hello_file.txt'
            )
            //readme.md:end

        }),
        f_o_test("f_s_type_mime__from_s_extension", async ()=>{
            //readme.md:start
                        
            //md: ## f_s_type_mime__from_s_extension
            //md: get a mime type from an extension
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
            
            //readme.md:end

        }),
        f_o_test("f_o_meminfo", async ()=>{
            //readme.md:start
                        
            //md: ## f_o_meminfo
            //md: linux only , get info about the RAM usage
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
            
            //readme.md:end
        })

        
    ]


let b_run_all = false;
if(f_b_denojs()){
    b_run_all = Deno.arg?.[0] == 'all'
}else{
    b_run_all = window.location.hash == 'all'
}
if(!b_run_all){
    console.log('run with "all"/"url#all" to run all tests')
    console.log('running last test'); 

    await f_deno_test_all_and_print_summary(
        a_o_test.slice(-1).map(o=>{
            f_deno_test(...o.a_v_arg)
        })
    )
}else{
    await f_deno_test_all_and_print_summary(
        a_o_test.map(o=>{
            f_deno_test(...o.a_v_arg)
        })
    )
}
