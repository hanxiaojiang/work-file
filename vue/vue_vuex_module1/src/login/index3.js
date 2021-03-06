const state = {
  useName: "sam"
};
const mutations = {
  change_name (state, anotherName) {
    console.log("sd");
    state.useName = anotherName;
  }
};
 
const actions = {
  // actions 中的context参数对象多了 rootState 参数
  changeName ({commit, rootState},anotherName) {
    console.log("sd1");
    if(rootState.job !="web") {
      console.log("sd2");
      commit("change_name", anotherName)
    }
  },
  alertName({state}) {
    alert(state.useName)
  }
};
 
const getters = {
  // getters 获取到 rootState, rootGetters 作为参数。
  // rootState和 rootGetter参数顺序不要写反，一定是state在前，getter在后面，这是vuex的默认参数传递顺序， 可以打印出来看一下。
  localJobTitle (state,getters,rootState,rootGetters) { 
    console.log(rootState);
    console.log(rootGetters);
    return rootGetters.jobTitle + " aka " + rootState.job 
  }
};
 
// 不要忘记把state, mutations等暴露出去。
// namespaced 属性，限定命名空间
export default {
	namespaced:true,
  state,
  mutations,
  actions,
  getters
}