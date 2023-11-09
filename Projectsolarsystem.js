let mass = document.getElementById('mass')
let planet = document.getElementById('planet')
let imageTag = document.getElementById('planet-img')
let nWeight = document.getElementById('weight')
let weightTag = document.getElementById('weight-container')
const surFaceGravity ={
      earth : 9.8,
      jupiter: 24.79,
      mars: 3.72,
      mercury:3.7,
      moon:1.62,
      neptune:11.15,
      pluto:0.62,
      saturn:10.44,
      uranus:8.87,
      venus:8.87
};
    
function plantImageChangeOnClick(){
    console.log(planet.value)
    console.log(mass.value)
    if  (mass.value.trim() == "" || !(mass.value.match(/[0-9]/i))){
        document.getElementById('txt-result').innerHTML = "Mass is required !";
        imageTag.classList.add('d-none')
        weightTag.classList.add('d-none')
    } 
   else if(planet.value == 'none'){
    document.getElementById('txt-result').innerHTML = "You did not choose a planet yet !";
    imageTag.classList.add('d-none')
    weightTag.classList.add('d-none')
   }
   else  {
    console.log('here')
    document.getElementById('txt-result').innerHTML = `The weight of the object on  ${planet.value.toUpperCase()}`
    imageTag.classList.remove('d-none')
    weightTag.classList.remove('d-none')
    console.log(imageTag)
        let path = "C:\\Users\\Tansukh\\Desktop\\Projectsolarsystem\\images\\" +  `${planet.value}` + '.png'
   
     console.log(path)
    imageTag.src = path
       let weight = mass.value*surFaceGravity[planet.value] 
       console.log(weight)
       nWeight.innerHTML = `${weight.toFixed(2)}  N`    
   } 
  
}
