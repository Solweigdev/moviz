import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
    state: {
        user: {
            pseudo: null,
            score: null
        },
        timer: 60,
        movies: {}
    },
    mutations: {
        SET_NEW_USER: state => {
            const dataPet = ['Panda', 'dauphin', 'elephant', 'singe', 'gorille']
            const dataAdj = ['égoïste', 'intelligent ', 'optimiste', 'peureux', 'âgé']

            state.user.pseudo = `${ dataPet[Math.floor(Math.random() * dataPet.length)]} ${ dataAdj[Math.floor(Math.random() * dataPet.length)]}`
            state.user.score = 0
        },

        SET_INIT_TIMER: state => {
            state.timer = 60;
        }
    },
    actions: {

        fetchMovies: async (commit) => {
            try {
                const response = await axios.get('https://api.themoviedb.org/3/movie/550?api_key=0b593b9a79fb88e585954bc7c70bfbc3');
            } catch (error) {
                console.log('error', error)
            }
        }

    },
    getters: {
        getUser: state => {
            return state.user
        },

        getTimer: state => {
            return state.timer
        }
    }
})