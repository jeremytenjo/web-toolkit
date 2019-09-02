import { string, func, array, bool } from 'prop-types'

export const defaultProps = {
  poster: '',
  title: '',
  overview: '',
  playIcon: 'play/feather',
  playLabel: 'Play',
  plusIcon: 'plus/feather',
  plusLabel: 'Load More',
  starIcon: 'star/feather',
  starLabel: 'Add to watchlist',
  favorite: null,
  moreLinks: null,
  onPlay: () => null,
  onLoadMore: () => null,
}

export const propTypes = {
  poster: string,
  title: string,
  overview: string,
  favorite: bool,
  moreLinks: array,
  onPlay: func,
  onLoadMore: func,
}
