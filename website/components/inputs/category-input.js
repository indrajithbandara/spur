var React = require('react')
  , Color = require('color')
  , Image = require('../common/image')
  , View = require('../common/view')
  , Text = require('../common/text')
  , categories = require('../../data/categories')

var styles = {}

styles.container = {
	flexDirection:'row',
	flexWrap:'wrap'
}

styles.block = {
	width:'25%',
	height:80,
	padding:15,
	cursor:'pointer',
	justifyContent:'center',
	alignItems:'center'
}

styles.input = {
	display:'none'
}

styles.label = {
	color:'#ffffff',
	textTransform:'uppercase',
	fontWeight:600,
	fontSize:14,
	textAlign:'center'
}

styles.selected = {
	position:'absolute',
	top:0,
	left:0,
	right:0,
	bottom:0,
	justifyContent:'center',
	alignItems:'center'
}

styles.check = {
	height:30
}

class CategoryInput extends React.Component {
	constructor(props) {
		super(props)
		this.state = { value:props.value }
	}
	selectCategory(value) {
		this.setState({ value })
	}
	renderSelection(category) {
		var backgroundColor = Color(category.color).alpha(0.6).rgbString()

		return (
			<View style={{ ...styles.selected, backgroundColor }}>
				<Image style={styles.check} src="/images/check.png" />
			</View>
		)
	}
	render() {
		return (
			<View style={styles.container}>
				{Object.keys(categories).map((key) => {
					var category = categories[key]
					  , selected = this.state.value == key
					
					return (
						<View key={key} style={{ ...styles.block, backgroundColor:category.color }} onClick={this.selectCategory.bind(this, key)}>
							<Text style={styles.label}>{category.name}</Text>
							{selected && this.renderSelection(category)}
						</View>
					)
				})}
				<input {...this.props} type="hidden" value={this.state.value} />
			</View>
		)
	}
}

module.exports = CategoryInput