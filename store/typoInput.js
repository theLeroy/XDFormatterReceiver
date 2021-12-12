export const state = () => ({
    fonts: [],
    colors: []
})

export const mutations = {
    addTypo(state, fontObj) {
        state.fonts.push({
            fontObj,
        })
    },
    addColors(state, ColorsObj) {
        state.colors.push({
            ColorsObj,
        })
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
        return state.fonts[0].fontObj
    },
    getColors: (state) => {
        return state.colors[0].ColorsObj
    }

}