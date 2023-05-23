import React from 'react';
import './App.css';
import Main from './components/Main';
import axios from 'axios';
import store from './store/store';

function App() {
	const [currentPage, setCurrentPage] = React.useState(1);
	const [fetching, setFetching] = React.useState(true);

	React.useEffect(() => {
		if (fetching) {
			axios
				.get(`https://jsonplaceholder.typicode.com/photos?_limit=15&_page=${currentPage}`)
				.then((res) => {
					store.getPhotos(res.data)
                    console.log(currentPage);
				}).finally(()=>{
					setFetching(false)
				})
		}
	}, [fetching]);

	React.useEffect(() => {
		
		 window.addEventListener("scroll", scrollHandler);

        return () => window.removeEventListener("scroll", scrollHandler	);
	}, []);

	const scrollHandler = async () => {
		if (
			window.innerHeight + document.documentElement.scrollTop + 1 >=
            document.documentElement.scrollHeight
		) {
			setCurrentPage((prev) => prev + 1);
			setFetching(true);
		}
	};
	return (
		<div className='App'>
			<header className='header'>
				<h2>Infinity Scroll</h2>
			</header>
			<Main/>
		</div>
	);
}

export default App;
