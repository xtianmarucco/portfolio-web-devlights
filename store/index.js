export const state = () => ({
  works: []
});

export const mutations = {
  SET_WORKS(state, works) {
    state.works = works;
  }
};

export const getters = {
  getWork: state => work_id => {
    return state.works.find(w => w._id == work_id) || null;
  }
};

export const actions = {
  async getWorks({ commit, state }) {
    if (state.works.length === 0) {
      const works = await this.$axios.$get(
        'https://mauriciohernancabrera.github.io/devlights-works-data/data/works.json'
      );
      commit('SET_WORKS', works);
    }
  },

  async getWork({ commit, getters }, { _id }) {
    this.$router.push('/');
    if (!getters.getWork(_id)) {
      const works = await this.$axios.$get(
        'https://mauriciohernancabrera.github.io/devlights-works-data/data/works.json'
      );
      commit('SET_WORKS', works);
    }
  }
};
