/*Terminar o unsuscbscribe*/

const timer = Rx.Observable.timer(1000);

timer
  .finally(() => print('All done from timer!'))
  .subscribe()

const interval = Rx.Observable.interval(1000);
interval
  .finally(()  => console.log('All done from interval!'))

const subscription  = interval.subscribe(x => print(x))


function print(val){
  let el = document.createElement('p')
  el.innerText = val
  document.body.appendChild(el)
}
