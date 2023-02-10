# cotd

![language][js]
![language][ts]
![ide][vscode]

[js]: https://img.shields.io/badge/made%20with-javascript-F7DF1E?logo=javascript&logoColor=F7DF1E&labelColor=202020&color=F7DF1E&style=for-the-badge
[ts]: https://img.shields.io/badge/made%20with-typescript-3178C6?logo=typescript&logoColor=3178C6&labelColor=202020&color=3178C6&style=for-the-badge
[vscode]: https://img.shields.io/badge/develop%20with-vscode-007ACC?logo=visualstudiocode&logoColor=007ACC&labelColor=202020&color=007ACC&style=for-the-badge

## 💡 Introduction

Import ```cotd```⌨️ to use ```console.typing()``` and ```console.deleting()``` in your source code.

## 📦 Installation

📥 Install ```cotd```⌨️ package:

```powershell
npm install cotd  # Using npm
yarn add cotd     # Using yarn
pnpm add cotd     # Using pnpm
```

🗑️ Uninstall ```cotd```⌨️ package:

```powershell
npm uninstall cotd  # Using npm
yarn remove cotd    # Using yarn
pnpm remove cotd    # Using pnpm
```

## 📜 Usage

➕ Import ```cotd```⌨️ package:

```js
require('cotd');  // Using CommonJS
import 'cotd';    // Using ES6 Module
```

🎨 Use ```console.typing()``` in the source code:

```js
await console.typing(
    'Hello World',  // Anything you wanna make it be typing in console
    375             // Typing speed. Unit: Millisecond (ms)
);
```

🎒 Use ```console.deleting()``` in the source code:

```js
await console.deleting(
    'Hello World',  // Anything you wanna make it be deleting in console
    250             // Deleting speed. Unit: Millisecond (ms)
);
```

## 🎧 Demo


## ⚖ License

<p>
MIT License

Copyright (c) 2023 uynilo9

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
</p>
