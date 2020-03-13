- [ ] Why would you use class component over function components (removing hooks from the question)?

Class components make sense when continuing or updating a project that was started with class components. Class components also arrange state in a way that may be more intuitive for a particular project or approach.

- [ ] Name three lifecycle methods and their purposes.

componentDidMount is used for tasks which are to be done (state updates, API requests, etc.) after the basic structure of the app has loaded.
componentDidUpdate is used for processes which should run when a component has re-rendered or been updated.
componentWillUnmount runs when a component will no longer be mounted, and is useful e.g. for cleanup.

- [ ] What is the purpose of a custom hook?

Custom hooks are useful when multiple components will need hooks or state behavior using the same code; it can also make testing easier by separating behavior into pieces which can be more easily understood and debugged.

- [ ] Why is it important to test our apps?

Testing allows an app's behavior to be checked and confirmed to match what is intended before being released. Automated testing allows for continual checking of app behavior during development instead of having to do everything manually; it can also be set up early in development to act as a "checklist" of intended behaviors and features.