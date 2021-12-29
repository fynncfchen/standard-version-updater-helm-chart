# standard-version-updater-helm-chart

A [Helm][helm] Chart updater for [standard-version][standard-version].

## Installation

```shell
npm install standard-version-updater-helm-chart --save-dev
```

```shell
yarn add -D standard-version-updater-helm-chart
```

## Usage

In your [configuration file][versionrc]:

```javascript
const helmChartUpdater = require("standard-version-updater-helm-chart");

module.exports = {
  // ...,
  bumpFiles: [
    {
      filename: "my-chart/Chart.yml",
      updater: helmChartUpdater
    }
  ]
};
```

[helm]: https://helm.sh/
[standard-version]: https://github.com/conventional-changelog/standard-version
[versionrc]: https://github.com/conventional-changelog/standard-version#configuration
