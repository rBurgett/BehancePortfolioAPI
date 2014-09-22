BehancePortfolioAPI
===================

This is a simple object for grabbing a Behance portfolio and projects on the client. There are obvious security risks doing it this way because any client can get your key if he/she wants. But Behance limits the number of queries per IP address, so if you are going to do this via your own server you will need to store the data on your own database rather than call it fresh rom Behance each time someone visits. I built this for a client who--regardless of the risks--wanted to access the API fully from the client-side.

First download and add the behanceAPI.js file to the bottom of your HTML document. If you have not already added jQuery to your project, be sure and add that before the behanceAPI script.

Now just create and initialize your portfolio object with your use and key:
```JavaScript
var myPortfolio = Portfolio.create({
    user : "[your Behance username]",
    key : "[your Behance API key]"
});
```
Now you have an oject with three important methods. To grab a portfolio, use the method getPortfolio(callback). For example:
```JavaScript
myPortfolio.getPortfolio(
  function(data) {
    console.log(data);
  }
);
```
If you would like to add previous and next projects ID properties to each item in the portfolio, then use the addPrevNext(data) method. Using this made it easy for me to add previous and next buttons to the projects in the portfolio.
```JavaScript
myPortfolio.getPortfolio(
  function(data) {
    var newData = myPortfolio.addPrevNext(data);
    console.log(newData);
  }
);
```
You are now ready to get a project with the getProject(projectId, callback) method. For example:
```JavaScript
myPortfolio.getProject([your project Id], function (projectData) {
    console.log(projectData);
  }
);
```
There you go! Enjoy!
