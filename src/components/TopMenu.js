import React from 'react'
import { Menu } from 'semantic-ui-react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

class TopMenu extends React.Component {

  render() {
    return (
      <Menu pointing secondary>
        <Menu.Menu position='right'>
        </Menu.Menu>
      </Menu>
    )
  }
}

const ConnectedEvents = connect(
  null,
  null
)(TopMenu)
export default ConnectedEvents

TopMenu.contextTypes = {
  store: PropTypes.object
}