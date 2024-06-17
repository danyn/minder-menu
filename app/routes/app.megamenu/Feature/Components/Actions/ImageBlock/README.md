The image block takes a different approach to state
each instance has its own state
the order of items maps from an array stored in the imageBLockModal in LocalState
but the values come from the component state of each instance.
Only one instance can exist at a time because it uses modal
The same data is used to put it back into state for the actual image block.
To reorder the image block the modal's state is used.
This means there is both component level state and feature level state in the LocalState context
The reason is not to bother the feature level state with keystrokes on the inputs to contain that to the input components


