# In-Class Problem

Morgan Bergen

More on javaScript & HTML Forms

October 5th 2022

1.  What value will this code show for the question mark(?)?

    ? = 14

2.  Comment each line of JavaScript showing how it calculated your answer for No. 1

```HTML
<!DOCTYPE html>
<html>

<head>
    <title>
        html forms
    </title>
</head>

<body><select multiple>
        <option value="1">0001</option>
        <option value="2">0010</option>
        <option value="4">0100</option>
        <option value="8">1000</option>
    </select>=<span id="output">0 </span>
    <script> // the select element is a list of options
        let select = document.querySelector("select");

        // the output element is a span id of the <select multiple> elements
        let output = document.querySelector("#output");

        // takes in a change parameter and will iterate through the 
        select.addEventListener("change", () => {
            let num = 0;

            // iterate through the options select.option will return an array
            for (let option of Array.from(select.options)) {
                if (option.selected) {
                    // num will be the sum of the selected options
                    num += Number(option.value);
                }
            }

            // output the sum of the selected options
            output.textContent = num;
        });
    </script>

</body>

</html>

```