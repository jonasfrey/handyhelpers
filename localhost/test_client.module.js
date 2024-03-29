
import {
    f_assert_equals, 
    f_deno_test, 
    f_deno_test_summary,
    f_deno_test_all_and_print_summary,
    f_display_test_selection_or_run_selected_test_and_print_summary,
    f_o_test
} from "https://deno.land/x/deno_test_server_and_client_side@0.6/mod.js"

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
    f_a_v_add_v_circular_to_array,
    f_a_v__recursive,
    f_a_a_v__combinations, 
    f_s_n_beautified,
    f_o_cpu_stats,
    f_o_cpu_stats__diff,
    f_s_type__from_typed_array,
    f_download_text_file,
    f_s_type_mime__from_s_extension,
    f_o_meminfo,
    f_v_s__between,
    f_o_nvidia_smi_help_info,
    f_o_nvidia_smi_info,
    f_o_number_value__from_s_input, 
    f_o_canvas_webgl,
    f_s_uuidv4,
    f_b_uuid,
    f_a_n_nor__rgb__from_a_n_nor__hsl,
    f_a_n_nor__hsl__from_a_n_nor__rgb,
    f_o_empty_recursive,
    f_v_at_n_idx_relative,
    f_v_s_type__from_value,
    f_v_s_type_from_array,
    f_o_image_data_from_s_url,
    f_dd,
    f_ddd,
    f_o_object_assign_nested,
    f_b_check_type_and_potentially_throw_error,
    f_a_n_u8_from_s_b64,
    f_a_n_trn__relative_to_o_html,
    f_a_n_trn__relative_to_o_html__nor
} from "./module.js"


//readme.md:start
//md: ![handy helpers logo](./logo_banner.png)
//md: # Handy Helpers
//md: this is a collection of useful functions
//readme.md:end


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

        }),
        f_o_test("f_v_at_n_idx_relative", async () => {
            // only internally used and tested
            let a_v = [
                false, 
                1, 
                {n:2}, 
                'three', 
                [1,2,3], 
                1
            ]
            f_assert_equals(
                f_v_at_n_idx_relative(a_v,false, +1), 
                1
            )
            f_assert_equals(
                f_v_at_n_idx_relative(a_v,false, +2), 
                {n:2}
            ),
            f_assert_equals(
                f_v_at_n_idx_relative(a_v,false, -3), 
                'three'
            ), 
            f_assert_equals(
                f_v_at_n_idx_relative(a_v,1, -3), 
                [1,2,3]
            )

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
        f_o_test("f_a_v_add_v_circular_to_array", async () => {
            //readme.md:start
            
            //md: ## f_a_v_add_v_circular_to_array
            //md: adds a value to an array at the beginning or at the end and shifts all items +1 or -1 index respectively

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
        }),
        f_o_test("f_v_s__between", async () => {
            //readme.md:start
            
            //md: ## f_v_s__between
            //md: get a string between strings
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
            //readme.md:end
        }),
        f_o_test("gpu info ", async () => {
            //readme.md:start
            //md: to get info about the gpu you first have 
            //md: to get all available properties 
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
            //readme.md:end
        }),
        // f_o_test("f_o_number_value__from_s_input ", async () => {
        //     //readme.md:start
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
        //     //readme.md:end
        // }),
        f_o_test("f_o_canvas_webgl", async () => {
            //readme.md:start
            
            //md: ## create a small canvas with a shader
            //md: oh how i hate it to write 100+ lines of code 'just' to get a small shader running
            //md: this function is a shortcut, well it became kind of a big shader but this is an example containing all possibilities so...
            //md: we can also pass an object which values get passed to the shader
            if(f_b_denojs()){
                console.log('f_o_canvas_webgl is not supported yet on denojs just in the browser')
            }else{


                let o_trn_nor_mouse__last = [];// data that should not be passed to the shader can be out of scope 
                let o_data_for_shader = {
                    // a simple number value will be unifrom float n_t; in shader
                    n_t: window.performance.now(), 
                    n_id_frame: 0,
                    // normal arrays can only contain up to 4 values
                    // will be uniform vec2 o_scl; in the shader
                    o_scl : [window.innerWidth, window.innerHeight],
                    o_trn_nor_mouse : [0,0],
                    // 'n_i' variable starting with this prefix will be numbers integers to be specific
                    // n_i_b the b here only indicates that it should be interpreted as a boolean 
                    n_i_b_pointer_down: 0, 
                    n_i_b_mouse_moved_since_last_frame: 0, 
                    // we can also pass bigger arrays, but then they have to be typed arrays!
                    // this will be used to show the frames per second statistics 
                    a_n_f32_ms_diff_history: new Float32Array(window.innerWidth)
                }
                let a_n_u8__rgba_image_data = new Uint8Array(
                    o_data_for_shader.o_scl[0] * o_data_for_shader.o_scl[1] * 4,
                );
                let o_canvas = f_o_canvas_webgl(
                    `#version 300 es
                    in vec4 a_o_vec_position_vertex;
                    out vec2 o_trn_nor_pixel;
                    void main() {
                        gl_Position = a_o_vec_position_vertex;
                        o_trn_nor_pixel = (a_o_vec_position_vertex.xy + 1.0) / 2.0; // Convert from clip space to texture coordinates
                    }`,
                    `#version 300 es
                    precision mediump float;
                    uniform sampler2D a_n_f32_ms_diff_history;
                    in vec2 o_trn_nor_pixel;
                    out vec4 fragColor;

                    uniform float n_t;
                    uniform vec2 o_trn_nor_mouse;
                    uniform vec2 o_scl;
                    uniform int n_i_b_pointer_down;
                    uniform int n_i_b_mouse_moved_since_last_frame;
            
                    void main() {

                        vec4 o_n_f32_ms_diff_nor = texture(a_n_f32_ms_diff_history, vec2(o_trn_nor_pixel.x, 0.5));
                        float n_f32_ms_diff_nor = (o_n_f32_ms_diff_nor[0])/60.;

                        float n_dist_y = pow(1.-abs((o_trn_nor_pixel.y-.5)-n_f32_ms_diff_nor),20.);
                        n_dist_y*=2.;
                        fragColor = vec4(vec3(n_dist_y), 1.);
                        // return;
                        float n_ratio_x_to_y = o_scl.x / o_scl.y;
                        vec2 o_factor = vec2(n_ratio_x_to_y, 1.);
                        if(n_i_b_mouse_moved_since_last_frame == 0){
                            o_factor*=(sin(n_t*0.001)*.5+.5)*3.+0.1;
                        }
                        vec2 o_tpn = (o_trn_nor_pixel);
                        vec2 o_tnm = (o_trn_nor_mouse);
                        if(n_i_b_pointer_down == 1){
                            o_tnm = vec2(
                                sin(n_t*0.003), 
                                cos(n_t*0.003)
                            )*0.2+.5;
                        }
                        o_tpn *= o_factor;
                        o_tnm *= o_factor;

                        float n_dist = length(o_tnm-o_tpn);

                        float n1 = sin(n_dist*3.*3.+n_t*0.009)*.5+.5;
                        float n2 = sin(n_dist*6.*3.+n_t*0.009)*.5+.5;
                        float n3 = sin(n_dist*9.*3.+n_t*0.009)*.5+.5;

                        fragColor *= vec4(
                            pow(abs(n1-.5),1./(3.*o_tnm.x)),
                            pow(abs(n2-.5),1./(3.*o_tnm.y)), 
                            pow(abs(n3-.5),1./(3.*o_tnm.x*o_tnm.y)),
                            1.
                        );
                        // fragColor = vec4(vec3(n_dist), 1.);
                    }
                    `, 
                    o_data_for_shader.o_scl[0], 
                    o_data_for_shader.o_scl[1]
                )
                o_canvas?.addEventListener('mousemove', function(o_e){
                    let o_bounding_rect = o_e.target.getBoundingClientRect();
                    let n_nor__x = (o_e.clientX - o_bounding_rect.left)/o_bounding_rect.width;
                    let n_nor__y = (o_e.clientY - o_bounding_rect.top)/o_bounding_rect.height;

                    o_data_for_shader.o_trn_nor_mouse[0] = n_nor__x;
                    o_data_for_shader.o_trn_nor_mouse[1] = 1.-n_nor__y;


                });
                o_canvas?.addEventListener('pointerdown', function(){
                    o_data_for_shader.n_i_b_pointer_down = 1
                })
                o_canvas?.addEventListener('pointerup', function(){
                    o_data_for_shader.n_i_b_pointer_down = 0
                })

                document.body.appendChild(o_canvas);

                let n_ms_last = 0;
                let n_ms_diff = 0;
                window.setInterval(
                    function(){
                        o_data_for_shader.n_id_frame +=1;
                        o_data_for_shader.n_t = window.performance.now()
                        n_ms_diff = Math.abs(n_ms_last - o_data_for_shader.n_t);
                        n_ms_last = o_data_for_shader.n_t
                        // console.log(o_data_for_shader)
                        // const o_ctx = o_canvas.getContext("webgl");
                        // o_ctx.readPixels(
                        //   0,
                        //   0,
                        //   o_ctx.drawingBufferWidth,
                        //   o_ctx.drawingBufferHeight,
                        //   o_ctx.RGBA,
                        //   o_ctx.UNSIGNED_BYTE,
                        //   a_n_u8__rgba_image_data,
                        // );
                        // console.log('read out image data')
                        // console.log(a_n_u8__rgba_image_data); // Uint8Array
                        console.log(n_ms_diff)
                        o_data_for_shader.a_n_f32_ms_diff_history[(
                            o_data_for_shader.n_id_frame % o_data_for_shader.a_n_f32_ms_diff_history.length
                        )] = n_ms_diff

                        o_data_for_shader.n_i_b_mouse_moved_since_last_frame = (
                            o_data_for_shader.o_trn_nor_mouse[0] == o_trn_nor_mouse__last[0]
                            &&
                            o_data_for_shader.o_trn_nor_mouse[1] == o_trn_nor_mouse__last[1]
                        ) ? 0 : 1
                        console.log(o_data_for_shader.a_n_f32_ms_diff_history)
                        // o_canvas.f_render(
                        //     o_data_for_shader
                        // )
                        o_canvas.f_render(
                            // we can also only pass some props of the object
                            o_data_for_shader
                        )
                        o_trn_nor_mouse__last = [...o_data_for_shader.o_trn_nor_mouse];

                    }, 
                    1000/60//(60+(Math.random()*10)) // random fps for testing
                )
            }

            //readme.md:end
        }),

        f_o_test("f_b_uuid", async () => {
            //readme.md:start

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

            //readme.md:end
        }),

        f_o_test("f_s_uuidv4", async () => {
            //readme.md:start

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


            //readme.md:end
        }),


        f_o_test("f_a_n_nor__rgb__from_a_n_nor__hsl", async () => {
            //readme.md:start

            f_assert_equals(
                f_a_n_nor__rgb__from_a_n_nor__hsl(
                    0,
                     1.0,
                      0.5
                ), 
                [1, 0 ,0]
            );

            //readme.md:end
        }),


        f_o_test("f_a_n_nor__hsl__from_a_n_nor__rgb", async () => {
            //readme.md:start

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

            //readme.md:end
        }),
        f_o_test("f_o_empty", async () => {
            //readme.md:start
            //md: #creates a 'empty' object recursivly
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

            //readme.md:end
        }),


        f_o_test("f_v_s_type__from_value", async () => {
            //readme.md:start
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
            //readme.md:end
        }),
        f_o_test("f_v_s_type_from_array", async () => {
            //readme.md:start
            f_assert_equals(f_v_s_type_from_array([1,2]),'a_n_f64')
            f_assert_equals(f_v_s_type_from_array([false, false]),'a_v')
            f_assert_equals(f_v_s_type_from_array([1,false, {}, [1]]),'a_v')
            f_assert_equals(f_v_s_type_from_array(['h', 'e','l','l', 'o','!']),'a_s')
            f_assert_equals(f_v_s_type_from_array(new Int32Array([1,2,3])),'a_n_i32')
            //readme.md:end
        }),
        f_o_test("f_o_image_data_from_s_url", async () => {
            //readme.md:start
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
            //readme.md:end
        }),

        f_o_test("f_dd", async () => {
            //readme.md:start
            //md: # 'f_dd' 
            //md: function dump and die 
            //md: console.logs and deno.exit (if available)
            console.log(1);
            f_dd({s:'test'});
            console.log(2);


            //readme.md:end
        }),
        f_o_test("f_ddd", async () => {
            //readme.md:start
            //md: # 'f_ddd' same as f_dd but print current date as heading
            console.log(1);
            f_ddd({s:'test'});
            console.log(2);

            //readme.md:end
        }),
        f_o_test("f_o_object_assign_nested", async () => {
            //readme.md:start
            //md: # 'f_o_object_assign_nested'
            //md: assign properties of nested objects, 'extend' the properties instead of overwriting them
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
            //readme.md:end
        }),
        f_o_test("f_b_check_type_and_potentially_throw_error", async () => {
            //readme.md:start
            //md: # 'f_b_check_type_and_potentially_throw_error'
            //md: check the type according to the prefix
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
            //readme.md:end
        }),
        f_o_test("f_a_n_u8_from_s_b64", async () => {
            //readme.md:start
            //md: # 'f_a_n_u8_from_s_b64'
            //md: convert a base 64 b64 string to a a_n_u8 uint8array
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
            //readme.md:end
        }),
        f_o_test("f_a_n_trn__relative_to_o_html__nor", async () => {
            //readme.md:start
            //md: # 'f_a_n_trn__relative_to_o_html__nor' and 'f_a_n_trn__relative_to_o_html' 
            //md: get the relative position of an element [o.clientX, o.clientY] inside another element
            //md: _nor => normalized , returns translation arra/vector between 0.0 and 1.0
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
            //readme.md:end
        }),


    ]



f_display_test_selection_or_run_selected_test_and_print_summary(a_o_test);