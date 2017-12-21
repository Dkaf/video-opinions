export default {
  youtubeReviews: state => {
    return state.reviews.filter(review => review.type === 'youtube')
  },
  movieReviews: state => {
    return state.reviews.filter(review => review.type === 'movie')
  },
  getReview: (state) => (name) => {
    return state.reviews.find( review => review.title === name)
  }
}