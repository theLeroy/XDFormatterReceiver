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
}

export const getters = {
    getTypo: (state) => {
        return state.fonts
    },
    getColors: (state) => {
        return state.colors.colors
    }

}