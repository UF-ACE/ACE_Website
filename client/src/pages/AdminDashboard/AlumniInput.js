import React, { Component } from "react";
import "./OfficerInput.css"
import api from "../../api"
import Row from "react-bootstrap/Row";

class AlumniInput extends Component {
    constructor(props) {
        super(props);

        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeTitle = this.onChangeTitle.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangeLinkedin = this.onChangeLinkedin.bind(this);

        this.state = {
            officers: [],
            officer: null,
            name: '',
            title: '',
            email: '',
            linkedin: '',
            isLoadingAlumni: false,
        }
    }
    componentDidMount = async () => {
        this.setState({isLoadingAlumni: true})
    
        await api.getPeoplebyOfficer(false).then(officers => {
          this.setState({
            officers: officers.data.data,
            isLoadingAlumni: false,
          })
        })
    }

    onChangeName(e) {
        this.setState({
            name: e.target.value
        });
    }

    onChangeTitle(e) {
        this.setState({
            title: e.target.value
        });
    }

    onChangeEmail(e) {
        this.setState({
            email: e.target.value
        });
    }

    onChangeLinkedin(e) {
        this.setState({
            linkedin: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();

        const officer = {
            name: this.state.name,
            title: this.state.title,
            email: this.state.email,
            linkedin: this.state.linkedin
        }

        console.log(officer.name);

        window.location = '/';
    }

    render() {

        let officers;
        let officerProfiles;
        if (!this.state.isLoadingAlumni && this.state.officers.length !== 0)
        {
          officers = this.state.officers;
          officerProfiles = officers.map((officer) =>
            
            // Loading an input form for each officer and loading it with the data pertaining to each officer
            <Row>
                <div className="input_form" key = {officer._id}>
                    <form>
                    <input type="text" name="name" placeholder="Name" value = {officer.name} className = "update_input"/>
                    <input type="text" name="title" placeholder="Title" value = {officer.title} className = "update_input"/>
                    <input type="text" name="email" placeholder="Email" value = {officer.email} className = "update_input"/>
                    <input type="text" name="linkedin" placeholder="LinkedIn" value = {officer.linkedin} className = "update_input"/>
                    <input type="text" name="password" placeholder="Password" value = {officer.name} className = "update_input"/>
                    <input type="file" name="file" id="file" class = "inputFile"/>
                    <label for="file" className="submit_button">File</label>
                    <button className="submit_button">Update</button>
                    <button className="submit_button">Delete</button>
                    </form>
                </div>
            </Row>



          )     
        }
        else
        {
          officers = null;
          officerProfiles = null;
        }


        return (
            <div className = "officer_input">
                {/* <form onSubmit = {this.onSubmit}>
                    <div className = "form-group">
                        <label>Name:</label>
                        <input
                            type="text"
                            className="form-control"
                            value={this.state.name}
                            onChange={this.onChangeName}
                        />
                    </div>
                    <div className = "form-group">
                        <label>Title:</label>
                        <input
                            type="text"
                            className="form-control"
                            value={this.state.title}
                            onChange={this.onChangeTitle}
                        />
                    </div>
                    <div className = "form-group">
                        <label>Email:</label>
                        <input
                            type="text"
                            className="form-control"
                            value={this.state.email}
                            onChange={this.onChangeEmail}
                        />
                    </div>
                    <div className = "form-group">
                        <label>Linkedin:</label>
                        <input
                            type="text"
                            className="form-control"
                            value={this.state.linkedin}
                            onChange={this.onChangeLinkedin}
                        />
                    </div>
                </form> */}
                <h3>Add Alumni</h3>
                <div className="test_input">
                <div className="input_form">
                    <form>
                    <input type="text" name="name" placeholder="Name" />
                    <input type="text" name="title" placeholder="Title" />
                    <input type="text" name="email" placeholder="Email" />
                    <input type="text" name="linkedin" placeholder="LinkedIn" />
                    <input type="text" name="password" placeholder="Password" />
                    <input type="file" name="file" id="file" class = "inputFile"/>
                    <label for="file">File</label>
                    {/* <input type = "checkbox" id = "isOfficer" name="isOfficer" value="Officer"/><label>Officer</label> */}
                    <button className="submit_button">Submit</button>
                    </form>
                </div>

                <h3>Current Alumni</h3>
                    {officerProfiles}

                </div>
            </div>
        )
    }

}

export default AlumniInput;