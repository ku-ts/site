import { Component, h } from 'preact';
import { Link } from 'preact-router/match';
import style from './style.scss';
import Typewriter from './typewriter';

class Terminal extends Component<
	{
		text: {
			type: 'text' | 'link' | 'newline';
			newlineTime?: number;
			text?: string;
			url?: string;
			interval?: number;
			color?: string;
		}[];
		defaultInterval?: number;
		done?: any;
	},
	{
		textElements: number;
	}
> {
	constructor() {
		super();
		this.state = { textElements: 1 };
	}
	render() {
		if (this.state.textElements > this.props.text.length)
			(this.props.done ?? (() => {}))();

		return (
			<div class={style.terminal}>
				{this.props.text.map((v, i) => {
					if (i >= this.state.textElements) return;
					if (v.type === 'link') {
						return (
							<a
								href={v.url ?? 'https://plrv3.nora.lgbt/'}
								class={`${style.link}`}
								style={{
									color: v.color || 'rgb(0, 181, 194)',
								}}
							>
								<Typewriter
									text={v.text}
									interval={this.props.defaultInterval || v.interval || 50}
									done={() => {
										if (this.state.textElements - 1 == i)
											this.setState({
												textElements: this.state.textElements + 1,
											});
									}}
								/>
							</a>
						);
					} else if (v.type === 'text') {
						return (
							<span
								style={{
									color: v.color || 'rgb(255,255,255)',
								}}
							>
								<Typewriter
									text={v.text}
									interval={this.props.defaultInterval || v.interval || 50}
									done={() => {
										if (this.state.textElements - 1 == i)
											this.setState({
												textElements: this.state.textElements + 1,
											});
									}}
								/>
							</span>
						);
					} else if (v.type === 'newline') {
						setTimeout(() => {
							if (this.state.textElements - 1 == i)
								this.setState({
									textElements: this.state.textElements + 1,
								});
						}, v.newlineTime ?? 500);
						return (
							<span class={style.newline}>
								<br />
							</span>
						);
					}
				})}
			</div>
		);
	}
}

export default Terminal;
