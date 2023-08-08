import { Link, Route, Routes } from 'react-router-dom'
import './App.css'
import { CubeContainer } from './components/cube/CubeContainer'
import { XrCubeContainer } from './components/xr-cube/XrCubeContainer'
import { XrHitCubeContainer } from './components/xr-hit-cube/XrHiCubeContainer'
import { ModelCanvas } from './components/xr-model/ModelCanvas'
import { OverlayCanvas } from './components/overlay/OverlayCanvas'

function App() {
	return (
		<div className={'layout'}>
			<nav className={'nav'}>
				<Link to='/'> Home</Link>
				<Link to='/cube'> Cube</Link>
				<Link to='/xr-cube'> xr-Cube</Link>
				<Link to='/xr-hit-cube'> hit-cube</Link>
				<Link to='/model'>Model</Link>
				<Link to='/Overlay'>Ovelay</Link>
			</nav>
			<Routes>
				<Route path={'/'} element={<>hallo</>} />
				<Route path={'/cube'} element={<CubeContainer />} />
				<Route path={'/xr-cube'} element={<XrCubeContainer />} />
				<Route path={'/xr-hit-cube'} element={<XrHitCubeContainer />} />
				<Route path={'/model'} element={<ModelCanvas />} />
				<Route path={'/overlay'} element={<OverlayCanvas />} />
			</Routes>
		</div>
	)
}

export default App
