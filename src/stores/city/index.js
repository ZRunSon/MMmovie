//第一步创建状态码
const state = {
    //判断有没有记录值
    nm : window.localStorage.getItem('nowNm') || '北京',
    id : window.localStorage.getItem('nowId') || 1
}

const actions = {

}

const mutations = {
    //状态管理的方法（要用大写字母来表明）
    CIIY_INFO(state,payload){
        state.nm = payload.nm;
        state.id = payload.id;
    }
}

//第二步设置对外接口
export default{
    //命名空间
    namespaced : true,
    state,
    actions,
    mutations
}

