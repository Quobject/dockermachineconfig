# dockermachineconfig
A node.js wrapper for the `docker-machine config` command


[![NPM](https://nodei.co/npm/dockermachineconfig.png?downloads=true&downloadRank=true)](https://nodei.co/npm/dockermachineconfig/)
[![NPM](https://nodei.co/npm-dl/dockermachineconfig.png?months=6&height=3)](https://nodei.co/npm/dockermachineconfig/)

## Installation

### Step 1: Prerequisites

The docker-machine command line tool must be installed and accessible in the path

### Step 2: Installation
    
    npm install dockermachineconfig
    
Then:

```js
var dockermachine = require('dockermachineconfig');
```


## Usage

With promise:
```js
    dockermachine.config('machine-name').then( function (data) {
      console.log('data =', data);
    });

//data = {
//  raw: '--tlsverify --tlscacert="/home/ubuntu/.docker/machine/machines/machine.1.ap-southeast-2.1.0.0.4a/ca.pem" --tlscert="/home/ubuntu/.docker/machine/machines/machine.1.ap-southeast-2.1.0.0.4a/cert.pem" --tlskey="/home/ubuntu/.docker/machine/machines/machine.1.ap-southeast-2.1.0.0.4a/key.pem" -H=tcp://52.64.155.4:2376',
//  tlsverify: true,
//  tlscacert: '/home/ubuntu/.docker/machine/machines/machine.1.ap-southeast-2.1.0.0.4a/ca.pem',
//  tlscert: '/home/ubuntu/.docker/machine/machines/machine.1.ap-southeast-2.1.0.0.4a/cert.pem',
//  tlskey: '/home/ubuntu/.docker/machine/machines/machine.1.ap-southeast-2.1.0.0.4a/key.pem',
//  host: '52.64.155.4',
//  port: '2376'
//}


```

With callback:
```js
    dockermachine.config('machine-name', function(err, data) {
      console.log('data =', data);
    });

```

