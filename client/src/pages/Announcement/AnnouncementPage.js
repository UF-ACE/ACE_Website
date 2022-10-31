import { Component } from "react";
import api from "../../api/index"
import Announcement from "../../features/Announcement"
import Row from "react-bootstrap/Row";
import "./AnnouncementPage.css";

class AnnouncementPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
          announcements: [],
          isLoading: false,
        };
    }

    componentDidMount = async () => {
        this.setState({ isLoading: true });
        await api.getAnnouncements().then((anns) => {
          this.setState({
            announcements: anns.data.data,
            isLoading: false,
          });
        }).catch(err => {
            console.log(err)
        })
    };

    render() {
        let anns
        let annsDivs
        if (!this.state.isLoading && this.state.announcements.length !== 0) {
            anns = this.state.announcements;
            annsDivs = anns.map((ann) => (
              <div key={ann._id}>
                <Announcement timestamp={ann.createdAt.split('T')[0]} message={ann.body} />
              </div>
            ));
        }
        else {
            anns = null
            annsDivs = null
        } 
        return (
            <div className="announcepage">
                <Row className='pb-3'>
                    <h1>
                        ACE Announcements
                    </h1>
                    <h3>
                        Keep up-to-date with all the things you can do to get involved with ACE.
                    </h3>
                </Row>
                <div className="annDisplay">
                    <Row>
                        {annsDivs}
                    </Row>
                </div>
            </div>
        )
    }
}

export default AnnouncementPage