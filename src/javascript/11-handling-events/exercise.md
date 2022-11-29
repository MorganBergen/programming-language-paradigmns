# Overview

Morgan Bergen

EECS 368 Programming Language Paradigms

Monday September 19 2022

## In-Class Problem

### Changes the background color of a webpage.
```JavaScript
document.body.style.background
```

### Changes color to Transparent and Green
``` JavaScript
document.body.style.background = "green";
document.body.style.background = "";
```

When a key on the keyboard is pressed, your browser fires a "keydown" event.
When it is released, you get a "keyup" event
The `key` property of the event object holds a string that corresponds to the symbol that pressing that key would type.



```html
<!DOCTYPE html>
<html>
<meta charset="utf-8">

<head>
    <title>
        handling events
    </title>

<body>
    <!-- add inline css -->
    <h1>press down the letter "g" to change the color of this window</h1>
    <script>
        /*
        add a comment here that descrives what this JavaScript program does
        this program changes the color of the window when the user presses the letter "g" on the keyboard, when the user releases the key the window goes back to its original color, specifically transparent.
        */


        /*
        add a comment here that describes what this function does:
        window is the global object in JavaScript and window.addEventListener is a method that adds an event listener to the window object, specifically it appends an event listener to the object window that listens for the event "keydown".  The event listener is a function that takes an event object as an argument. The event object is an object that contains information about the event that was triggered. The event object has a property called "key" that contains the value of the key that was pressed.  If the key that was pressed is "g", then the background color of the window is changed to green.  Otherwise the event does nothing.
        */

        window.addEventListener("keydown", event => {
            if (event.key == "g") {
                document.body.style.background = "green";
            }
        });

        /*
        add a comment here that describes what this function does:
        this function is an event listener that listens for the event "keyup" and when the event is triggered the background color of the window is changed back to transparent.  It essentially behaves similarly to the function above, but it changes the background color back to transparent instead of green.  However there are no shared assumptions regarding the current state of the windows previous background color at the time of callback.
        */
        window.addEventListener("keyup", event => {
            if (event.key == "g") {
                document.body.style.background = "";
            }
        });
    </script>

</body>
</head>

</html>

```