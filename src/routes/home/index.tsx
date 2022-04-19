import { Component, h } from 'preact';
import Terminal from '../../components/terminal';
import Typewriter from '../../components/terminal/typewriter';
import style from './style.scss';

class Home extends Component<
	{},
	{
		showAfter: boolean;
	}
> {
	render() {
		if (typeof document !== 'undefined') document.title = 'Home - 3qmk.xyz';
		return (
			<div class={style.home}>
				<br />
				<span class="line">
					<span class={style.userhost}>aga@ngc</span>
					<span class={style.colon}>:</span>
					<span class={style.path}>~/3qmk.xyz</span>$ git pull &gt; /dev/null
				</span>
				<br />
				<span class="line">
					<span class={style.userhost}>aga@ngc</span>
					<span class={style.colon}>:</span>
					<span class={style.path}>~/3qmk.xyz</span>$ tsc
				</span>
				<br />
				<span class="line">
					<span class={style.userhost}>aga@ngc</span>
					<span class={style.colon}>:</span>
					<span class={style.path}>~/3qmk.xyz</span>$ node out/index.js
				</span>
				<Terminal
					text={[
						{
							type: 'text',
							text: "Hi, I'm aga, a Lua, JavaScript and TypeScript Developer!",
						},
						{
							type: 'newline',
						},
						{
							type: 'newline',
						},
						{ type: 'text', text: 'My github can be found ' },
						{
							type: 'link',
							text: 'here',
							url: 'https://github.com/SnoKami',
						},
						{ type: 'text', text: ', and my twitch can be found ' },
						{
							type: 'link',
							text: 'here',
							url: 'https://www.twitch.tv/zigby0',
						},
						{ type: 'text', text: '.' },
						{ type: 'newline' },
						{ type: 'text', text: 'The source for this website can be found ' },
						{
							type: 'link',
							text: 'here',
							url: 'https://github.com/ku-ts/site',
						},
						{ type: 'text', text: '.' },
					]}
					defaultInterval={35}
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

export default Home;
