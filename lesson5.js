/*Trabajando con intervalos de tiempo*/

const interval = Rx.Observable.interval(1000)

interval.subscribe(i => console.log( i ))
interval.subscribe(j => print( "Interval -> " + j ))




function print(val){
  let el = document.createElement('p')
  el.innerText = val
  document.body.appendChild(el)
}
