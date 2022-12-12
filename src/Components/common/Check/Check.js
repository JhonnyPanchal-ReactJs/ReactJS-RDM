import React from 'react';
import Form from 'react-bootstrap/Form';

const Check = ({checked, disabled, label}) => {

    return (
        <Form.Group className="mb-3" controlId={label}>
            <Form.Check type="checkbox" label={label} disabled={disabled} checked={checked} />
        </Form.Group>
    )
}

export default Check;