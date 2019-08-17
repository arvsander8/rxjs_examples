
/*Trabajando con Promesas*/

const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Resolved!')
    }, 2000)
});



const obsvPromise = Rx.Observable.fromPromise(promise)

obsvPromise.subscribe(result => print(result) )



function print(val){
  let el = document.createElement('p')
  el.innerText = val
  document.body.appendChild(el)
}
