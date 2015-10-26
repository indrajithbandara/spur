var React = require('react')
  , EventMap = require('./event-map')
  , EventChat = require('./event-chat')
  , EventSummary = require('./event-summary')
  , EventBanner = require('./event-banner')
  , Attendees = require('./attendees')
  , AttendAndInvite = require('./attend-and-invite')
  , Layout = require('../layout')
  , Section = require('../layout/section')
  , Heading = require('../layout/heading')
  , View = require('../core/view')
  , Text = require('../core/text')
  , Link = require('../core/link')
  , categories = require('../../data/categories')
  , scroll = __BROWSER__ && require('scroll')
  , ActionBar = require('./action-bar')

var styles = {}

styles.banner = {
	paddingTop:5,
	paddingBottom:5,
	flexDirection: 'row',
	justifyContent: 'space-between'
}

styles.details = {
	backgroundColor: '#f4f4f4',
	borderBottomWidth: 1,
	borderBottomColor: '#ddd',
	flexDirection:'row',
	paddingTop:20,
	paddingBottom:20
}

styles.detailsText = {
	flexGrow: 1,
	maxWidth: '100%'
}

styles.content = {
	paddingTop:20,
	paddingBottom:20,
	backgroundColor:'#fff'
}

styles.back = {
	color: '#fff',
	fontWeight: 600
}

styles.categoryText = {
	color: '#fff',
	fontWeight: 600,
	textTransform: 'uppercase'
}

class EventPage extends React.Component {
	onEventBannerClick() {
		var distance = React.findDOMNode(this.refs.eventBanner).getBoundingClientRect().top
		scroll.top(document.body, window.scrollY+distance, { duration:Math.abs(distance) })
	}
	goBack() {
		window.history.back()
	}
	render() {
		var { event, user, device, url, location } = this.props
		  , category = categories[event.category || 'other']
		  , bannerStyles = { ...styles.banner, backgroundColor:category.color }
		
		return (
			<Layout noFooter={true} user={user} device={device} url={url}>
				
				<EventMap event={event} />

				<Section style={bannerStyles}>
					<Link onClick={this.goBack.bind(this)} style={styles.back}>{'< Back'}</Link>
					<View style={styles.category}>
						<Text style={styles.categoryText}>{category.name}</Text>
					</View>
				</Section>
				
				<ActionBar event={event} />

				<EventSummary event={event} location={location} />

				<Section style={styles.content}>
					<AttendAndInvite event={event} />
					<Attendees style={styles.attendees} event={event} />
				</Section>
				
				{event.details && <Section style={styles.details}>
					<View style={styles.detailsText}>
						<Heading>Details</Heading>
						<Text>{event.details}</Text>
					</View>
				</Section>}

				<EventChat event={event} />
			</Layout>
		)
	}
}

module.exports = EventPage