import axios from './api'

const SERVER = {
    /**
     * 查询指定目录的key列表
     */
    GetMemberList() {
        return axios.get(`/v1/members`);
    },

    /**
     * 获取所有etcd服务列表
     */
    GetEtcdServerList(){
        return axios.get(`/v1/server`);
    }

}

export {
    SERVER
}
