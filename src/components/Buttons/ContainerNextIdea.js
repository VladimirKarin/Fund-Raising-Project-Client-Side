import React from 'react';
import { Button } from '@mui/material';

const ContainerNextIdea = ({ onClick, disabled }) => {
    return (
        <Button
            variant="outlined"
            color="primary"
            disabled={disabled}
            onClick={onClick}
        >
            Next
        </Button>
    );
};

export default ContainerNextIdea;