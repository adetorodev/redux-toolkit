Redux is a predictable state container for JavaScript app.

Why should use Redux
To manage global state of the app in a preditable way
Redux makee it easier  to understand when, where, why and how state is update
redux guide twoards writing code that is predictable and testable

Redux Toolkit is the official, opinionated, batteries-included toolset for efficient redux development
it is also intended to be the standard way to write Redux logic

Redux toolkit serves as an abstraction over redux. it hides the difficult part ensuring you have a good developer experience

The Three Core concepts
Store:  holds the state of the application
Action: Describes what happened
Reducer: Ties the store and actions together

The principles 

1. The global state of your application is store as an object inside a signle store
{
    numberOfCake: 10
}

2. The only way to change the state is to dispatch an action, an object that describe what happened
{
    type: "CAKE_ORDERED"
}

3. To specify how the state tree is updated based on actions, you write pure reducers
Reducer - (previousState, action) => newState