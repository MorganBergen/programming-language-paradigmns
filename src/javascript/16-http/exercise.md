
# In-Class Problem

Morgan Bergen

1.  Create a request from a client to get the file "index.html" from the host "ku.edu" using HTTP version 1.1
2.  Create a response from the server for ku.edu which contains the index.html file.  Assume the length of the file is 50,000 bytes and it was last modified February 23, 2022 at 9:00:00 GMT.

**Request from Client**
```
GET /index.html HTTP/1.1
Host:  ku.edu
User-Agent:  Chrome
```

**Response from Server**
```
HTTP/1.1 200 OK
Content-Length:  50000
Content-Type:  text/html
Last-Modified:  Wed, 23 Feb 2022 9:00:00 GMT

<!doctype html>
... the rest of the document
```