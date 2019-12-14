<p align="center"><a href="https://kutt.it" title="kutt.it"><img src="https://raw.githubusercontent.com/thedevs-network/kutt/9d1c873897c3f5b9a1bd0c74dc5d23f2ed01f2ec/static/images/logo-github.png" alt="Kutt.it"></a></p>

# Kutt.it

**Kutt** is a modern URL shortener with support for custom domains. Shorten URLs, manage your links and view the click rate statistics.

_Contributions and bug reports are welcome._

[https://kutt.it](https://kutt.it)

[![Build Status](https://travis-ci.org/thedevs-network/kutt.svg?branch=v2-beta)](https://travis-ci.org/thedevs-network/kutt)
[![Contributions](https://img.shields.io/badge/contributions-welcome-brightgreen.svg)](https://github.com/thedevs-network/kutt/#contributing)
[![GitHub license](https://img.shields.io/github/license/thedevs-network/kutt.svg)](https://github.com/thedevs-network/kutt/blob/develop/LICENSE)
[![Twitter](https://img.shields.io/twitter/url/https/github.com/thedevs-network/kutt/.svg?style=social)](https://twitter.com/intent/tweet?text=Wow:&url=https%3A%2F%2Fgithub.com%2Fthedevs-network%2Fkutt%2F)

## Kutt v2 (🚧 beta)

The new version of Kutt is here. In version 2, we used TypeScript and we moved from Neo4j to PostgreSQL database in favor of performance and we're working on adding new features.

If you're coming from v1, refer to [MIGRATION.md](MIGRATION.md) to migrate data from Neo4j to PostgreSQL.

You can still find the stable version (v1) in the [v1](https://github.com/thedevs-network/kutt/tree/v1) branch.

## Table of Contents

- [Key Features](#key-features)
- [Stack](#stack)
- [Setup](#setup)
- [Browser Extensions](#browser-extensions)
- [API](#api)
- [Integrations](#integrations)
- [3rd Party Packages](#3rd-party-packages)
- [Contributing](#contributing)

## Key Features

- Free and open source.
- Custom domain support.
- Custom URLs for shortened links
- Setting password for links.
- Private statistics for shortened URLs.
- View and manage your links.
- RESTful API.

## Stack

- Node (Web server)
- Express (Web server framework)
- Passport (Authentication)
- React (UI library)
- Next (Universal/server-side rendered React)
- Redux (State management)
- styled-components (CSS styling solution library)
- Recharts (Chart library)
- PostgreSQL (database)

## Setup

You need to have [Node.js](https://nodejs.org/), [PostgreSQL](https://www.postgresql.org/) and [Redis](https://redis.io/) installed.

1. Clone this repository or [download zip](https://github.com/thedevs-network/kutt/archive/v2-beta.zip).
2. Copy `.example.env` to `.env` and fill it properly.
3. Install dependencies: `npm install`.
4. Run for development: `npm run dev`.
5. Run for production: `npm run build` then `npm start`.

### Docker

You can use Docker to start the app. The simplest way is to just run `docker-compose up` command and then the app should be ready on port "3000".

## Browser Extensions

Download Kutt's extension for web browsers via below links. You can also find the source code on [kutt-extension](https://github.com/abhijithvijayan/kutt-extension).

- [Chrome](https://chrome.google.com/webstore/detail/kutt/pklakpjfiegjacoppcodencchehlfnpd)
- [Firefox](https://addons.mozilla.org/en-US/firefox/addon/kutt/)

## API

In addition to the website, you can use these APIs to create, delete and get URLs.

### Types

```
URL {
  createdAt {string} ISO timestamp of when the URL was created
  id {string} Unique ID of the URL
  target {string} Where the URL will redirect to
  password {boolean} Whether or not a password is required
  count {number} The amount of visits to this URL
  shortUrl {string} The shortened link (Usually https://kutt.it/id)
}
```

In order to use these APIs you need to generate an API key from settings. Never put this key in the client side of your app or anywhere that is exposed to others.

All API requests and responses are in JSON format.

Include the API key as `X-API-Key` in the header of all below requests. Available API endpoints with body parameters:

**Get shortened URLs list:**

```
GET /api/url/geturls
```

Returns:

```
{
  list {Array<URL>} List of URL objects
  countAll {number} Amount of items in the list
}
```

**Submit a link to be shortened**:

```
POST /api/url/submit
```

Body:

- `target`: Original long URL to be shortened.
- `customurl` (optional): Set a custom URL.
- `password` (optional): Set a password.
- `reuse` (optional): If a URL with the specified target exists returns it, otherwise will send a new shortened URL.

Returns: URL object

**Delete a shortened URL** and **Get stats for a shortened URL:**

```
POST /api/url/deleteurl
GET /api/url/stats
```

Body (or query for GET request)

- `id`: ID of the shortened URL.
- `domain` (optional): Required if a custom domain is used for short URL.

## Integrations

### ShareX

You can use Kutt as your default URL shortener in [ShareX](https://getsharex.com/). If you host your custom instance of Kutt, refer to [ShareX wiki](https://github.com/thedevs-network/kutt/wiki/ShareX) on how to setup.

### Alfred Workflow

Download Kutt's official workflow for [Alfred](https://www.alfredapp.com/) app from [alfred-kutt](https://github.com/thedevs-network/alfred-kutt) repository.

## 3rd Party packages
| Language  | Link                                                       | Description                                       |
|-----------|------------------------------------------------------------|---------------------------------------------------|
| C# (.NET) | [KuttSharp](https://github.com/0xaryan/KuttSharp)          | .NET package for Kutt.it url shortener            |
| Python    | [kutt-cli](https://github.com/RealAmirali/kutt-cli)        | Command-line client for Kutt written in Python    |
| Ruby      | [kutt.rb](https://github.com/RealAmirali/kutt.rb)          | Kutt library written in Ruby                      |
| Rust      | [urlshortener](https://github.com/vityafx/urlshortener-rs) | URL shortener library written in Rust             |
| Rust      | [kutt-rs](https://github.com/robatipoor/kutt-rs)           | Command line tool written in Rust                 |
| Node.js   | [node-kutt](https://github.com/ardalanamini/node-kutt)     | Node.js client for Kutt.it url shortener          |
| Bash      | [kutt-bash](https://git.fossdaily.xyz/caltlgin/kutt-bash)  | Simple command line program for Kutt              |
| JavaScript| [kutt-vscode](https://github.com/mehrad77/kutt-vscode)     | Visual Studio Code extention for Kutt             |
| Java      | [kutt-desktop](https://github.com/cipher812/kutt-desktop)  | A Cross platform Java desktop application for Kutt|

## Contributing

Pull requests are welcome. You'll probably find lots of improvements to be made.

Open issues for feedback, requesting features, reporting bugs or discussing ideas.

Special thanks to [Thomas](https://github.com/trgwii) and [Muthu](https://github.com/MKRhere). Logo design by [Muthu](https://github.com/MKRhere).
