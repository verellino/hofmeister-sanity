export const state = () => ({
  eventInformation: {
    title: 'This is the test title'
  },
  program: {},
  services: {},
})

export const getters = {
  eventInformation(state) {
    return state.eventInformation
  },
  getProgram(state) {
    return state.program
  },
  services(state) {
    return state.services
  }
}

export const mutations = {
  setEventInformation(state, info) {
    state.eventInformation = info
  },
  setProgram(state, program) {
    state.program = program
  },
  setServices(state, services) {
    state.services = services
  }
}
