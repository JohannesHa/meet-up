import React, { Component } from 'react'
import { FormGroup, FormControl, Button, Well } from 'react-bootstrap';
import Title from '../../components/Title.js'

class CreateGroup extends Component {

    constructor(props, context) {
        super(props, context);

        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
        this.handleCreateMeetup = this.handleCreateMeetup.bind(this);

        this.state = {
            groupName: '',
            groupDescription: ''
        };
    }

    getGroupNameValidationState() {
        const length = this.state.groupName.length;
        if (length >= 3) return 'success';
        else if (length < 3) return 'error';
        return null;
    }

    getGroupDescriptionValidationState() {
        const length = this.state.groupDescription.length;
        if (length >= 3) return 'success';
        else if (length < 3) return 'error';
        return null;
    }

    handleNameChange(e) {
        this.setState({ groupName: e.target.value });
    }

    handleDescriptionChange(e) {
        this.setState({ groupDescription: e.target.value });
    }

    handleCreateMeetup(e) {
        e.preventDefault();
        // Link backend
    }

    render() {
        return (
            <main className="container">
                <Title>Create Group</Title>
                <div style={styles.clearfix}></div>
                <form>
                    <FormGroup
                        controlId="group-name"
                        validationState={this.getGroupNameValidationState()}
                    >
                        <FormControl
                            type="text"
                            value={this.state.groupName}
                            placeholder="Enter a name for your meetup"
                            onChange={this.handleNameChange}
                        />
                        <FormControl.Feedback />
                    </FormGroup>
                    <FormGroup
                        controlId="group-description"
                        validationState={this.getGroupDescriptionValidationState()}
                    >
                        <FormControl
                            type="text"
                            value={this.state.groupDescription}
                            placeholder="Enter a description"
                            onChange={this.handleDescriptionChange}
                        />
                        <FormControl.Feedback />
                    </FormGroup>
                </form>
                <Well id="success-msg-wrapper" style={styles.successMsgWrapper}>Group created successfully!</Well>
                <Button onClick={this.handleCreateMeetup}>Create meetup</Button>
            </main>
        )
    }
}

const styles = {
    clearfix: {
        height: '3rem'
    },
    successMsgWrapper: {
        display: 'none'
    }
};

export default CreateGroup
