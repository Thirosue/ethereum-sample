# ethereum-sample

## ethereum setup

+ init

```
geth --datadir ./private init ./genesis.json
```

+ first start 

```
geth --datadir ./private --networkid 123456 --nodiscover --maxpeers 0 --rpc --rpcapi eth,net,web3,personal,admin,miner --minerthreads 1 --rpccorsdomain "*" console
```

+ create base account

```
personal.newAccount("任意のパスフレーズ")
```

+ start with unlock and mining

```
geth --datadir ./private --networkid 123456 --nodiscover --maxpeers 0 --rpc --rpcapi eth,net,web3,personal,admin,miner --minerthreads 1 --rpccorsdomain "*" --unlock 0 --mine
```

## truffle setup

+ install
```
npm install
```

+ start server
```
npm start
```
