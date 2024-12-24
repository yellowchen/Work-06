import IntroData from "../assets/introData.json";
import scrollToAnchor from "src/utils/scrollToAnchor";

const Intro = () => {
    return (
		<div className='intro container'>
			<div className='intro-nav'>
				<h5>Intro</h5>
				<ul className='intro-menu title'>
					{IntroData.map((item) => (
						<li key={item.id} className='intro-list'>
							<button onClick={() => scrollToAnchor(item.id)} className="anchor title btn">{item.id}</button>
						</li>
					))}
				</ul>
			</div>
			<div className='intro-content'>
				{IntroData.map((item) => (
					<div key={item.id} className='intro-item'>
						<div className='title' id={item.id}>
							<h4>{item.id}</h4>
						</div>
						<p>
							<img src={item.img} alt={item.id} />
							{item.content}
						</p>
					</div>
				))}
			</div>
		</div>
	);
}

export default Intro;