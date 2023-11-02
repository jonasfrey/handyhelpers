
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
    f_promise_all_numloop_with_callback,
    f_o_html__from_s_url,
    f_monkey_patch_fetch,
    f_monkey_patch_fetch__easy,
    f_o_resp__fetch_cached,
    f_s_hashed,
    f_o__from_o_fetch_response
} from "./module.js"

//readme.md:start
//md: ![handy helpers logo](./logo_banner.png)
//md: # Handy Helpers
//md: this is a collection of useful functions
//readme.md:end

await f_deno_test_all_and_print_summary(
    [
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
                './lol/test.jpg'//if denojs  we can pass a path
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



        f_deno_test("f_monkey_patch_fetch__easy", async () => {
            //readme.md:start
            
            //md: ## f_monkey_patch_fetch__easy
            //md: replace the original fetch function, with a custom fetch function, for example to change 
            var o_data = await (await fetch('https://httpbin.org/headers')).json();
            f_assert_equals(
                o_data.headers['User-Agent'].includes('Deno/'),
                true
            )

            f_monkey_patch_fetch__easy(
                function(
                    a_v_arg
                ){
                    // this callback will be called before each fetch function , 
                    // we get the arguments and can overwrite the arguments
                    let s_url = a_v_arg?.[0];
                    if(s_url?.includes('httbin_non_existing_lol.org')){
                        a_v_arg[0] = s_url.replace('httbin_non_existing_lol.org', 'httpbin.org')
                    }
                    // we could ignore the patching on some fetch calls
                    if(s_url.includes('#dont_monkey_patch')){
                        return a_v_arg
                    }
                    return [
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
                    ] 
                }
            );

            var o_data = await (await fetch('https://httpbin.org/headers')).json();
            f_assert_equals(o_data.headers['User-Agent'].includes('Gozilla/'),true)

            var o_data = await (await fetch('https://httbin_non_existing_lol.org/headers')).json();
            f_assert_equals(o_data.headers['User-Agent'].includes('Gozilla/'),true)
            
            var o_data = await (await fetch('https://httpbin.org/headers#dont_monkey_patch')).json();
            f_assert_equals(o_data.headers['User-Agent'].includes('Deno/'),true)

            // restore the default fetch function
            f_monkey_patch_fetch(
                null, 
                true// restore original fetch
            )
            // test the restored function
            var o_data = await (await fetch('https://httpbin.org/headers')).json();
            f_assert_equals(
                o_data.headers['User-Agent'].includes('Deno/'),
                true
            )
            //readme.md:end
        }),


        f_deno_test("f_promise_all_numloop_with_callback", async () => {
            //readme.md:start
            
            //md: ## f_promise_all_numloop_with_callback
            //md: a handy function to iterate over things and download stuff for example
            let a_o_result = await f_promise_all_numloop_with_callback(
                3, 
                4, 
                async function(n_num){
                    let s_url_base = `https://www.tutti.ch`
                    let o_doc = await f_o_html__from_s_url(
                        `https://www.tutti.ch/de/q/suche/Ak6dnaXRhcnJlwJTAwMDA?sorting=newest&page=${n_num}&query=gitarre`
                        );
                    // console.log(Array.from(o_doc.querySelectorAll('[data-testid="link-to-image"]')))
                    let a_s_url = Array.from(o_doc.querySelectorAll('[data-testid="link-to-image"]'))
                        .map(o=>`${s_url_base}${o.getAttribute('href')}`)
                    a_s_url = [a_s_url[0]]
                    return Promise.all(
                        a_s_url.map(async s=>{
                            let o_doc2 = await f_o_html__from_s_url(s);
                            await f_download_file__from_s_url(o_doc2.querySelector('img').getAttribute('src'))
                            return true
                        })
                    )
                }
            )
            return true
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


        f_deno_test("f_o_resp__fetch_cached", async () => {
            //readme.md:start
            
            //md: ## f_o_resp__fetch_cached
            //md: makes a fetch but caches the response meta (status, statusText, headers) and data as a_n_u8

            let o_resp = await f_o_resp__fetch_cached(
                'http://www.worldslongestwebsite.com/', 
                true//overwrite
            );
            // console.log(o_resp)
            let s_text = await o_resp.text()

            let o_resp_from_cache = await f_o_resp__fetch_cached(
                'http://www.worldslongestwebsite.com/', 
            );
            // console.log(o_resp)
            let s_text_from_cache = await o_resp_from_cache.text()

            f_assert_equals(
                s_text,
                s_text_from_cache,
            )
            f_assert_equals(
                JSON.stringify(f_o__from_o_fetch_response(o_resp)),
                JSON.stringify(f_o__from_o_fetch_response(o_resp_from_cache)),
            )
            //readme.md:end
        }),

    ]
)


