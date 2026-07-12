import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import Demos from '../../bpl-tools/Admin/Demos';
import OurPlugins from '../../bpl-tools/Admin/OurPlugins';
import Settings from '../../bpl-tools/Admin/Settings';

import Layout from './Layout/Layout';
import Welcome from './Pages/Welcome';
import { demoInfo } from './utils/data';

const App = (props) => {
	return <Router>
		<Routes>
			<Route path='/' element={<Layout {...props} />}>
				<Route index element={<Welcome {...props} />} />

				<Route path='welcome' element={<Welcome {...props} />} />

				<Route path='demos' element={<Demos demoInfo={demoInfo} {...props} />} />

				<Route path='our-plugins' element={<OurPlugins {...props} />} />

				<Route path='settings' element={<Settings {...props} ajaxAction='ttbSaveUninstallOption' cleanupItems={[
					'All Typing Text posts (ShortCode Generator items)',
					'Plugin settings and options',
					'License activation data',
				]} />} />

				<Route path='*' element={<Navigate to='/welcome' replace />} />
			</Route>
		</Routes>
	</Router>
}
export default App;