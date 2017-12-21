export default {
	selectVideo(state, video) {
		state.video = video
	},
	addReviewSuccess(state, review) {
		state.reviews.push(review)
	},
	addReviewErr(state, err) {
		state.err = err
	},
	removeReviewSuccess(state, review) {
		console.log("successfully removed " + review)
	},
	removeReviewErr(state, err) {
		state.err = err
	},
	updateReviewListSuccess(state, reviews) {
		state.reviews = reviews
	},
	updateReviewListErr(state, err) {
		state.err = err
	},
	loginSuccess(state, token) {
		state.loggedIn = true;
		state.token = token;
  },
  loginErr(state, err) {
    state.err = err;
  }
}