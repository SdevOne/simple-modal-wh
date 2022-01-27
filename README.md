# simple-modal-wh

A simple modal designable created using `react`.
npm link : [simple-modal-wh](https://www.npmjs.com/package/simple-modal-wh)

## Installation

Run the following command:
`npm i simple-modal-wh`
or
`yarn add simple-modal-wh`

## Using the modal

You can also modify the modal design by adding 4 property :

<Modal showModal="false" updateModalState={callBack} message="Hello world" background="#000000" txtBackground="#fff025" txtColor="#ffffff"/>

- showModal: State of the modal to allow the opening
- updateModalState: The function to change the state of the modal to allow opening and closing
- message: The message displayed in the modal
- background: The color of the background behind the modal element
- txtBackground: The background of the modal element which contain the message
- txtColor: The color of the message