import HTTP from './../axiosBase'
import store from './index'

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
	removeReview({ commit }, id) {
		HTTP.delete('/review', {
			headers: {'X-Access-Token': store.state.token},
			data:{id: id}
		})
		.then( res => {
			commit('removeReviewSuccess', res.data.review)
		})
		.catch( err => {
			commit('removeReviewErr', err)
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
    HTTP.post('/login', {
      password: password
    }).then( res => {
			commit('loginSuccess', res.data.token)
    })
    .catch( err => {
      commit('loginErr', err);
    })
	},
	changePass({ commit }, passwords) {
		store.dispatch('login', passwords.oldPass)
		.then( () => {
			HTTP.post('/settings', {
				headers: {'x-access-token': store.state.token},
				data: {password: passwords.newPass}
			})
			.then( res => {
				commit('changePassSuccess')
			})
			.catch( err => {
				commit('changePassErr', err)
			})
		})
	}
}