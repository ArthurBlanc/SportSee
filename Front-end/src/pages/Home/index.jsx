import { useContext } from 'react'

import { Context } from '../../context'

import ToggleButton from '../../components/ToggleButton'
import ComingSoon from '../../components/ComingSoon'

import './style.scss'

/**
 * Render Home page
 *
 * @category Pages
 * @component
 * @returns { React.Component } A React component
 */
function Home() {
	document.title = 'Accueil - SportSee'
	const { userToggle, setUserToggle } = useContext(Context)

	return (
		<section className="home">
			<div className="user-switch-wrapper">
				<p className="user-switch">
					Switch <span>Utilisateur</span> :
				</p>
				<ToggleButton
					id="userLink"
					checked={userToggle}
					onChange={setUserToggle}
					optionLabels={['18', '12']}
				/>
			</div>
			<ComingSoon />
		</section>
	)
}

export default Home
