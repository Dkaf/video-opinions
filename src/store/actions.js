import {HTTP} from './../axiosBase'

export default {
	selectVideo({ commit }, video) {
		commit('selectVideo', video)
	},
	addReview({ commit, state }, review) {
		HTTP({
      method: 'post',
      url: '/review',
			headers: {
				'X-Access-Token': state.token
			},
			data: {
				title: review.title,
				reviewText: review.reviewText,
				type: review.type,
				thumbnail: review.thumbnail
			}
		}).then( res => {
			commit('addReviewSuccess', res.data.review)
		})
		.catch( err => {
			commit('addReviewErr', err)
		})
	},
	updateReviewList({ commit }) {
		HTTP('/review')
		.then( res => {
			commit('updateReviewListSuccess', res.data.reviews)
		})
		.catch( err => {
			commit('updateReviewListErr', err)
		})
	},
	login({ commit }, password) {
    axios.post('/login', {
      password: password
    }).then( res => {
      commit('loginSuccess', res.data.token)
    })
    .catch( err => {
      commit('loginErr', err);
    })
	}
}