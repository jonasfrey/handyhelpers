class O_cpu_stats__diff{
    constructor(
        o_cpu_stats_1, 
        o_cpu_stats_2, 
    ){

        if(
            o_cpu_stats_1.n_ms_window_performance_now < o_cpu_stats_2.n_ms_window_performance_now
        ){
            this.o_cpu_stats_old = o_cpu_stats_1
            this.o_cpu_stats_new = o_cpu_stats_2
        }else{
            this.o_cpu_stats_old = o_cpu_stats_2
            this.o_cpu_stats_new = o_cpu_stats_1
        }

        this.n_diff_n_ts_ms = 
            this.o_cpu_stats_new.n_ts_ms
            - this.o_cpu_stats_old.n_ts_ms
        this.n_diff_n_ms_window_performance_now = 
            this.o_cpu_stats_new.n_ms_window_performance_now
            - this.o_cpu_stats_old.n_ms_window_performance_now
        this.n_diff_n_conf_clk_tck = 
            this.o_cpu_stats_new.n_conf_clk_tck
            - this.o_cpu_stats_old.n_conf_clk_tck
        this.n_diff_n_total_context_switches_across_all_cpus = 
            this.o_cpu_stats_new.n_total_context_switches_across_all_cpus
            - this.o_cpu_stats_old.n_total_context_switches_across_all_cpus
        this.n_diff_n_ts_ms_ut__booted = 
            this.o_cpu_stats_new.n_ts_ms_ut__booted
            - this.o_cpu_stats_old.n_ts_ms_ut__booted
        this.n_diff_n_processes_and_threads_created = 
            this.o_cpu_stats_new.n_processes_and_threads_created
            - this.o_cpu_stats_old.n_processes_and_threads_created
        this.n_diff_n_processes_running = 
            this.o_cpu_stats_new.n_processes_running
            - this.o_cpu_stats_old.n_processes_running
        this.n_diff_n_processes_blocked_waiting_for_io_to_complete = 
            this.o_cpu_stats_new.n_processes_blocked_waiting_for_io_to_complete
            - this.o_cpu_stats_old.n_processes_blocked_waiting_for_io_to_complete



        
        this.a_o_cpu_core_stats__diff =this.o_cpu_stats_old.a_o_cpu_core_stats.map(
            (o_old, n_idx) =>{

                let o_cpu_core_stats__diff = new O_cpu_core_stats__diff(
                    o_old,
                    this.o_cpu_stats_new.a_o_cpu_core_stats[n_idx]
                )
                return o_cpu_core_stats__diff
            }
        )


    }
}
class O_cpu_core_stats__diff{
    // the cpu usage can be read out for a certain timespan
    // because in the /proc/stat file there are time values 
    // the values must be readout twice , with the difference 
    // of the values the cpu usage of the last n-milliseconds
    // can be calculated
    // the default milliseconds is chosen very short so that 
    constructor(
        o_cpu_core_stats_1, 
        o_cpu_core_stats_2, 
    ){
        if(
            o_cpu_core_stats_1.n_ms_window_performance_now 
            < o_cpu_core_stats_2.n_ms_window_performance_now){
            this.o_cpu_core_stats_old = o_cpu_core_stats_1
            this.o_cpu_core_stats_new = o_cpu_core_stats_2
        }else{
            this.o_cpu_core_stats_old = o_cpu_core_stats_2
            this.o_cpu_core_stats_new = o_cpu_core_stats_1
        }


        this.n_diff_n_conf_clk_tck = 
            this.o_cpu_core_stats_new.n_conf_clk_tck
            - this.o_cpu_core_stats_old.n_conf_clk_tck
        this.n_diff_n_ts_ms = 
            this.o_cpu_core_stats_new.n_ts_ms
            - this.o_cpu_core_stats_old.n_ts_ms
        this.n_diff_n_ms_window_performance_now = 
            this.o_cpu_core_stats_new.n_ms_window_performance_now
            - this.o_cpu_core_stats_old.n_ms_window_performance_now
        this.n_diff_n_ms_time_spent_since_boot_processes_executing_in_user_mode = 
            this.o_cpu_core_stats_new.n_ms_time_spent_since_boot_processes_executing_in_user_mode
            - this.o_cpu_core_stats_old.n_ms_time_spent_since_boot_processes_executing_in_user_mode
        this.n_diff_n_ms_time_spent_since_boot_niced_processes_executing_in_user_mode = 
            this.o_cpu_core_stats_new.n_ms_time_spent_since_boot_niced_processes_executing_in_user_mode
            - this.o_cpu_core_stats_old.n_ms_time_spent_since_boot_niced_processes_executing_in_user_mode
        this.n_diff_n_ms_time_spent_since_boot_processes_executing_in_kernel_mode = 
            this.o_cpu_core_stats_new.n_ms_time_spent_since_boot_processes_executing_in_kernel_mode
            - this.o_cpu_core_stats_old.n_ms_time_spent_since_boot_processes_executing_in_kernel_mode
        this.n_diff_n_ms_time_spent_since_boot_idle = 
            this.o_cpu_core_stats_new.n_ms_time_spent_since_boot_idle
            - this.o_cpu_core_stats_old.n_ms_time_spent_since_boot_idle
        this.n_diff_n_ms_time_spent_since_boot_io_wait = 
            this.o_cpu_core_stats_new.n_ms_time_spent_since_boot_io_wait
            - this.o_cpu_core_stats_old.n_ms_time_spent_since_boot_io_wait
        this.n_diff_n_ms_time_spent_since_boot_servicing_interrupts = 
            this.o_cpu_core_stats_new.n_ms_time_spent_since_boot_servicing_interrupts
            - this.o_cpu_core_stats_old.n_ms_time_spent_since_boot_servicing_interrupts
        this.n_diff_n_ms_time_spent_since_boot_servicing_softirqs = 
            this.o_cpu_core_stats_new.n_ms_time_spent_since_boot_servicing_softirqs
            - this.o_cpu_core_stats_old.n_ms_time_spent_since_boot_servicing_softirqs


        this.n_diff_n_ms_time_total = 0
            +this.n_diff_n_ms_time_spent_since_boot_processes_executing_in_user_mode
            +this.n_diff_n_ms_time_spent_since_boot_niced_processes_executing_in_user_mode
            +this.n_diff_n_ms_time_spent_since_boot_processes_executing_in_kernel_mode
            +this.n_diff_n_ms_time_spent_since_boot_idle
            +this.n_diff_n_ms_time_spent_since_boot_io_wait
            +this.n_diff_n_ms_time_spent_since_boot_servicing_interrupts
            +this.n_diff_n_ms_time_spent_since_boot_servicing_softirqs

        this.n_diff_idle = 0
            +this.n_diff_n_ms_time_spent_since_boot_idle
            +this.n_diff_n_ms_time_spent_since_boot_io_wait

        if(this.n_diff_n_ms_time_total == 0){
            this.n_usage_nor = 0
        }else{
            this.n_usage_nor = Math.abs(1-(this.n_diff_idle/this.n_diff_n_ms_time_total))
            // console.log(this)
        }
    }
}
class O_cpu_stats{
    constructor(
        s_proc_stat,
        n_conf_clk_tck,
        n_total_context_switches_across_all_cpus,
        n_ts_ms_ut__booted, 
        n_processes_and_threads_created,
        n_processes_running,
        n_processes_blocked_waiting_for_io_to_complete,
        s_softirqs,
        a_o_cpu_core_stats, 
        o_cpu_core_stats__total, 
    ){
        this.a_o_cpu_stats = [];
        this.s_proc_stat = s_proc_stat,
        this.n_ts_ms = new Date().getTime()
        this.n_ms_window_performance_now = window.performance.now()
        this.n_conf_clk_tck = n_conf_clk_tck,
        this.n_total_context_switches_across_all_cpus = n_total_context_switches_across_all_cpus,
        this.n_ts_ms_ut__booted = n_ts_ms_ut__booted, 
        this.n_processes_and_threads_created = n_processes_and_threads_created,
        this.n_processes_running = n_processes_running,
        this.n_processes_blocked_waiting_for_io_to_complete = n_processes_blocked_waiting_for_io_to_complete,
        this.s_softirqs = s_softirqs,
        this.a_o_cpu_core_stats = a_o_cpu_core_stats
        this.o_cpu_core_stats__total = o_cpu_core_stats__total
        //getconf CLK_TCK
    }
    get n_cpus(){
        return this.a_o_cpu_core_stats.length
    }
}
class O_cpu_core_stats{
    constructor(
        s,
        n_conf_clk_tck,
        n_ts_ms, 
        n_ms_window_performance_now,
        n_ms_time_spent_since_boot_processes_executing_in_user_mode,
        n_ms_time_spent_since_boot_niced_processes_executing_in_user_mode,
        n_ms_time_spent_since_boot_processes_executing_in_kernel_mode,
        n_ms_time_spent_since_boot_idle, 
        n_ms_time_spent_since_boot_io_wait,
        n_ms_time_spent_since_boot_servicing_interrupts,
        n_ms_time_spent_since_boot_servicing_softirqs
    ){
        this.s = s
        this.n_conf_clk_tck = n_conf_clk_tck
        this.n_ts_ms = n_ts_ms
        this.n_ms_window_performance_now = n_ms_window_performance_now
        this.n_ms_time_spent_since_boot_processes_executing_in_user_mode = n_ms_time_spent_since_boot_processes_executing_in_user_mode,
        this.n_ms_time_spent_since_boot_niced_processes_executing_in_user_mode = n_ms_time_spent_since_boot_niced_processes_executing_in_user_mode,
        this.n_ms_time_spent_since_boot_processes_executing_in_kernel_mode = n_ms_time_spent_since_boot_processes_executing_in_kernel_mode,
        this.n_ms_time_spent_since_boot_idle = n_ms_time_spent_since_boot_idle, 
        this.n_ms_time_spent_since_boot_io_wait = n_ms_time_spent_since_boot_io_wait,
        this.n_ms_time_spent_since_boot_servicing_interrupts = n_ms_time_spent_since_boot_servicing_interrupts,
        this.n_ms_time_spent_since_boot_servicing_softirqs = n_ms_time_spent_since_boot_servicing_softirqs
    }
}
class O_meminfo_property{
    constructor(
        s_name,
        s_description, 
        n,
        n_nor_by_mem_total, 
        n_bytes, 
        n_kilobytes,
        n_megabytes, 
        n_gigabytes, 
        n_terrabytes
    ){
        this.s_name = s_name
        this.s_description = s_description, 
        this.n = n
        this.n_nor_by_mem_total = n_nor_by_mem_total,
        this.n_bytes = n_bytes, 
        this.n_kilobytes = n_kilobytes, 
        this.n_megabytes = n_megabytes, 
        this.n_gigabytes = n_gigabytes, 
        this.n_terrabytes = n_terrabytes
    }
}
class O_meminfo{
    constructor(
    ){
        this.n_ts_ms = new Date().getTime()
        this.n_window_performance_now = window.performance.now();
        this.o_meminfo_property_MemTotal = 
        new O_meminfo_property(
            'MemTotal',
            'Total amount of physical RAM available to the system.'
        )
        this.o_meminfo_property_MemFree = 
        new O_meminfo_property(
            'MemFree',
            'Amount of physical RAM left unused by the system.'
        )
        this.o_meminfo_property_memory_used_calculated = 
        new O_meminfo_property(
            'memory_used_calculated',
            'Amount of physical RAM currently in use by the system.'
        )
        this.o_meminfo_property_MemAvailable = 
        new O_meminfo_property(
            'MemAvailable',
            'Estimate of how much memory is available for starting new applications, without swapping.'
        )
        this.o_meminfo_property_Buffers = 
        new O_meminfo_property(
            'Buffers',
            'Memory used by kernel buffers.'
        )
        this.o_meminfo_property_Cached = 
        new O_meminfo_property(
            'Cached',
            'Memory used by the page cache and slabs (Cached and SReclaimable minus Shmem).'
        )
        this.o_meminfo_property_SwapCached = 
        new O_meminfo_property(
            'SwapCached',
            'Memory that once was swapped out, is swapped back in but still also is in the swap file.'
        )
        this.o_meminfo_property_Active = 
        new O_meminfo_property(
            'Active',
            'Memory that has been used more recently and usually not reclaimed unless absolutely necessary.'
        )
        this.o_meminfo_property_Inactive = 
        new O_meminfo_property(
            'Inactive',
            'Memory which has been less recently used. It is more eligible to be reclaimed for other purposes.'
        )
        this.o_meminfo_property_Active_anon_ = 
        new O_meminfo_property(
            'Active_anon_',
            '(anon): Active memory that belongs to anonymous processes.'
        )
        this.o_meminfo_property_Inactive_anon_ = 
        new O_meminfo_property(
            'Inactive_anon_',
            '(anon): Inactive memory that belongs to anonymous processes.'
        )
        this.o_meminfo_property_Active_file_ = 
        new O_meminfo_property(
            'Active_file_',
            '(file): Active memory that belongs to file allocations.'
        )
        this.o_meminfo_property_Inactive_file_ = 
        new O_meminfo_property(
            'Inactive_file_',
            '(file): Inactive memory that belongs to file allocations.'
        )
        this.o_meminfo_property_Unevictable = 
        new O_meminfo_property(
            'Unevictable',
            'Memory that cannot be evicted.'
        )
        this.o_meminfo_property_Mlocked = 
        new O_meminfo_property(
            'Mlocked',
            'Amount of memory locked in RAM.'
        )
        this.o_meminfo_property_SwapTotal = 
        new O_meminfo_property(
            'SwapTotal',
            'Total amount of swap space available.'
        )
        this.o_meminfo_property_SwapFree = 
        new O_meminfo_property(
            'SwapFree',
            'Amount of swap space that is currently unused.'
        )
        this.o_meminfo_property_Zswap = 
        new O_meminfo_property(
            'Zswap',
            'Compressed cache for swap pages.'
        )
        this.o_meminfo_property_Zswapped = 
        new O_meminfo_property(
            'Zswapped',
            'Amount of memory currently swapped, including compressed memory.'
        )
        this.o_meminfo_property_Dirty = 
        new O_meminfo_property(
            'Dirty',
            'Memory which is waiting to get written back to the disk.'
        )
        this.o_meminfo_property_Writeback = 
        new O_meminfo_property(
            'Writeback',
            'Memory which is actively being written back to the disk.'
        )
        this.o_meminfo_property_AnonPages = 
        new O_meminfo_property(
            'AnonPages',
            'Non-file backed pages mapped into user-space page tables.'
        )
        this.o_meminfo_property_Mapped = 
        new O_meminfo_property(
            'Mapped',
            'Files which have been mapped, such as libraries.'
        )
        this.o_meminfo_property_Shmem = 
        new O_meminfo_property(
            'Shmem',
            'Amount of memory consumed in tmpfs (shmem) filesystems.'
        )
        this.o_meminfo_property_KReclaimable = 
        new O_meminfo_property(
            'KReclaimable',
            'Kernel memory that might be reclaimed (slab allocations).'
        )
        this.o_meminfo_property_Slab = 
        new O_meminfo_property(
            'Slab',
            'In-kernel data structures cache.'
        )
        this.o_meminfo_property_SReclaimable = 
        new O_meminfo_property(
            'SReclaimable',
            'Part of Slab that can be reclaimed (such as caches).'
        )
        this.o_meminfo_property_SUnreclaim = 
        new O_meminfo_property(
            'SUnreclaim',
            'Part of Slab that cannot be reclaimed.'
        )
        this.o_meminfo_property_KernelStack = 
        new O_meminfo_property(
            'KernelStack',
            'Memory used by the kernel stack allocations.'
        )
        this.o_meminfo_property_PageTables = 
        new O_meminfo_property(
            'PageTables',
            'Memory used to store page tables.'
        )
        this.o_meminfo_property_SecPageTables = 
        new O_meminfo_property(
            'SecPageTables',
            'Memory used for secondary page tables.'
        )
        this.o_meminfo_property_NFS_Unstable = 
        new O_meminfo_property(
            'NFS_Unstable',
            'NFS pages sent to the server, but not yet committed to stable storage.'
        )
        this.o_meminfo_property_Bounce = 
        new O_meminfo_property(
            'Bounce',
            'Memory used for block device "bounce buffers".'
        )
        this.o_meminfo_property_WritebackTmp = 
        new O_meminfo_property(
            'WritebackTmp',
            'Memory used by FUSE for temporary writeback buffers.'
        )
        this.o_meminfo_property_CommitLimit = 
        new O_meminfo_property(
            'CommitLimit',
            'Total amount of memory currently available to be allocated on the system.'
        )
        this.o_meminfo_property_Committed_AS = 
        new O_meminfo_property(
            'Committed_AS',
            'Total amount of memory estimated to complete the workload.'
        )
        this.o_meminfo_property_VmallocTotal = 
        new O_meminfo_property(
            'VmallocTotal',
            'Total size of vmalloc memory area.'
        )
        this.o_meminfo_property_VmallocUsed = 
        new O_meminfo_property(
            'VmallocUsed',
            'Amount of vmalloc area which is used.'
        )
        this.o_meminfo_property_VmallocChunk = 
        new O_meminfo_property(
            'VmallocChunk',
            'Largest contiguous block of vmalloc area which is free.'
        )
        this.o_meminfo_property_Percpu = 
        new O_meminfo_property(
            'Percpu',
            'Memory used by per-CPU allocations.'
        )
        this.o_meminfo_property_HardwareCorrupted = 
        new O_meminfo_property(
            'HardwareCorrupted',
            'Memory that has been identified as corrupted by the hardware.'
        )
        this.o_meminfo_property_AnonHugePages = 
        new O_meminfo_property(
            'AnonHugePages',
            'Non-file backed huge pages mapped into user-space page tables.'
        )
        this.o_meminfo_property_ShmemHugePages = 
        new O_meminfo_property(
            'ShmemHugePages',
            'Amount of memory used for shared memory (shmem) huge pages.'
        )
        this.o_meminfo_property_ShmemPmdMapped = 
        new O_meminfo_property(
            'ShmemPmdMapped',
            'Amount of shared memory mapped into user-space page tables with huge pages.'
        )
        this.o_meminfo_property_FileHugePages = 
        new O_meminfo_property(
            'FileHugePages',
            'File backed huge pages mapped into user-space page tables.'
        )
        this.o_meminfo_property_FilePmdMapped = 
        new O_meminfo_property(
            'FilePmdMapped',
            'File backed pages mapped into user-space page tables with huge pages.'
        )
        this.o_meminfo_property_HugePages_Total = 
        new O_meminfo_property(
            'HugePages_Total',
            'Total number of huge pages.'
        )
        this.o_meminfo_property_HugePages_Free = 
        new O_meminfo_property(
            'HugePages_Free',
            'Number of free huge pages.'
        )
        this.o_meminfo_property_HugePages_Rsvd = 
        new O_meminfo_property(
            'HugePages_Rsvd',
            'Number of reserved huge pages.'
        )
        this.o_meminfo_property_HugePages_Surp = 
        new O_meminfo_property(
            'HugePages_Surp',
            'Number of surplus huge pages.'
        )
        this.o_meminfo_property_Hugepagesize = 
        new O_meminfo_property(
            'Hugepagesize',
            'Size of each huge page.'
        )
        this.o_meminfo_property_Hugetlb = 
        new O_meminfo_property(
            'Hugetlb',
            'Total size of huge pages of memory.'
        )
        this.o_meminfo_property_DirectMap4k = 
        new O_meminfo_property(
            'DirectMap4k',
            'Memory mapped with 4kB pages.'
        )
        this.o_meminfo_property_DirectMap2M = 
        new O_meminfo_property(
            'DirectMap2M',
            'Memory mapped with 2MB pages.'
        )
        this.o_meminfo_property_DirectMap1G = 
        new O_meminfo_property(
            'DirectMap1G',
            'Memory mapped with 1GB pages.'
        )
        this.a_o_meminfo_property = [
            this.o_meminfo_property_MemTotal,
            this.o_meminfo_property_MemFree,
            this.o_meminfo_property_MemAvailable,
            this.o_meminfo_property_Buffers,
            this.o_meminfo_property_Cached,
            this.o_meminfo_property_SwapCached,
            this.o_meminfo_property_Active,
            this.o_meminfo_property_Inactive,
            this.o_meminfo_property_Active,
            this.o_meminfo_property_Inactive,
            this.o_meminfo_property_Active,
            this.o_meminfo_property_Inactive,
            this.o_meminfo_property_Unevictable,
            this.o_meminfo_property_Mlocked,
            this.o_meminfo_property_SwapTotal,
            this.o_meminfo_property_SwapFree,
            this.o_meminfo_property_Zswap,
            this.o_meminfo_property_Zswapped,
            this.o_meminfo_property_Dirty,
            this.o_meminfo_property_Writeback,
            this.o_meminfo_property_AnonPages,
            this.o_meminfo_property_Mapped,
            this.o_meminfo_property_Shmem,
            this.o_meminfo_property_KReclaimable,
            this.o_meminfo_property_Slab,
            this.o_meminfo_property_SReclaimable,
            this.o_meminfo_property_SUnreclaim,
            this.o_meminfo_property_KernelStack,
            this.o_meminfo_property_PageTables,
            this.o_meminfo_property_SecPageTables,
            this.o_meminfo_property_NFS_Unstable,
            this.o_meminfo_property_Bounce,
            this.o_meminfo_property_WritebackTmp,
            this.o_meminfo_property_CommitLimit,
            this.o_meminfo_property_Committed_AS,
            this.o_meminfo_property_VmallocTotal,
            this.o_meminfo_property_VmallocUsed,
            this.o_meminfo_property_VmallocChunk,
            this.o_meminfo_property_Percpu,
            this.o_meminfo_property_HardwareCorrupted,
            this.o_meminfo_property_AnonHugePages,
            this.o_meminfo_property_ShmemHugePages,
            this.o_meminfo_property_ShmemPmdMapped,
            this.o_meminfo_property_FileHugePages,
            this.o_meminfo_property_FilePmdMapped,
            this.o_meminfo_property_HugePages_Total,
            this.o_meminfo_property_HugePages_Free,
            this.o_meminfo_property_HugePages_Rsvd,
            this.o_meminfo_property_HugePages_Surp,
            this.o_meminfo_property_Hugepagesize,
            this.o_meminfo_property_Hugetlb,
            this.o_meminfo_property_DirectMap4k,
            this.o_meminfo_property_DirectMap2M,
            this.o_meminfo_property_DirectMap1G
        ]
    }
}

export{
    O_cpu_stats,
    O_cpu_core_stats, 
    O_cpu_stats__diff, 
    O_cpu_core_stats__diff, 
    O_meminfo, 
    O_meminfo_property
}