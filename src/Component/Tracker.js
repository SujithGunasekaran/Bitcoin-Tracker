import React from 'react';
import CoinList from './CoinList';

export default function Tracker({ coinList, coinListSlice, headerStyle }) {

    return (
        <div>
            <div className="track-container">
                <div className={`track-table-head ${headerStyle ? 'active' : ''}`} id="track-table-head">
                    <div className="coinlist-index">#</div>
                    <div className="coinlist-image">img</div>
                    <div className="coinlist-name">Name</div>
                    <div className="coinlist-symbol">Symbol</div>
                    <div className="coinlist-price">Price</div>
                    <div className="coinlist-volume">Volume</div>
                    <div className="coinlist-pricechange">Price Change</div>
                    <div className="coinlist-market">Market Cap</div>
                </div>
                {
                    coinList.length > 0 ? coinList.slice(0, coinListSlice).map((coinInfo, index) => (
                        <CoinList
                            key={coinInfo.id}
                            coinIndex={index + 1}
                            coinImage={coinInfo.image}
                            coinName={coinInfo.name}
                            coinSymbol={coinInfo.symbol}
                            coinMarketCap={coinInfo.market_cap}
                            coinCurrentPrice={coinInfo.current_price}
                            coinVolume={coinInfo.total_volume}
                            coinPriceChange={coinInfo.ath_change_percentage}
                        />
                    )) : <div>Getting Bitcoin Data....</div>
                }
            </div>
        </div>
    )
}