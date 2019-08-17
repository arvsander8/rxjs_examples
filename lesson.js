
/*Ejemplo basico de uso de observable*/
const observable = Rx.Observable.create( observer => {
  print("Inicio")
  observer.next('Hello')
  observer.next('World')
  setTimeout(()=>{
    observer.next('Una Pausa')
    observer.complete()
  }, 2000)
  observer.complete
  print("Fin")
});

observable.subscribe(val => print (val))



function print(val){
  let el = document.createElement('p')
  el.innerText = val
  document.body.appendChild(el)
}
