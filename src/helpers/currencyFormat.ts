export function currencyFormat(currency: number){
  return new Intl.NumberFormat('pt-BR',{
    style: 'currency',
    currency: 'BRl'
  }).format(currency)
}
