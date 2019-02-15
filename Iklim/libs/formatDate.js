import moment from 'moment'

const formatDate = (epoch) => {
  return moment.unix(epoch).format('YYYY-MM-D')
}

export default formatDate