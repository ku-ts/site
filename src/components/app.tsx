import { FunctionalComponent, h } from 'preact';
import { Route, Router } from 'preact-router';

import Home from '../routes/home';
import NotFoundPage from '../routes/notfound';
import Header from './header';

const App: FunctionalComponent = () => {
	return (
		<div id="preact_root">
			<Header />
			<Router>
				<Route path="/" component={Home} />
				<NotFoundPage default />
			</Router>
			{typeof document !== 'undefined' ? (
				<span class="credits">
					Website made by{' '}
					<a
						href={'https://nora.lgbt/?ref=' + document.location.href}
						class="link"
					>
						Nora
					</a>
				</span>
			) : (
				<span class="credits">
					Website made by{' '}
					<a href={'https://nora.lgbt/'} class="link">
						Nora
					</a>
				</span>
			)}
		</div>
	);
};

export default App;
