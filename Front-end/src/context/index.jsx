import React, { useState, createContext, useEffect } from 'react'
import PropTypes from 'prop-types'

export const Context = createContext()

/**
 * Provider of the data for the app using context, state and fetch
 *
 * @returns { React.Component } A React component returning the Context.Provider with the value of the state and the setState functions
 */
export const Provider = ({ children }) => {
	const [userId, setUserId] = useState(null)
	const [user, setUser] = useState(null)
	const [activity, setActivity] = useState(null)
	const [averageSessions, setAverageSessions] = useState(null)
	const [performance, setPerformance] = useState(null)
	const [userToggle, setUserToggle] = useState(false)

	useEffect(() => {
		if (userId) {
			fetch(`http://localhost:3000/user/${userId}`).then((response) =>
				response
					.json()
					.then(({ data }) => {
						setUser(data)
					})
					.catch((error) => console.log(error))
			)
			fetch(`http://localhost:3000/user/${userId}/activity`).then(
				(response) =>
					response
						.json()
						.then(({ data }) => {
							setActivity(data)
						})
						.catch((error) => console.log(error))
			)
			fetch(`http://localhost:3000/user/${userId}/average-sessions`).then(
				(response) =>
					response
						.json()
						.then(({ data }) => {
							setAverageSessions(data)
						})
						.catch((error) => console.log(error))
			)
			fetch(`http://localhost:3000/user/${userId}/performance`).then(
				(response) =>
					response
						.json()
						.then(({ data }) => {
							setPerformance(data)
						})
						.catch((error) => console.log(error))
			)
		}
	}, [userId])

	return (
		<Context.Provider
			value={{
				userId,
				setUserId,
				user,
				setUser,
				activity,
				setActivity,
				averageSessions,
				setAverageSessions,
				performance,
				setPerformance,
				userToggle,
				setUserToggle,
			}}
		>
			{children}
		</Context.Provider>
	)
}

Provider.propTypes = {
	/**
	 * The children of the Provider component
	 */
	children: PropTypes.object.isRequired,
}
