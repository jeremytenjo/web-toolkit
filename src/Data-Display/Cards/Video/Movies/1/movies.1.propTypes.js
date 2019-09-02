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
  starLabelIsFavorite: 'Remove from watchlist',
  starLabelIsNotFavorite: 'Add to watchlist',
  iconBackgroundColor: 'primary-lighter',
  titleVariant: 'h6',
  overviewVariant: 'body2',
  favorite: null,
  moreLinks: null,
  onPlay: () => null,
  onLoadMore: () => null,
  onFavoriteToggle: () => null,
}

export const propTypes = {
  poster: string,
  title: string,
  overview: string,
  iconBackgroundColor: string,
  favorite: bool,
  moreLinks: array,
  onPlay: func,
  onLoadMore: func,
  onFavoriteToggle: func,
}
