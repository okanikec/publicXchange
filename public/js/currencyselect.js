// currency = ['Naira', 'US Dollar', 'British Pounds', 'Canadian Dollars', 'Euros', 'Australian Dollars', 'Chinese Yuan' ]

// logo = ['&#8358;', '&dollar;', '&pound;', 'CAD&#36;', '&euro;', 'AUD&#36;', '&#20803;' ]


 

const datas = [
    {
        value: 'nai',
        currency: 'Naira',
        logo: 'N'
    },{
        value: 'usd',
        currency: 'US Dollar',
        logo: '$'
    },{
        value: 'gbp',
        currency: 'British Pounds',
        logo: 'GBP'
    },{
        value: 'cad',
        currency: 'Canadian Dollars',
        logo: '$CAN'
    },{
        value: 'eu',
        currency: 'Euros',
        logo: 'E'
    },{
        value: 'aud',
        currency: 'Australian Dollars',
        logo: '$AUS'
    },{
        value: 'yua',
        currency: 'Chinese Yuan',
        logo: 'Y'
    }
]

// const cbEl = document.querySelector('#bai')
// const cbsEl = document.querySelector('#bais')
// cbEl.textContent = datas[0].currency

document.querySelector('#filter-by1').addEventListener('change', (e) => { 
  console.log(e.target.value)


  datas.forEach(function (data) {
    
    if (e.target.value === data.value)
    {
        const cbEl = document.querySelector('#bai')
        const cbsEl = document.querySelector('#bais')
        const cbsEl2 = document.querySelector('#bais2')

        

        cbEl.textContent = data.currency
        cbsEl.textContent = data.logo
        cbsEl2.textContent = data.logo

        

    }

})


})











    
