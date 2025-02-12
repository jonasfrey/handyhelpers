
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
    f_a_n_trn__relative_to_o_html__nor,
    f_a_o_entry__from_s_path,
    f_s_bordered,
    f_s_color_rgba_from_a_n_nor_channelcolorrgba,
    f_s_color_hex_from_a_n_nor_channelcolorrgba,
    f_a_n_nor_channelcolorrgba_from_color_hex,
    f_o_webgl_program,
    f_resize_canvas_from_o_webgl_program,
    f_render_from_o_webgl_program,
    f_delete_o_webgl_program,
    f_o_data_from_google_sheet,
    f_a_o_number_value_temperature_from_s_temp,
    f_o_state_webgl_shader_audio_visualization,
    f_o_proxified,
    f_o_html_from_o_js,
    f_o_proxified_and_add_listeners,
    f_o_mod__notifire,
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
            //readme.md:start
            
            //md: ## f_n_idx_ensured_inside_array
            //md: get an index of an item in an array relative to the first argument as a number, 
            //md: the index will be wrapped around if negative or bigger than array length
            //md: so it is ensured that it stays in the array

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
            //readme.md:end

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
            let n_ms = globalThis.performance.now();
            await f_sleep_ms(333);
            f_assert_equals(
                (globalThis.performance.now() - n_ms) >= 333, 
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
            f_assert_equals(f_b_denojs(), ("Deno" in globalThis))
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
            let f_fetch_original = globalThis.fetch
            globalThis.fetch = async function(){
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
            globalThis.fetch = f_fetch_original

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
            //md: hash a string, using the globalThis.crypto.subtle API, available functions at the moment are 
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
            let n_ms_window_performance_now = globalThis.performance.now();
            let f_print = async function(){
        
                let n = globalThis.performance.now();
                var o_cpu_stats__diff = await f_o_cpu_stats__diff();
                // console.log(`ms:${globalThis.performance.now()-n}`)
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
                if(Math.abs(globalThis.performance.now() - n_ms_window_performance_now) < n_ms_duration){
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
            let n_ms_window_performance_now = globalThis.performance.now();
            let a_a_n_u8 = []
            let f_print = async function(){
                let n_ms_diff_abs_nor = Math.abs(globalThis.performance.now() - n_ms_window_performance_now) / n_ms_duration;
                if(n_ms_diff_abs_nor > 0.5){
                    a_a_n_u8 = [] // de-allocate ? 
                }else{
                    a_a_n_u8.push(new Float64Array(1024*1024*4).fill(0))          
                }
                
                // allocate some memory to see usage
                let n = globalThis.performance.now();
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
            let n_ms_window_performance_now = globalThis.performance.now();
            let a_a_n_u8 = []
            let f_print = async function(){
                let n_ms_diff_abs_nor = Math.abs(globalThis.performance.now() - n_ms_window_performance_now) / n_ms_duration;
                if(n_ms_diff_abs_nor > 0.5){
                    a_a_n_u8 = [] // de-allocate ? 
                }else{
                    a_a_n_u8.push(new Float64Array(1024*1024*4).fill(0))          
                }
                
                // allocate some memory to see usage
                let n = globalThis.performance.now();
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
         
        f_o_test("f_o_number_value__from_s_input", async () => {
            //readme.md:start
            //md: # f_o_number_value__from_s_input
        
            // Test Case: Megabits (Mb) to bytes
            let o = f_o_number_value__from_s_input("123.443 [Mb]");
            f_assert_equals(o.n, 123443000);  // Megabits to bits
            console.log(o)
            // Test Case: Mebibytes (MiB) to mebibytes
            o = f_o_number_value__from_s_input(" 908 MiB ");
            f_assert_equals(o.n_mebi, 908);
        
            // Test Case: Millivolts (mV)
            o = f_o_number_value__from_s_input("1.23 mV");
            f_assert_equals(o.n_milli, 1.23);
            f_assert_equals(o.n_micro, 1230);
        
            // Test Case: Megahertz (MHz) to Hertz and Gigahertz
            o = f_o_number_value__from_s_input("204.20 MHz");
            f_assert_equals(o.n_mega, 204.2);
            f_assert_equals(o.n, 204200000);  // Hz (base unit)
            f_assert_equals(o.n_giga, 0.2042);
        
            // Test Case: Gigabytes (GB) to bytes, megabytes, and gigabytes
            o = f_o_number_value__from_s_input("512 GB");
            f_assert_equals(o.n_giga, 512);
            f_assert_equals(o.n_mega, 512000);
            f_assert_equals(o.n, 512000000000);  // Bytes (base unit)
        
            // Test Case: Kilobytes (KB)
            o = f_o_number_value__from_s_input("120.5 KB");
            f_assert_equals(o.n_kilo, 120.5);
            f_assert_equals(o.n, 120500);  // Bytes
        
            // Test Case: Gigahertz (GHz) to Hertz and Megahertz
            o = f_o_number_value__from_s_input("3.8 GHz");
            f_assert_equals(o.n_giga, 3.8);
            f_assert_equals(o.n_mega, 3800);
            f_assert_equals(o.n, 3800000000);  // Hz
        
            // Test Case: Volts (V)
            o = f_o_number_value__from_s_input("5 V");
            f_assert_equals(o.n, 5);  // Volts (base unit)
            f_assert_equals(o.n_milli, 5000);  // Millivolts
        
            // Test Case: Watts (W)
            o = f_o_number_value__from_s_input("60 W");
            f_assert_equals(o.n, 60);  // Watts (base unit)
            f_assert_equals(o.n_milli, 60000);  // Milliwatts
        
            // Test Case: Celsius (C)
            o = f_o_number_value__from_s_input("37 C");
            f_assert_equals(o.n, 37);  // Celsius (base unit)
        
            // Test Case: Percentage (%)
            o = f_o_number_value__from_s_input("85 %");
            f_assert_equals(o.n, 0.85);  // Percent (base unit)
        
            // Test Case: Binary Units (GiB)
            o = f_o_number_value__from_s_input("16 GiB");
            f_assert_equals(o.n_gibi, 16);
            f_assert_equals(o.n_mega, 17179.869184);  // Converting to megabytes (MB)
            f_assert_equals(o.n, 17179869184);  // Bytes (base unit)
        
            // Test Case: Terabytes (TB)
            o = f_o_number_value__from_s_input("1.5 TB");
            f_assert_equals(o.n_tera, 1.5);
            f_assert_equals(o.n_giga, 1500);
            f_assert_equals(o.n, 1500000000000);  // Bytes (base unit)

            // Test Case: revolutions per minute
            o = f_o_number_value__from_s_input("200 rpm");
            f_assert_equals(o.n_kilo, 0.2);
        
            //readme.md:end
        }),

        f_o_test("f_a_o_number_value_temperature_from_s_temp", async () => {
            //readme.md:start
            //md: # f_a_o_number_value_temperature_from_s_temp
            //md: detects the temperature value from the string, (has to be Kelvin, Celcius , or Fahrenheit)
            //md: and then converts it to all other temperature values
        
            // Test Case 1: Celsius to Fahrenheit and Kelvin
            let a_o = f_a_o_number_value_temperature_from_s_temp("10.23 Celsius");
            // console.log(a_o)
            let o_fahrenheit = a_o.find(o => o.s_name_base_unit === 'Fahrenheit');
            let o_kelvin = a_o.find(o => o.s_name_base_unit === 'Kelvin');
            f_assert_equals(o_fahrenheit.n.toFixed(2), '50.41');
            f_assert_equals(o_kelvin.n.toFixed(2), '283.38');
            
            // Test Case 2: Fahrenheit to Celsius and Kelvin
            a_o = f_a_o_number_value_temperature_from_s_temp("50 Fahrenheit");
            // console.log(a_o)
            let o_celsius = a_o.find(o => o.s_name_base_unit === 'Celsius');
            o_kelvin = a_o.find(o => o.s_name_base_unit === 'Kelvin');
            f_assert_equals(o_celsius.n.toFixed(2), '10.00');
            f_assert_equals(o_kelvin.n.toFixed(2), '283.15');

            // Test Case 3: Kelvin to Celsius and Fahrenheit
            a_o = f_a_o_number_value_temperature_from_s_temp("300 Kelvin");
            // console.log(a_o)
            o_celsius = a_o.find(o => o.s_name_base_unit === 'Celsius');
            o_fahrenheit = a_o.find(o => o.s_name_base_unit === 'Fahrenheit');
            f_assert_equals(o_celsius.n.toFixed(2), '26.85');
            f_assert_equals(o_fahrenheit.n.toFixed(2), '80.33');

            // Test Case 4: Negative Celsius to Fahrenheit and Kelvin
            a_o = f_a_o_number_value_temperature_from_s_temp("-10 Celsius");
            // console.log(a_o)
            o_fahrenheit = a_o.find(o => o.s_name_base_unit === 'Fahrenheit');
            o_kelvin = a_o.find(o => o.s_name_base_unit === 'Kelvin');
            f_assert_equals(o_fahrenheit.n.toFixed(2), '14.00');
            f_assert_equals(o_kelvin.n.toFixed(2), '263.15');

            // Test Case 5: Kelvin to Celsius and Fahrenheit (Absolute Zero)
            a_o = f_a_o_number_value_temperature_from_s_temp("0 Kelvin");
            // console.log(a_o)
            o_celsius = a_o.find(o => o.s_name_base_unit === 'Celsius');
            o_fahrenheit = a_o.find(o => o.s_name_base_unit === 'Fahrenheit');
            f_assert_equals(o_celsius.n.toFixed(2), '-273.15');
            f_assert_equals(o_fahrenheit.n.toFixed(2), '-459.67');
        
            //readme.md:end
        }),

        f_o_test("f_b_uuid", async () => {
            //readme.md:start
            //md: # f_b_uuid

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
            //md: # f_s_uuidv4

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
            //md: # f_a_n_nor__rgb__from_a_n_nor__hsl

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
            //md: # f_a_n_nor__hsl__from_a_n_nor__rgb

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
            //md: # f_o_empty 
            //md: creates a 'empty' object recursivly
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
            //md: # f_v_s_type__from_value 

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
            //md: # f_v_s_type_from_array 

            f_assert_equals(f_v_s_type_from_array([1,2]),'a_n_f64')
            f_assert_equals(f_v_s_type_from_array([false, false]),'a_v')
            f_assert_equals(f_v_s_type_from_array([1,false, {}, [1]]),'a_v')
            f_assert_equals(f_v_s_type_from_array(['h', 'e','l','l', 'o','!']),'a_s')
            f_assert_equals(f_v_s_type_from_array(new Int32Array([1,2,3])),'a_n_i32')
            //readme.md:end
        }),
        f_o_test("f_o_image_data_from_s_url", async () => {
            //readme.md:start
            //md: # f_o_image_data_from_s_url
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


        f_o_test("f_a_o_entry__from_s_path", async () => {
            //readme.md:start
            //md: # 'f_a_o_entry__from_s_path' 
            //md: returns all entries from a directory path
            let a_o = await f_a_o_entry__from_s_path('./test_dir');
            console.log(a_o)
            f_assert_equals(a_o.length, 2);


            let b_recursive = true;
            let a_o2 = await f_a_o_entry__from_s_path('./test_dir', b_recursive);
            console.log({a_o2})
            f_assert_equals(a_o2.length, 3);

            //readme.md:end
        }),
        f_o_test("f_s_bordered", async () => {
            //readme.md:start
            //md: # 'f_s_bordered' 
            //md: add border to text 
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
            //readme.md:end
        }),



        
        f_o_test("f_s_color_rgba_from_a_n_nor_channelcolorrgba", async () => {
            //readme.md:start
            //md: # 'f_s_color_rgba_from_a_n_nor_channelcolorrgba' 
            //md: 'rgba(127, 64, 255, 1)' from [0.5, 0.25, 1, 1]
            f_assert_equals(
                'rgba(127.5,63.75,255,1)', 
                f_s_color_rgba_from_a_n_nor_channelcolorrgba([0.5, 0.25, 1, 1])
            );

            //readme.md:end
        }),
        f_o_test("f_s_color_hex_from_a_n_nor_channelcolorrgba", async () => {
            //readme.md:start
            //md: # 'f_s_color_hex_from_a_n_nor_channelcolorrgba' 
            //md: '#ff7f3f' from '[1,0.5,0.25]'
            f_assert_equals(
                '#ff7f3f', 
                f_s_color_hex_from_a_n_nor_channelcolorrgba([1,0.5,0.25])
            );

            //readme.md:end
        }),
        
        f_o_test("f_a_n_nor_channelcolorrgba_from_color_hex", async () => {
            //readme.md:start
            //md: # 'f_a_n_nor_channelcolorrgba_from_color_hex' 
            //md:  will add a alpha channel of 1 if not existing!
            //md: '[1, 0.4980392156862745, 0.24705882352941178, 1]' from '#ff7f3f' 
            f_assert_equals(
                [1, 0.4980392156862745, 0.24705882352941178, 1],
                f_a_n_nor_channelcolorrgba_from_color_hex('#ff7f3f'), 
            );
            //readme.md:end
        }),
        

        f_o_test("f_o_webgl_program", async () => {
            //readme.md:start
            //md: # 'f_o_webgl_program','f_delete_o_webgl_program','f_resize_canvas_from_o_webgl_program','f_render_from_o_webgl_program' 
            //md: some simple helper functions to create a webgl programm, using GLSL shader code to control the GPU

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
            globalThis.addEventListener('resize', ()=>{
                // this will resize the canvas and also update 'o_scl_canvas'
                f_resize_canvas_from_o_webgl_program(
                    o_webgl_program,
                    globalThis.innerWidth, 
                    globalThis.innerHeight
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
            let n_ms_last = 0;
            let n_ms_sum = 0;
            let n_ms_count = 0;
            let f_raf = function(n_ms){

                // ------------- performance measuring: start
                let n_ms_delta = n_ms-n_ms_last;
                n_ms_last = n_ms
                n_ms_sum = parseFloat(n_ms_sum) + parseFloat(n_ms_delta);
                n_ms_count+=1;
                if(n_ms_sum > 1000){
                    console.log(`n_fps ${1000/(n_ms_sum/n_ms_count)}`)
                    n_ms_sum= 0;
                    n_ms_count= 0;
                }
                // ------------- performance measuring: end

                o_webgl_program?.o_ctx.uniform1f(o_ufloc__n_ms_time, globalThis.performance.now());

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


            //readme.md:end
        }),
        
        f_o_test("f_o_webgl_program_automata", async () => {
            //readme.md:start
            //md: # 'f_o_webgl_program' 
            //md: backbuffer, last frame, automata, texture, blit, fbo 
            //md: this is just a boilerplate and an example of how to access data from the last frame
            //md: which is needed for an automata for example

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
                uniform vec2 o_scl_canvas;
                uniform float n_ms_time;
                uniform sampler2D o_texture_last_frame;
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
                    vec4 o_last = texelFetch(o_texture_last_frame, ivec2(gl_FragCoord.xy), 0);
                    if(n_ms_time < 1000.){
                        fragColor = vec4(o_last.rgb, 1.0);
                        return;
                    }

                    n = o_last.r;
                    n = (n > 0.5 ) ? 0. : 1.;
                    // n-= 0.1;
                    // n = gl_FragCoord.x/o_scl_canvas.x;
                
                    ivec2 texelCoord = ivec2(gl_FragCoord.xy); // Convert fragment coordinates to integer texel coordinates
                
                    // Define a 3x3 kernel
                    int kernel[9] = int[9](-1, 0, 1,  -1, 0, 1,  -1, 0, 1);
                    
                    // Sum the values of the neighboring pixels (excluding the center pixel)
                    float sum = 0.0;
                    float n_count = 0.;
                    for (int i = -3; i <= 3; i++) {
                        for (int j = -3; j <= 3; j++) {
                            ivec2 neighborCoord = texelCoord + ivec2(i, j);
                            vec4 neighbor = texelFetch(o_texture_last_frame, neighborCoord, 0);
                            if (i != 0 || j != 0) { // Exclude the center pixel
                                n_count+=1.;
                                sum += neighbor.r; // Assuming the "state" is in the red channel
                            }
                        }
                    }
                    float n_nor = sum/n_count;

                    float n_diff = (n_nor-.5);
                    float n_sign = sign(n_diff);
                    float n_diff_abs = abs(n_diff);
                    if(n_nor > 0.501){
                        n = n - 0.49;
                    }else{
                        n = n + 0.49;
                    }
                    fragColor = vec4(n, n, n, 1.0);

                }
                `, 
                {
                    antialias: false // blitFrameBfufer wont work without this, since something with multisampling
                },
            );
            o_webgl_program?.o_ctx.blitFramebuffer.bind(o_webgl_program?.o_ctx);

            document.body.appendChild(o_canvas);

            const a_o_texture = [o_webgl_program?.o_ctx.createTexture(), o_webgl_program?.o_ctx.createTexture()];
            const a_o_framebuffer = [o_webgl_program?.o_ctx.createFramebuffer(), o_webgl_program?.o_ctx.createFramebuffer()];
            let n_idx_a_o_framebuffer = 0;

            let  f_setup_texture_and_framebuffer = function(o_texture, o_framebuffer) {
                o_webgl_program?.o_ctx.bindTexture(o_webgl_program?.o_ctx.TEXTURE_2D, o_texture);
    
                const a_n_u8 = new Uint8Array(o_webgl_program?.o_canvas.width * o_webgl_program?.o_canvas.height * 4); // 4 for RGBA
                o_webgl_program?.o_ctx.texImage2D(o_webgl_program?.o_ctx.TEXTURE_2D, 0, o_webgl_program?.o_ctx.RGBA, o_webgl_program?.o_canvas.width, o_webgl_program?.o_canvas.height, 0, o_webgl_program?.o_ctx.RGBA, o_webgl_program?.o_ctx.UNSIGNED_BYTE, a_n_u8);
    
                o_webgl_program?.o_ctx.texParameteri(o_webgl_program?.o_ctx.TEXTURE_2D, o_webgl_program?.o_ctx.TEXTURE_MIN_FILTER, o_webgl_program?.o_ctx.NEAREST);
                o_webgl_program?.o_ctx.texParameteri(o_webgl_program?.o_ctx.TEXTURE_2D, o_webgl_program?.o_ctx.TEXTURE_MAG_FILTER, o_webgl_program?.o_ctx.NEAREST);
                o_webgl_program?.o_ctx.texParameteri(o_webgl_program?.o_ctx.TEXTURE_2D, o_webgl_program?.o_ctx.TEXTURE_WRAP_S, o_webgl_program?.o_ctx.CLAMP_TO_EDGE);
                o_webgl_program?.o_ctx.texParameteri(o_webgl_program?.o_ctx.TEXTURE_2D, o_webgl_program?.o_ctx.TEXTURE_WRAP_T, o_webgl_program?.o_ctx.CLAMP_TO_EDGE);
                
                o_webgl_program?.o_ctx.bindFramebuffer(o_webgl_program?.o_ctx.FRAMEBUFFER, o_framebuffer);
                o_webgl_program?.o_ctx.framebufferTexture2D(o_webgl_program?.o_ctx.FRAMEBUFFER, o_webgl_program?.o_ctx.COLOR_ATTACHMENT0, o_webgl_program?.o_ctx.TEXTURE_2D, o_texture, 0);
            }
            let f_randomize_texture_data = function(o_texture) {
                const a_n_u8_random = new Uint8Array(o_webgl_program?.o_canvas.width * o_webgl_program?.o_canvas.height * 4);
                for (let i = 0; i < a_n_u8_random.length; i += 4) {
                    const value = Math.random() > 0.5 ? 255 : 0;
                    a_n_u8_random[i] = value;     // R
                    a_n_u8_random[i + 1] = value; // G
                    a_n_u8_random[i + 2] = value; // B
                    a_n_u8_random[i + 3] = 255;   // A
                }
                o_webgl_program?.o_ctx.bindTexture(o_webgl_program?.o_ctx.TEXTURE_2D, o_texture);
                o_webgl_program?.o_ctx.texImage2D(o_webgl_program?.o_ctx.TEXTURE_2D, 0, o_webgl_program?.o_ctx.RGBA, o_webgl_program?.o_canvas.width, o_webgl_program?.o_canvas.height, 0, o_webgl_program?.o_ctx.RGBA, o_webgl_program?.o_ctx.UNSIGNED_BYTE, a_n_u8_random);
            }


            let f_resize = function(){
                // this will resize the canvas and also update 'o_scl_canvas'
                f_resize_canvas_from_o_webgl_program(
                    o_webgl_program,
                    globalThis.innerWidth, 
                    globalThis.innerHeight
                )
                f_setup_texture_and_framebuffer(a_o_texture[0], a_o_framebuffer[0]);
                f_setup_texture_and_framebuffer(a_o_texture[1], a_o_framebuffer[1]);
                f_randomize_texture_data(a_o_texture[0]);
                f_randomize_texture_data(a_o_texture[1]);

            }
            globalThis.addEventListener('resize', ()=>{
                f_resize();
                f_render_from_o_webgl_program_custom(o_webgl_program);

            });

            f_resize()
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

            let f_render_from_o_webgl_program_custom = function(
                o_webgl_program
            ){

                let n_idx_a_o_framebuffer_next = (n_idx_a_o_framebuffer+1)%a_o_texture.length
                // Render to the offscreen framebuffer
                o_webgl_program.o_ctx.bindFramebuffer(o_webgl_program.o_ctx.FRAMEBUFFER, a_o_framebuffer[n_idx_a_o_framebuffer_next]);


                o_webgl_program.o_ctx.bindBuffer(o_webgl_program.o_ctx.ARRAY_BUFFER, o_webgl_program.o_buffer_position);
                o_webgl_program.o_ctx.enableVertexAttribArray(o_webgl_program.o_afloc_a_o_vec_position_vertex);
                o_webgl_program.o_ctx.vertexAttribPointer(o_webgl_program.o_afloc_a_o_vec_position_vertex, 2, o_webgl_program.o_ctx.FLOAT, false, 0, 0);
                

                let n_idx_texture = 0;
                o_webgl_program.o_ctx.activeTexture(o_webgl_program.o_ctx.TEXTURE0+n_idx_texture);
                o_webgl_program.o_ctx.bindTexture(o_webgl_program.o_ctx.TEXTURE_2D, a_o_texture[n_idx_a_o_framebuffer]);
                const o_ufloc_o_texture_0 = o_gl.getUniformLocation(o_webgl_program?.o_shader__program, 'o_texture_last_frame');
                o_gl.uniform1i(o_ufloc_o_texture_0, n_idx_texture);  

                n_idx_texture = 1
                o_gl.activeTexture(o_gl.TEXTURE0+n_idx_texture);
                o_gl.bindTexture(o_gl.TEXTURE_2D, o_texture_0);
                const o_ufloc_o_texture_1 = o_gl.getUniformLocation(o_webgl_program?.o_shader__program, 'o_texture_0');
                o_gl.uniform1i(o_ufloc_o_texture_1, n_idx_texture);  
                n_idx_texture = 2
                o_gl.activeTexture(o_gl.TEXTURE0+n_idx_texture);
                o_gl.bindTexture(o_gl.TEXTURE_2D, o_texture_1);
                const o_uloc_o_texture_2 = o_gl.getUniformLocation(o_webgl_program?.o_shader__program, 'o_texture_1');
                o_gl.uniform1i(o_uloc_o_texture_2, n_idx_texture);  


                // Render the cellular automata step to the offscreen framebuffer
                o_webgl_program.o_ctx.drawArrays(o_webgl_program.o_ctx.TRIANGLE_STRIP, 0, 4);

                // Now copy the framebuffer to the canvas using blitFramebuffer (for WebGL 2.0)
                // Use WebGL2's blitFramebuffer to efficiently copy the framebuffer
                o_webgl_program.o_ctx.bindFramebuffer(o_webgl_program.o_ctx.READ_FRAMEBUFFER, a_o_framebuffer[n_idx_a_o_framebuffer_next]);
                o_webgl_program.o_ctx.bindFramebuffer(o_webgl_program.o_ctx.DRAW_FRAMEBUFFER, null); // Canvas framebuffer
                o_webgl_program.o_ctx.blitFramebuffer(
                    0, 0, o_webgl_program.o_canvas.width, o_webgl_program.o_canvas.height,
                    0, 0, o_webgl_program.o_canvas.width, o_webgl_program.o_canvas.height,
                    o_webgl_program.o_ctx.COLOR_BUFFER_BIT, o_webgl_program.o_ctx.NEAREST
                );
                n_idx_a_o_framebuffer = n_idx_a_o_framebuffer_next


            }
            let o_ufloc__n_ms_time = o_webgl_program?.o_ctx.getUniformLocation(o_webgl_program?.o_shader__program, 'n_ms_time');
            o_webgl_program?.o_ctx.uniform1f(o_ufloc__n_ms_time, 0.5);

            let n_id_raf = 0;
            let n_ms_last = 0;
            let n_ms_sum = 0;
            let n_ms_count = 0;
            let f_raf = function(n_ms){

                // ------------- performance measuring: start
                let n_ms_delta = n_ms-n_ms_last;
                n_ms_last = n_ms
                n_ms_sum = parseFloat(n_ms_sum) + parseFloat(n_ms_delta);
                n_ms_count+=1;
                if(n_ms_sum > 1000){
                    console.log(`n_fps ${1000/(n_ms_sum/n_ms_count)}`)
                    n_ms_sum= 0;
                    n_ms_count= 0;
                }
                // ------------- performance measuring: end
                o_webgl_program?.o_ctx.uniform1f(o_ufloc__n_ms_time, globalThis.performance.now());
                // console.log(globalThis.performance.now())

                f_render_from_o_webgl_program_custom(o_webgl_program);

                n_id_raf = requestAnimationFrame(f_raf)

            }
            n_id_raf = requestAnimationFrame(f_raf)

            
            // when finished or if we want to reinitialize a new programm with different GPU code
            // we have to first delete the program
            f_delete_o_webgl_program(o_webgl_program)


            //readme.md:end
        }),
        

        f_o_test("f_o_data_from_google_sheet", async () => {
            //readme.md:start
            //md: # 'f_o_data_from_google_sheet' 
            //md:  fetches information from a google sheet by s_id and s_sheet_name (default 'Sheet1')
            //md: also will create an array of object with the first column as the property name
            //md: so that stuff can be accessed by 'o.a_o[20].s_name', for example
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
            //readme.md:end
        }),


        f_o_test("f_o_state_webgl_shader_audio_visualization", async () => {
            //readme.md:start
            //md: # 'f_o_state_webgl_shader_audio_visualization' 
            //md:  visualizes audio
            //md: for this it creates a shader program, several parameters can be adjusted

            let o_state = await f_o_state_webgl_shader_audio_visualization({
                s_path_or_url_audio_file : './meme_sounds.mp3',
                n_scl_x_canvas : 1000,
                n_scl_y_canvas : 200 , 
                n_amp_peaks: 0.3, // the amplitude of the max and min peaks of the wave image 
                n_amp_avgrms: 0.125, // the amplitude of the average rms 
                a_n_rgba_color_amp_peaks: [ 
                    Math.random(),
                    Math.random(),
                    Math.random(),
                    1.
                ],
                a_n_rgba_color_amp_avg: [ 
                    Math.random(),
                    Math.random(),
                    Math.random(),
                    1.
                ]
            });
            globalThis.onresize = function(){
                o_state.n_scl_x_canvas = globalThis.innerWidth;
                o_state.f_render();
            }
            globalThis.onmousemove = function(o_e){
                let n_y_nor = o_e.clientY/ globalThis.innerHeight;
                let n_x_nor = o_e.clientX/ globalThis.innerWidth;

                o_state.n_amp_peaks = n_y_nor;
                o_state.n_amp_avgrms = n_y_nor*0.5;
                o_state.n_nor_start = 0.0
                o_state.n_nor_end = n_x_nor;
                o_state.f_render();
            }

            const n_sec_duration = o_state.o_audio_buffer_decoded.duration; // Duration in seconds
            const n_samples_per_second_samplerate = o_state.o_audio_buffer_decoded.sampleRate; // Samples per second
            const n_samples_total = o_state.o_audio_buffer_decoded.length; // Total number of samples
            const n_num_of_channels = o_state.o_audio_buffer_decoded.numberOfChannels; // Number of audio channels
            // const a_n_f32 = o_state.o_audio_buffer_decoded.getChannelData(0); // PCM data for channel 0
            console.log({
                n_sec_duration,
                n_samples_per_second_samplerate,
                n_samples_total,
                n_num_of_channels,
            });
            //md: ![audio1](./localhost/audio1.png)

            document.body.appendChild(o_state.o_canvas);

            //md:  ### load from encoded audio data
            let o_array_buffer_encoded_audio_data = await(await fetch('./meme_sounds.mp3')).arrayBuffer();
            let o_state2 = await f_o_state_webgl_shader_audio_visualization({
                o_array_buffer_encoded_audio_data,
                n_scl_x_canvas : 1000,
                n_scl_y_canvas : 200 , 
                n_amp_peaks: 0.3, // the amplitude of the max and min peaks of the wave image 
                n_amp_avgrms: 0.125, // the amplitude of the average rms 
                a_n_rgba_color_amp_peaks: [ 
                    1., 0., 0., 1.
                ],
                a_n_rgba_color_amp_avg: [ 
                    0., 0., 1., 1.,
                ]
            });
            document.body.appendChild(o_state2.o_canvas);
            //md: ![audio1](./localhost/audio2.png)

            //md:  ### load from decoded audio data 
            //md: if you use for example Tonejs you can use the already decoded buffer 
            const o_player = await new Tone.Player().toDestination();


            var buffer = await new Tone.Buffer("./meme_sounds.mp3", async function(){
                //the buffer is now available.
                o_player.buffer = buffer.get();
                globalThis.o_player = o_player
                let o_state3 = await f_o_state_webgl_shader_audio_visualization({
                    o_audio_buffer_decoded: o_player.buffer,
                    n_scl_x_canvas : 1000,
                    n_scl_y_canvas : 200 , 
                    n_amp_peaks: 0.3, // the amplitude of the max and min peaks of the wave image 
                    n_amp_avgrms: 0.125, // the amplitude of the average rms 
                    a_n_rgba_color_amp_peaks: [ 
                        1., 0., 1., 1.
                    ],
                    a_n_rgba_color_amp_avg: [ 
                        0., 1., 1., 1.,
                    ]
                });
                document.body.appendChild(o_state3.o_canvas);

            },()=>{alert('asdfo')});
            await buffer.loaded; // Wait until the buffer is fully loaded
            //md: ![audio1](./localhost/audio3.png)


            //md:  ### load from raw audio data / samples
            let n_seconds = 10;
            let n_khz = 48000;
            let n_samples = n_seconds*n_khz;
            let a_n_f32_audio_sample = new Float32Array(n_samples).fill(0).map((n, n_idx)=>{
                let n_idx_nor = parseInt(n_idx)/n_samples;
                return Math.sin(n_idx_nor*440);
            });

            let o_state4 = await f_o_state_webgl_shader_audio_visualization({
                a_n_f32_audio_sample,
                n_scl_x_canvas : 1000,
                n_scl_y_canvas : 200 , 
                n_amp_peaks: 0.3, // the amplitude of the max and min peaks of the wave image 
                n_amp_avgrms: 0.125, // the amplitude of the average rms 
            });
            document.body.appendChild(o_state4.o_canvas);
            console.log(o_state4.o_canvas)
            globalThis.o_state4 = o_state4
            //md: ![audio1](./localhost/audio4.png)


            //md: ### update the 'view/zoom' into the samples
            //md: if we use a url to a audio file we will have the duration of the audio file 
            //md: with this we then can render from second 5. to second 10. for example. 
            let n_sec_start = 5.; 
            let n_sec_end = 10.;
            o_state2.n_nor_start = n_sec_start/o_state.o_audio_buffer_decoded.duration;
            o_state2.n_nor_end = n_sec_end/o_state.o_audio_buffer_decoded.duration;
            o_state2.f_render();
        
            //md: ### playhead / cursor 
            //md: we can visualize a cursor / playhead by doing this
            o_state2.b_show_playhead = true; 
            o_state2.n_nor_playhead = 0.5 // attention: this is normalized by the current n_nor_start and n_nor_end, and not 'globally' 
            o_state2.f_render();

            //md: ### delete/free webgl resources
            //md: finally we can free up the webgl resources to prevent memory leaks
            globalThis.onclick = function(){
                alert('webgl stuff has been deleted / free"d up')
                o_state.f_delete_webgl_stuff();
                o_state2.f_delete_webgl_stuff();
                o_state3.f_delete_webgl_stuff();
                o_state4.f_delete_webgl_stuff();
            }

            //readme.md:end
        }),
        f_o_test("f_o_proxified", async () => {
            // first we define our data in a state object
            let o_state = f_o_proxified(
                {
                    a_o_person: [{s_name:'hans'}, {s_name: 'gretel'}],
                    b_show_inputs: false,
                    n_test: 1, 
                    n_1: 0.2, 
                    n_2: 0.5,
                    s_test: "test", 
                    b_test: true, 
                    f_test:()=>{return 'test function executed succesfully'},
                    a_o: [{n:1},{n:2}], 
                },
                (a_s_path, v_old, v_new)=>{console.log('before change'); console.log(a_s_path, v_old, v_new)},
                (a_s_path, v_old, v_new)=>{console.log('after change'); console.log(a_s_path, v_old, v_new)}, 
                []
            );
            // array manipulation
            o_state.a_o_person.push({s_name: 'regula'});
            o_state.a_o_person.push({s_name: 'regina'});
            o_state.a_o_person.push({s_name: 'ruedi'});
            o_state.a_o_person.splice(2, 1); // Removes 1 element at index 2

            o_state.a_o_person.pop();// remove last item

            let o_tmp = o_state.a_o_person[2];
            o_tmp.s_name = 'ludolf' // change by reference 

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

        }),
        
        f_o_test("f_flat_frontend_framework", async () => {
            //readme.md:start
            //md: # 'f_flat_frontend_framework' 
            //md:  a minimal / lightweight / small / flat frontend framework

            class O_person{
                constructor(
                    s_name, 
                    n_age, 
                    b_male,
                    a_s_short_name,
                    f_s_full_name
                ){
                    this.s_name = s_name
                    this.n_age = n_age
                    this.b_male = b_male
                    this.a_s_short_name = a_s_short_name
                    this.f_s_full_name = f_s_full_name
                }
            }
            let a_o_person = [
                new O_person(
                    'hans person_idx_0', 
                    10, 
                    true, 
                    ['hansi', 'haenschen', 'haensel'],
                    ()=>{
                        return this.s_name + this.a_s_short_name.join(' ')
                    }
                ),
                new O_person(
                    'greta person_idx_1', 
                    10, 
                    false, 
                    ['gretchen', 'gretel']
                )
            ]
            let f_callback_beforevaluechange = function(a_s_path, v_old, v_new){
                console.log('a_s_path')
                console.log(a_s_path)
                let s_path = a_s_path.join('.');
                if(s_path == 'a_o_person.0.s_name'){
                    console.log('name of first person will be changed')
                }
            }
            let f_callback_aftervaluechange = function(a_s_path, v_old, v_new){
                console.log('a_s_path')
                console.log(a_s_path)
                let s_path = a_s_path.join('.');
                if(s_path == 'a_o_person.0.s_name'){
                    console.log('name of first person has been changed')
                }
            }
            let o_div = document.createElement('div');
            document.body.appendChild(o_div);
            // first we define our data in a state object
            let o_state = f_o_proxified_and_add_listeners(
                {
                    o_person: a_o_person[0],
                    a_o_person, 
                    n_test: 1, 
                    n_1: 0.2, 
                    n_2: 0.5,
                    b_show_inputs: true,
                    s_test: "test", 
                    b_test: true, 
                    f_test:()=>{return 'test function executed succesfully'},
                    a_o: [{n:1},{n:2}], 
                }, 
                f_callback_beforevaluechange,
                f_callback_aftervaluechange, 
                o_div
            )
            
            window.o_state = o_state
            
            let f_sleep_ms = async function(n_ms){
                return new Promise((f_res, f_rej)=>{
                    setTimeout(()=>{
                        return f_res(true)
                    },n_ms)
                })
            }
            // then we build the html 
            let o = await f_o_html_from_o_js(
                {
                    class: "test",
                    f_a_o: ()=>{
                        return [
                            {
                                s_tag: "button",
                                f_s_innerText:()=>`${(o_state.b_show_inputs ? 'hide': 'show')}`,
                                onclick:()=>{
                                    o_state.b_show_inputs = !o_state.b_show_inputs;
                                }, 
                                a_s_prop_sync: 'b_show_inputs',
                            },
                            {
                                f_b_render: ()=>o_state.b_show_inputs,
                                f_a_o:()=> [
                                    {
                                        innerText: "section 1"
                                    },
                                    {
                                        s_tag: "hr"
                                    },      
                                    {
                                        f_a_o: ()=>[
                                            {
                                                innerText: "First person",
                                            },
                                            {
                                                a_s_prop_sync: ['a_o_person.0.s_name'],
                                                s_tag: 'input'
                                                // f_s_innerText: ()=>`name ${a_o_person[0].s_name}`
                                            },
                                            {
                                                f_s_innerText: ()=>`age ${a_o_person[0].n_age}`
                                            },
                                            {
                                                f_s_innerText: ()=>`gender male ${a_o_person[0].b_male}`
                                            }, 
                                            {
                                                s_tag: "hr"
                                            }
                                        ], 
                                        a_s_prop_sync: ['a_o_person.0']
                                    },
                                    {
                                        style: "background:red",
                                        f_a_o: async ()=>{
                                            await f_sleep_ms(111);
                                            return o_state.a_o_person.map(o=>{
                                                
                                                return {
                                                    f_a_o:()=>[
                                                        {
                                                            f_s_innerText: ()=>`name is:${o.s_name} random number: ${Math.random()}`
                                                        },
                                                        {
                                                            f_s_innerText:()=>`age is: ${o.n_age}`
                                                        },
                                                        {
                                                            s_tag: 'hr'
                                                        }
                                                    ]
                                                }
                                            })
                                        }, 
                                        a_s_prop_sync: ["a_o_person"]
                                    },
                                    {
                                        innerText: "section 2   "
                                    },
                                    {
                                        f_a_o: ()=>{
                                            console.log('o_state.a_o_person');
                                            console.log(o_state.a_o_person);
                                            console.log(o_state.a_o_person.map(o=>{return o.s_name}));
                                            return o_state.a_o_person.map(o=>{
                                                return {
                                                    style: `background: rgba(${Math.random()*255},${Math.random()*255},${Math.random()*255},0.5)`,
                                                    f_a_o:()=>[
                                                        {
                                                            f_s_innerText: ()=>`name is:${o.s_name} random number: ${Math.random()}`
                                                        },
                                                        {
                                                            f_s_innerText:()=>`age is: ${o.n_age}`
                                                        },
                                                        {
                                                            s_tag: 'hr'
                                                        }
                                                    ]
                                                }
                                            })
                                        }, 
                                        a_s_prop_sync: ["a_o_person"]
                                    }, 
                                    {
                                        s_tag: "label", 
                                        f_s_innerText: ()=>{
                                            return `number: ${o_state.n_1.toFixed(2)}`
                                        },
                                        a_s_prop_sync: ["n_1"],
                    
                                    },
                                    {
                                        s_tag: "input", 
                                        type: "range", 
                                        min: 0, 
                                        max: 1, 
                                        step: 0.01, 
                                        a_s_prop_sync: ["n_1"],
                                    },
                                    {
                                        s_tag: "input", 
                                        type: "range", 
                                        min: 0, 
                                        max: 1, 
                                        step: 0.01, 
                                        a_s_prop_sync: ["n_1"],
                                    },
                                    {
                                        s_tag: 'input', 
                                        type: "number", 
                                        a_s_prop_sync: ['n_1']
                                    },
                                    {
                                        s_tag: "input", 
                                        type: "range", 
                                        min: 0, 
                                        max: 1, 
                                        step: 0.01, 
                                        a_s_prop_sync: "n_2",
                                    },
                                    {
                                        s_tag: "input", 
                                        type: "range", 
                                        min: 0, 
                                        max: 1, 
                                        step: 0.01, 
                                        a_s_prop_sync: "n_2",
                                    },
                                    {
                                        s_tag: 'input', 
                                        type: "number", 
                                        a_s_prop_sync: 'n_2'
                                    },
                                    { s_tag: "label", innerText: 'name'},
                                    {
                                        s_tag: "input", 
                                        type: "text", 
                                        a_s_prop_sync: ["s_test"],
                                    },
                                    { s_tag: "label",  innerText: 'b_test'},
                                    {
                                        s_tag: "input", 
                                        type: "checkbox", 
                                        a_s_prop_sync: ["b_test"],
                                        style:`background: ${(o_state.b_test) ? 'green' : "red"}`
                                    },
                                    {
                                        s_tag: "label",
                                        a_s_prop_sync: ['s_test', 'b_test'], 
                                        // s_prop_sync: 'b_test',
                                        // s_prop_sync: "n_1",
                    
                                        f_s_innerText: ()=>{
                                            return `string is ${o_state.s_test}, and boolean is ${o_state.b_test}`
                                        }
                                    }, 
                                    {
                                        f_s_innerText: ()=>{
                                            return JSON.stringify(o_state.a_o_person, null, 4);
                                        }, 
                                        a_s_prop_sync: "a_o_person"
                                    }, 
                                    {
                                        f_s_innerText: ()=>{
                                            return JSON.stringify(o_state.a_o_person.map(o=>o?.s_name), null, 4);
                                        }, 
                                        a_s_prop_sync: ["a_o_person"]
                                    }, 
                                    {
                                        s_tag: "input", 
                                        a_s_prop_sync: ['a_o_person.0.s_name']
                                    }
                                ], 
                                a_s_prop_sync: 'b_show_inputs',
                            },
                        
                        ]
                    }
                }, 
                o_state
            )
            o_div.appendChild(o);
            
            o_state.a_o_person.push(
                new O_person('ludolf person_idx_2', 20)
            )
            o_state.a_o_person.push(
                new O_person(
                    'ueli person_idx_3', 
                    10, 
                    false, 
                    ['ul']
                )
            )
            o_state.a_o_person[0].s_name = `${o_state.a_o_person[0].s_name}_new`
            o_state.a_o_person[1].s_name = `${o_state.a_o_person[1].s_name}_new`
            o_state.a_o_person[1] = {s_name: 'person idx_2 lol'}

            // array manipulation
            o_state.a_o_person.push({s_name: 'regula person_idx_4', n_age: 20, b_male:false, a_s_short_name:['regle']});
            o_state.a_o_person.push({s_name: 'regina person_idx_5', n_age: 20, b_male:false, a_s_short_name:['regne']});
            o_state.a_o_person.push({s_name: 'ruedi person_idx_6', n_age: 20, b_male:true, a_s_short_name:['rud']});
            o_state.a_o_person.splice(2, 1); // Removes 1 element at index 2 // removes  lol therefore

            o_state.a_o_person.pop();// remove last item // removes ruadi

            o_state.a_o_person[2].s_name = o_state.a_o_person[2].s_name+'n3wcrypt1cn4m3'
            let o_tmp = o_state.a_o_person[2];
            o_tmp.s_name = o_tmp.s_name+'_n3wcrypt1cn4m3' // change by reference // changes ueli to ludolf
            console.log('pop1')
            o_state.a_o_person.pop()
            window.setTimeout(()=>{

                    console.log('pop2')
                    o_state.a_o_person.pop()
                    console.log('pop3')
                    o_state.a_o_person.pop()
                
                // console.log(o_state.a_o_person)
                // window.setTimeout(()=>{
                //     o_state.a_o_person.pop()
                //     // o_state.a_o_person.pop()
                
                // },1)
            },2111)
        }),
        f_o_test("f_flat_frontend_framework_boolean_toggle", async () => {
            //readme.md:start

            let f_callback_beforevaluechange = function(a_s_path, v_old, v_new){
                console.log('a_s_path')
                console.log(a_s_path)
                let s_path = a_s_path.join('.');
                if(s_path == 'a_o_person.0.s_name'){
                    console.log('name of first person will be changed')
                }
            }
            let f_callback_aftervaluechange = function(a_s_path, v_old, v_new){
                console.log('a_s_path')
                console.log(a_s_path)
                let s_path = a_s_path.join('.');
                if(s_path == 'a_o_person.0.s_name'){
                    console.log('name of first person has been changed')
                }
            }
            let o_div = document.createElement('div');
            document.body.appendChild(o_div);
            // first we define our data in a state object
            let o_state = f_o_proxified_and_add_listeners(
                {
                    b_show: false, 
                    s_text: "hello"
                }, 
                f_callback_beforevaluechange,
                f_callback_aftervaluechange, 
                o_div
            )
            
            window.o_state = o_state
            
            let f_sleep_ms = async function(n_ms){
                return new Promise((f_res, f_rej)=>{
                    setTimeout(()=>{
                        return f_res(true)
                    },n_ms)
                })
            }
            
            // then we build the html 
            let o = await f_o_html_from_o_js(
                {
                    class: "test",
                    f_b_render:()=>o_state.b_show, 
                    f_a_o: ()=>{
                        return [
                            {
                                s_tag: "input", 
                                a_s_prop_sync: "s_text",
                                style: 'background: red',
                            }
                        ]
                    }, 
                    a_s_prop_sync: ['b_show']
                }, 
                o_state
            )
            o_div.appendChild(o);
            setInterval(()=>{

                o_state.b_show = !o_state.b_show; 
            },1000)
        }),

        f_o_test("f_flat_frontend_framework_modules", async () => {
            let o_mod__notifire = await f_o_mod__notifire();
            document.body.appendChild(
                o_mod__notifire.o_div
            )
            
            // Create a new <style> element
            const style = document.createElement('style');
            style.type = 'text/css';
            // Add the CSS to the style element
            style.innerHTML = o_mod__notifire.s_css;
            // Insert the style element into the document head
            document.head.appendChild(style);

            console.log(o_mod__notifire.o_div)
            o_mod__notifire.f_message_error('error :<', 1500)
            o_mod__notifire.f_message_success('success :>', 3000)
            o_mod__notifire.f_message_warning('warning :/', 5000)
            globalThis.o_state = o_mod__notifire.o_state
            globalThis.o_mod__notifire = o_mod__notifire
        })



        


        


    ]



await f_display_test_selection_or_run_selected_test_and_print_summary(a_o_test);