export const state = () => ({
    fonts: [],
    colors: []
})

export const mutations = {
    addTypo(state, fontObj) {
        state.fonts = fontObj
    },
    addColors(state, ColorsObj) {
        state.colors = ColorsObj
    },
    // remove(state, { todo }) {
    //     state.fonts.splice(state.fonts.indexOf(todo), 1)
    // },
    // toggle(state, todo) {
    //     todo.done = !todo.done
    // }
}

export const getters = {
    getTypo: (state) => {
        return state.fonts
    },
    getColors: (state) => {
        return state.colors.colors
    }

}