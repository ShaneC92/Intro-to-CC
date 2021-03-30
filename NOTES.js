/*
    DIFFERENCE BETWEEN FUNCTIONAL AND CLASS COMPONENTS

        - SYNTAX
            - The most obvious difference between functional and class components is the syntax
            - a class component requires you to extend from React.Component and create a render function which returns the React element. This requires more code but also unlocks the use of other features - like state

        - STATE
            - Because functional components are just plain JS functions, you can't use setState() in them. Functional components are also known as stateless components. 
            - If you need a state in your component, you will either need to create a class component, or make sure your parent component is a class component so you can pass down the state via props

        - LIFECYCLE METHODS
            - Lifecycle methods are another feature you cannot use with functional components, and you can only use with class components - just like state. Both state and lifecycle methods come from the React.Component you extend from in class components

        - WHY USE FUNCTIONAL COMPONENTS AT ALL?
            - Functional components are easier to read and test since they are just plain JS functions without state or lifecycle methods.
            - Less code
            - Help you implement best practices. It will get easier to separate stateful and stateless components since you need to think and plan your components out more, without both class and functional components having access to all of the react logic we need.

*/

/*
    LIFECYCLE METHODS

        - React componentshave whats known as a lifecycle. The different points during the lifecycle of a React component are accessible via lifecycle methods
            - The basic lifecycle of a React component:
                - Creation
                - Mounted
                - Unmounted
                - Destroyed
            - Each of these phases of a components lifecycle have methods that are called automatically at each point duringt he lifecycle, that give you control over what happens at the time those methods are invoked

        NOTE: Lifecycle methods are intended to be a last resort. They are to be used in special cases, when other fallbacks life rearranging your components or moving your state around won't work
            - There are edge cases here, like fetching from an API. You can't guarantee that your fetch will resolve before the component finishes mounting. If it did, you'd be trying to setState on an unmounted component, which will throw an error.
*/