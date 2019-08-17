/*Observables de constantes*/

const mashup = Rx.Observable.of('anything', ['you', 'want'], 23, true, {cool: 'stuff'})

mashup.subscribe(val => console.log( val ))




function print(val){
  let el = document.createElement('p')
  el.innerText = val
  document.body.appendChild(el)
}
