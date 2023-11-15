class O_cpu_stats{
    constructor(
        s_proc_stat,
        n_time_unit_user_hz,//USER_HZ typically 1sec/100,
        n_total_context_switches_across_all_cpus,
        n_ts_ms_ut__booted, 
        n_processes_and_threads_created,
        n_processes_running,
        n_processes_blocked_waiting_for_io_to_complete,
        s_softirqs,
        s_lscpu,
        a_o_cpu_core_stats, 
        o_cpu_core_stats__total
    ){
        this.n_ms_window_performance_now = window.performance.now()
        this.a_o_cpu_stats = [];
        this.s_proc_stat = s_proc_stat,
        this.n_time_unit_user_hz = n_time_unit_user_hz,
        this.n_total_context_switches_across_all_cpus = n_total_context_switches_across_all_cpus,
        this.n_ts_ms_ut__booted = n_ts_ms_ut__booted, 
        this.n_processes_and_threads_created = n_processes_and_threads_created,
        this.n_processes_running = n_processes_running,
        this.n_processes_blocked_waiting_for_io_to_complete = n_processes_blocked_waiting_for_io_to_complete,
        this.s_softirqs = s_softirqs,
        this.s_lscpu = s_lscpu
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
        o_cpu_stats,
        s, 
        n_ms_time_spent_processes_executing_in_user_mode,
        n_ms_time_spent_niced_processes_executing_in_user_mode,
        n_ms_time_spent_processes_executing_in_kernel_mode,
        n_ms_time_spent_idle, 
        n_ms_time_spent_io_wait,
        n_ms_time_spent_servicing_interrupts,
        n_ms_time_spent_servicing_softirqs
    ){
        this.o_cpu_stats = o_cpu_stats
        this.s = s
        // the times listed here 
        this.n_ms_time_spent_since_boot_processes_executing_in_user_mode = n_ms_time_spent_processes_executing_in_user_mode,
        this.n_ms_time_spent_since_boot_niced_processes_executing_in_user_mode = n_ms_time_spent_niced_processes_executing_in_user_mode,
        this.n_ms_time_spent_since_boot_processes_executing_in_kernel_mode = n_ms_time_spent_processes_executing_in_kernel_mode,
        this.n_ms_time_spent_since_boot_idle = n_ms_time_spent_idle, 
        this.n_ms_time_spent_since_boot_io_wait = n_ms_time_spent_io_wait,
        this.n_ms_time_spent_since_boot_servicing_interrupts = n_ms_time_spent_servicing_interrupts,
        this.n_ms_time_spent_since_boot_servicing_softirqs = n_ms_time_spent_servicing_softirqs


    }
}

export{
    O_cpu_stats,
    O_cpu_core_stats
}