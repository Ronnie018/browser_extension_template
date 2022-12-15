## Getting Started

### Understanding the **manifest.json** file:

##### that is the first thing you must do, there are some atributes we'll take a look now:

#### URL fields

![setting config file](https://raw.githubusercontent.com/Ronnie018/browser_extension_template/main/docs/static/names.PNG?raw=true)

these fields define which websites the extension will target, so it will not execute logic if it's not needed.

##### some standard values:

<ul>
  <li>
    <code>&ltall_urls&gt</code>: <span>
    <strong>matches any url (http, https, ftp or file).</strong>
    </span></li>
  <li>
    <code>http://*/*</code>: <span>
    <strong>matches any http url.</strong>
    </span>
  </li>
  <li>
    <code>https://*/*</code>: <span>
    <strong>matches any https url.</strong>
    </span>
  </li>
  <li>
    <code>"*://*/*"</code>: <span>
    <strong>matches https and http url.</strong>
    </span>
  </li>
</ul>

#### Other manifest.json fields

<table>
  <tr>
    <th>field</th>
    <th>definition</th>
  </tr>
  <tr>
    <td>name</td>
    <td>Name of the extension.</td>
  </tr>
  <tr>
    <td>version</td>
    <td>Version of the Extension code.</td>
  </tr>
  <tr>
    <td>description</td>
    <td>Your description of what the extension does.</td>
  </tr>
  </tr>
  <tr>
    <td>permissons</td>
    <td>Which user data your extension is suposed to access</td>
  </tr>
  <tr>
    <td>service_worker</td>
    <td>sets the path of the file to deal with events.</td>
  </tr>
  <tr>
    <td>js</td>
    <td>sets the main file's path of the extension.</td>
  </tr>
  <tr>
    <td>resources</td>
    <td>paths of static files</td>
  </tr>
  <tr>
    <td>default_icon</td>
    <td>path to the extension's icon (same file path for all the sizes).</td>
  </tr>
  <tr>
    <td>default_title</td>
    <td>title of the project.</td>
  </tr>
  <tr>
    <td>default_popup</td>
    <td>path of the popup html.</td>
  </tr>
</table>

### Service_worker(background.js) event handler:

 ***this file is responsable for define code for specific events in the browser, since it doesn't have access to DOM elements we don't have much to do with it.***

<code style="color: #252525;">chrome.tabs.onUpdated.addListener(() => {
    <span style="color: #3f3f4d;">console.log(<strong style="color: #dd8d14;">"hello world!"</strong>);</span>
  });
  <span style="color: #7fd87f;">// the code does not run in the page but in the browser itself.</span>
</code>

### ContentScript Main extension file

***Basically, where all your extension logic will be written, the file paths listed in "content_scripts" can communicate directly with the browsed page.***

<code>
  (() => {
    // your code must be inside this function
  
    const elementConfig = {
      color: "#ffffff",
      bgColor: "#333333",
    };
  
    function elementAttributeSetter(element) {
      element.style.backgroundColor = elementConfig.bgColor;
      element.style.color = elementConfig.color;
      return element;
    }
  
    const htmlTag = document.getElementById("someDiv");
  
    const newElement = elementAttributeSetter(
      document.createElement("div")
    );
  
    htmlTag.appendChild(newElement);
    
  })();  
</code>

