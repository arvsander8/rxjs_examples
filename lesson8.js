/*Uso de Cold y Hot Observables*/

// COLD
// Si se suscribe al mismo tiempo pero se obtiene distinto valor
// Esto por generar el math despues de la subscripcion
const cold = Rx.Observable.create( (observer) => {
    observer.next( Math.random() )
});

cold.subscribe(a => print(`Subscriber COLD A: ${a}`))
cold.subscribe(b => print(`Subscriber COLD B: ${b}`))


//HOT
// Se obtiene los valores fuera del source
// Aqui primero se calcul{o el Math y luego se asignó
const x = Math.random()

const hot = Rx.Observable.create( observer => {
  observer.next( x )
});

hot.subscribe(a => print(`Subscriber HOT A: ${a}`))
hot.subscribe(b => print(`Subscriber HOT B: ${b}`))

// Convirtiendo COLD en HOT
const cold2 = Rx.Observable.create( (observer) => {
    observer.next( Math.random() )
})

const hot2 = cold2.publish()

hot2.subscribe(a => print(`Subscriber COLD->HOT  A: ${a}`))
hot2.subscribe(b => print(`Subscriber COLD->HOT  B: ${b}`))


hot2.connect()






function print(val){
  let el = document.createElement('p')
  el.innerText = val
  document.body.appendChild(el)
}
