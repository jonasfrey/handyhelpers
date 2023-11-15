class O_cpu_stats{
    constructor(
        s_proc_stat,
        n_time_unit_user_hz,//USER_HZ typically 1sec/100,
        n_total_context_switches_across_all_cpus,
        n_ts_ms_ut__booted, 
        n_processes_and_threads_created,
        n_processes_running,
        n_processes_blocked_waiting_for_io_to_complete,
        a_o_cpu_core_stats
    ){
        this.s_proc_stat = s_proc_stat,
        this.n_time_unit_user_hz = n_time_unit_user_hz,
        this.n_total_context_switches_across_all_cpus = n_total_context_switches_across_all_cpus,
        this.n_ts_ms_ut__booted = n_ts_ms_ut__booted, 
        this.n_processes_and_threads_created = n_processes_and_threads_created,
        this.n_processes_running = n_processes_running,
        this.n_processes_blocked_waiting_for_io_to_complete = n_processes_blocked_waiting_for_io_to_complete,
        this.a_o_cpu_core_stats = a_o_cpu_core_stats

        //getconf CLK_TCK
    }
    get n_cpus(){
        return this.a_o_cpu_core_stats.length
    }
}
class O_cpu_core_stats{
    constructor(
        n_processes_executing_in_user_mode,
        n_niced_processes_executing_in_user_mode,
        n_processes_executing_in_kernel_mode,
        n_idle, 
        n_io_wait,
        n_servicing_interrupts,
        n_servicing_softirqs
    ){
        this.n_processes_executing_in_user_mode = n_processes_executing_in_user_mode,
        this.n_niced_processes_executing_in_user_mode = n_niced_processes_executing_in_user_mode,
        this.n_processes_executing_in_kernel_mode = n_processes_executing_in_kernel_mode,
        this.n_idle = n_idle, 
        this.n_io_wait = n_io_wait,
        this.n_servicing_interrupts = n_servicing_interrupts,
        this.n_servicing_softirqs = n_servicing_softirqs  
    }
}

export{
    O_cpu_stats,
    O_cpu_core_stats
}