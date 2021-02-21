import React from 'react';
import '../Css/coinList.css';

export default function CoinList(props) {

    const { coinImage, coinName, coinSymbol, coinMarketCap, coinCurrentPrice, coinVolume, coinPriceChange, coinIndex } = props;

    return (
        <div>
            <div className="coinlist-main">
                <div className="coinlist-index">{coinIndex}</div>
                <img src={coinImage} className="coinlist-image" alt={coinName} />
                <div className="coinlist-name">{coinName}</div>
                <div className="coinlist-symbol">{coinSymbol}</div>
                <div className="coinlist-price">{coinCurrentPrice}</div>
                <div className="coinlist-volume">${coinVolume.toLocaleString('en-US')}</div>
                <div className="coinlist-pricechange">
                    <div className={coinPriceChange > 0 ? 'coinlist-pricechange-positive' : 'coinlist-pricechange-negative'}>{coinPriceChange > 0 ? `+${coinPriceChange.toFixed(2)}` : coinPriceChange.toFixed(2)} %</div>
                </div>
                <div className="coinlist-market">{coinMarketCap.toLocaleString('en-US')}</div>
            </div>
        </div>
    )
}