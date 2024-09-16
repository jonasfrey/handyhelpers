import { O_cpu_core_stats,
     O_cpu_stats,
     O_cpu_stats__diff,
     O_meminfo,
     O_meminfo_property,
    O_number_value,
    O_nvidia_smi_help_info, 
    O_nvidia_smi_metric, 
    O_nvidia_smi_section,
    O_shader_error,
    O_shader_info,
    O_webgl_program,
    O_webgl_uniform_location
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

let f_o_number_value__from_s_input = function(s_input) {
    // Remove extraneous characters like square brackets and trim whitespace
    s_input = s_input.replace(/[\[\]]/g, '').trim();

    // List of known units with their respective base multipliers
    let a_o = [
        {
            n_pow: Math.pow(10, -3),
            a_a_s_name_unit_possible_s_name_unit: [
                [['mW', 'MW', 'Milliwatts', 'MilliWatts',], 'Watt',],
                [['mV', 'MV', 'Millivolts', 'MilliVolts',], 'Volt',],
                [['mm', 'MM', 'Millimeters', 'MilliMeters',], 'Meter',],
                [['ml', 'ML', 'Milliliters', 'MilliLiters'], 'Liter',]
            ]
        },
        {
            n_pow: Math.pow(10, -2),
            a_a_s_name_unit_possible_s_name_unit: [
                [['cl', 'CL', 'Centiliters', 'CentiLiters',],'Liter',],
                [['cm', 'CM', 'Centimeters', 'CentiMeters', ],'Meter',],
                [['%', 'Percent', ],'Percent'],
            ]
        },
        {
            n_pow: Math.pow(10, -1),
            a_a_s_name_unit_possible_s_name_unit: [
                [['dm', 'DM', 'Decimeters', 'DeciMeters',],'Meter',],
                [['dl', 'DL', 'Deciliters', 'DeciLiters'],'Liter'],
            ]
        },
        {
            n_pow: Math.pow(10, 0),
            a_a_s_name_unit_possible_s_name_unit: [
                [['W', 'w', 'Watts', 'Watt',], 'Watt',],
                [['V', 'v', 'Volts', 'Volt',], 'Volt',],
                [['C', 'c', 'Celsius', '°C',], 'Celsius',],
                [['F', 'f', 'Fahrenheit', '°F',], 'Fahrenheit',],
                [['K', 'k', 'Kelvin',], 'Kelvin',],
                [['M', 'm', 'Meters', ], 'Meter',],
                [['Hz', 'HZ', 'hZ', 'Hertz'], 'Hertz',],
                [['RPM', 'rpm', 'rpm', 'revolutions per minute'], 'Revolutions per minute',],
            ]
        },
        {
            n_pow: Math.pow(10, 1),
            a_a_s_name_unit_possible_s_name_unit: [
                [['daL', 'DAL', 'Decaliters', 'DecaLiters',], 'Liter',],
                [['daM', 'DAM', 'Decameters', 'DecaMeters'], 'Meter',],
            ]
        },
        {
            n_pow: Math.pow(10, 2),
            a_a_s_name_unit_possible_s_name_unit: [
                [['hL', 'HL', 'Hectoliters', 'HectoLiters',], 'Liter',],
                [['hM', 'HM', 'Hectometers', 'HectoMeters',], 'Meter', ],
            ]
        },
        {
            n_pow: Math.pow(10, 3),
            a_a_s_name_unit_possible_s_name_unit: [
                [['kHz', 'KHz', 'KHZ', 'Kilohertz', 'KiloHertz',], 'Hertz',],
                [['km', 'KM', 'Kilometers', 'KiloMeters',], 'Meter',],
                [['kL', 'KL', 'Kiloliters', 'KiloLiters'], 'Liter',],
            ]
        },
        {
            n_pow: Math.pow(1000, 1), // 10^3 bytes (Kilobytes)
            a_a_s_name_unit_possible_s_name_unit: [
                [['kB', 'KB', 'Kilobytes', 'KiloBytes'], 'Byte']
            ]
        },
        {
            n_pow: Math.pow(1000, 1) * 8, // 10^3 bits (Kilobits)
            a_a_s_name_unit_possible_s_name_unit: [
                [['Kb', 'kB', 'Kilobits', 'KiloBits'], 'Byte']
            ]
        },
        {
            n_pow: Math.pow(1024, 1), // 1024^1 bytes (Kibibytes)
            a_a_s_name_unit_possible_s_name_unit: [
                [['KiB', 'KIB', 'Kibibytes', 'KibiBytes'], 'Byte']
            ]
        },
        {
            n_pow: Math.pow(1024, 1) * 8, // 1024^1 bits (Kibibits)
            a_a_s_name_unit_possible_s_name_unit: [
                [['Kib', 'KIB', 'Kibibits', 'KibiBits'], 'Byte']
            ]
        },
        {
            n_pow: Math.pow(1000, 2), // 10^6 bytes (Megabytes)
            a_a_s_name_unit_possible_s_name_unit: [
                [['MB', 'Mb', 'Megabytes', 'MegaBytes'], 'Byte']
            ]
        },
        {
            n_pow: Math.pow(1000, 2) * 8, // 10^6 bits (Megabits)
            a_a_s_name_unit_possible_s_name_unit: [
                [['Mb', 'MB', 'Megabits', 'MegaBits'], 'Byte']
            ]
        },
        {
            n_pow: Math.pow(1024, 2), // 1024^2 bytes (Mebibytes)
            a_a_s_name_unit_possible_s_name_unit: [
                [['MiB', 'MIB', 'Mebibytes', 'MebiBytes'], 'Byte']
            ]
        },
        {
            n_pow: Math.pow(1024, 2) * 8, // 1024^2 bits (Mebibits)
            a_a_s_name_unit_possible_s_name_unit: [
                [['Mib', 'MIB', 'Mebibits', 'MebiBits'], 'Byte']
            ]
        },
        {
            n_pow: Math.pow(1000, 3), // 10^9 bytes (Gigabytes)
            a_a_s_name_unit_possible_s_name_unit: [
                [['GB', 'Gb', 'Gigabytes', 'GigaBytes'], 'Byte']
            ]
        },
        {
            n_pow: Math.pow(1000, 3) * 8, // 10^9 bits (Gigabits)
            a_a_s_name_unit_possible_s_name_unit: [
                [['Gb', 'GB', 'Gigabits', 'GigaBits'], 'Byte']
            ]
        },
        {
            n_pow: Math.pow(1024, 3), // 1024^3 bytes (Gibibytes)
            a_a_s_name_unit_possible_s_name_unit: [
                [['GiB', 'GIB', 'Gibibytes', 'GibiBytes'], 'Byte']
            ]
        },
        {
            n_pow: Math.pow(1024, 3) * 8, // 1024^3 bits (Gibibits)
            a_a_s_name_unit_possible_s_name_unit: [
                [['Gib', 'GIB', 'Gibibits', 'GibiBits'], 'Byte']
            ]
        },
        {
            n_pow: Math.pow(10, 6), // Megahertz
            a_a_s_name_unit_possible_s_name_unit: [
                [['MHz', 'MHZ', 'Megahertz', 'MegaHertz'], 'Byte']
            ]
        },
        {
            n_pow: Math.pow(10, 9), // Gigahertz
            a_a_s_name_unit_possible_s_name_unit: [
                [['GHz', 'GHZ', 'Gigahertz', 'GigaHertz'], 'Byte']
            ]
        }, 
        {
            n_pow: Math.pow(1000, 4), // 10^12 bytes (Terabytes)
            a_a_s_name_unit_possible_s_name_unit: [
                [['TB', 'Tb', 'Terabytes', 'TeraBytes'], 'Byte']
            ]
        },
        {
            n_pow: Math.pow(1000, 4) * 8, // 10^12 bits (Terabits)
            a_a_s_name_unit_possible_s_name_unit: [
                [['Tb', 'TB', 'Terabits', 'TeraBits'], 'Byte']
            ]
        },
        {
            n_pow: Math.pow(1024, 4), // 1024^4 bytes (Tebibytes)
            a_a_s_name_unit_possible_s_name_unit: [
                [['TiB', 'TIB', 'Tebibytes', 'TebiBytes'], 'Byte']
            ]
        },
        {
            n_pow: Math.pow(1024, 4) * 8, // 1024^4 bits (Tebibits)
            a_a_s_name_unit_possible_s_name_unit: [
                [['Tib', 'TIB', 'Tebibits', 'TebiBits'], 'Byte']
            ]
        }, 
        {
            n_pow: Math.pow(1000, 5), // 10^15 bytes (Petabytes)
            a_a_s_name_unit_possible_s_name_unit: [
                [['PB', 'Pb', 'Petabytes', 'PetaBytes'], 'Byte']
            ]
        },
        {
            n_pow: Math.pow(1000, 5) * 8, // 10^15 bits (Petabits)
            a_a_s_name_unit_possible_s_name_unit: [
                [['Pb', 'PB', 'Petabits', 'PetaBits'], 'Byte']
            ]
        },
        {
            n_pow: Math.pow(1024, 5), // 1024^5 bytes (Pebibytes)
            a_a_s_name_unit_possible_s_name_unit: [
                [['PiB', 'PIB', 'Pebibytes', 'PebiBytes'], 'Byte']
            ]
        },
        {
            n_pow: Math.pow(1024, 5) * 8, // 1024^5 bits (Pebibits)
            a_a_s_name_unit_possible_s_name_unit: [
                [['Pib', 'PIB', 'Pebibits', 'PebiBits'], 'Byte']
            ]
        }
    ];
        
  
    // Extract the number and the unit from the input string using regex
    // let a_s_match = s_input.match(/^([+-]?\d*\.?\d+)\s*(\w+)/);
    let a_s_match = s_input.match(/^([+-]?\d*\.?\d+)\s*([^\s]+)/);

    if (!a_s_match) throw new Error(`Invalid input format: ${s_input}`);
    let [_, s_num, s_unit] = a_s_match;
    let s_unit_base = '';
    let o_found = a_o.find(o=>{
        return o.a_a_s_name_unit_possible_s_name_unit.find(a_s_name_unit_possible_s_name_unit=>{
            let [a_s_name_unit_possible,s_name_unit] = a_s_name_unit_possible_s_name_unit;
            // console.log(a_s_name_unit_possible)
            if(a_s_name_unit_possible.includes(s_unit)){
                s_unit_base = s_name_unit
                return true;
            }
            return false
        });
    });
    if (!o_found) {
        throw new Error(`Unknown unit in input string: ${s_input}, possible unit strings are ${a_o.map(o=>o.a_a_s_name_unit_possible_s_name_unit).join(',')}`);
    }
    let n_num = parseFloat(s_num);
    let n_value_base = n_num * o_found.n_pow;


    // Conversion factors for SI and binary prefixes
    const a_o_factor = {
        nano: Math.pow(10, -9),
        micro: Math.pow(10, -6),
        milli: Math.pow(10, -3),
        centi: Math.pow(10, -2),
        deci: Math.pow(10, -1),
        base: 1,
        kilo: Math.pow(10, 3),
        mega: Math.pow(10, 6),
        giga: Math.pow(10, 9),
        tera: Math.pow(10, 12),
        peta: Math.pow(10, 15), 
        kibi: Math.pow(1024, 1),
        mebi: Math.pow(1024, 2),
        gibi: Math.pow(1024, 3),
        tebi: Math.pow(1024, 4),
        peti: Math.pow(1024, 5)
    };


    // Create the object to hold all unit conversions
    let o_number_value = new O_number_value(s_input, s_unit_base);

    // Populate the SI units
    for (let [s_prefix, n_factor] of Object.entries(a_o_factor)) {
        let s_prop = `n_${s_prefix}`
        if(s_prefix == 'base'){s_prop = 'n'}
        let n_res = n_value_base / n_factor
        o_number_value[s_prop] = n_res
    }

    return o_number_value;
}
let f_a_o_number_value_temperature_from_s_temp = function(
    s_temp
){
    let o_number_value = f_o_number_value__from_s_input(s_temp);
    let o_number_value_celsius = null;
    let o_number_value_fahrenheit = null;
    let o_number_value_kelvin = null;
    if(o_number_value.s_name_base_unit == 'Celsius'){
        o_number_value_celsius = o_number_value;
        let n_fahrenheit = (o_number_value_celsius.n * 9/5) + 32;
        let n_kelvin = o_number_value_celsius.n + 273.15;
        o_number_value_fahrenheit = f_o_number_value__from_s_input(`${n_fahrenheit} Fahrenheit`);
        o_number_value_kelvin = f_o_number_value__from_s_input(`${n_kelvin} Kelvin`);
    }
    if(o_number_value.s_name_base_unit == 'Fahrenheit'){
        o_number_value_fahrenheit = o_number_value;
        let n_celsius = (o_number_value_fahrenheit.n - 32) * 5/9;
        let n_kelvin = (o_number_value_fahrenheit.n - 32) * 5/9 + 273.15;
        o_number_value_celsius = f_o_number_value__from_s_input(`${n_celsius} Celsius`);
        o_number_value_kelvin = f_o_number_value__from_s_input(`${n_kelvin} Kelvin`);
    }
    if(o_number_value.s_name_base_unit == 'Kelvin'){
        o_number_value_kelvin = o_number_value;
        let n_celsius = o_number_value_kelvin.n - 273.15;
        let n_fahrenheit =(o_number_value_kelvin.n - 273.15) * 9/5 + 32;
        o_number_value_celsius = f_o_number_value__from_s_input(`${n_celsius} Celsius`);
        o_number_value_fahrenheit = f_o_number_value__from_s_input(`${n_fahrenheit} Fahrenheit`);
    }

    return [
        o_number_value_kelvin,
        o_number_value_celsius,
        o_number_value_fahrenheit
    ]
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
let f_v_at_n_idx_relative = function(
    a_v, 
    v, 
    n_idx_offset
){
    let n_idx = a_v.indexOf(v);
    if(n_idx == -1){
        throw Error(`index is -1, item v${v} is not in array a_v${a_v}`)
    }
    return a_v[
        f_n_idx_ensured_inside_array(
            Math.trunc(n_idx+n_idx_offset),
            a_v.length
        )
    ]
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
let f_a_v_add_v_circular_to_array = function(
    a_v, 
    v,
    n_len_max, 
    b_insert_at_beginning = false
){
    if(a_v.length < n_len_max){
        a_v.push(v)
        if(!b_insert_at_beginning){
            return a_v
        }
    }
    if(a_v.length > n_len_max){
        a_v = a_v.slice(0,n_len_max);
    }
    if(b_insert_at_beginning){

        // let a_v_new = [
        //     v,
        //     ...a_v.slice(1),
        // ]
        for(let n_idx = (a_v.length-1); n_idx>0; n_idx-=1){
            a_v[n_idx] = a_v[n_idx-1];
        }
        a_v[0] = v
    }
    if(!b_insert_at_beginning){

        for(let n_idx = 0; n_idx<a_v.length; n_idx+=1){
            a_v[n_idx] = a_v[n_idx+1];
        }
        a_v[a_v.length-1] = v
    }

    return a_v
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
let f_o_s_type_s_name_typedarray = function(){
    return {
        'a_n_i8': 'Int8Array',
        'a_n_u8': 'Uint8Array',
        'a_n_i16': 'Int16Array',
        'a_n_u16': 'Uint16Array',
        'a_n_i32': 'Int32Array',
        'a_n_u32': 'Uint32Array',
        'a_n_f32': 'Float32Array',
        'a_n_f64': 'Float64Array',
        'a_n_i64': 'BigInt64Array',
        'a_n_u64': 'BigUint64Array',
    }
}
    
let f_v_s_name_typedarray_from_s_type = function(s){

    let o_s_type_s_name_typedarray = f_o_s_type_s_name_typedarray();
    return o_s_type_s_name_typedarray[s]
}
let f_v_s_name_type_from_s_name_typedarray = function(s){
    let o_s_type_s_name_typedarray = f_o_s_type_s_name_typedarray();
    let n_idx = Object.values(o_s_type_s_name_typedarray).indexOf(s);
    if(n_idx == -1){
        return undefined
    }
    return Object.keys(o_s_type_s_name_typedarray)[n_idx]

}
let f_v_s_type__from_value = function(value){
    if(value === undefined){
        return undefined
    }

    let s_constructor_name = value?.constructor?.name;

    if(!s_constructor_name){
        return 'v'
    }
    let v_s_name_type = f_v_s_name_type_from_s_name_typedarray(s_constructor_name);
    if(v_s_name_type){
        return v_s_name_type
    }
    if(s_constructor_name == 'Number'){
        return 'n_f64'
    }
    if(s_constructor_name == 'String'){
        return 's'
    }
    
    return 'v'
}

let f_v_s_type_from_array = function(a_v){

    let s = f_v_s_type__from_value(a_v)
    if(s?.startsWith('a')){
        return s
    }
    const v_s_type_first = f_v_s_type__from_value(a_v[0]);
    if(v_s_type_first === undefined){
        return undefined;
    }
    if(v_s_type_first === 'v'){
        return 'a_v'
    }

    for(let n_idx = 1; n_idx < a_v.length; n_idx+=1){
        if(f_v_s_type__from_value(a_v[n_idx])!=v_s_type_first){
            return 'a_v'
        }
    }
    return `a_${v_s_type_first}`
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

let f_a_n_nor__rgb__from_a_n_nor__hsl = (
    n_hue_nor, 
    n_saturation_nor, 
    n_lightness_nor
) => {
    let n_hue_deg = n_hue_nor*360;
    const k = n => (n +  n_hue_deg / 30) % 12;
    const a = n_saturation_nor * Math.min(n_lightness_nor, 1 - n_lightness_nor);
    const f = n =>
    n_lightness_nor - a * Math.max(-1, Math.min(k(n) - 3, Math.min(9 - k(n), 1)));
    return [f(0), f(8), f(4)];
};



// const f_a_n_nor__hsl__from_a_n_nor__rgb = (
//     n_r_nor,
//     n_g_nor,
//     n_b_nor
//     ) => {

//     const l = Math.max(n_r_nor, n_g_nor, n_b_nor);
//     const s = l - Math.min(n_r_nor, n_g_nor, n_b_nor);
//     const h = s
//       ? l === n_r_nor
//         ? (n_g_nor - n_b_nor) / s
//         : l === n_g_nor
//         ? 2 + (n_b_nor - n_r_nor) / s
//         : 4 + (n_r_nor - n_g_nor) / s
//       : 0;
//     return [
//        (60 * h < 0 ? 60 * h + 360 : 60 * h)/360,
//        (s ? (l <= 0.5 ? s / (2 * l - s) : s / (2 - (2 * l - s))) : 0),
//        ((2 * l - s)) / 2,
//     ];
//   };

let f_a_n_rgb_from_n_hue_nor = function(n_hue_nor){
    let n_colors = 3; 
    let n_nor = n_hue_nor;//0.0; // 0- 1./3. red, 1./3. - 2./3./ green , 2/3 - 3/3 blue
    let n_nor2 = n_nor*n_colors;
    let a_n_interpolated = new Array(n_colors).fill(0);
    a_n_interpolated[Math.floor(n_nor2)] = (1.-n_nor2%1.0)
    a_n_interpolated[(Math.floor(n_nor2)+1)%n_colors] = n_nor2%1.0
    let a_n_rgb = a_n_interpolated.map(n=>{return n*255})
    return a_n_rgb;
}
let f_a_n_nor__hsl__from_a_n_nor__rgb = function(r, g, b) {
  const vmax = Math.max(r, g, b), vmin = Math.min(r, g, b);
  let h, s, l = (vmax + vmin) / 2;

  if (vmax === vmin) {
    return [0, 0, l]; // achromatic
  }

  const d = vmax - vmin;
  s = l > 0.5 ? d / (2 - vmax - vmin) : d / (vmax + vmin);
  if (vmax === r) h = (g - b) / d + (g < b ? 6 : 0);
  if (vmax === g) h = (b - r) / d + 2;
  if (vmax === b) h = (r - g) / d + 4;
  h /= 6;

  return [h, s, l];
}

let f_b_js_object =function(v){
    return typeof v === 'object' &&
        !Array.isArray(v) &&
        !v.constructor.name.includes('Array') &&
        v !== null
}



let f_o_empty_recursive = function(
    o,
    f_v_empty = function(
        v, s_prop
    ){
        if(Array.isArray(v)){
            return []
        }

        return null
    }
){
    let o_new = {}
    for(let s_prop in o){
        let v = o[s_prop]
        if(f_b_js_object(v)){
            console.log(v)
            o_new[s_prop] = f_o_empty_recursive(v);
        }else{
            o_new[s_prop] = f_v_empty(v, s_prop) 
        }
    }
    return o_new
}


let f_o_image_data_from_s_url = async function(s_url){
    return new Promise(
        (f_res, f_rej)=>{
            let o_img = new Image();
            o_img.onload = function(){
                let o_canvas = document.createElement('canvas');
                var o_ctx = o_canvas.getContext('2d');
                o_canvas.width = o_img.width;
                o_canvas.height = o_img.height;            
                o_ctx.drawImage(o_img, 0, 0);
                return f_res(
                    o_ctx.getImageData(0, 0, o_img.width, o_img.height)
                );
            }
            o_img.onerror = (o_e)=>{return f_rej(o_e)}
            o_img.src = s_url;
        }
    )
}

let f_a_o_shader_error = function(
    s_code_shader,
    o_shader,
    o_ctx, 
    o_shader_info
){
    let a_o = [];
    if (!o_ctx.getShaderParameter(o_shader, o_ctx.COMPILE_STATUS)) {
        let s_shader_info_log = o_ctx.getShaderInfoLog(o_shader);
        let a_s_ignore = [
            '', 
            null, 
            undefined, 
            false, 
            '\u0000'
        ]
        if(a_s_ignore.includes(s_shader_info_log)){return []}
        a_o = s_shader_info_log
            ?.split('\n')
            ?.filter(s=>!a_s_ignore.includes(s))
            ?.map(s=>{
                console.error(s)
                let a_s_part = s.split(':').map(s=>s.trim());
                let s_error_prefix = a_s_part[0];
                let n_idx = parseInt(a_s_part[1]);
                let n_line = parseInt(a_s_part[2]);
                let s_code_content_with_error__quoted = a_s_part[3];
                // console.log(a_s_part)
                let s_code_content_with_error = s_code_content_with_error__quoted.substring(1, s_code_content_with_error__quoted.length-1)
                let s_error_type = a_s_part[4];
                let s_line_code_with_error = s_code_shader.split('\n')[n_line-1];
                // console.log(s)
                let n_idx_s_code = s_line_code_with_error.indexOf(s_code_content_with_error);
                let n_idx_s_code_second = s_line_code_with_error.indexOf(s_code_content_with_error, n_idx_s_code+1);
                let s_line_pointing_out_error = s
                if(n_idx_s_code_second != -1 || n_idx_s_code == -1){
                    let n_idx_first_non_whitespace = s_line_code_with_error.search(/\S/);
                    let n_remaining = s_line_code_with_error.length - n_idx_first_non_whitespace;
                    // we cannot be sure to find the exact match of the error 
                    // for example the 'd' is found firstly in voi'd', but the error is actually in void main() {'d'...
                    // void main() {d
                    //     ^undeclared identifier
                    s_line_pointing_out_error = `${' '.repeat(n_idx_first_non_whitespace)}${'-'.repeat(n_remaining)} ${s_error_type}`
                }else{
                    s_line_pointing_out_error = `${' '.repeat(n_idx_s_code)}${'^'.repeat(s_code_content_with_error.length)} ${s_error_type}`
                }
                let n_pad = (n_line.toString().length+1);
                let s_rustlike_error = [
                    `${s_error_prefix} ${s_code_content_with_error__quoted}`,
                    `${' '.repeat(n_pad)}|`,
                    `${n_line.toString().padEnd(n_pad, ' ')}|${s_line_code_with_error}`,
                    `${' '.repeat(n_pad)}|${s_line_pointing_out_error}`,
                ].join('\n')
                return new O_shader_error(
                    o_shader_info, 
                    s_error_prefix,
                    n_idx,
                    n_line,
                    s_code_content_with_error__quoted,
                    s_error_type,
                    s_line_code_with_error,
                    s_rustlike_error
                )
            });
    }

    return a_o;
}

let f_o_shader_info = function(
    s_type, 
    s_code_shader, 
    o_ctx
){
    let o_shader_info = new O_shader_info(
        s_type,
        s_code_shader,
        null,
        []
    )
    let a_s_type__allowed = ['vertex', 'fragment'];
    if(!a_s_type__allowed.includes(s_type)){
        throw Error(`s_type: ${s_type} is not allowed, allowed are ${JSON.stringify(a_s_type__allowed)}`);
    }
    o_shader_info.o_shader = o_ctx.createShader(o_ctx[`${s_type.toUpperCase()}_SHADER`])
    o_ctx.shaderSource(o_shader_info.o_shader, s_code_shader);
    o_shader_info.n_ts_ms_start_compile  = new Date().getTime()
    let n_ms = window.performance.now()
    o_ctx.compileShader(o_shader_info.o_shader);
    o_shader_info.n_ms_duration_compile = window.performance.now()-n_ms;
    o_shader_info.a_o_shader_error = f_a_o_shader_error(
        s_code_shader,
        o_shader_info.o_shader,
        o_ctx, 
        o_shader_info
    );
    if(o_shader_info.a_o_shader_error.length > 0){
        o_ctx.deleteShader(o_shader_info.o_shader);
    }
    return o_shader_info;
}

let f_o_webgl_program = function(
    o_canvas, 
    s_code_shader__vertex = '',
    s_code_shader__fragment = '', 
    o_options__getContext = {}
){
    let s_name_a_o_vec_position_vertex = 'a_o_vec_position_vertex' 
    let s_context_webgl_version = 'webgl2';

    
    let o_ctx = o_canvas.getContext(
        s_context_webgl_version,
        Object.assign(
            {
                preserveDrawingBuffer: true, // o_canvas.getContext(...).readPixels(...) will return 0 without this, 
                // antialias: false // blitFrameBfufer wont work without this, since something with multisampling
            },
            o_options__getContext
        )
    );
    if (!o_ctx) {
        throw Error(`${s_context_webgl_version} is not supported or disabled in this browser.`);
    }

    // console.error('ERROR compiling fragment shader!', s_shader_info_log);
    let o_map = {
        'fragment': s_code_shader__fragment, 
        'vertex': s_code_shader__vertex
    }

    let a_o_shader_info = Object.keys(o_map).map(
        s=>{
            return f_o_shader_info(
                s, 
                o_map[s], 
                o_ctx
            )
        }
    ).flat();

    for(let o_shader_info of a_o_shader_info){
        if(o_shader_info.a_o_shader_error.length > 0){
            console.error(`shader with type '${o_shader_info.s_type}' could not compile, error(s):`)
            throw Error('\n'+o_shader_info.a_o_shader_error.map(o=>o.s_rustlike_error).join('\n\n')+'\n\n')
        }
    }

    // Create and use the program
    var o_shader__program = o_ctx.createProgram();
    for(let o_shader_info of a_o_shader_info){
        o_ctx.attachShader(o_shader__program, o_shader_info.o_shader);
    }
    o_ctx.linkProgram(o_shader__program);
    if (!o_ctx.getProgramParameter(o_shader__program, o_ctx.LINK_STATUS)) {
        console.error('ERROR linking o_shader__program!', o_ctx.getProgramInfoLog(o_shader__program));
        o_ctx.deleteProgram(o_shader__program);
        return;
    }
    o_ctx.useProgram(o_shader__program);
    

    let o_s_name_o_uniform_location = {
        'o_scl_canvas': new O_webgl_uniform_location(
            'o_scl_canvas', 
            o_ctx.getUniformLocation(o_shader__program, 'o_scl_canvas'), 
            [o_canvas.width, o_canvas.height]
        )
    }
    // Set uniform value (vec2)
    o_ctx.uniform2f(o_s_name_o_uniform_location.o_scl_canvas.o_uniform_location, o_canvas.width, o_canvas.height);

    // Set the positions for a square.
    let a_o_vec_position_vertex = [
        -1, -1,
        1, -1,
       -1,  1,
        1,  1,
    ];
    var o_buffer_position = o_ctx.createBuffer();
    o_ctx.bindBuffer(o_ctx.ARRAY_BUFFER, o_buffer_position);
    o_ctx.bufferData(o_ctx.ARRAY_BUFFER, new Float32Array(a_o_vec_position_vertex), o_ctx.STATIC_DRAW);
    // Tell WebGL how to pull out the positions from the position buffer into the vertexPosition attribute
    var o_afloc_a_o_vec_position_vertex = o_ctx.getAttribLocation(o_shader__program, s_name_a_o_vec_position_vertex);
    

    // Additional setup for drawing (e.g., buffers, attributes)
    return new O_webgl_program(
        o_canvas, 
        o_ctx, 
        a_o_shader_info,
        o_shader__program, 
        s_name_a_o_vec_position_vertex, 
        o_s_name_o_uniform_location, 
        s_context_webgl_version, 
        o_buffer_position,
        a_o_vec_position_vertex,
        o_afloc_a_o_vec_position_vertex
    )

}
let f_delete_o_webgl_program = function(
    o_webgl_program
) {
    // Get the attached shaders
    const a_o_shader_attached = o_webgl_program.o_ctx.getAttachedShaders(o_webgl_program.o_shader__program);

    // Detach and delete each shader
    a_o_shader_attached.forEach(o_shader_attached => {
        o_webgl_program.o_ctx.detachShader(o_webgl_program.o_shader__program, o_shader_attached);
        o_webgl_program.o_ctx.deleteShader(o_shader_attached);
    });
    // Delete the program
    o_webgl_program.o_ctx.deleteProgram(o_webgl_program.o_shader__program);
}
let f_resize_canvas_from_o_webgl_program = function(
    o_webgl_program, 
    n_scl_x, 
    n_scl_y
){
    o_webgl_program.o_canvas.width = n_scl_x;
    o_webgl_program.o_canvas.height = n_scl_y;

    // Set the viewport to match the canvas dimensions, otherwise the canvas will not resize properly
    o_webgl_program.o_ctx.viewport(0, 0, o_webgl_program.o_canvas.width, o_webgl_program.o_canvas.height);

    let o = o_webgl_program.o_s_name_o_uniform_location.o_scl_canvas;
    o.v_data = [o_webgl_program.o_canvas.width, o_webgl_program.o_canvas.height]
    o_webgl_program.o_ctx.uniform2f(
        o.o_uniform_location,
        o.v_data[0], o.v_data[1]
    );
}

let f_render_from_o_webgl_program = function(
    o_webgl_program
){
    o_webgl_program.o_ctx.bindBuffer(o_webgl_program.o_ctx.ARRAY_BUFFER, o_webgl_program.o_buffer_position);
    o_webgl_program.o_ctx.enableVertexAttribArray(o_webgl_program.o_afloc_a_o_vec_position_vertex);
    o_webgl_program.o_ctx.vertexAttribPointer(o_webgl_program.o_afloc_a_o_vec_position_vertex, 2, o_webgl_program.o_ctx.FLOAT, false, 0, 0);
    // Draw the square
    o_webgl_program.o_ctx.drawArrays(o_webgl_program.o_ctx.TRIANGLE_STRIP, 0, 4);
}

let f_ddd = function(){

    let o_date = new Date();
    let n_year = o_date.getUTCFullYear();
    let n_month = o_date.getUTCMonth()+1;
    let n_day = o_date.getUTCDate();
    let n_hours = o_date.getUTCHours();
    let n_minutes = o_date.getUTCMinutes();
    let n_seconds = o_date.getUTCSeconds();

    let s_month_zeropadded = n_month.toString().padStart(2,'0');
    let s_day_zeropadded = n_day.toString().padStart(2,'0');
    let s_hours_zeropadded = n_hours.toString().padStart(2,'0');
    let s_minutes_zeropadded = n_minutes.toString().padStart(2,'0');
    let s_seconds_zeropadded = n_seconds.toString().padStart(2,'0');
    let s_milliseconds_zeropadded = o_date.getUTCMilliseconds().toString().padStart(3,'0');

    let s_ymd_hms = `${n_year}-${s_month_zeropadded}-${s_day_zeropadded} ${s_hours_zeropadded}:${s_minutes_zeropadded}:${s_seconds_zeropadded}.${s_milliseconds_zeropadded}`
    
    let s_date = `f_ddd: ${s_ymd_hms}`;
    let s = `
╔═${`═`.repeat(s_date.length)}═╗
║ ${s_date} ║
╚═${`═`.repeat(s_date.length)}═╝
`.trim()
    console.log(s)
    return f_dd(...arguments);
}
let f_dd = function(){
    
    console.log(...arguments);
    if(f_b_denojs()){
        Deno.exit();
    }
}


let f_o_object_assign_nested = function(
    o1, 
    o2
){
    for(let s_prop in o2){
        let v = o2[s_prop];
        if(typeof v == 'object' && !Array.isArray(v)){
            o1[s_prop] = (o1[s_prop]) ? o1[s_prop] : {}
            f_o_object_assign_nested(
                o1[s_prop],
                v
            )
            continue
        }
        o1[s_prop] = v;
    }
    return o1
}
let f_throw = (
    s_type_expected,
    s_type_present,
    s_path_prop, 
)=>{
    throw Error(
        JSON.stringify(
            {
                s_msg: 'type error',
                s_path_prop, 
                s_type_expected, 
                s_type_present, 
            },
            null, 
            4
        )
    )
}
let o_s_prefix_f_callback = {
    's': (v,s_path_prop)=>{
        let s_type_expected = "string";
        let s_type = typeof v;
        if(typeof v != s_type_expected){
            f_throw(s_type_expected, s_type, s_path_prop)
        }
    }, 
    'n': (v,s_path_prop)=>{
        let s_type_expected = "number";
        let s_type = typeof v;
        if(typeof v != s_type_expected){
            f_throw(s_type_expected, s_type, s_path_prop)
        }
    }, 
    'a': (v,s_path_prop)=>{
        let s_type_expected = "array";
        let s_type = typeof v;
        if(!v.constructor.name.includes('Array')){
            f_throw(s_type_expected, s_type, s_path_prop)
        }
    },
    'o': (v,s_path_prop)=>{
        let s_type_expected = "object";
        let s_type = typeof v;
        if(!f_b_js_object(v)){
            f_throw(s_type_expected, v?.constructor?.name, s_path_prop)
        }
    }
}
let f_b_check_type_and_potentially_throw_error = function(
    o, 
    s_path_prop = '',
    b_recursive = true
){

    for(let s in o){
        let s_prefix = s[0];
        let v = o[s];
        let s_path_prop2 = `${s_path_prop}.${s}`
        o_s_prefix_f_callback?.[s_prefix]?.(v,s_path_prop2);
        if(b_recursive){

            if(typeof v == 'object' && !v.constructor.name.includes('Array')){
                f_b_check_type_and_potentially_throw_error(
                    v, 
                    s_path_prop2,
                    b_recursive
                )
            }
        }
    }
    return true
}
let f_a_n_u8_from_s_b64 = function(s_b64){
    f_b_check_type_and_potentially_throw_error({s_b64});
    let s_decoded = atob(s_b64)
    let a_n_u8 = new Uint8Array(s_decoded?.length);
    for (let n_i = 0; n_i < s_decoded?.length; n_i++) {
        a_n_u8[n_i] = s_decoded.charCodeAt(n_i);
    }
    return a_n_u8
}

let f_a_n_trn__relative_to_o_html = function(
    a_n__trn_mouse, 
    o_el
){
    const o_brect  = o_el.getBoundingClientRect();

    return [
        a_n__trn_mouse[0] - o_brect.left,
        a_n__trn_mouse[1] - o_brect.top
    ]
}
let f_a_n_trn__relative_to_o_html__nor = function(
    a_n__trn_mouse, 
    o_el
){
    const o_brect  = o_el.getBoundingClientRect();
    
    let a_n_trn = f_a_n_trn__relative_to_o_html(a_n__trn_mouse, o_el);
    return [
        a_n_trn[0] / o_brect.width,
        a_n_trn[1] / o_brect.height,
    ]    
}

let f_a_o_entry__from_s_path = async function(s_path, b_recursive = false){
    return new Promise(
        async (f_res)=>{
            let a_o = [];
            for  await(let o of Deno.readDir(s_path)){
                a_o.push(o)
                o.s_path_folder_parent = `${s_path}`
                o.s_path_file = `${s_path}/${o.name}`
                if(o.isDirectory && b_recursive){
                    // console.log(`${s_path}/${o.name}`)                    
                    // let a_o2 = await f_a_o_entry__from_s_path(`${s_path}/${o.name}`, b_recursive);
                    a_o.push(f_a_o_entry__from_s_path(`${s_path}/${o.name}`, b_recursive))
                }
            }
            return Promise.all(a_o).then(a_o2 =>{
                return f_res(a_o2.flat())
            })
        }
    )
}
let f_s_bordered = function(a_s, s_char_border_top = '_', s_char_border_bottom = "_", a_s_char_corner = ["+","+","+","+"]){
    if(typeof a_s === 'string'){
        a_s = [a_s]
    }
    let a_a_s = a_s.map(s=>s.split('\n'));
      let s_longest = a_a_s.flat().sort((s1, s2)=>{return s2.length -s1.length})[0];
      let n_len_longest = s_longest.length;
      let s_border_top = s_char_border_top.repeat(n_len_longest + 2);
      let s_border_bottom = s_char_border_bottom.repeat(n_len_longest + 2);
      let s_empty = ' '.repeat(n_len_longest);
      if(a_s_char_corner.length == 1){ 
        a_s_char_corner  = a_s_char_corner[0].repeat(4).split('')
      }
      if(a_s_char_corner.length == 2){ 
        a_s_char_corner  = [
            a_s_char_corner[0],
            a_s_char_corner[0],
            a_s_char_corner[1],
            a_s_char_corner[1],
        ]
      }
      if(a_s_char_corner.length == 3){ 
        a_s_char_corner  = [
            a_s_char_corner[0],
            a_s_char_corner[1],
            a_s_char_corner[2],
            a_s_char_corner[2],
        ]
      }
      let a_s2 = [
        a_a_s.map(a_s=>{
            return [
                (`${a_s_char_corner[0]}${s_border_top}${a_s_char_corner[1]}`),
                (`| ${s_empty} |`),
                ...a_s.map(
                s=>{
                    return (`| ${s.padEnd(n_len_longest, ' ')} |`)
                }
                )
            ].join('\n')
        }).join(
            `\n`
        ),
        `${a_s_char_corner[3]}${s_border_bottom}${a_s_char_corner[2]}`

      ]
    
      return a_s2.join('\n')
      
  }

let f_s_color_rgba_from_a_n_nor_channelcolorrgba = function(a_n){
    let s = `rgba(${a_n.slice(0,3).map(n=>n*255)},${a_n[3]})`
    return s
}
let f_s_color_hex_from_a_n_nor_channelcolorrgba = function(a_n
){
    let s = `#${a_n.slice(0,3).map(n=>parseInt(n*255).toString(16).padStart(2,'0')).join('')}`
    return s
}
let f_a_n_nor_channelcolorrgba_from_color_hex = function(
    s_color_hex
){
    s_color_hex = s_color_hex.trim().replaceAll('#', '');
    let n_col = parseInt(s_color_hex,16);
    let n_nor_alpha = 1;
    let n_channels = (s_color_hex.length == 8) ? 4 : 3;
    let a_n_channelrgba_col_nor = [
        ((n_col >> (8*(n_channels-1)))& (1<<8)-1)/255, 
        ((n_col >> (8*(n_channels-2)))& (1<<8)-1)/255, 
        ((n_col >> (8*(n_channels-3)))& (1<<8)-1)/255, 
        (n_channels == 4) ? ((n_col >> (8*(n_channels-4))) & (1<<8)-1)/255 : n_nor_alpha
    ]
    return a_n_channelrgba_col_nor
}

let f_s_json_from_google_sheet_api_response = function(s_text){
    // Use a regex to extract the JSON part from the response
    const a_s_json = s_text.match(/(?<=\()\{.*\}(?=\))/);
    if (a_s_json && a_s_json[0]) {
        return a_s_json[0]
        // Process jsonData.table.rows to get your data
    } else {
        console.error(`Failed to parse JSON data from response: ${s_text.slice(0, 100)}${(s_text.length > 100) ? '...': ''}`);
    }
}
let f_o_data_from_google_sheet = async function(
    s_sheet_id, 
    s_name_sheet = 'Sheet1', 
){

    // Construct the URL to fetch data from Sheet2
    // there are at least two ways to read data from google sheet with api
    // the first does not need an API key but the sheet has to be 'public anyone can read'
    // it returns the result as a google visualization string that contains some kind of function call
    // the json can be extracted and parsed to an object, tihs will contain a .col property which is the header row(s)
    // that are automatically detected
    let s_url = `https://docs.google.com/spreadsheets/d/${s_sheet_id}/gviz/tq?tqx=out:json&sheet=${s_name_sheet}&tq=SELECT *`;
    // s_url = `https://sheets.googleapis.com/v4/spreadsheets/${s_sheet_id}/values/${s_name_sheet}`//?key=${apiKey}` this requires an api key
    
    return fetch(s_url)
        .then(response => response.text())
        .then(s_text => {
            let s_json = f_s_json_from_google_sheet_api_response(s_text);
            let o = JSON.parse(s_json);
            return f_o_google_sheet_data_from_o_resp_data(o);
        })
        .catch(error => console.error('Error fetching data:', error));
}
let f_o_google_sheet_data_from_o_resp_data = function(o_resp_data){
    let a_o = o_resp_data.table.rows.map(o_row =>{

        let a_o = o_resp_data.table.cols.map((o_col, n_idx)=>{
                // as long as the data in the row does not match the data format of the row
                // the row will get counted as a 'header' row and the 'label' the title of the row 
                // will be a whitespace joined string with the value of each row of the current column
                // example 
                // | s_string        | n_number | b_bool |
                // | str             | num      | bool   |
                //                                              those first two rows are counted as a 'header' 
                //                                              so 'table.cols[0].label will be 's_string str'
                // | tihs is a test  | 1        | TRUE   |  
                // | antoerh one t.  | 2.2      | false  |  
                // | some string t   | 1        | TRUE   |  
                return {
                    [o_col.label.split(' ').shift()] : Object.assign(
                        {o_sheet_col_info: o_col},
                        o_row.c[n_idx]
                    )
                }
            })
        return Object.assign({}, ...a_o);
        
    })
    return {
        a_o: a_o, 
        o_resp_data: o_resp_data
    }
}

export {
    f_o_empty_recursive,
    f_a_n_nor__rgb__from_a_n_nor__hsl,
    f_a_n_nor__hsl__from_a_n_nor__rgb,
    f_b_uuid,
    f_s_uuidv4,
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
    f_o_number_value__from_s_input,
    f_a_o_number_value_temperature_from_s_temp,
    f_v_at_n_idx_relative, 
    f_v_s_type__from_value, 
    f_v_s_type_from_array,
    f_o_image_data_from_s_url,
    f_a_v_add_v_circular_to_array, 
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
    f_delete_o_webgl_program,
    f_resize_canvas_from_o_webgl_program,
    f_render_from_o_webgl_program, 
    f_o_data_from_google_sheet,
    f_o_google_sheet_data_from_o_resp_data
}

