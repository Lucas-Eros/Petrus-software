import Image from "next/image";
import ExchangeHeader from "../ExchangeHeader/ExchangeHeader";
import CryptoCard from "../CriptoCard/CriptoCard";


const ExchangeMenu = () => {

    return (
        <div className="flex-1 p-6">
            <ExchangeHeader />

            <div className="flex justify-between items-center w-full pt-7">
                <div className="font-medium">Faça trocas rápidas</div>
                <div className="flex justify-between items-center bg-gray-100 p-1 rounded gap-1">
                    <Image src="/assets/timer.svg" alt="Exchange Menu" width={16} height={16} />
                    {/* //Todo entender esse timer */}
                    <div className="font-medium text-xs">10s</div>
                </div>
            </div>

            <div className="bg-green-500 p-6 mt-4 rounded-lg max-w-sm mx-auto shadow-lg">

                <div className="flex justify-between items-center p-2 border rounded-xl border-gray-300 gap-1">
                    <div className="flex justify-between items-center gap-2">
                        <Image src="/assets/etherium-icon.svg" alt="Exchange Menu" width={24} height={24} />
                        <div className="text-white">Etherium</div>
                    </div>
                    <div className="rotate-270">
                        <Image src="/assets/chevron-down.svg" alt="Exchange Menu" width={12} height={12} />
                    </div>
                </div>


                <div className="flex justify-between items-center p-2 rounded-xl gap-1 bg-yellow-300 mt-6">
                    <div className="flex justify-between items-center gap-2">
                        <div className="font-medium">0.000620</div>
                    </div>
                    <div className="flex justify-between items-center bg-black p-2 rounded-xl gap-2.5">
                        <Image src="/assets/btc-icon.svg" alt="Exchange Menu" width={24} height={24} />
                        <div className="font-medium text-white">BTC</div>
                        <Image src="/assets/chevron-down.svg" alt="Exchange Menu" width={12} height={12} />
                    </div>
                </div>

                <div className="flex justify-center items-center w-full pt-6">
                    <div className="flex justify-end w-full">
                        <div className="border-t-1 border-black flex-grow"></div>
                    </div>

                    <div className="flex justify-center items-center mx-4 rounded-full bg-black p-2">
                        <Image src="/assets/Exchange.svg" alt="Exchange Menu" width={40} height={40} />
                    </div>

                    <div className="flex justify-start w-full">
                        <div className="border-t-1 border-black flex-grow"></div>
                    </div>
                </div>

                <div className="flex justify-between items-center p-2 rounded-xl gap-1 bg-yellow-300 mt-6">
                    <div className="flex justify-between items-center gap-2">
                        <div className="font-medium">0.000620</div>
                    </div>
                    <div className="flex justify-between items-center bg-black p-2 rounded-xl gap-2.5">
                        <Image src="/assets/Tether-icon.svg" alt="Exchange Menu" width={24} height={24} />
                        <div className="font-medium text-white">USDT</div>
                        <Image src="/assets/chevron-down.svg" alt="Exchange Menu" width={12} height={12} />
                    </div>
                </div>

                <div className="flex justify-between items-start mt-4 rounded-lg space-y-4">
                    <div className="flex flex-col space-y-2">
                        <div className="text-sm text-gray-300">
                            Preço:
                        </div>
                        <div className="text-sm text-gray-300">
                            Taxa da Network:
                        </div>
                    </div>
                    <button className="bg-yellow-300 text-black font-medium rounded-lg shadow-yellow-200 p-2 px-4">
                        Continuar
                    </button>
                </div>
            </div>
            <div className=" flex justify-between items-center pt-6">
                <div className="font-medium">Meus assets</div>

                <div className="flex justify-between items-center p-2 rounded border border-gray-300 gap-2 space-x-2">
                    <div className="font-medium text-sm text-gray-300">Populares</div>
                    <Image src="/assets/chevron-down.svg" alt="Exchange Menu" width={12} height={12} />
                </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mt-4">
                <CryptoCard
                    name="Bitcoin"
                    shortname="BTC"
                    balance={17780.16}
                    priceChangePercentage={1.2}
                    iconSrc="/assets/btc-icon.svg"
                />
                <CryptoCard
                    name="Ethereum"
                    shortname="ETH"
                    balance={17780.16}
                    priceChangePercentage={1.2}
                    iconSrc="/assets/etherium-icon.svg"
                />
                <CryptoCard
                    name="LiteCoin"
                    shortname="LTE"
                    balance={17780.16}
                    priceChangePercentage={1.2}
                    iconSrc="/assets/lte-icon.svg"
                />
                <CryptoCard
                    name="Doge Coin"
                    shortname="DOGE"
                    balance={17780.16}
                    priceChangePercentage={-1.2}
                    iconSrc="/assets/doge-icon.svg"
                />
            </div>


        </div>
    )
}


export default ExchangeMenu;