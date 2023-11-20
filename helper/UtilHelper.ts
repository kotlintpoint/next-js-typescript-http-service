
export const convertReviewDate = (timestamp) => {
    return new Date(timestamp).toLocaleDateString('en-GB', {
        month : 'short',
        year : 'numeric'
    })
}
export default {
    convertReviewDate
}