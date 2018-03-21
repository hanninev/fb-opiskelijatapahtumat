import React from 'react'
import { Button, Icon, Grid } from 'semantic-ui-react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { setNextWeek, setPreviousWeek, setCurrentWeek } from '../reducers/calendarReducer'

class WeekNavigation extends React.Component {
  render() {
    return (
      <Grid columns={3} stretched={true} centered={true}>
        <Grid.Row only='computer tablet'>
          <Grid.Column>
            <Button onClick={() => this.props.setPreviousWeek()} icon labelPosition='left'>
              <Icon name='left arrow' />
                            Edellinen
            </Button>
          </Grid.Column>
          <Grid.Column>
            <Button onClick={() => this.props.setCurrentWeek()}>
                            Nykyinen viikko
            </Button>
          </Grid.Column>
          <Grid.Column>
            <Button onClick={() => this.props.setNextWeek()} icon labelPosition='right'>
                            Seuraava
              <Icon name='right arrow' />
            </Button>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row stackable={true} only='mobile'>
          <Button onClick={() => this.props.setPreviousWeek()} icon>
            <Icon name='left arrow'/>
          </Button>
          <Button onClick={() => this.props.setCurrentWeek()}>
                            Nykyinen viikko
          </Button>
          <Button onClick={() => this.props.setNextWeek()} icon>
            <Icon name='right arrow' />
          </Button>
        </Grid.Row>
      </Grid>
    )
  }
}

const mapDispatchToProps = {
  setNextWeek,
  setPreviousWeek,
  setCurrentWeek
}

const ConnectedEvents = connect(
  null,
  mapDispatchToProps
)(WeekNavigation)
export default ConnectedEvents

WeekNavigation.contextTypes = {
  store: PropTypes.object
}