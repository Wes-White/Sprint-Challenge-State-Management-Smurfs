1. What problem does the context API help solve?

Context allows us to store our data in a centralized location like in Redux. This removes the need for prop drilling and makes the code easier to read and write.

2. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

Actions our the objects that contain both our types and payloads, the reducer will take in an action and add some logic to it. And the store is our source of state. This is great because now any component can connect to it, which I guess this is why it would also be called the 'single source of truth' in a redux.

3. What is the difference between Application state and Component state? When would be a good time to use one over the other?

I think the main difference between the two is that Application state is like our ‘global state’ and would be the same across all components and accessible by all components. While Component state would be the state that lives on one particular component.

4. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

Thunk gives us the ability to change up the action creators to perform async calls.

1. What is your favorite state management system you've learned and this sprint? Please explain why!

My favorite is probably the context api as the use of hooks is simple and Redux has so much in the set up.
