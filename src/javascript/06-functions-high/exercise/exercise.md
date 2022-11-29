# # Overview
Morgan Bergen

EECS 368 Programming Language Paradigms

Friday Sept 7th 2022

## In-Class Problem

1.  What will the function in the blue box below calculate for a script from the Script Data Set?
```javascript
function characterCount(script) {
    return script.ranges.reduce((count, [from, to]) => {
        return count + (to - from);
    }, 0);
}

console.log(SCRIPTS.reduce((a,b) => {
    return characterCount(a) < characterCount(b) ? b : a;
}));
``` 

This function will calculate the script that contains the largest amount of character in unicode.  The script data set is where higher-order functions process data.  In order to do so we use data sets about scripts - writing systems such as `Coptic`.  

The characterCount method reduces the `ranges` assigned to a script by summing their sizes.  The second call to reduce then uses this to find the largest script by comparing two scripts and returning the larger one.
`ranges` being the property that contains an array of unicode character ranges, each of which is a two-element array containing alower bound and an upper bound.  The lower bound in this case is an inclsuive (for example code 994 is a coptic character), and the upper bound is a non-inclusive code (for example 1108 is not).


2.  What will console.log display?


```bash
{
  name: 'Coptic',
  ranges: [ [ 994, 1008 ], [ 11392, 11508 ], [ 11513, 11520 ] ],
  direction: 'ltr',
  year: -200,
  living: false,
  link: 'https://en.wikipedia.org/wiki/Coptic_alphabet'
}
```

3.  Describe what this code from below does:

```javascript
SCRIPTS.reduce((a,b) => {
    return characterCount(a) < characterCount(b) ? b : a;
})
```

This will compare the total number of characters of two different scripts from our data set and will then after return the largest of the two after iterating.

