# HTTP and Forms

## File Fields

- File fields were originally designed as a way to upload files from the user's machine through a form.
- In modern browsers, they also provide a way to read such files from JavaScript programs.
- The field ascts as a kind of gate keeper
- The script cannot simply start reading private files from the user's computer

```HTML
<input type="file">
<script>
let input = document.querySelector("input");
input.addEventListener("change", () => {
    if (input.files.length > 0) {
        let file = input.files[0];
        console.log("You chose", file.name);
        if (file.type) {
            console.log("It has type", file.type);
        }
    }
});
</script>
```

## Storing data client-side
