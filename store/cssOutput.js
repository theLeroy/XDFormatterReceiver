export const state = () => ({
    fonts: '',
    colors: ''
})

export const mutations = {
    addTypo(state, font) {
        state.fonts = font
    },
    addColors(state, colors) {
        state.colors = colors
    },
}

export const getters = {
    getTypo: (state) => {
        return state.fonts
    },
    getColors: (state) => {
        return state.colors
    }

}