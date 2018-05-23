import React, { Component } from 'react';

import { Modal, Button, Popover, Tooptip, OverlayTrigger, Tooltip } from 'react-bootstrap';


class ModalPopUp extends Component {

    constructor() {
        super();
        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.changeRequest = this.changeRequest.bind(this);
        
        this.state = {
            show: false
        };
    }


    changeRequest() {

        var recipeInput = this.refs.recipe.value;
        var recipeIngredients = this.refs.ingredients.value;
        
        this.props.addRecipe(recipeInput, recipeIngredients);
        if (recipeIngredients == "" || recipeInput == "" || recipeIngredients && recipeInput == "") {
            alert("please enter recipeInput");
        } else {
            this.setState({ show: false });
        }

    }

    handleClose() {

        this.setState({ show: false });

    }

    handleShow() {
        this.setState({ show: true });
    }

    render() {

        const tooltip = <Tooltip id="modal-tooltip">wow.</Tooltip>;
        return (
            <div>
                <Button bsStyle="primary" bsSize="large" onClick={this.handleShow}>
                    Add Recipe
                </Button>
                <Modal show={this.state.show} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Modal heading</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <form>
                            <label>Recipe</label>
                            <input type="text" ref="recipe" />
                            <label>Ingredients</label>
                            <input type="text" ref="ingredients" />
                        </form>

                    </Modal.Body>
                    <Modal.Footer>

                        <Button onClick={this.handleClose}>clear</Button>
                        <Button onClick={this.changeRequest}>add</Button>

                    </Modal.Footer>
                </Modal>
            </div>
        );
    }
}


export default ModalPopUp;
