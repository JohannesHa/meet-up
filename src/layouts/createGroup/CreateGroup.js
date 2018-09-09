import React, { Component } from 'react'
import { FormGroup, FormControl, Well } from 'react-bootstrap';
import Header from '../../components/Header.js'
import Subheader from '../../components/Subheader.js'
import Nav from '../../components/Nav.js'
import Button from '../../components/Button.js'
import PropTypes from 'prop-types';
import web3 from 'web3';

import styled from 'styled-components'
import { colors } from '../../styles.js'

const StyledFormControl = styled(FormControl)`
  background-color: transparent;
  border-top: none;
  border-left: none;
  border-right: none;
  border-radius: 0;
  padding-left: 0;
  font-weight: 200;
  color: ${colors.white};

  &:focus, &:active {
    box-shadow: none !important;
    -webkit-box-shadow: none !important;
  }

  &:focus {
    border-color: ${colors.white};
  }
`

class CreateGroup extends Component {

    constructor(props, context) {
        super(props, context);

        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
        this.handleCreateMeetup = this.handleCreateMeetup.bind(this);
        this.handleLocationChange = this.handleLocationChange.bind(this);
        this.handleSubdomainChange = this.handleSubdomainChange.bind(this);

        this.contracts = context.drizzle.contracts;

        this.state = {
            groupName: '',
            groupDescription: '',
            groupLocation: '',
            groupSubdomain: '',
        };
    }

    getGroupNameValidationState() {
        const length = this.state.groupName.length;
        if (!length) return 'danger';
        if (length >= 3) return 'success';
        else if (length < 3) return 'error';
        return null;
    }

    getGroupDescriptionValidationState() {
        const length = this.state.groupDescription.length;
        if (!length) return 'danger';
        if (length >= 3) return 'success';
        else if (length < 3) return 'error';
        return null;
    }

    getGroupLocationValidationState() {
        const length = this.state.groupLocation.length;
        if (!length) return 'danger';
        if (length >= 3) return 'success';
        else if (length < 3) return 'error';
        return null;
    }

    getGroupSubdomainValidationState() {
        const length = this.state.groupSubdomain.length;
        if (!length) return 'danger';
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

    handleLocationChange(e) {
        this.setState({ groupLocation: e.target.value });
    }

    handleSubdomainChange(e) {
        this.setState({ groupSubdomain: e.target.value });
    }



    handleCreateMeetup(e) {
        e.preventDefault();
        // Link backend
        this.contracts.MeetupGroupFactory.methods.createGroup(this.state.groupName, this.state.groupLocation, 'Berlin', 'Blockchain',
          this.state.groupDescription, web3.utils.asciiToHex("asdasd")).call(
           {from: this.props.accounts[0]}).then()
    }

    render() {
        return (
            <div>
              <main className="container">
                <Header>Create</Header>
                <Subheader>Create a meet-up group</Subheader>
                <form>
                    <FormGroup
                        controlId="group-name"
                        validationState={this.getGroupNameValidationState()}
                    >
                        <StyledFormControl
                            type="text"
                            value={this.state.groupName}
                            placeholder="Enter a name for your meetup"
                            onChange={this.handleNameChange}
                        />
                        <StyledFormControl.Feedback />
                    </FormGroup>
                    <FormGroup
                        controlId="group-description"
                        validationState={this.getGroupDescriptionValidationState()}
                    >
                        <StyledFormControl
                            type="text"
                            value={this.state.groupDescription}
                            placeholder="Enter a short description"
                            onChange={this.handleDescriptionChange}
                        />
                        <StyledFormControl.Feedback />
                    </FormGroup>
                    <FormGroup
                        controlId="group-location"
                        validationState={this.getGroupLocationValidationState()}
                    >
                        <StyledFormControl
                            type="text"
                            value={this.state.groupLocation}
                            placeholder="Enter a location"
                            onChange={this.handleLocationChange}
                        />
                        <StyledFormControl.Feedback />
                    </FormGroup>
                    <FormGroup
                        controlId="group-subdomain"
                        validationState={this.getGroupSubdomainValidationState()}
                    >
                        <StyledFormControl
                            type="text"
                            value={this.state.groupSubdomain}
                            placeholder="Enter a subdomain (e.g subdomain.meet-up.eth)"
                            onChange={this.handleSubdomainChange}
                        />
                        <StyledFormControl.Feedback />
                    </FormGroup>
                </form>
                <Well id="success-msg-wrapper" style={styles.successMsgWrapper}>Group created successfully!</Well>
                <Button disabled={this.state.groupName.length < 3 ||
                                  this.state.groupDescription.length < 3 ||
                                  this.state.groupLocation.length < 3 ||
                                  this.state.groupSubdomain.length < 1} onClick={this.handleCreateMeetup}>Create</Button>
              </main>
              <Nav current={2}/>
            </div>
        )
    }
}

CreateGroup.contextTypes = {
  drizzle: PropTypes.object
}


const styles = {
    clearfix: {
        height: '3rem'
    },
    successMsgWrapper: {
        display: 'none'
    }
};

function createBytes() {
  var url = "Hello World";
  var data = [];
  for (var i = 0; i < url.length; i++) {
    data.push(url.charCodeAt(i));
  }
  return data;
}

export default CreateGroup;
