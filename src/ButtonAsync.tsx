import * as React from 'react';
import { ButtonProps, Button } from 'reactstrap';

export interface ButtonAsyncProps extends ButtonProps {
    /**
     * Pass in true when the task is executing and we'll prevent the button being used again.
     */
    isExecuting: boolean,

    /*
     * Override children when when we are executing.
     */
    executingChildren?: React.ReactNode
}

/**
 * Button with support that will disable itself and optionally show different children when isExecuting is true.
 * 
 * This button is designed primarily for use with async tasks where clicking the button should be disabled while a task is active.
 * 
 * @param props
 */
export const ButtonAsync = (props: ButtonAsyncProps) => {
    const { isExecuting, children, executingChildren, disabled, ...rest } = props;

    let bestChildren = children;
    if (isExecuting && executingChildren) {
        bestChildren = executingChildren;
    }

    return (
        <Button disabled={isExecuting || disabled} {...rest} >
            {bestChildren}
        </Button>
    );
};
