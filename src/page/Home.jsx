import HomeCard from 'src/components/home/HomeCard';
import Data from "../assets/Data.json";


const Home = () => {
	const recentArray = Data.filter((item) => (
		item.type === "Recent"
	));

    return (
		<div className='home'>
			<div className='banner'>
				<h3>01 Jun - 31 Oct</h3>
				<h1>Laugh Expo</h1>
				<h3>hav fun with every moment</h3>
			</div>
			<div className='container'>
				<h2>Recent Expo</h2>
				<div className='intro-expo'>
					<HomeCard data={recentArray} />
				</div>
			</div>
		</div>
	);
}

export default Home