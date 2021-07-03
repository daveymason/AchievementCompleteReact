import React, { Component } from 'react';
import { Button, Label, Col, Row } from 'reactstrap';
import { Control, LocalForm, Errors } from 'react-redux-form';

const required = val => val && val.length;
const maxLength = len => val => !val || (val.length <= len);
const minLength = len => val => val && (val.length >= len);
const validEmail = val => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);

class CForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            lastName: '',
            phoneNum: '',
            email: '',
            agree: false,
            contactType: 'By Phone',
            message: '',
            touched: {
                name: false,

                email: false
            }
        };
      
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleBlur = (field) => () => {
        this.setState({
            touched: {...this.state.touched, [field]: true}
        });
    }

    handleInputChange(event) {
        const target = event.target;
        const name = target.name;
        const value = target.value;
    
        this.setState({
            [name]: value
        });
    }

    handleSubmit(values) {
        console.log("Current state is: " + JSON.stringify(values));
        alert("Current state is: " + JSON.stringify(values));
    }

    render() {

    return (
    <div className="container">
    <div className="row row-content">
            <div className="col-md-10">
            <LocalForm onSubmit={values => this.handleSubmit(values)}>
                    <Row className="form-group">
                        <Label htmlFor="name" md={2}>Name</Label>
                        <Col md={10}>
                        <Control.text model=".name" id="name" name="name"
                                placeholder="Name"
                                className="form-control"
                                validators={{
                                    required, 
                                    minLength: minLength(2),
                                    maxLength: maxLength(15)
                                }}
                            />
                            <Errors
                                className="text-danger"
                                model=".name"
                                show="touched"
                                component="div"
                                messages={{
                                    required: 'Required',
                                    minLength: 'Must be at least 2 characters',
                                    maxLength: 'Must be 15 characters or less'
                                }}
                            />
                        </Col>
                    </Row>
                    
                    <Row className="form-group">
                        <Label htmlFor="email" md={2}>Email</Label>
                        <Col md={10}>
                            <Control.text model=".email" id="email" name="email"
                                placeholder="Email"
                                className="form-control"
                                validators={{
                                    required,
                                    validEmail
                                }}
                            />
                            <Errors
                                className="text-danger"
                                model=".email"
                                show="touched"
                                component="div"
                                messages={{
                                    required: 'Required',
                                    validEmail: 'Invalid email address'
                                }}
                            />
                        </Col>
                    </Row>
                    
                    <Row className="form-group">
                        <Label htmlFor="message" md={2}>Message</Label>
                        <Col md={10}>
                            <Control.textarea model=".message" id="message" name="message"
                                rows="8"
                                className="form-control"
                            />
                        </Col>
                    </Row>
                    <Row className="form-group">
                        <Col md={{size: 10, offset: 2}}>
                            <Button type="submit" color="primary">
                                Send message
                            </Button>
                        </Col>
                    </Row>
                </LocalForm>
            </div>
        </div>
    </div>
);
}
}

export default CForm;