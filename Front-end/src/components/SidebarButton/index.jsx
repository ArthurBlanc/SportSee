import './style.scss'

function SidebarButton({ logo }) {
	console.log(logo)

	return (
		<button className="sidebar-button">
			<img src={logo} alt="Yoga" className="sidebar-button-logo" />
		</button>
	)
}

export default SidebarButton
