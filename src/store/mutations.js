export default {
	selectVideo(state, video) {
		state.video = video
	},
	addReviewSuccess(state, review) {
		state.reviews.push(review)
	},
	addReviewErr(state, err) {
		console.log(err)
	},
	updateReviewListSuccess(state, reviews) {
		state.reviews = reviews
	},
	updateReviewListErr(state, err) {
		console.log(err)
	},
	loginSuccess(state, token) {
		state.token = token;
  },
  loginErr(state, err) {
    console.log(err);
  }
}