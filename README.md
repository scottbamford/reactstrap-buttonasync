# reactstrap-buttonasync
Reactstrap Button with support that will disable itself and optionally show different children when isExecuting is true (usually during an async task).

## Installation

Install with npm:

```shell
npm install reactstrap-buttonasync
```

Or with yarn:

```shell
yarn add reactstrap-buttonasync
```

## Basic Usage

There are two main uses, first standalone button with its click handler:

### Typescript
```ts
import { ButtonAsync } from 'reactstrap-buttonasync';

export const Example = (props: any) => {
	const [isCalculating, setIsCalculating] = React.useState<boolean>(false);

	const onClick = React.useCallback(async (event: React.FormEvent<HTMLButtonElement>) => {
		setIsCalculating(true);
        // Do real calcualting or REST call here.
		setIsCalculating(false);
    }, [setIsCalculating]); 

	return (
			<>
				<ButtonAsync color="primary" isExecuting={isCalculating} onClick={onClick}
					executingChildren={<><FontAwesomeIcon icon="spinner" spin /> Calculating...</>}>
					<FontAwesomeIcon icon="calculator" /> Calculate
				</ButtonAsync>
            </>
    );
};
```

### Javascript
```js
import { ButtonAsync } from 'reactstrap-buttonasync';

export const Example = (props) => {
	const [isCalculating, setIsCalculating] = React.useState(false);

	const onClick = React.useCallback(async (event) => {
		setIsCalculating(true);
        // Do real calcualting or REST call here.
		setIsCalculating(false);
    }, [setIsCalculating]); 

	return (
			<>
				<ButtonAsync color="primary" isExecuting={isCalculating} onClick={onClick}
					executingChildren={<><FontAwesomeIcon icon="spinner" spin /> Calculating...</>}>
					<FontAwesomeIcon icon="calculator" /> Calculate
				</ButtonAsync>
            </>
    );
};
```

Second, as the submit button for a form:
### Typescript
```ts
import { ButtonAsync } from 'reactstrap-buttonasync';

export const Example = (props: any) => {
	const [isSaving, setIsSaving] = React.useState<boolean>(false);

	const onSubmit = React.useCallback(async (event: React.FormEvent<HTMLFormElement>) => {
		setIsSaving(true);
        // Do real saving or REST call here.
		setIsSaving(false);
    }, [setIsSaving]); 

	return (
            <Form onSubmit={onSubmit}>
				<FormGroup>
                    <Label htmlFor="name">Name</Label>
                    <Input type="text" name="name" placeholder="Name" value={props.name} />
                </FormGroup>

				<ButtonAsync type="submit" color="primary" isExecuting={isSaving}
					executingChildren={<><FontAwesomeIcon icon="spinner" spin /> Saving...</>}>
					<FontAwesomeIcon icon="save" /> Save
				</ButtonAsync>
            </Form>
    );
};
```

### Javascript
```js
import { ButtonAsync } from 'reactstrap-buttonasync';

export const Example = (props) => {
	const [isSaving, setIsSaving] = React.useState(false);

	const onSubmit = React.useCallback(async (event) => {
        setIsSaving(true);
        // Do real saving or REST call here.
		setIsSaving(false);
    }, [setIsSaving]); 

	return (
            <Form onSubmit={onSubmit}>
				<FormGroup>
                    <Label htmlFor="name">Name</Label>
                    <Input type="text" name="name" placeholder="Name" value={props.name} />
                </FormGroup>

				<ButtonAsync type="submit" color="primary" isExecuting={isSaving}
					executingChildren={<><FontAwesomeIcon icon="spinner" spin /> Saving...</>}>
					<FontAwesomeIcon icon="save" /> Save
				</ButtonAsync>
            </Form>
    );
};
```

## Usage with react-use-async-callback

This component combines well with [react-use-async-callback](https://github.com/scottbamford/react-use-async-callback#readme) to avoid writing lots of boilerplate for your
async callbacks, as shown here:

### Typescript
```ts
import { ButtonAsync } from 'reactstrap-buttonasync';
import { useAsyncCallback } from 'react-use-async-callback';

export const Example = (props: any) => {
	const [calculate, isCalculating] = useAsyncCallback(async (event: React.FormEvent<HTMLButtonElement>) => {
		setIsCalculating(true);
        // Do real calcualting or REST call here.
		setIsCalculating(false);
    }, []); 

	return (
			<>
				<ButtonAsync color="primary" isExecuting={isCalculating} onClick={calculate}
					executingChildren={<><FontAwesomeIcon icon="spinner" spin /> Calculating...</>}>
					<FontAwesomeIcon icon="calculator" /> Calculate
				</ButtonAsync>
            </>
    );
};
```

### Javascript
```js
import { ButtonAsync } from 'reactstrap-buttonasync';
import { useAsyncCallback } from 'react-use-async-callback';

export const Example = (props) => {
	const [calculate, isCalculating] = useAsyncCallback(async (event) => {
		setIsCalculating(true);
        // Do real calcualting or REST call here.
		setIsCalculating(false);
    }, []); 

	return (
			<>
				<ButtonAsync color="primary" isExecuting={isCalculating} onClick={calculate}
					executingChildren={<><FontAwesomeIcon icon="spinner" spin /> Calculating...</>}>
					<FontAwesomeIcon icon="calculator" /> Calculate
				</ButtonAsync>
            </>
    );
};
```

## Typescript
This package is written in typescript and comes with its own bindings.

## License

Licensed under the MIT license.
