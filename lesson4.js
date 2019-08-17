/*Uso de Timers*/

const timer = Rx.Observable.timer(1000)

timer.subscribe(done => console.log('Ring Ring!!!'))
timer.subscribe(done => print('Ring Ring!!!'))



function print(val){
  let el = document.createElement('p')
  el.innerText = val
  document.body.appendChild(el)
}
