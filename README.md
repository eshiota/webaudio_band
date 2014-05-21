Web Audio Band
==============

A band in your browser, using the Web Audio API and Websockets.

About
-----

This is an experiment to show what's achievable using some know programming
patterns, JavaScript, browser APIs and a NodeJS server. So don't mind the
messy code in some parts of the application (especially the server code). =)

Running the project
-------------------

1. Install NodeJS
2. Install NodeJS package dependencies
3. Install Bower dependencies
4. Run the `grunt` task to generate the CSS and JavaScript
5. Run `node server.js`
6. Access `localhost:3000/admin?key=g4rbVcBTVfMFMf4GeZFTjxheBqgAQbc5nJGqef5UtvBZFth8` to
   access the host interface (that giant key was a crude way to avoid people
   at the conference possibly messing with the server =P)
7. Add some remote instruments, and access `[server ip]:3000/` on other devices.

Current problems
----------------

* There's no way to remove instruments from host.
* Server is in a veeeeery crude state. If the admin connection drops, probably
  there will be some duplicated instruments. Restart the server to fix this.
* Instrument interfaces are in a proof-of-concept state.

It's just for fun =)
--------------------

Probably I won't look that much at pull requests, but you're free to fork the
project, play with it, and contact me with cool ideas. =D