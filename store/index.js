export const state = () => ({
  works: []
});

export const mutations = {
  SET_WORKS(state, works) {
    state.works = works;
  }
};

export const getters = {
  getWork: state => work_id => state.works.find(w => w._id == work_id) || null
};

export const actions = {
  async getWorks({ commit, state }) {
    if (state.works.length === 0) {
      const works = await this.$axios.$get('/data/json/works.json');
      commit('SET_WORKS', works);
    }
  },

  async getWork({ commit, getters }, { _id }) {
    return new Promise(async (resolve, reject) => {
      if (!getters.getWork(_id)) {
        const works = await this.$axios.$get('/data/json/works.json');
        commit('SET_WORKS', works);

        if (getters.getWork(_id)) {
          resolve();
        } else {
          reject('No se encontro el trabajo');
        }
      }
    });
  }
};
