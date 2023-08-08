import { forwardRef } from 'react'
import { useAnimationsContext } from '../../contexts/Animations'

export const Interface = forwardRef((_props, ref: any) => {
	const { animations, animationIndex, setAnimations, setAnimationIndex } =
		useAnimationsContext()

	return (
		<div id='overlay-container' ref={ref}>
			<div className={'overlay'}>
				<div className={'button-container'}>
					{animations?.map((animation, index) => (
						<button
							key={animation}
							className={`button ${index === animationIndex && 'active'}`}
							onClick={() => setAnimationIndex(index)}
						>
							{animation}
						</button>
					))}
				</div>
			</div>
		</div>
	)
})
