var React = require('react')
  , Layout = require('../layout')
  , Section = require('../layout/section')
  , Label = require('../layout/label')
  , LocationInput = require('../input/location-input')
  , CategoryInput = require('../input/category-input')
  , TimeInput = require('../input/time-input')
  , Input = require('../core/input')
  , Button = require('../core/button')
  , Form = require('../core/form')
  , View = require('../core/view')
  , Text = require('../core/text')
  , timeUtil = require('../../util/time')

var styles = {}

styles.timesDivider = {
	margin: 10,
	marginTop: 31,
	fontSize:12,
	color:'#aaa'
}

styles.fieldset = {
	flexDirection: 'row',
	flexWrap: 'wrap',
	maxWidth: '100%'
}

styles.field = {
	marginBottom:30,
}

styles.actions = {
	alignItems:'flex-end'
}

styles.titleInput = {
	fontWeight:300,
	fontSize:24
}

styles.toggleEndTime = {
	marginLeft: 5,
	textDecoration: 'underline',
	color: 'rgb(4, 165, 180)',
	cursor: 'pointer'
}

class NewEventForm extends React.Component {
	constructor(props) {
		super(props)
		var { event } = props
		this.state = { 
			location:event && event.location, 
			time:event && event.time || timeUtil.anHourFromNow(true),
			hasEnd:!!(event && event.endTime),
			showEndTime: !!(event && event.endTime) ? true : false
		}
	}
	changeTime(time) {
		this.setState({ time })
	}
	changeLocation(location) {
		this.setState({ location })
		var node = React.findDOMNode(this.refs.locationName)
		if(node) node.value = location && location.name || ''
	}
	preventSubmit(e) {
		if(e.keyCode == 13)
			e.preventDefault()
	}
	addEndTime() {
		this.setState({ showEndTime:true })
	}
	removeEndTime() {
		this.setState({ showEndTime:false })
	}
	render() {
		var { location, time } = this.state
		  , event = this.props.event
		  , defaultEndTime = new Date(time)

		defaultEndTime = this.state.hasEnd ? event.endTime : new Date(defaultEndTime.setHours(defaultEndTime.getHours()+1))
		
		return (
			<Layout user={this.props.user}>
				<Section>
					<Form action={event ? '/event/'+event.id+'/edit' : '/create/event'}>
						<View style={styles.field}>
							<Label required={true}>Event Name</Label>
							<Input style={styles.titleInput} defaultValue={event && event.name} onKeyDown={this.preventSubmit.bind(this)} maxLength={64} name="name" type="text" placeholder="Name this event..." required={true} />
						</View>
						<View style={styles.fieldset}>
							<View style={styles.field}>
								<Label required={true}>Start Time 
									{(!this.state.showEndTime && this.state.hasEnd) && 
										<Text style={styles.toggleEndTime} onClick={this.addEndTime.bind(this)}>Need an End Time?</Text>}
								</Label>
								<TimeInput name="time" defaultValue={time} err="The start time cannot be in the past." display="relative" onChange={this.changeTime.bind(this)} onKeyDown={this.preventSubmit.bind(this)} required={true} />
							</View>
							{this.state.showEndTime || (this.state.showEndTime && this.state.hasEnd) ? 
								[<Text style={styles.timesDivider}>to</Text>,
								<View style={styles.field}>
									<Label required={true}>End Time
										<Text style={styles.toggleEndTime} onClick={this.removeEndTime.bind(this)}>Remove End Time</Text>
									</Label>
									<TimeInput name="endTime" err="The end time must be after the start time." defaultValue={defaultEndTime} startTime={time} display="duration" onKeyDown={this.preventSubmit.bind(this)} />
								</View>] : ''
							}
						</View>
						<View style={styles.field}>
							<Label required={true}>{location ? 'Location Address' : 'Location'}</Label>
							<LocationInput name="location" noDetect={true} defaultValue={location} location={this.props.location} required={true} onChange={this.changeLocation.bind(this)} />
						</View>
						{location && <View style={styles.field}>
							<Label>Location Name</Label>
							<Input ref="locationName" onKeyDown={this.preventSubmit.bind(this)} maxLength={48} name="location[name]" type="text" defaultValue={location.name} placeholder={"Add name, apartment #, field..."} />
						</View>}
						<View style={styles.field}>
							<Label required={true}>Category</Label>
							<CategoryInput name="category" defaultValue={event && event.category} required={true} />
						</View>
						<View style={styles.field}>
							<Label required={true}>Who can come?</Label>
							<Input name="private" required={true} type="select" defaultValue={event && event.private}>
								<option value={false}>Anyone | Makes it public to the Spur Community.</option>
								<option value={true}>Invite only | Share your event link with friends.</option>
							</Input>
						</View>
						<View style={styles.field}>
							<Label>Additional Details</Label>
							<Input type="textarea" name="details" defaultValue={event && event.details} style={Input.style} placeholder="Anthing else people need to know..." />
						</View>
						<View style={styles.actions}>
							<Button src="/images/create.png" type="submit">{event ? 'Save Event' : 'Create Event'}</Button>
						</View>
					</Form>
				</Section>
			</Layout>
		)
	}
}

module.exports = NewEventForm