const pets =[
    {
        name: 'rex',
        type: 'dog',
        age: 10
    },  
    {
        name: 'miua',
        type: 'cat',
        age: 2
    },
    {
        name: 'blu',
        type: 'fish',
        age: 1
    }
       
]



/* const totalWeitght = pets.reduce((total, pet)=>{
    
    return (
        total + pet.age
    )
},0)
 */

const dog = pets.filter((pet)=>pet.type === 'dog')
    .reduce((total, dog)=>total + dog.age,0)
console.log(dog)

const items = ['a', 'b', 'c', 'd']

;(async function(){
    const promiseFunction = async (e)=>{
        return new Promise((resolve, reject)=>{
            return resolve(`${e} - promise`)
        })
    }
    const itemMapped = promiseFunction('x')
    console.log(awaititemMapped)
})()



