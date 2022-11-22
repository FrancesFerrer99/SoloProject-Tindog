import Dog from './Dog.js'
import { getDogData, getNewDogData, isLastDogData } from './utils.js'

const main = document.getElementById('main')
let dog = new Dog(getDogData())
let isWaiting = false
let isLastDog = false

document.addEventListener('click', (e)=>{
    if( !isWaiting ){
        if(e.target.id === 'reject' || e.target.id === 'accept'){
            e.target.id === 'accept' ? dog.setHasBeenLiked() : dog.setHasBeenSwiped()
            render()
            document.getElementById('badge').classList.toggle('hidden')
            isLastDog = isLastDogData()
            dog = new Dog(getNewDogData())
            if(dog){
                isWaiting = true
            }
            setTimeout(()=> {
                if(!isLastDog){
                    render()
                    isWaiting = false
                }
                else
                    isWaiting = true
            }, 2000)
        }
    }
})

function render(){
    main.innerHTML = dog.getDogHtml()
}

render()