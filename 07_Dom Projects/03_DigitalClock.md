# Dom Project 3

[Project 3 Link](https://stackblitz.com/edit/dom-project-chaiaurcode-hhsqnf?file=3-DigitalClock%2F03_index.html)


### Home page source code are present in my GitHub repo.
[Click Here](https://github.com/Umair24/JavaScript-chai-aur-code)

# Source Code
```HTML
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <link rel="stylesheet" href="../styles.css" />
    <title>Your Local Time</title>
  </head>
  <body>
    <nav>
      <a href="/" aria-current="page">Home</a>
    </nav>

    <div class="center">
      <div id="banner"><span>Your local time</span></div>
      <div id="clock"></div>
      <div id="fulldate"></div>
    </div>

    <script src="03_script.js"></script>
  </body>
</html>
``` 

```CSS
<style>
      body {
        background-color: #212121;
        color: #fff;
      }
      .center {
        display: flex;
        height: 100vh;
        justify-content: center;
        align-items: center;
        flex-direction: column;
      }
      #clock {
        font-size: 30px;
        background-color: orange;
        padding: 20px 50px;
        margin-top: 10px;
        border-radius: 70px;
      }
      #fulldate {
        font-size: 27px;
        background-color: orange;
        padding: 20px 48px;
        margin-top: 12px;
        border-radius: 70px;

      }
</style>
```


```JavaScript
let clock = document.getElementById('clock')  // we can also use "getElementById" instead of "querySelector"

let fulldate = document.querySelector('#fulldate')

// document.querySelector('#clock') 


setInterval(function(){
  let date = new Date()
  clock.innerHTML = date.toLocaleTimeString();
  fulldate.innerHTML = date.toDateString();
}, 1000)
```