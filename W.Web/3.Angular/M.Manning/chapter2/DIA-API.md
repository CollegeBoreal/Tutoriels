
https://github.com/angular-in-action/api (Documentation)

## APIs

### `/stocks/snapshot?symbols=aapl,goog,fb`

This API returns a snapshot of the stocks passed as a symbol parameter. It uses Yahoo! Finance to lookup the snapshot data.

### `/stocks/historical/{symbol}`

This API looks up an individual stock's historical data based on the symbol in the path. It uses Yahoo! Finance to lookup the historical data.

https://angular2-in-action-api.herokuapp.com/stocks/snapshot?symbols=aapl,goog,fb

```typescript
export interface StockInterface {
  symbol: string;
  lastTradePriceOnly: number;
  change: number;
  changeInPercent: number;
}
```

* Data Excerpt

```json
[
  {"symbol":"AAPL","lastTradePriceOnly":175.9,"change":-2.4000092,"changeInPercent":-0.013460511}
 ,{"symbol":"GOOG","lastTradePriceOnly":1105.3066,"change":-12.643311,"changeInPercent":-0.011309371}
 ,{"symbol":"FB","lastTradePriceOnly":177.6445,"change":-5.365494,"changeInPercent":-0.029318037}
]
```


https://angular2-in-action-api.herokuapp.com/stocks/historical/jmia

```typescript
export interface HistoricalInterface {
  date: Date;
  open: number;
  low: number;
  close: number;
  adjClose: number;
  volume: number;
  symbol: string;
}
```

* Data Excerpt


```json
[
 {"date":"2019-05-31T04:00:00.000Z","open":24.969999,"high":26.379999,"low":24.77,"close":26.280001,"adjClose":26.280001,"volume":792059,"symbol":"jmia"}
,{"date":"2019-05-30T04:00:00.000Z","open":24.360001,"high":26.459,"low":24.360001,"close":25.33,"adjClose":25.33,"volume":1477100,"symbol":"jmia"}
,{"date":"2019-05-29T04:00:00.000Z","open":22.700001,"high":24.67,"low":22.33,"close":24.389999,"adjClose":24.389999,"volume":1419300,"symbol":"jmia"}
,{"date":"2019-05-28T04:00:00.000Z","open":23.5,"high":24.540001,"low":21,"close":23.059999,"adjClose":23.059999,"volume":2557600,"symbol":"jmia"}
,{"date":"2019-05-24T04:00:00.000Z","open":23.49,"high":24.299999,"low":23.1,"close":23.4,"adjClose":23.4,"volume":1452600,"symbol":"jmia"}
]
```
