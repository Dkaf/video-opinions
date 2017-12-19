export default {
  youtubeReviews: state => {
    return state.reviews.filter(review => review.type === 'youtube')
  },
  movieReviews: state => {
    return state.reviews.filter(review => review.type === 'movie')
  }
}