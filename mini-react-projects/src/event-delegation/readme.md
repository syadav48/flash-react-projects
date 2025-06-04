# Event Delegation in JavaScript and React

## What is Event Delegation?

Event delegation is a technique that allows you to manage events more efficiently by attaching a single event listener to a parent element instead of individual child elements.

## How Event Delegation Works

1. **Event Bubbling**: Events bubble up from the target element to the root of the DOM.
2. **Single Event Listener**: Attach a single event listener to a parent element to handle events for multiple child elements.

## Basic Example in JavaScript


Feel free to use this documentation as needed!

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Event Delegation Example</title>
</head>
<body>
    <ul id="itemList">
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
    </ul>

    <script>
        const itemList = document.getElementById('itemList');

        itemList.addEventListener('click', function(event) {
            if (event.target.tagName === 'LI') {
                alert('You clicked on ' + event.target.textContent);
            }
        });
    </script>
</body>
</html>