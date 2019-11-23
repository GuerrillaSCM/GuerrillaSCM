import React,{Component} from 'react';
import WebsiteModal from './WebsiteModal';
import WSUEverett from './WSUEverett.png';
import './DemoWebsite.css';

class DemoWebsite extends Component {
	render() {
		return (
			<div className="DemoWebsite">
				<body>
					<div>
						<img src={WSUEverett} className="DemoWebsite-logo" alt="logo"
							style={{marginTop: "10px"}} />
        			</div>
					<WebsiteModal></WebsiteModal>
					<div>
					</div>
				</body>
			</div>
		);
	}
}

export default DemoWebsite;