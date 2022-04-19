import { Component, h } from 'preact';
import Terminal from '../../components/terminal';
import Typewriter from '../../components/terminal/typewriter';
import style from './style.scss';

class e404 extends Component<
	{},
	{
		showAfter: boolean;
	}
> {
	render() {
		if (typeof document !== 'undefined')
			document.title = '404 - Not Found - 3qmk.xyz';
		return (
			<div class={style.notfound}>
				<span class={style.userhost}>aga@ngc</span>
				<span class={style.colon}>:</span>
				<span class={style.path}>~/3qmk.xyz</span>$ node out/location
				{document?.location.pathname ?? 'unknown'}.js
				<Terminal
					text={[
						{
							type: 'text',
							text: 'node:internal/modules/cjs/loader:944',
						},
						{
							type: 'newline',
						},
						{ type: 'text', text: '​ throw err;' },
						{
							type: 'newline',
						},
						{ type: 'text', text: '​ ^' },
						{
							type: 'newline',
						},
						{
							type: 'newline',
						},
						{
							type: 'text',
							text: `Error: Cannot find module '/home/aga/3qmk.xyz/out/location${
								document?.location.pathname ?? 'unknown'
							}.js'`,
						},
						{
							type: 'newline',
						},
						{
							type: 'text',
							text: '​ ​ ​ ​ at Function.Module._resolveFilename (node:internal/modules/cjs/loader:941:15)',
							color: '#5C5D5C',
						},
						{
							type: 'newline',
						},
						{
							type: 'text',
							text: '​ ​ ​ ​ at Function.Module._load (node:internal/modules/cjs/loader:774:27)',
							color: '#5C5D5C',
						},
						{
							type: 'newline',
						},
						{
							type: 'text',
							text: '​ ​ ​ ​ at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:76:12)',
							color: '#5C5D5C',
						},
						{
							type: 'newline',
						},
						{
							type: 'text',
							text: '​ ​​ ​​​ ​ at node:internal/main/run_main_module:17:47 ',
							color: '#5C5D5C',
						},
						{
							type: 'text',
							text: '{',
							color: '#fff',
						},
						{
							type: 'newline',
						},
						{
							type: 'text',
							text: `​ code: ​`,
							color: '#fff',
						},
						{
							type: 'text',
							text: `'MODULE_NOT_FOUND'`,
							color: '#35AF5A',
						},
						{
							type: 'text',
							text: `,`,
							color: '#fff',
						},
						{
							type: 'newline',
						},
						{
							type: 'text',
							text: `​  requireStack: []`,
							color: '#fff',
						},
						{
							type: 'newline',
						},
						{
							type: 'text',
							text: `}`,
							color: '#fff',
						},
						{
							type: 'newline',
						},
						{
							type: 'newline',
						},
						{
							type: 'text',
							text: 'To resolve this, you can try to ​',
						},
						{
							type: 'link',
							text: 'Go Back',
							url: 'javascript:history.back()',
						},
					]}
					defaultInterval={5}
					done={() => {
						if (this.state.showAfter !== false)
							setTimeout(() => {
								this.setState({
									showAfter: true,
								});
							}, 500);
					}}
				/>
				{this.state.showAfter ? (
					<>
						<span class={style.userhost}>aga@ngc</span>
						<span class={style.colon}>:</span>
						<span class={style.path}>~/3qmk.xyz</span>$
						<Typewriter text=" " interval={50} cursorFlashes={Infinity} />
					</>
				) : (
					<></>
				)}
			</div>
		);
	}
}

export default e404;
