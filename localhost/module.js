import {
    exists as f_b_path_existing, 
    ensureDir as f_ensure_path_folder,
    ensureFile as f_ensure_path_file
} from 'https://deno.land/std@0.205.0/fs/mod.ts'
let f_b_denojs = function(){
    return 'Deno' in window
}

let f_o_html_element__from_s_tag = async function(s_tag){
    
    let o_doc;
    if(f_b_denojs()){

        let o_DOMParser = (await import("https://deno.land/x/deno_dom@v0.1.42/deno-dom-wasm.ts")).DOMParser;
        o_doc = new o_DOMParser().parseFromString(
            '<div></div>',
            'text/html'
        );
    }else{
        o_doc = document;
    }
    return o_doc.createElement(s_tag);

}


let f_o_html__from_s_html = async function(s_html){
    let o_dom_parser = null;
    if(f_b_denojs()){
        o_dom_parser = new ((await import("https://deno.land/x/deno_dom@v0.1.42/deno-dom-wasm.ts")).DOMParser)();
    }else{
        o_dom_parser = new DOMParser();
    }
    return o_dom_parser.parseFromString(s_html, 'text/html')
}

let f_o_html__from_s_url = async function(s_url){
    let o_resp = await fetch(s_url);
    let s_text = await o_resp.text();
    return f_o_html__from_s_html(s_text);
}
let f_s_name_file__from_s_url = function(s_url){
    return s_url.split('/').pop().split('?').shift().split('#').shift()
}

let f_download_video_denojs = async function(s_url, s_prefix_file=''){

    let s_name_file = f_s_name_file_from_s_url(s_url);
    
    let s_path_file = `./download/${s_prefix_file}_${s_name_file}`;
    
    console.log(`s_path_file: ${s_path_file}`);
    console.log(`handling: ${s_url}`);
    let o_stat = false;
    try {
        o_stat = await Deno.stat(s_path_file);
        console.log(`   file already existing`);
    } catch (error) {
        
    }
    if(! o_stat?.isFile){
        console.log(`   downloading ...`);
     
        let o_blob = await f_o_blob_from_s_url(s_url);
    
        const buffer = new Uint8Array(await o_blob.arrayBuffer());
    
        // Write the video to the file
        return Deno.writeFile(s_path_file, buffer);
    }

}

let f_download_file__from_s_url = async function(
    s_url, 
    s_name_orand_path_file = '',
    f_callback = async function(
        n_mb_downloaded, 
        n_mb_per_sec_domwnload_speed, 
        n_mb_to_download_total
    ){
        let s_from_total = ''
        if(n_mb_to_download_total != -1){
            s_from_total = (`/${(n_mb_to_download_total).toFixed(0)}`)
        }
        let s_line = `downloaded ${(n_mb_downloaded).toFixed(0)}${s_from_total}(MB) @ ${n_mb_per_sec_domwnload_speed.toFixed(2)} MB/s`
        if(f_b_denojs()){
            await Deno.stdout.write(new TextEncoder().encode('\x1b[A'));
            await Deno.stdout.write(new TextEncoder().encode(s_line+'\n'));
        }else{
            console.log(s_line)
        }
    }, 
    n_ms_callback_interval = 333, 
){
    s_name_orand_path_file = (s_name_orand_path_file!='') ? s_name_orand_path_file : f_s_name_file__from_s_url(s_url);
    let b_denojs = f_b_denojs();

    let a_n_u8 = await f_a_n_u8__from_s_url_with_download_speed_easy(s_url, f_callback, n_ms_callback_interval);
    
    if(b_denojs){
        // Write the video to the file
        await f_ensure_path_file(s_name_orand_path_file);
        return Deno.writeFile(s_name_orand_path_file, a_n_u8);
    }
    if(!b_denojs){
        let o_blob = new Blob(
            [a_n_u8], 
            // {type:'image/jpeg'}
            // {type:f_s_mime_type_from_s_name_file(s_name_file)}
        );
        let o_blob_url = window.URL.createObjectURL(o_blob);
        // Create an anchor link element and set the blob URL as its href
        const a = await f_o_html_element__from_s_tag('a');
        a.href = o_blob_url;
        a.download = s_name_orand_path_file;
        document.body.appendChild(a);  // This is necessary as Firefox requires the link to be in the DOM for the download to trigger
        // Trigger a click event to start the download
        a.click();
        // Clean up: remove the link from the DOM and revoke the blob URL
        document.body.removeChild(a);
        window.URL.revokeObjectURL(o_blob_url);
    }
    return true
}

let f_a_n_u8__from_s_url_with_download_speed_easy = async function(
    s_url,
    f_callback = function(
        n_mb_downloaded, 
        n_mb_per_sec_domwnload_speed, 
        n_mb_to_download_total
    ){}, 
    n_ms_callback_interval = 333
){
    return f_a_n_u8__from_s_url_with_download_speed_interval(
        s_url, 
        function(
            value_read,
            n_len_a_n_u8__read_merged,
            n_ms__since_last_read,
            n_response_header_content_length, 
            n_bytes_per_second
        ){
            let n_mb_downloaded = n_len_a_n_u8__read_merged/(1*1000*1000);
            let n_mb_per_sec_domwnload_speed = n_bytes_per_second/(1*1000*1000);
            let n_mb_to_download_total = -1;
            if(n_response_header_content_length){
                n_mb_to_download_total = n_response_header_content_length / (1*1000*1000);
            }
            f_callback(
                n_mb_downloaded,
                n_mb_per_sec_domwnload_speed,
                n_mb_to_download_total
            )
        },
        n_ms_callback_interval
    )

}

let f_a_n_u8__from_s_url_with_download_speed = async function(
    s_url,
    f_callback, 
    n_ms_callback_interval
){
    return f_a_n_u8__from_s_url_with_download_speed_interval(
        s_url, 
        function(
            value_read,
            n_len_a_n_u8__read_merged,
            n_ms__since_last_read,
            n_response_header_content_length, 
            n_bytes_per_second
        ){
            let n_mb_to_download = (n_response_header_content_length) ? n_response_header_content_length : 'unknown size' 
            let n_downloaded_nor = (n_response_header_content_length) ? (n_len_a_n_u8__read_merged / n_response_header_content_length)*1000 : 'unknown'
            console.log(`MB/s: ${(n_bytes_per_second/(1*1000*1000)).toFixed(2)}`);
            console.log(`downloaded ${(n_len_a_n_u8__read_merged/(1*1000*1000)).toFixed(2)}MB/${n_mb_to_download} (${n_downloaded_nor}%)`);
        },
        300
    )

}
let f_a_n_u8__from_s_url_with_download_speed_interval = async function(
    s_url, 
    f_callback = (
        value_read,
        n_len_a_n_u8__read_merged,
        n_ms__since_last_read,
        n_response_header_content_length, 
        n_bytes_per_second
    )=>{}, 
    n_ms_callback_interval
){
    let b_denojs = f_b_denojs();
    let n_len_a_n_u8__read_merged__last = 0;
    let n_ms_limit = 100;//updaet every 100 milliseconds
    let n_ms__since_last_read__acc = 0;
    return f_a_n_u8__from_s_url(
        s_url, 
        function(
            value_read,
            n_len_a_n_u8__read_merged,
            n_ms__since_last_read,
            n_response_header_content_length,
        ){
            n_ms__since_last_read__acc+=n_ms__since_last_read;

            if(n_ms__since_last_read__acc >= n_ms_limit){
                let n_bytes_per_millisecond = Math.abs(n_len_a_n_u8__read_merged__last-n_len_a_n_u8__read_merged) / n_ms_limit;
                n_ms__since_last_read__acc = n_ms__since_last_read__acc - n_ms_limit;
                f_callback(
                    ...arguments,
                    n_bytes_per_millisecond*1000
                )
                n_len_a_n_u8__read_merged__last = n_len_a_n_u8__read_merged

            }
        }
    )
}
let f_a_n_u8__from_s_url = async function(
    s_url, 
    f_callback = (
        value_read,
        n_len_a_n_u8__read_merged,
        n_ms__since_last_read,
        n_response_header_content_length
    ) => {}
){
    let o_resp = await fetch(s_url);
    const n_response_header_content_length = o_resp.headers.get('Content-Length');
    return f_a_n_u8__from_o_reader(
        o_resp.body?.getReader(), 
        function(
            value_read, 
            n_len_a_n_u8__read_merged, 
            n_ms__since_last_read
        ){
            f_callback(
                ...arguments,
                n_response_header_content_length
            )
        }
    )
}
let f_a_n_u8__from_o_reader = async function(
    o_readble_stream_reader, 
    f_callback = (
        value_read,
        n_len_a_n_u8__read_merged,
        n_ms__since_last_read
    )=>{}
){

    let n_ms__now = window.performance.now()
    let n_ms__last = window.performance.now() 
    let n_ms__since_last_read = window.performance.now() 

    let a_a_n_u8 = []
    let n_len_a_n_u8__read_merged = 0;
    while(true){
        n_ms__now = window.performance.now()
        n_ms__since_last_read = Math.abs(n_ms__last - n_ms__now);
        const {done: b_done, value} = await o_readble_stream_reader.read();
        if(b_done){
            break;
        }
        n_len_a_n_u8__read_merged += value.length;
        f_callback(
            value, 
            n_len_a_n_u8__read_merged, 
            n_ms__since_last_read
        );
        a_a_n_u8.push(value);
        n_ms__last = n_ms__now;
    }
    let a_n_u8__merged = new Uint8Array(n_len_a_n_u8__read_merged);
    let n_idx = 0;
    for(let a_n_u8 of a_a_n_u8){
        a_n_u8__merged.set(a_n_u8, n_idx);
        n_idx+=a_n_u8.length
    }
    return a_n_u8__merged
}

let f_promise_all_numloop_with_callback = function(
    n_start = 1, 
    n_end = 10, 
    f_callback
){
    return Promise.all(
        new Array(n_end-n_start).fill(0).map(
         async (n_val, n_idx)=>{
            return f_callback(n_idx+1+n_start);
         }
        )
    )
}
let f_monkey_patch_fetch = function(
    f_fetch, 
    b_restore_original_fetch_function = false
){
    
    if(b_restore_original_fetch_function && window.fetch__original__backup_for_f_monkey_patch_fetch){
        window.fetch = window.fetch__original__backup_for_f_monkey_patch_fetch
        return true
    }
    if(window.fetch != window.fetch__original__backup_for_f_monkey_patch_fetch){
        window.fetch__original__backup_for_f_monkey_patch_fetch = window.fetch
    }
    window.fetch = async function(){
        return f_fetch(window.fetch__original__backup_for_f_monkey_patch_fetch, ...arguments)
    }
}
let f_monkey_patch_fetch__easy = function(
    f_a_v_arg
){
    f_monkey_patch_fetch(
        async function(f_fetch_original){
            let a_v_arg = Array.from(arguments).slice(1)
            let a_v_arg__overwritten = f_a_v_arg(a_v_arg);
            if(a_v_arg__overwritten){
                a_v_arg = a_v_arg__overwritten
            }
            return f_fetch_original(
                ...a_v_arg
            )
        }
    );
}

let f_s_hashed = async function(
    s_text, 
    s_hash_function = 'SHA-1'
){
    let a_s_hash_function__allowed = [
        'sha-1', 'sha-256', 'sha-384', 'sha-512'
    ];
    if(!a_s_hash_function__allowed.includes(s_hash_function.toLowerCase())){
        throw Error(`hash function '${s_hash_function}' is not allowed, allowed functions are ${a_s_hash_function__allowed.join(',')}`)
    }
    const a_n_u8 = new TextEncoder().encode(s_text); // encode as (utf-8) Uint8Array
    const o_abuffer = await crypto.subtle.digest(s_hash_function, a_n_u8); // hash the message
    const a_n = Array.from(new Uint8Array(o_abuffer)); // convert buffer to byte array
    const s_hashed = a_n
        .map((b) => b.toString(16).padStart(2, "0"))
        .join(""); // convert bytes to hex string
    return s_hashed;
}

let f_o__from_o_fetch_response = function(o_resp){
    //JSON.stringify((await fetch('https://deno.com'))) returns an empty object
    return {
        status: o_resp.status, 
        statusText: o_resp.statusText, 
        headers: Object.assign(
            {},
            ...Array.from(o_resp.headers.entries()).map(([key, value])=>{return {[key]:value}})
        )
        
    }
}
let f_o_resp__fetch_cached = async function(
    f_fetch_original, 
    s_url,
    o_options = null,
    b_overwrite_cached_file = false, 
    n_ms_diff__overwrite_cached_file = 24*60*60*1000, 
    s_path_folder_cache = './.cache_for_f_a_n_u8__fetch_cached'
){
    if(typeof f_fetch_original != 'function'){
        throw Error('please provide the original fetch function as first argument');

    }
    let s_url_hashed = await f_s_hashed(s_url);

    await f_ensure_path_folder(s_path_folder_cache);
    let s_name_file = s_url_hashed//btoa(s_url);
    let s_path_file = `${s_path_folder_cache}/${s_name_file}`
    let s_path_file_meta_json = `${s_path_folder_cache}/${s_name_file}.json`
    let a_n_u8 = null;
    let b_path_existing = await f_b_path_existing(s_path_file);
    let o_resp_meta = {}
    if(b_path_existing && !b_overwrite_cached_file){
        a_n_u8 = await Deno.readFile(s_path_file);
        let s_json_o_resp_meta = await Deno.readTextFile(s_path_file_meta_json);
        o_resp_meta = JSON.parse(s_json_o_resp_meta)
    }else{
        let o_resp = await f_fetch_original(s_url, o_options);
        o_resp_meta = f_o__from_o_fetch_response(o_resp)
        let s_json_o_resp_meta = JSON.stringify(o_resp_meta)
        a_n_u8 = new Uint8Array(await o_resp.arrayBuffer());
        await Deno.writeFile(s_path_file, a_n_u8);
        await Deno.writeTextFile(s_path_file_meta_json, s_json_o_resp_meta)
    }
    return new Response(
        a_n_u8, 
        o_resp_meta
    )
}

export {
    f_b_denojs, 
    f_o_html_element__from_s_tag, 
    f_o_html__from_s_html,
    f_o_html__from_s_url,
    f_a_n_u8__from_s_url_with_download_speed_easy,
    f_download_file__from_s_url, 
    f_promise_all_numloop_with_callback,
    f_monkey_patch_fetch, 
    f_monkey_patch_fetch__easy, 
    f_o_resp__fetch_cached, 
    f_s_hashed,
    f_o__from_o_fetch_response
}

