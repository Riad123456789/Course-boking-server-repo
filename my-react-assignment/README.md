
## Features

- first of all we use 9 card in our project.
- if you select a card then you can see the cards price and credit in the right side of the project.
- you can select a card in one time. if your credit more than 20 hr then you see an error toasting message.

To manage state in a React project, i can use the `useState` hook, which is a built-in function in React. The `useState` hook allows you to add state to functional components. i can use it to create a state variable and a function to update that variable. Here is an example of how i can use the `useState` hook:

```javascript
import React, { useState } from 'react';

function Example() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
```

In this example, we have created a state variable called `count` and a function called `setCount` to update the value of `count`. We have initialized the value of `count` to `0`. When the user clicks the button, the value of `count` is updated by calling the `setCount` function.