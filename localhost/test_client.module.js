
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
    f_s_name_file_cached__readable_ignore_fragment_and_getparams
} from "./module.js"


//readme.md:start
//md: ![handy helpers logo](./logo_banner.png)
//md: # Handy Helpers
//md: this is a collection of useful functions
//readme.md:end

await f_deno_test_all_and_print_summary(
    [

        f_deno_test("f_sleep_ms", async () => {
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
        f_deno_test("Handy snippets", () => {
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
        f_deno_test("f_o_resp__fetch_cached", async () => {
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

        f_deno_test("f_b_deno", () => {
            //readme.md:start
            //md: ## f_b_deno
            //md: check if script is running with https://deno.com/
            f_assert_equals(f_b_denojs(), ("Deno" in window))
            //readme.md:end
        }),
        f_deno_test("f_o_html_element__from_s_tag", async () => {
            //readme.md:start
            //md: ## f_o_html_element__from_s_tag
            //md: returns a html element
            //md: browser:  document.createElement 
            //md: denojs: using /x/deno_dom 
            f_assert_equals((await f_o_html_element__from_s_tag('h1')).tagName, 'H1');
            //readme.md:end
        }),
        f_deno_test("f_o_html__from_s_html", async () => {
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

        f_deno_test("f_download_file__from_s_url", async () => {
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
        f_deno_test("f_a_n_u8__from_s_url_with_download_speed_easy", async () => {
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



        f_deno_test("Overwrite / 'Monkey-Patch' the fetch function", async () => {
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


        f_deno_test("f_o_html__from_s_url", async () => {
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

        f_deno_test("f_s_hashed", async () => {
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




    ]
)


