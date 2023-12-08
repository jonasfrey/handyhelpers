import { O_cpu_core_stats,
     O_cpu_stats,
     O_cpu_stats__diff,
     O_meminfo,
     O_meminfo_property,
    O_number_value,
    O_nvidia_smi_help_info, 
    O_nvidia_smi_metric, 
    O_nvidia_smi_section
} from "./classes.module.js";

let f_s_number__from_s_input = function(
    s_input
){
    // Regular expression to find all sequences of digits, including decimals
    const regex = /(\d+(\.\d+)?)/g;

    // Extract matches using the regular expression
    const matches = s_input.match(regex);

    // If matches are found, convert them to numbers, otherwise return an empty array
    return matches ? matches.map(Number) : [];
}
let f_o_number_value__from_s_input = function(
    s_input
){
    let a_a_n_factor_a_s_name_unit = [
        [1, ['B', 'Bytes', 'bytes', /*'bytes' this would match all following kilo'bytes', mega'bytes', etc...*/]],
        [Math.pow(1000, 1), ['KB', 'Kb', 'Kilobytes', 'kilobytes']],
        [Math.pow(1024, 1), ['KiB', 'Kib', 'Kibibytes', 'kibibytes']],
        [Math.pow(1000, 2), ['MB', 'Mb', 'Megabytes', 'megabytes']],
        [Math.pow(1024, 2), ['MiB', 'Mib', 'Mebibytes', 'mebibytes']],
        [Math.pow(1000, 3), ['GB', 'Gb', 'Gigabytes', 'gigabytes']],
        [Math.pow(1024, 3), ['GiB', 'Gib', 'Gibibytes', 'gibibytes']],
        [Math.pow(1000, 4), ['TB', 'Tb', 'Terabytes', 'terabytes']],
        [Math.pow(1024, 4), ['TiB', 'Tib', 'Tebibytes', 'tebibytes']],
        [Math.pow(1000, 5), ['PB', 'Pb', 'Petabytes', 'petabytes']],
        [Math.pow(1024, 5), ['PiB', 'Pib', 'Pebibytes', 'pebibytes']],
        [Math.pow(1000, 6), ['EB', 'Eb', 'Exabytes', 'exabytes']],
        [Math.pow(1024, 6), ['EiB', 'Eib', 'Exbibytes', 'exbibytes']],
        [Math.pow(1000, 7), ['ZB', 'Zb', 'Zettabytes', 'zettabytes']],
        [Math.pow(1024, 7), ['ZiB', 'Zib', 'Zebibytes', 'zebibytes']],
        [Math.pow(1000, 8), ['YB', 'Yb', 'Yottabytes', 'yottabytes']],
        [Math.pow(1024, 8), ['YiB', 'Yib', 'Yobibytes', 'yobibytes']]
    ]
    let n_bytes = 0;
    let n_num = parseFloat(f_s_number__from_s_input(s_input));

    for(let a_n_a_s of a_a_n_factor_a_s_name_unit){
        if(a_n_a_s[1].find(s=>{
            return s_input.includes(`${(a_n_a_s[0] == 1) ? ' ': ""}${s}`)
        })){
            // a_s_name_unit = a_n_a_s
            // console.log('asdf')
            // console.log(n_num)
            // console.log(a_n_a_s[0])
            n_bytes = parseInt(n_num*a_n_a_s[0]);
            break
        }
    }
    // console.log(n_bytes)
    if(!n_bytes){
        throw Error(`could not detect unit in input string ${s_input}, available units are ${a_a_n_factor_a_s_name_unit}`)
    }
    let o_number_value = new O_number_value(s_input);
    for(let a_n_a_s of a_a_n_factor_a_s_name_unit){
        let n_val = n_bytes / a_n_a_s[0];
        for(let s of a_n_a_s[1]){
            o_number_value[`n_${s}`] = n_val
        }
    }
    // console.log(o_number_value)
    return o_number_value
    // O_number_value
}
let f_a_a_v__from_a_v__f_b = function(
    a_v, 
    f_b
){
    let a_a_v = [[]];
    let a_v__last = a_a_v.at(-1)
    for(let v of a_v){
        let b = f_b(v);
        if(
            b
        ){
            a_v__last = []
            a_a_v.push(a_v__last)
        }
        a_v__last.push(v)
        
    }
    return a_a_v
}
let f_b_denojs = function(){
    return 'Deno' in window
}

let f_o_nvidia_smi_help_info = async function(){
    let s_command = 'nvidia-smi --help-query-gpu'
    let a_s_arg = s_command.split(' ');
    const o_command = new Deno.Command(
        a_s_arg.shift(),
        {args: a_s_arg}
    );
    const { code, stdout, stderr } = await o_command.output();
    let a_o_nvidia_smi_metric = []
    let a_o_nvidia_smi_section = []
    if(code === 0){
        let s_stdout = new TextDecoder().decode(stdout);
        let a_s_line = s_stdout.split('\n');


        let s_tag_section_start = 'Section about'

        let a_a_s_line = f_a_a_v__from_a_v__f_b(
            a_s_line, 
            (s) =>{return s.startsWith(s_tag_section_start)}
        );
        // console.log(a_a_s_line)

        for(let a_s_line of a_a_s_line){
            let s_text = a_s_line.join('\n');
            let a_s = s_text.split('\n\n');
            console.log(a_s);

            let o_nvidia_smi_section = new O_nvidia_smi_section(
                '', 
                '', 
                []
            );
            for(let s_n_idx in a_s){
                let s = a_s[s_n_idx];
                if(s.trim()==''){
                    continue
                }
                let a_s_part = s.split('\n');
                let s_first = a_s_part?.[0];
                let s_second = a_s_part?.slice(1).join('\n')
                if(parseInt(s_n_idx) == 0){
                    
                    o_nvidia_smi_section.s_title = s_first 
                    o_nvidia_smi_section.s_description  = s_second
                    a_o_nvidia_smi_section.push(o_nvidia_smi_section)
                    continue 
                }
                let o_metric = new O_nvidia_smi_metric(
                    s_first?.replaceAll('"', ' ').trim().split(' or ').map(s=>s.trim()), 
                    s_second
                )
                a_o_nvidia_smi_metric.push(
                    o_metric
                )
                o_nvidia_smi_section.a_o_nvidia_smi_metric.push(o_metric)
            }
        }
        // console.log(a_s_metric[10])
        // return f_res() 
    }

    // console.assert(code === 0);
    // console.assert("hello\n" === new TextDecoder().decode(stdout));
    // console.assert("world\n" === new TextDecoder().decode(stderr));
    // return f_rej(`could not run ${s_command}`)

    return new O_nvidia_smi_help_info(
        a_o_nvidia_smi_metric, 
        a_o_nvidia_smi_section
    )
}
let f_o_nvidia_smi_info = async function(
    a_o_nvidia_smi_metric
){
    if(a_o_nvidia_smi_metric.length == 0){
        throw Error(`a_o_nvidia_smi_metric.length has to be bigger than 0`)
    }
    // show metrics 
    // nvidia-smi --help-query-gpu
    let s_command = `nvidia-smi --format=csv --query-gpu=${a_o_nvidia_smi_metric.map(
        o=>{
            return o.a_s_name[0]
        }
    ).join(',')}`

    // nvidia-smi --format=csv --query-gpu=name,temperature.gpu,memory.used
    // console.log(s_command)
    let a_s_arg = s_command.split(' ');
    const o_command = new Deno.Command(
        a_s_arg.shift(),
        {args: a_s_arg}
    );
    const { code, stdout, stderr } = await o_command.output();
    if(code === 0){
        let s_stdout = new TextDecoder().decode(stdout);
        // console.log(s_stdout)
        let a_s_line = s_stdout.split('\n');
        let s_separator = ','
        let a_s_prop = a_s_line[0].split(s_separator);
        return Object.assign(
            {}, 
            ...a_s_line?.[1].split(s_separator).map((v,n_idx)=>{
                // console.log(a_s_prop)
                return {
                    // [`o_${a_o_nvidia_smi_metric[n_idx].a_s_name[0]}`]: {
                    [a_o_nvidia_smi_metric[n_idx].a_s_name[0]]: {
                        s_value : v, 
                        s_name: a_s_prop[n_idx], 
                        ...f_o_number_value__from_s_input(v)
                    }, 
                }
            })
        )
    }

}

let f_o_meminfo__from_s_proc_meminfo = function(
    s_proc_meminfo 
){
    let o_meminfo = new O_meminfo();
    let a_s = s_proc_meminfo.split('\n').filter(v=>v.trim()!='')
    // console.log(a_s)
    let n_bytes_mem_total = null;
    let o_s_unit_n_factor = {
        'b': 1, 
        'kb': 1024, 
        'mb': 1024*1024,
        'gb': 1024*1024*1024,
        'tb': 1024*1024*1024*1024,
    };
    for(let s of a_s){
        let a_s_part = s.split(':');
        let s_prop = a_s_part.shift().replaceAll('(', "_").replaceAll(")", '_');
        let s_num_and_unit = a_s_part.join(':').trim();
        a_s_part = s_num_and_unit.split(' ');
        let n_num = parseFloat(a_s_part.shift());
        let s_unit = a_s_part.join(' ').trim();


        let n_factor = o_s_unit_n_factor[s_unit.toLowerCase()];

        // if(!n_factor){
        //     // throw Error(`could not read unit in meminfo  line ${s}`);
        // }
        
        
        let o_meminfo_property = o_meminfo[`o_meminfo_property_${s_prop}`]; 
        
        if(!o_meminfo_property){
            o_meminfo_property = new O_meminfo_property(
                ''
                )
                o_meminfo[`o_meminfo_property_${s_prop}`] = o_meminfo_property
            }
        o_meminfo_property.n = n_num
        if(n_factor){ 
                       
            o_meminfo_property.n_bytes = parseInt(n_num * n_factor);
            if(s_prop == 'MemTotal'){
                n_bytes_mem_total = o_meminfo_property.n_bytes
            }
            if(n_bytes_mem_total){
                o_meminfo_property.n_nor_by_mem_total = o_meminfo_property.n_bytes / n_bytes_mem_total
            }
            o_meminfo_property.n_kilobytes = o_meminfo_property.n_bytes / o_s_unit_n_factor.kb
            o_meminfo_property.n_megabytes = o_meminfo_property.n_bytes / o_s_unit_n_factor.mb
            o_meminfo_property.n_gigabytes = o_meminfo_property.n_bytes / o_s_unit_n_factor.gb
            o_meminfo_property.n_terrabytes = o_meminfo_property.n_bytes / o_s_unit_n_factor.tb
        }

    }
    o_meminfo.o_meminfo_property_memory_used_calculated.n_bytes = o_meminfo.o_meminfo_property_MemTotal.n_bytes - o_meminfo.o_meminfo_property_MemFree.n_bytes;
    o_meminfo.o_meminfo_property_memory_used_calculated.n_nor_by_mem_total = o_meminfo.o_meminfo_property_memory_used_calculated.n_bytes / n_bytes_mem_total
    o_meminfo.o_meminfo_property_memory_used_calculated.n_kilobytes = o_meminfo.o_meminfo_property_memory_used_calculated.n_bytes / o_s_unit_n_factor.kb
    o_meminfo.o_meminfo_property_memory_used_calculated.n_megabytes = o_meminfo.o_meminfo_property_memory_used_calculated.n_bytes / o_s_unit_n_factor.mb
    o_meminfo.o_meminfo_property_memory_used_calculated.n_gigabytes = o_meminfo.o_meminfo_property_memory_used_calculated.n_bytes / o_s_unit_n_factor.gb
    o_meminfo.o_meminfo_property_memory_used_calculated.n_terrabytes = o_meminfo.o_meminfo_property_memory_used_calculated.n_bytes / o_s_unit_n_factor.tb

    return o_meminfo
}
let f_o_meminfo = async function(){
    let s_path = '/proc/meminfo'
    let s = '';
    let n = window.performance.now();
    try {
        s = await Deno.readTextFile(s_path);
    } catch (error) {
        throw Error(`could not read text file '${s_path}'`)
    }
    return f_o_meminfo__from_s_proc_meminfo(
        s
    )
}

let f_s_type_mime__from_s_extension = function(
    s_extension
){
    const o_s_extension_s_mime_type = {
        'txt': 'text/plain',
        'html': 'text/html',
        'js': 'text/javascript',
        'css': 'text/css',
        'json': 'application/json',
        'jpg': 'image/jpeg',
        'mp3': 'audio/mpeg',
        'mp4': 'video/mp4',
        'pdf': 'application/pdf',
        'zip': 'application/zip',
        'xml': 'application/xml',
        'webm': 'video/webm',
        'ogg': 'audio/ogg',
        'apng': 'image/apng',//: Animated Portable Network Graphics (APNG)
        'avif': 'image/avif',//: AV1 Image File Format (AVIF)
        'gif': 'image/gif',//: Graphics Interchange Format (GIF)
        'jpeg': 'image/jpeg',//: Joint Photographic Expert Group image (JPEG)
        'png': 'image/png',//: Portable Network Graphics (PNG)
        'svg': 'image/svg+xml',//: Scalable Vector Graphics (SVG)
        'webp': 'image/webp',//: Web Picture format (WEBP), 
        'wasm': 'application/wasm'
        // Add more mappings as needed
    };
    s_extension = s_extension.split('.').pop()
    return o_s_extension_s_mime_type[s_extension] || 'application/octet-stream'; 
}
let f_download_text_file = async function(
    s_text, 
    s_name_file = 'file_from_f_download_text_file.txt'
){
    // Create a new Blob containing the text data
    const blob = new Blob([s_text], { type: 'text/plain' });

    // Create a URL for the Blob
    const blobUrl = URL.createObjectURL(blob);

    return f_download_file__from_s_url(
        blobUrl, 
        s_name_file
    )
}
let f_s_type__from_typed_array = function(
    v, 
    b_throw_error = false, 
    o_s_type_rust_s_type_custom = {
         'u8':'u8',
         'u16':'u16',
         'u32':'u32',
         'u64':'u64',
         'i8':'i8',
         'i16':'i16',
         'i32':'i32',
         'i64':'i64',
         'f32':'f32',
         'f64':'f64',
    }
) {
    let s_name = v.constructor.name;
    if(s_name == 'Function'){
        s_name = v.name;
    }
    let o_s_name_typed_array_s_short = {

        [Uint8Array.prototype.constructor.name] : o_s_type_rust_s_type_custom.u8,
        [Uint8ClampedArray.prototype.constructor.name] : o_s_type_rust_s_type_custom.u8,
        [Uint16Array.prototype.constructor.name] : o_s_type_rust_s_type_custom.u16,
        [Uint32Array.prototype.constructor.name] : o_s_type_rust_s_type_custom.u32,
        [BigUint64Array.prototype.constructor.name] : o_s_type_rust_s_type_custom.u64,
        [Int8Array.prototype.constructor.name] : o_s_type_rust_s_type_custom.i8,
        [Int16Array.prototype.constructor.name] : o_s_type_rust_s_type_custom.i16,
        [Int32Array.prototype.constructor.name] : o_s_type_rust_s_type_custom.i32,
        [BigInt64Array.prototype.constructor.name] : o_s_type_rust_s_type_custom.i64,
        [Float32Array.prototype.constructor.name] : o_s_type_rust_s_type_custom.f32,
        [Float64Array.prototype.constructor.name]: o_s_type_rust_s_type_custom.f64,
    }
    let s_short = o_s_name_typed_array_s_short[s_name];
    if(!s_short && b_throw_error){
        throw Error(`value is not a typed array or a function for a typed array, it must be one of ${Object.keys(o_s_name_typed_array_s_short).join(',')}`)
    }
    s_short = (s_short) ?s_short: 'unknown';
    return s_short
}
let f_n_conf_clk_tck = async function(){
    return new Promise(
        async (f_res, f_rej)=>{
            let s_command = 'getconf CLK_TCK'
            let a_s_arg = s_command.split(' ');
            const o_command = new Deno.Command(
                a_s_arg.shift(),
                {args: a_s_arg}
            );
            const { code, stdout, stderr } = await o_command.output();
            let s_stdout = new TextDecoder().decode(stdout)
            let s_stderr = new TextDecoder().decode(stderr)
            let n_code= code;
            if(n_code === 0){
                return f_res(parseInt(s_stdout))
            }

            // console.assert(code === 0);
            // console.assert("hello\n" === new TextDecoder().decode(stdout));
            // console.assert("world\n" === new TextDecoder().decode(stderr));
            return f_rej(`could not run ${s_command}, stdout: ${s_stdout}, stderr:${s_stderr}, code:${n_code}`)
        }

    )
}
let f_s_lscpu = async function(){
    return new Promise(
        async (f_res, f_rej)=>{
            let s_command = 'lscpu'
            let a_s_arg = s_command.split(' ');
            const o_command = new Deno.Command(
                a_s_arg.shift(),
                {args: a_s_arg}
            );
            const { code, stdout, stderr } = await o_command.output();
            if(code === 0){
                return f_res(new TextDecoder().decode(stdout))
            }

            // console.assert(code === 0);
            // console.assert("hello\n" === new TextDecoder().decode(stdout));
            // console.assert("world\n" === new TextDecoder().decode(stderr));
            return f_rej(`could not run ${s_command}`)
        }

    )
}
let a_o_cpu_stats = null;
let n_len_max_a_o_cpu_stats = null;
let f_o_cpu_stats__diff = async function(
    n_len_max_a_o_cpu_stats
){
    let o_cpu_stats__old = null;
    if(a_o_cpu_stats == null){

        if(!n_len_max_a_o_cpu_stats){
            // 30 seconds history of cpu percentage every frame if 60 fps
            n_len_max_a_o_cpu_stats = parseInt((30*1000)/(1000/60))
        }
        a_o_cpu_stats = new Array(
            n_len_max_a_o_cpu_stats
        ).fill(0).map(v=>null)
        o_cpu_stats__old = await f_o_cpu_stats()
        a_o_cpu_stats[0] = o_cpu_stats__old
        // we have to wait a small amount of time to get a usefull cpu measurement
        await f_sleep_ms(1000/60)
    }

    let o_cpu_stats__new = await f_o_cpu_stats()
    // shift every element one to the end
    for(let n_idx in a_o_cpu_stats){
        let n_idx_reverse = (a_o_cpu_stats.length-1)-n_idx;
        // console.log(n_idx_reverse)
        if(n_idx_reverse == 0){
            break
        }
        let v = a_o_cpu_stats[n_idx_reverse];
        let v_before = a_o_cpu_stats[n_idx_reverse-1];
        if(v_before == null){
            continue
        }
        a_o_cpu_stats[n_idx_reverse] = v_before
    }
    a_o_cpu_stats[0] = o_cpu_stats__new
    return new O_cpu_stats__diff(
        a_o_cpu_stats[1], 
        o_cpu_stats__new
    )
}
let n_conf_clk_tck_cached = null;
let f_o_cpu_stats__from_s_proc_stat = async function(
    s_proc_stat, 
    n_conf_clk_tck
){
    if(!n_conf_clk_tck && n_conf_clk_tck_cached == null){
        n_conf_clk_tck = await f_n_conf_clk_tck()
        n_conf_clk_tck_cached = n_conf_clk_tck
    }
    n_conf_clk_tck = n_conf_clk_tck_cached
    // console.log(s_proc_stat.split('\n'));
    let a_s = s_proc_stat.split('\n');
    let a_s_cpu = a_s.filter(s=>s.startsWith('cpu'));
    let o_cpu_core_stats__total = null;
    let o_cpu_stats = new O_cpu_stats(
        s_proc_stat,
        n_conf_clk_tck,
        a_s.filter(s=>s.startsWith('ctxt')).map(s=>parseInt(s.split(' ').pop())),
        a_s.filter(s=>s.startsWith('btime')).map(s=>parseInt(s.split(' ').pop())),
        a_s.filter(s=>s.startsWith('processes')).map(s=>parseInt(s.split(' ').pop())),
        a_s.filter(s=>s.startsWith('procs_running')).map(s=>parseInt(s.split(' ').pop())),
        a_s.filter(s=>s.startsWith('procs_blocked')).map(s=>parseInt(s.split(' ').pop())),
        a_s.filter(s=>s.startsWith('softirq')).map(s=>parseInt(s.split(' ').pop())),

        [],
        o_cpu_core_stats__total
    )
    o_cpu_stats.a_o_cpu_core_stats = a_s_cpu.map(
        s=>{

            let a_s = s.split(' ').filter(v=>v.trim()!='');
            // console.log(a_s.slice(1).map(s=>parseInt(s)))
            let o = new O_cpu_core_stats(
                s,
                o_cpu_stats.n_conf_clk_tck,
                o_cpu_stats.n_ts_ms,
                o_cpu_stats.n_ms_window_performance_now,
                ...a_s.slice(1)
                .map(
                    s=>(parseFloat(s)/n_conf_clk_tck)*1000
                )
            )
            if(! /\d/.test(a_s[0])){
                o_cpu_stats.o_cpu_core_stats__total = o;
                return false
            }
            return o
        }
    ).filter(v=>v)

    return o_cpu_stats
}
let f_o_cpu_stats = async function(
){
    let s_path = '/proc/stat'
    let s_proc_stat = '';
    let n = window.performance.now();
    try {
        s_proc_stat = await Deno.readTextFile(s_path);
    } catch (error) {
        throw Error(`could not read text file '${s_path}'`)
    }
    // console.log(window.performance.now()-n)
    // console.log(s_proc_stat.split('\n'));
    return f_o_cpu_stats__from_s_proc_stat(
        s_proc_stat
    )

}
let f_s_n_beautified = function(
    v, 
    s_separator = "'"
){
    let s = v.toString();
    return new Array(s.length)
        .fill(0)
        .map((s_char, n_idx)=>{
 
            return [
                s[s.length-1-n_idx],
                ((n_idx+1) % 3 == 0 && n_idx<s.length-1) ? s_separator : false
            ].filter(v=>v)
        })
        .flat(2)
        .reverse()
        .join('');
}
let o_mod_fs = null;
if(f_b_denojs()){
    o_mod_fs = await import("https://deno.land/std@0.205.0/fs/mod.ts");
}
let f_sleep_ms = async function(n_ms){
    return new Promise(
        (f_res)=>{
            return setTimeout(() => {
                    return f_res(n_ms);
            }, n_ms);
        }
    )
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
    
    console.log('');//write a empty line because cursor will get reset in with_download_speed
    let a_n_u8 = await f_a_n_u8__from_s_url_with_download_speed_easy(s_url, f_callback, n_ms_callback_interval);
    
    if(b_denojs){
        // Write the video to the file
        await o_mod_fs.ensureFile(s_name_orand_path_file);
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




let f_s_name_file_cached__readable_ignore_fragment_and_getparams = async function(
    s_url, 
){
    s_url = s_url.split('?').shift();
    s_url = s_url.split('#').shift();
    s_url = s_url.replaceAll('/', '__')
    s_url = s_url.replaceAll('.', '__')
    s_url = s_url.split('.')
    s_url = s_url.replaceAll(':', '__')
    return s_url
}
let f_s_name_file_cached__hashed = async function(
    s_url, 
){
    return f_s_hashed(s_url);
}
let f_s_name_file_cached__base64encoded = async function(
    s_url, 
){
    return btoa(s_url);
}
let f_o_resp__fetch_cached = async function(
    f_fetch, 
    a_v_arg__for_f_fetch,
    b_overwrite_cached_file = false, 
    n_ms_diff__overwrite_cached_file = 24*60*60*1000, 
    f_s_name_file_cached = f_s_name_file_cached__hashed,
    s_path_folder_cache = './.cache_for_f_a_n_u8__fetch_cached'
){
    if(typeof f_fetch != 'function'){
        throw Error('please provide the (prefered) fetch function as first argument');
    }
    await o_mod_fs.ensureDir(s_path_folder_cache);
    let s_name_file = await f_s_name_file_cached(
        a_v_arg__for_f_fetch[0] 
    ) 
    let s_path_file = `${s_path_folder_cache}/${s_name_file}`
    let s_path_file_meta_json = `${s_path_folder_cache}/${s_name_file}.json`
    let a_n_u8 = null;
    let b_path_existing = await o_mod_fs.exists(s_path_file);

    let n_ts_ms__created = new Date().getTime();
    if(b_path_existing && !b_overwrite_cached_file){
        let o_stat = await Deno.stat(s_path_file);
        n_ts_ms__created = new Date(o_stat.birthtime).getTime();
        let n_ts_ms_diff = new Date().getTime() - n_ts_ms__created;
        if(n_ts_ms_diff > n_ms_diff__overwrite_cached_file){
            b_overwrite_cached_file = true
        }
    }
    let o_resp_meta = {}
    let b_from_disk = false;
    if(b_path_existing && !b_overwrite_cached_file){
        a_n_u8 = await Deno.readFile(s_path_file);
        let s_json_o_resp_meta = await Deno.readTextFile(s_path_file_meta_json);
        o_resp_meta = JSON.parse(s_json_o_resp_meta)
        b_from_disk = true;
    }else{
        let o_resp = await f_fetch(
            ...a_v_arg__for_f_fetch
        );
        o_resp_meta = f_o__from_o_fetch_response(o_resp)
        // Object.assign(o_resp_meta, {n_ts_ms__created_on_disk:n_ts_ms__created})// we cannot for sure know that n_ts_ms__created is also the ts thath the file gets
        let s_json_o_resp_meta = JSON.stringify(o_resp_meta)
        a_n_u8 = new Uint8Array(await o_resp.arrayBuffer());
        await Deno.writeFile(s_path_file, a_n_u8);
        await Deno.writeTextFile(s_path_file_meta_json, s_json_o_resp_meta)
    }
    let o_resp = new Response(
        a_n_u8, 
        o_resp_meta
    )
    if(b_from_disk){
        Object.assign(o_resp, {b_from_disk:true})
    }

    return o_resp

}
let f_n_idx_ensured_inside_array = function(
    n_idx,
    n_len, 
){
    if(n_idx<0){
        n_idx = (n_len + (n_idx % n_len))
    }
    return n_idx % n_len
}
let f_move_in_array = function(a_v, n_idx_from, n_idx_to){

    let n_len = a_v.length; 
    n_idx_from = f_n_idx_ensured_inside_array(n_idx_from, n_len);
    n_idx_to = f_n_idx_ensured_inside_array(n_idx_to, n_len);

    // Remove the element from the array
    const v = a_v.splice(n_idx_from, 1)[0];
    // Place the v at the new index
    a_v.splice(n_idx_to, 0, v);
    return a_v; // This is optional; the array is modified in place
}
let f_swap_in_array = function(a_v, n_idx_1, n_idx_2){
    let n_len = a_v.length;
    n_idx_1 = f_n_idx_ensured_inside_array(n_idx_1, n_len);
    n_idx_2 = f_n_idx_ensured_inside_array(n_idx_2, n_len);
    let v_1 = a_v[n_idx_1];
    let v_2 = a_v[n_idx_2];
    a_v[n_idx_1] = v_2;
    a_v[n_idx_2] = v_1
    return a_v;
}
let f_move_v_in_array = function(
    a_v, 
    v,
    n_idx_diff
){
    let n_idx_from = a_v.indexOf(v);
    let n_idx_to = n_idx_from + n_idx_diff;
    return f_move_in_array(a_v, n_idx_from, n_idx_to); 
}
let f_swap_v_in_array = function(
    a_v,
    v_1,
    v_2,
){
    let n_idx_1 = a_v.indexOf(v_1);
    let n_idx_2 = a_v.indexOf(v_2);
    return f_swap_in_array(a_v, n_idx_1, n_idx_2); 
}

let f_a_v__recursive = function(
    n_y,
    n_x, 
    f_v, 
    n_idx_y
){
    if(n_y == 1){
        return new Array(n_x).fill(0).map((v,n_idx)=>f_v(n_idx,n_idx_y))
    }else{
        return new Array(n_x).fill(0).map((v,n_idx)=>f_a_v__recursive(n_y-1,n_x,f_v,n_idx))
    }
}

let f_a_a_v__combinations = function(
    a_v
){
    let a_a_v = []
    let n_possible_combos = Math.pow(2, a_v.length)-1;
    for(let n= 1; n<= n_possible_combos; n+=1){
        // console.log(n)
        a_a_v.push(
            a_v.filter((v, n_idx)=>{
                return (n & (1 << n_idx))
            })
        )
    }
    return a_a_v
}


let f_v_s__between = function(
    s,
    s_start,
    s_end
) {
    let n_idx_start = s.indexOf(s_start);
    let n_idx_end = s.indexOf(s_end, n_idx_start + s_start.length);

    if (n_idx_start === -1 || n_idx_end === -1) {
        return null; // One or both of the strings were not found
    }
    // Extract the substring, adding the length of the start string to the start index
    return s.substring(n_idx_start + s_start.length, n_idx_end);
}


function f_o_canvas_from_vertex_shader(
    s_code_shader = '', 
    n_scl_x = 100,
    n_scl_y = 100,
) {
    // Create the canvas element
    var canvas = document.createElement('canvas');
    canvas.width = n_scl_x;
    canvas.height = n_scl_y;
    document.body.appendChild(canvas);

    // Initialize the WebGL context
    var gl = canvas.getContext('webgl');
    if (!gl) {
        console.error("WebGL is not supported or disabled in this browser.");
        return;
    }

    // Vertex Shader (basic setup for drawing)
// Vertex Shader Code
var vShaderCode = `
attribute vec4 a_position;
varying vec2 o_trn_pixel_nor;

void main() {
    gl_Position = a_position;
    o_trn_pixel_nor = (a_position.xy + 1.0) / 2.0; // Convert from clip space to texture coordinates
}`;
    var vShader = gl.createShader(gl.VERTEX_SHADER);
    gl.shaderSource(vShader, vShaderCode);
    gl.compileShader(vShader);
    if (!gl.getShaderParameter(vShader, gl.COMPILE_STATUS)) {
        console.error('ERROR compiling vertex shader!', gl.getShaderInfoLog(vShader));
        gl.deleteShader(vShader);
        return;
    }

    // Fragment Shader
    var fShader = gl.createShader(gl.FRAGMENT_SHADER);
    gl.shaderSource(fShader, s_code_shader);
    gl.compileShader(fShader);
    if (!gl.getShaderParameter(fShader, gl.COMPILE_STATUS)) {
        console.error('ERROR compiling fragment shader!', gl.getShaderInfoLog(fShader));
        gl.deleteShader(fShader);
        return;
    }

    // Create and use the program
    var program = gl.createProgram();
    gl.attachShader(program, vShader);
    gl.attachShader(program, fShader);
    gl.linkProgram(program);
    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
        console.error('ERROR linking program!', gl.getProgramInfoLog(program));
        gl.deleteProgram(program);
        return;
    }
    gl.useProgram(program);

    // Set up uniforms
    gl.uniform1f(gl.getUniformLocation(program, 'n_t'), 0);
    gl.uniform1f(gl.getUniformLocation(program, 'n_scl_x'), n_scl_x);
    gl.uniform1f(gl.getUniformLocation(program, 'n_scl_y'), n_scl_y);

    // Additional setup for drawing (e.g., buffers, attributes)

    canvas.f_render = function(n_t){

        gl.uniform1f(gl.getUniformLocation(program, 'n_t'), n_t);
        // gl.uniform1f(gl.getUniformLocation(program, 'n_scl_x'), n_scl_x);
        // gl.uniform1f(gl.getUniformLocation(program, 'n_scl_y'), n_scl_y);

        var positionBuffer = gl.createBuffer();
        gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);

        // Set the positions for a square.
        var positions = [
            -1.0, -1.0,
            1.0, -1.0,
            -1.0,  1.0,
            1.0,  1.0,
        ];
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(positions), gl.STATIC_DRAW);

        // Tell WebGL how to pull out the positions from the position buffer into the vertexPosition attribute
        var positionAttributeLocation = gl.getAttribLocation(program, "a_position");
        gl.enableVertexAttribArray(positionAttributeLocation);
        gl.vertexAttribPointer(positionAttributeLocation, 2, gl.FLOAT, false, 0, 0);

        // Draw the square
        gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);


    }
    return canvas;
}

let f_s_uuidv4 = function() {
    if(!('crypto' in window)){
        console.warn('the crypto global property is not available in this JS runtime, https://developer.mozilla.org/en-US/docs/Web/API/crypto_property')

        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'
        .replace(/[xy]/g, function (c) {
            const r = Math.random() * 16 | 0, 
                v = c == 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    }

    return crypto.randomUUID()
}
let f_b_uuid = function(s){
    // let o_regexp = new RegExp(/^[0-9a-f]{8}-[0-9a-f]{4}-[0-5][0-9a-f]{3}-[089ab][0-9a-f]{3}-[0-9a-f]{12}$/i);
    let o_regexp = new RegExp(/^[0-9a-f]{8}-[0-9a-f]{4}-[0-5][0-9a-f]{3}-[089ab][0-9a-f]{3}-[0-9a-f]{12}$/i);
    return o_regexp.test(s)
}

export {
    f_b_uuid,
    f_s_uuidv4,
    f_o_canvas_from_vertex_shader,
    f_v_s__between,
    f_o_cpu_stats,
    f_s_n_beautified,
    f_a_v__recursive, 
    f_b_denojs, 
    f_o_html_element__from_s_tag, 
    f_o_html__from_s_html,
    f_o_html__from_s_url,
    f_a_n_u8__from_s_url_with_download_speed_easy,
    f_download_file__from_s_url, 
    f_o_resp__fetch_cached, 
    f_s_hashed,
    f_o__from_o_fetch_response, 
    f_s_name_file_cached__readable_ignore_fragment_and_getparams,
    f_s_name_file_cached__hashed,
    f_s_name_file_cached__base64encoded,
    f_sleep_ms, 
    f_move_in_array, 
    f_swap_in_array,
    f_n_idx_ensured_inside_array, 
    f_move_v_in_array, 
    f_swap_v_in_array, 
    f_a_a_v__combinations, 
    a_o_cpu_stats, 
    f_o_cpu_stats__diff, 
    f_s_type__from_typed_array, 
    f_download_text_file, 
    f_s_type_mime__from_s_extension, 
    f_o_meminfo, 
    f_o_nvidia_smi_help_info, 
    f_o_nvidia_smi_info, 
    f_o_number_value__from_s_input
}

