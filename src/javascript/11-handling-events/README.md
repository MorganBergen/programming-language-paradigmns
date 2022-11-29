# Handling Events in JavaScript

### Synchronous Programming

In a synchronous enviroment, where the request function returns only after it has done its work, the easiest way to perform this task is to make the requests one after the other.  This has a drawback that the second request will only be started after the first has finished.  The total time takem will be at least the sum of the two response times.

Synchronous programming works if you're running a program in one computer and everything you need is on that computer, but it is not find if you have to go to another computer across a network to get something, like in a client-server application.

### Asynchronous Programming

Asynchronous programming makes it possible to express waiting for long-running actions without freezing the program during these actions.  

In the asynchronous model, starting a network action conceptually causes a split in the timeline.  The program that initiated the action continues running, and the action happens alongside it, notifying the program when it is finished.  Another way to describe the difference is that waiting for actions to finish is:

1.  Implicit in the synchronous model
2.  Explicit, under our control, in the asynchronous one

JavaScript enviroments typically implement this style of programming using callbacks, functions that are called when the actions complete.

### Callbacks

```diff
- text in red
+ text in green
! text in orange
# text in gray
@@ text in purple (and bold)@@
```