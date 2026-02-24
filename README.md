Answers to Questions:

1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

Ans: Basically, getElementById, getElementsByClassName, and querySelector / querySelectorAll all are a function which is built-in DOM method. 

--->getElementById()  , selects one element by ID and Returns a single element..

--->getElementsByClassName() , Selects all elements with a class and Returns a live HTMLCollection and also updates if DOM changes..

--->querySelector() , Selects the first element that matches a CSS selector and it is very flexible..

--->querySelectorAll() , Selects all elements that match a CSS selector and Returns a static NodeList and it does NOT auto-update


2. How do you create and insert a new element into the DOM?

Ans: If i want to create a new element into the DOM , firstly create a new element by using document.createElement() ......then we can add content or attributes....

For inserting ->  appendChild() add this at the end... for example (document.body.appendChild(newDiv);)


3. What is Event Bubbling? And how does it work?

Ans: Event bubbling is when an event starts on the target element and then “bubbles up” to its parent elements.....We also can say that the event moves from the inner element -> up to the outer elements..

Working principle:
When you click an element:
1.Event happens on the target element
2.Then it moves up to its parent
3.Then to the parent’s parent
4.Continues until it reaches document
 And This upward movement is bubbling.

4. What is Event Delegation in JavaScript? Why is it useful?

Ans: Event delegation is a technique where we attach one event listener to a parent element instead of adding event listeners to multiple child elements. ...It wokrs becuse of event bubbling

Benefit:
1.Only one event listener instead of many for better performance
2.works for dynamic elements 
3.more cleaner code if we use event delegation


5. What is the difference between preventDefault() and stopPropagation() methods?

Ans:  preventDefault() and stopPropagation() methods do two completely different things. 

1.preventDefault()----->Stops the browser’s default behavior and it prevents what the browser normally does.

stopPropagation()-----> Stops the event from bubbling up and It prevents the event from moving to parent elements.