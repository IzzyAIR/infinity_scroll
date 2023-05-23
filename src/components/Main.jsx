import React from 'react';
import store from '../store/store';

import { observer } from 'mobx-react-lite';
import { toJS } from 'mobx';

const Main = observer(() => {
	const list = toJS(store.photos);

	const filteredArr = list.filter(
		(item, index, self) =>
			index === self.findIndex((t) => t.id === item.id && t.name === item.name),
	);

	return (
		<main className='main__container'>
			<div className='parent'>
				{filteredArr.map((item) => (
					<div key={item.id} className='post'>
						<img src={item.thumbnailUrl} alt='Item' />
						<h4>{`${item.id}_${item.title}`}</h4>
					</div>
				))}
			</div>
		</main>
	);
});
export default Main;
