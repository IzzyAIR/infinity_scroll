import React from 'react';
import store from '../store/store';

import { observer } from 'mobx-react-lite';
import { toJS } from 'mobx';

const Main = observer(() => {
	const list = toJS(store.photos);
	return (
		<main className='main__container'>
			<div className='parent'>
				{list.map((item) => (
					<div key={item.id} className='post'>
						<img src={item.thumbnailUrl} alt='Photo' />
						<h4>{`${item.id}_${item.title}`}</h4>
					</div>
				))}
			</div>
		</main>
	);
});
export default Main;
