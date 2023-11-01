<!-- {"s_msg":"this file was automatically generated","s_by":"f_generate_markdown.module.js","s_ts_created":"Wed Nov 01 2023 22:30:35 GMT+0100 (Central European Standard Time)","n_ts_created":1698874235172} -->
![handy helpers logo](./logo_banner.png)
# Handy Helpers
this is a collection of useful functions
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
                './lol/test.jpg'//if denojs  we can pass a path
            )

```
## f_a_n_u8__from_s_url_with_download_speed_easy
get the response body as Uint8array (a_n_u8) from an url, while the download is pending a callback will be executed every nth millisecond
in this callback one can print download speed, if the response header 'content-length' is present and its value is legit
one can also print the download percentage
```javascript

            let a_n_u8 = await f_a_n_u8__from_s_url_with_download_speed_easy(
                'https://www.dwsamplefiles.com/?dl_id=409', 
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

            f_assert_equals(a_n_u8.length, 80118331)
            
```
## f_monkey_patch_fetch__easy
replace the original fetch function, with a custom fetch function, for example to change
```javascript
            var o_data = await (await fetch('https://httpbin.org/headers')).json();
            f_assert_equals(
                o_data.headers['User-Agent'].includes('Deno/'),
                true
            )

            f_monkey_patch_fetch__easy(
                function(o_options_passed_to_fetch){
                    // this function must return an object, 
                    // the second options object wich is used in the fetc function (fetch(url, options))
                    // will get assigned this object, so headers could be overwritten for example
                    return {
                        headers: {
                            'User-Agent': [
                                `Gozilla/${(Math.random()*5+1).toFixed(1)}`, 
                                `(Dingos TN 2.1; Din64; x128; rv:27.0)`, 
                                `Lizzard/20100101 Waterwhale/42.0`
                            ].join(' ')
                        }
                    }
                }
            );

            // test the custom function
            var o_data = await (await fetch('https://httpbin.org/headers')).json();
            f_assert_equals(
                o_data.headers['User-Agent'].includes('Gozilla/'),
                true
                )
                
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
            
```
## f_promise_all_numloop_with_callback
a handy function to iterate over things and download stuff for example
```javascript
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
```