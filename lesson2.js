
/*Trabajo con eventos*/


const clicks = Rx.Observable.fromEvent(document, 'click')

clicks.subscribe(click => console.log(click))
clicks.subscribe(click => print('(' + click.screenX + ' , ' + click.screenY + ')'))



function print(val){
  let el = document.createElement('p')
  el.innerText = val
  document.body.appendChild(el)
}
