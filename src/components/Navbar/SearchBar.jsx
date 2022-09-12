import CloseIcon from '@mui/icons-material/Close';
import SearchIcon from '@mui/icons-material/Search';
import { Avatar, Box, Input } from '@mui/material';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './SearchBar.css';
const SearchBar = ({ searchPostsRedux }) => {
	const data = [...searchPostsRedux];
	const [filterData, setFilterData] = useState([]);
	const [searchWord, setSearchWord] = useState('');
	const postsRedux = useSelector((state) => state.posts.posts);
	console.log(postsRedux);

	const handleFilter = (event) => {
		setSearchWord(event.target.value);
		const s = event.target.value;
		const newFilter = data.filter((post) => post.description.toLowerCase().includes(s.toLowerCase()));
		setFilterData(newFilter);
	};

	return (
		<div className="search">
			<div className="searchInputs">
				<Input
					disableUnderline
					sx={{ width: { xs: '200px', md: '330px', lg: '350px' } }}
					onFocus={() => setSearchWord('')}
					type="text"
					placeholder="search..."
					value={searchWord}
					onChange={(e) => handleFilter(e)}
				/>
				{searchWord != 0 ? (
					<CloseIcon id="clearBtn" onClick={() => setSearchWord('')} />
				) : (
					<SearchIcon
						onClick={() => {
							setFilterData(data);
							setSearchWord('search...');
						}}
						id="clearBtn"
					/>
				)}
			</div>
			{filterData.length > 0 && searchWord.length > 0 && (
				<Box
					className="dataResult"
					sx={{ bgcolor: 'white ', width: { xs: '229px', md: '359px', lg: '379px' }, position: 'fixed', top: { xs: 51, sm: 55 }, left: 'calc(32%)-1px', maxHeight: '400px' }}
				>
					{filterData
						.sort((a, b) => b.date - a.date)
						.slice(0, 15)
						.map((post) => (
							<Link onClick={() => setSearchWord('')} to={'/post/' + post.email + '~' + post.id} key={post.id} className="dataItem" style={{ color: 'black' }}>
								<Avatar src={post.picture} sx={{ bgcolor: 'red' }} aria-label="recipe" referrerPolicy="no-referrer" variant="rounded">
									{post.title.split('')[0].toUpperCase()}
								</Avatar>
								{post.description}
							</Link>
						))}
				</Box>
			)}
		</div>
	);
};

export default SearchBar;
