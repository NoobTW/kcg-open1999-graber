# KCG Open1999 Graber

Automatically grab and divide open1999 data from original Open1999 API.

## Requirements
- [Node.js 7.6.0 or above](https://nodejs.org/en/download/)

## Installation

### Clone with Git
```bash
git clone https://github.com/NoobTW/kcg-open1999-graber.git
cd kcg-open1999-graber
npm install
```

### Or Download Releases
Download [latest release](https://github.com/NoobTW/kcg-open1999-graber/releases/latest), extract it, and run `npm install` in that folder.

## Getting Started

- [hourly.js](/hourly.js): grab data from Open1999 API, and save it in a folder temporarily.
- [daily.js](/daily.js): divide data from temporary files, generate daily (the last day) file in CSV and JSON format, and clean temoporary files.

### Usage

#### Run scripts manually
Run `node hourly.js` hourly.

Run `node daily.js` at 1:00 a.m. everyday.

#### Run scripts using crontab
```
0 * * * * node /foo/bar/kcg-open1999-graber/hourly.js
0 1 * * * node /foo/bar/kcg-open1999-graber/daily.js
```
