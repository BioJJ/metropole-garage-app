import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Layout from '../components/Layout'
import Dashboard from '../pages/Dashboard'
import User from '../pages/User/List'
import Vehicle from '../pages/Activity/List'

export enum DashboardRoutesEnum {
	FIRST_SCREEN = '/dashboard'
}

const AppRoutes: React.FC = () => (
	<Layout>
		<Routes>
			<Route path="/dashboard" element={<Dashboard />} />
			<Route path="/list/user" element={<User />} />
			<Route path="/list/vehicle" element={<Vehicle />} />
		</Routes>
	</Layout>
)

export default AppRoutes
