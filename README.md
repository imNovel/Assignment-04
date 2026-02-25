1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
Ans:    
        getElementById - It select an element from id ,
        getElementsByClassName - Its select element from class,
        querySelector -  select first element from css selectors,
        querySelectorAll - select all element from css selectors.

2. How do you create and insert a new element into the DOM?
Ans:    
        create new element by using *document.createElement()*
        and using *appendChild* can insert a new element into the DOM.

3. What is Event Bubbling? And how does it work?
Ans:
        Event Bubbling is a concept in the dom. When an element receives an event that event bubbles up to its parent elements in the DOM tree until it gets to the root element.

4. What is Event Delegation in JavaScript? Why is it useful?
Ans: 
        Event Delegation is a technique where a single  event listener a parent element instead of attach multiple child. It is useful because it reduces memory and cpu resources.

5. What is the difference between preventDefault() and stopPropagation() methods?
Ans:    
        *preventDefault()* prevents the browsers default action and *stopPropagation()* stop propagation of the current event in bubbling phase.
        