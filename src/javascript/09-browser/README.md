# JavaScript and the Web Browser

## What is a Browser?
**JavaScript** was a language introduced in 1995 as a way to add programs to web pages in the Netscape Navigator browser.  Netscape Navigator was one of the first web browsers at that time.

<img width="1348" alt="Screen Shot 2022-09-27 at 3 48 38 PM" src="https://user-images.githubusercontent.com/65584733/192632333-ea75a5c9-eff2-48a4-bc96-dd918a46d7ac.png">

<img width="1200" src="https://user-images.githubusercontent.com/65584733/192152189-bad24bc7-1ff6-48d4-91a2-d3ef2c635600.jpeg">


A web browser (also referred to as an Internet browser or simply a browser) is application software for accessing the World Wide Web or a local website. When a user requests a web page from a particular website, the web browser retrieves its files from a web server and then graphically renders the page on the user's screen.

Now a web browser in JavaScript programmers eyes can be thought of a fully featured platform for application development.  Web browsers specialize in the display of formatted text and images, but, like native operating systems, browsers also provide other services, including graphics, video, audio, network‐ ing, storage, and threading. JavaScript is the language that enables web applications to use the services provided by the web platform, and this chapter demonstrates how you can use the most important of these services.

A line mode browser is the second web browser ever created adn was demonstrated to be portable, meaning it was able to be used in differing operating systems.
## client-server architecture

A high level overview of the client-server architcture of which all modern web applications are based off of.  Is a distributed programming structure.


<p style="color: rgb(69, 112, 219);">Client -> </p>

<p style="color: rgb(0, 171, 243);"> <- Computer Network -> </p> 

<p style="color: rgb(50, 173, 144);">Server</p>

### <p style="color: rgb(50, 173, 144);">Server</p>

A server provides resourses or services to it's clients based on requests made.  A server is a piece of hardware containing software that provides functionaity for other devices to utitilize.  These devices are called clients.  In a client-server model servers provide "services" such as sharing data, resources, or performing computations for that client.  

- 1 server can server multiple clients
- 1 client can use multiple servers

When a client processes a request that request can be made over a communication network or on a different device.  In this case will be going over web servers, however there are multiple different types of servers out there such as 

database servers, file servers, mail servers, print servers, game servers, blockchain servers, etc.  General use cases of client server systems are typically implemented with a request-reponse model, which si where a client sends a request to a server for which that request to the server is performed.  When that reponse is preformed then there is a response send back to that client.  Server class hardware is more specalized, powerful, and reliable than standard personal computers, and are comprised of things called computing clusterer such are replaceable server components.

***server* etymology**
> "first come, first served!"

The word server comes from [queueing theory](https://en.wikipedia.org/wiki/Queueing_theory#Queueing_networks) in mathmatics. 

A server is a kind of daemon that performs a services for the requester and which often runs on a computer other than the one on which the requestor/client runs.  

A daemon coined from Maxwell's Demon  `Disk And Execution MONitor` is a program that in not invoked explicitly, but lies formant waiting for some condition to occur.  The idea is that the perpetrator of the condition need not be aware that a daemon is lurking (even though a program will of course commit an action only because it knows that it will implicitly invoke a daemon node).  A program does not need to know **how** to do a process, it simply needs to just request for that process and then allow for the daemon to decide what to do.  Daemons are usually spawned automatically by the system, and may either live forever or be regenerated at intervals. 

Generally a service that a server provides is an abstraction of computer resources and a client does not have to be concerned with how the server performs while fulfilling the request.  In computer science a concern is a particular set of information that has an effect on the code of a program and it can be as general as the deatisl of  a database interaction or as specific as performing a calculation.

### <p style="color: rgb(69, 112, 219);">Client</p>

A client is a computer hardware or software that accesses a service made available by a server as a part of the client-server model of computer networks.  The server is assumed to always be turned on, hut the system un which the client is not, it is made access through the service by way of the network.  There are two differnet types of computing clients, they are either thick clients, thin clients, or diskless nodes.  

A personal computer in our case is a client, under the client type classification it is a FAT CLIENT.

A fat client is one that is rich in data processing and it does necessarily rely on the server for most of the operations that it preforms.  A mac for instance is a fat client because it has a "relatively" large set of features and capabilities and its light reliance upon a server.  A computer that runs an art program such as Adobe Photoshop on Adobe creative cloud suite ultimately shares the results of its work on a network.  A workstation in contrast runs almost entirely as a standalone machine save to send or recieve files via a network.   

The client will communicate to a server based on a request-response messaging pattern, this exchange is an example of inter-process communication the alnguage and rules of communication are defined as a communication protocol.

### Client communication Server example
Illustration of a design pattern applicable to the client-server model.  Which is something called a separation of concerns.


When a bank customer accesses online banking services with a web browser (the client).  The client initates a request to the bank's webserver.  The customer's login credentials may be stored in a database, and the webserver accesses the database server as a client.

An application server interprets the returned data by applying the bank's business logic and provies the output to the webserver.  The webserver returns the result to the client web browser for display.

Each step of this sequence of client-server message exchanges, a computer processes a request and returns that data.  This is the request reponse messaging pattern.  When all the requests are met, the sequence is complete and the web browser presents the data to the customer.  

### <p style="color: rgb(0, 171, 243);">Computer Network / Internet</p> 

Computer networks have been around since 1950.  If you put two cables between two computers and allow them to send data back and forth through these cables, you can do all kinds of wonderful things.  If connecting two machines in the same building allows us to do wonderful things, then connecting machines all over the planet 🌏 should even be better.  The technology to start implementing this vision of the world was developed in the 1960s, and the resulting network is called the internet.  

![internet](https://user-images.githubusercontent.com/65584733/192167416-68f52d09-3d40-4b70-a32c-8ce3b76592e2.png)


### Network Protocol

A computer can use a network to shoot bits at another computer.  For any effective communication to aris out of this bit-shooting, the computers on both ends must know what the bits are supposed to represent.  The meaning of any given sequence of bits depends entirely on the kind of thing that it is trying to express and on the encoding mechanism used.  

A _network protocol_ describes a style of communication over a network.  

**Types of Network Protocols**

A protocol is a system of rules that allows two or more communications systems to transmit infomation/data via any kind of variation of a physical quantity.  The protocol defines a set of...

1. rules
2. syntax
3. semantics
4. synchronization

... of communication and possible error recovery methods.

Communication systems use well-defined formats for exchanging various messages.  Each of which has a specific meaning to elicit a response from a range of possble responses pre-determined for that particular situation.  The specified behavior for parties is independent of how it is to be implemented.  Communication protocols in general have to be agreeed upon for all parties involed.  In order to reach an agreement/consensus - a protocol may be developed into a technical standard / specification.  Multiple protocols often describe different aspects of a single communication. A group of protocols designed to work together is known as a protocol suite; when implemented in software they are a protocol stack.

**Protocol vs Programming Language**

> _**Protocols** are to communication what **Programming Languages** are to computations_

**Example Protocols**

1.  **SMTP** Simple Mail Transfer Protocol

    An internet standard communication protocol for electronic mail transmission.  Mail servers and other message transfer agents use SMTP to send and recieve mail messages.

2.  **HTTPS** Hypertext Transfer Protocol

    An application layer protocol in the Internet Protocol suite model for distributed, collaborative, hypermedia information sustems.  HTTP is the foundation of data communication for the World Wide Web, where hypertext documents include hyperlinks to other resoruces that users can easily access, (e.g. a mouse click by tapping the screen in a web browser)

3.  **SMS** Short Message Service

    Is a texting message service component of most telephone, internet, and mobile device systems.  It uses standardized communication protocols that let mobile devies excange short text messages and is an intermediary service thart can facilitate a text-to-voice conversion to be sent to landlines.  

Most protocols are built on top of other protocols.  


### OSI Network Protocol Model

The open systems interconnection model is a conceptual model that provides a common basis for the coordination of [ISO] standards development for the purpose of systems interconnection.  In the OSI reference model the communications between a computing system are split into seven different abstraction layers.  

|               | layer           | function
| ------------- | -------------   | -------------
| host layer    | 7  application  | high-level APIs, including      resource sharing and remote file access.
| media layer   | 6  presentation | translation of data between a networking service and an application; including character encoding, data compression, and encryption/decryption.
| media layer   | 5  session      |  managing communication sessions, continuous exchange of information in the form of multiple back-and-forth transmissions between two nodes.
| media layer   | 4  transport    | reliable transmission of data segments between points on a network, including segmentation, acknowledgement, and multiplexing.
| media layer   | 3  network      |  structuring and managing a multi-node network, including addressing, routing, and traffic control
| media layer   | 2  data link    |  reliable transmission of data frames between two nodes connected by a physical layer
| media layer   | 1 physical      |  transmission and reception of raw bit streams over a physical medium.

### Hypertext Transfer Protocol (HTTP)

Hypertext Transfer Protocol **HTTP** is a protocol for retrieving named resources (chunks of information)

Hypertext Transfer Protocol (HTTP) is a protocol for retrieving named resources (chunks of information, such as web pages or pictures).  It specifies that the side making the request should start with a line like this, naming the resource and the version of the protocol that it is trying to use:

`GET/index.html HTTP/1.1`

There are a lot more rules about the way th erequester can include more information in the request and the way the other sie, which returns the resource, packages up its contents.

HTTP treats the network as a streamlike device into which you can put bits and have them arrive at the correct destination in the correct order.

### TCP/IP Transmission Control Protocol / Internet Protocol

The internet protocol suite is a set of communication protocols used in the internet and similar computer networks.  The current foundational protocols in the suite are the Transmission Control Protocol and the Internet Protocol.  The Department of Defense (DOD) model funded the United States Departemnt of Defense through DARPA.  It's implementation is a protocol stack.  

Internet communication protocols are published by the Internet Engineering Task Force. The Internet Engineering Task Force is a standards organization for the Internet and is reponsible for the technical standards that make up the Internet Protocol suite.  Also known as TCP/IP.  The IEEE (Institute of Electrical and Electronics ENgineers) handles wired and wireless networking and the International Organization for Standardization (ISO).  

## hypertext transfer protocol (http)

hypertext tranfer protocol is a protocol for retrieving named resources (chunks of information, such as webpages or pictures).  It specifies that the side making the request should start with a line like this, naming the resource nad the version of the protocol that it is trying to use:

`GET/index.html HTTP/1.1`

There are alot more rules about the way the requester can include more information in the request and the way the other side, which returns the resource, packages up its content.  HTTP treats the network as a streamlike device into which you can put bits and have them arrive at the correct destination in the correct order.  

## transmission control protocol (tcp)

Transmission control protocol tcp is a protocol that ensures you can treat the network as a streamlike device into which you can put bits and have them arrive at the correct destination in the correct order.  All internet-connected devices "speak" it, and most communication on the internet is built on top of it.  A tcp connection works as follows:  one computer must be waiting, or listening, for other computers to start talking to it.  To be able to listen for different kinds of communication at the same tm eon a sinle machine, each listener has a number (called a port) associated with it.  Most protocol specify which port should be used by default.

```
machine							server
		-> tcp connection request ->
		<- tcp connection reply <- 
		-> get http://www.massey.ac.nz/ ->
		<- <file> <-
```

For example, when we want to send an email using the SMTP protocol, the machine through which we send it is expected to be listening on `port 25`.  Another computer can then establish a connection by connecting to the target machine using the correct port number.  If the target machine cna be reached and is listening on that port, the connection is successfully created.  The listening computer is called the server, and the connecting computer is called the client.  Such a connect asts as a two-way pipe through which bits can flow - the machines on both ends can put data into it.  Once the bits are successfullty transmitted, they can be read out again by the machine on the other side. 
## http and tcp in the osi protocol model

**osi model**

application host layers function
high level apis including resource sharing, remote file access HTTP

presentation host layer function
translation of data between a networking service and an application; including character encoding, data compression, and encryption/decryption

session host layer function 
managing communication sessions, i.e. continuous exchange of info in the form of multiple back-and-forth transmissions between two nodes.

transport host layer function
reliable transmission of data segments between points on a network, including segmentation, acknowledgement and multiplexing TCP

network media layer function
structuring and managing a multi-node network, including addressing, routing, and traffic control.

data link media layer function
reliable transmission of data frame between two nodes connected by a physical layer

physical media layer function
transmission and reception of raw bit streams over a physical medium

## world wide web www

The world wide web is a set of protocols and formats that allow us to visit web pages in a browser.  The "web" part of the name refers to the fact that such pages can easily link to each other, thus connecting into a huge mesh that users can move through.  To become part of the web, all you need to do is connect a machine to the internet and have it listen on `port 80` with the http protocol so that other computers can ask it for documents.  Each document on the web is named by by a uniform resource locator url, which looks like this.

`http://eloquentjavascript.net/13_browser.html>`

protocol - `http://`

sever - `eloquentjavascript.net`

path - `13_browser.html`

### `http://` protocol
Telling the browser that the url will be using the http protocol method

### `eloquentjavascript.net/` server

This then identifies which server we are requesting this document from.

### `13_browser.html` path

The path string identifies the specific document / resource we are intersted in.


Machines that are conected to the internet get an IP address, which is like a number that can be used to send messages to that machine, and looks like this...

`149.210.142.219` or `2001:4860:4860::8888`

But lists of more or less random nimbers can be hard to remember and difficult to type, so you can instead register a domain name (e.g. ku.edu) for a specific address or set of addresses.


1.  First your browser has to find out what IP address ku.edu refers to
2.  Then using the HTTP protocol, it will make a connection to the server at that address and ask for the resource: `13_browser.html`

If all goes well, the server sends back a document, which your browser then displays on your screen.

## HTML HyperText Markup Language

HTML is the document format used for all webpages
An HTML document contains, texts as well as tags that provide structure to the text, describing things like links, paragraphs, and headings









