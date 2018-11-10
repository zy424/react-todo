import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {BottomNavigation, BottomNavigationAction, Icon} from '@material-ui/core'
import FavoriteIcon from '@material-ui/icons/Favorite'
import RestoreIcon from '@material-ui/icons/Restore'

import {VisibilityFilters} from '../actions'


class Footer extends Component {
  render() {
    return (
      <BottomNavigation
        value={this.props.filterValue}
        onChange={(event, value) => this.props.onClick(value)}
      >
        <BottomNavigationAction
          showLabel
          value={VisibilityFilters.SHOW_ALL}
          icon={<RestoreIcon/>}
          label='Show All'
        />
        <BottomNavigationAction
          showLabel
          value={VisibilityFilters.SHOW_ACTIVE}
          icon={<FavoriteIcon/>}
          label='Show Active'
        />
        <BottomNavigationAction
          showLabel
          value={VisibilityFilters.SHOW_COMPLETED}
          icon={<Icon>folder</Icon>}
          label='Show Completed'
        />
      </BottomNavigation>
    )
  }
}

Footer.propTypes = {
  filterValue: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
}

export default Footer
