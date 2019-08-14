# arb-converter-cli

[![CircleCI](https://circleci.com/gh/bmw-tech/arb-converter-cli/tree/master.svg?style=svg)](https://circleci.com/gh/bmw-tech/arb-converter-cli/tree/master)
[![codecov](https://codecov.io/gh/bmw-tech/arb-converter-cli/branch/master/graph/badge.svg)](https://codecov.io/gh/bmw-tech/arb-converter-cli)

CLI to convert ARB (Application Resource Bundle) files to different formats, and vice versa

## Usage

To install:

`npm install arb-converter-cli`

For more details, run `arb-converter` on your terminal:

```bash
Usage:  [options] [command]

CLI tool to convert ARB (Application Resource Bundle) files to other formats, and vice versa.

Options:
  -h, --help                 output usage information

Commands:
  from-arb [options] <file>  Specify the location of the ARB file to be converted
  to-arb [options] <dir>     Specify the directory containing the JSON files to be converted to ARB
```

## Maintainers

Project Lead(s):

- @ezmeev

Main Maintainer(s):

- @jorgecoca

## License

```
MIT License

Copyright (c) 2019 BMW Technology Corporation

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```