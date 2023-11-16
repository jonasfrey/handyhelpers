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

export{
    O_cpu_stats,
    O_cpu_core_stats, 
    O_cpu_stats__diff, 
    O_cpu_core_stats__diff
}