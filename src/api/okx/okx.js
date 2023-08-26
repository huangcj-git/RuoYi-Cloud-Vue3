import request from '@/utils/request'

// 查询定时任务调度列表
export function pullFile(query) {
    return request({
        url: '/okx/pull-file',
        method: 'get',
        params: query
    })
}
