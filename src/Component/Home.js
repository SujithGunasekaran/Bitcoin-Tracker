import React, { useState, useEffect, lazy, Suspense } from 'react';
import Search from './Search';
import axios from 'axios';

const Tracker = lazy(() => import('./Tracker'))

const getBitCoin = async (bitcoinListNumber) => {
    try {
        const responseData = await axios.get(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=${bitcoinListNumber}&page=1&sparkline=false&price_change_percentage=1hr`);
        return responseData.data;
    } catch (err) {
        return err;
    }
}

export default function Home() {

    const [bitcoinName, setBitCoinName] = useState('');
    const [bitcoinListNumber] = useState(200);
    const [coinList, setCoinList] = useState([]);
    const [coinListSlice, setCoinListSlice] = useState(30);
    const [headerStyle, seHeaderStyle] = useState(false);

    const getScrollHeight = () => {
        if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 120) {
            setCoinListSlice(coinListSlice + 20)
        }
        if (window.scrollY > 180) seHeaderStyle(true);
        else seHeaderStyle(false)
    }

    const getBitCoinAPI = () => {
        getBitCoin(bitcoinListNumber)
            .then((responseData) => {
                let bitcoinResponse = [
                    ...coinList,
                    ...responseData
                ];
                setCoinList(bitcoinResponse);
            })
            .catch((err) => {
                console.log(err);
            })
    }

    useEffect(() => {
        getBitCoinAPI();
    }, [])

    useEffect(() => {
        if (bitcoinName === '') window.addEventListener('scroll', () => getScrollHeight())
    })

    const handleSeachInputField = (e) => {
        setBitCoinName(e.target.value);
    }

    const coinFilter = coinList.filter(coinInfo =>
        coinInfo.name.toLowerCase().includes(bitcoinName.toLowerCase())
    )

    return (
        <div id="bitcoin">
            <Search
                handleSeachInputField={handleSeachInputField}
                bitcoinName={bitcoinName}
            />
            <Suspense fallback={<div>Loading...</div>}>
                <Tracker
                    coinList={bitcoinName ? coinFilter : coinList}
                    coinListSlice={coinListSlice}
                    headerStyle={headerStyle}
                />
            </Suspense>

        </div>
    )
}