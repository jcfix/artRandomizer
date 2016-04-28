# artRandomizer
##### Users can retreive a painting, record, video, mp3, sculpture or other art medium from a simple search.

#### By Jessica Fix and Taylor Pokoj

## Description
Have you ever wanted to append art in space? Now you can with the artRandomizer! Just enter a search term and let our API do the work for you. Enjoy your search results set against a glorious interstellar background from NASA's Astronomy Picture of the Day. 

## Setup

* Clone repository from GitHub.
* Navigate to directory.

You will need an API key from Europeana labs to use this application, which can be obtained via `http://labs.europeana.eu/api/getting-started`. You will also need NASA's APOD api which can be obtained here: `https://api.nasa.gov/api.html#apod`.

Create a .env file at the top of your directory and insert the following code: `exports.apiKey = "API_KEY_GOES_HERE";`

Make sure to add .env to your .gitignore file before pushing to GitHub.

* `$ npm install`
* `bower install`
* `$ gulp build`
* `$ gulp serve`


## Technologies Used

* HTML5
* CSS3
* SASS
* JavaScript
* jQuery
* Node.js
* Gulp

### Legal

Copyright (c) 2016, Jessica Fix & Taylor Pokoj

This software is licensed under the MIT license.

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
