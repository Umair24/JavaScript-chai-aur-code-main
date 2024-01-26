# Dom Project 1

[Project 1 Link](https://stackblitz.com/edit/dom-project-chaiaurcode-lsxfkw?file=1-colorChanger%2F01_index.html)


### Home page source code are present in my GitHub repo
[Click Here](https://github.com/Umair24/JavaScript-chai-aur-code)

# Source Code 
```HTML
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <link rel="stylesheet" href="01_style.css" />
    <link rel="stylesheet" href="../styles.css" />
    <title>Background Color Switcher</title>
  </head>
  <body>
    <nav>
      <a href="/" aria-current="page">Home</a>
    </nav>

    <div class="canvas">
      <h1>Background Color Switcher</h1>
      <span class="button" id="grey"></span>
      <span class="button" id="white"></span>
      <span class="button" id="blue"></span>
      <span class="button" id="yellow"></span>
      <h2>
        Click on one of the above colors
        <span>to change the background color of this page!</span>
      </h2>
    </div>
    <script src="01_script.js"></script>
  </body>
</html>
```


```CSS
html {
  margin: 0;
}

span {
  display: block;
}
.canvas {
  margin: 100px auto 100px;
  width: 80%;
  text-align: center;
}

.button {
  width: 100px;
  height: 100px;
  border: solid black 2px;
  display: inline-block;
}

#grey {
  background: grey;
}

#white {
  background: white;
}
#blue {
  background: blue;
}
#yellow {
  background: yellow;
}
```


```JavaScript
let buttons = document.querySelectorAll('.button');
// console.log(buttons);

let body = document.querySelector('body');
// console.log(body)

buttons.forEach(function (button) {
  // console.log(button)
  button.addEventListener('click', function (event) {
    console.log(event);
    console.log(event.target);

    if (event.target.id == 'grey') {
      body.style.backgroundColor = event.target.id;
    }

    if (event.target.id == 'white') {
      body.style.backgroundColor = event.target.id;
    }

    if (event.target.id == 'blue') {
      body.style.backgroundColor = event.target.id;
    }

    if (event.target.id == 'yellow') {
      body.style.backgroundColor = event.target.id;
    }
  });
});

```