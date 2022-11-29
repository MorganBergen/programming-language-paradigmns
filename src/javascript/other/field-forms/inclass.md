# In-Class Problem

programming language paradigmns
Morgan Bergen
October 7th 2022

1. Draw what the code would display on the client's browser.


The code would look like the following

-----------------
|		|	no files selected
|  choose files |
|		|
-----------------

2.  Assume the code is in a file named "EECS368ClassProblem2.html", draw what the code below would display on the client's browser if the user selected this file name.

The output of the code would be the name of the file
`EECS368InClassProblem2.html`


-----------------
|               |       EECS368InClassproblem2.html
|  choose files |
|               |
-----------------


3.  What would the console output be?

```HTML
<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <title>My App</title>
</head>

<body>
    <input type="file" multiple>
    <script>
	<!--  -->
        let input = document.querySelector('input');
	    input.addEventListener("change", () => {
		for (let file of Array.from(input.files)) {
			let reader = new FileReader();
			reader.addEventListener("load", () => {
				console.log("File", file.name, "starts with", reader.result.slice(0, 20));
			});
			reader.readAsText(file);
		}
	});

    </script>
</body>
</html>
```

Upon uploading the console log would contain the following...

File <!DOC...> with the initial contents of the file.
