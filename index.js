//app idea
//kind of  food donation app mostly for cafes and resturant which allow them to offer their extra food to the less fortunates for free 
//basic ideas is to allow resturant to register and put number of available meal packages to donate
//food seekers can search the resturant by putting the location and search field return the list/array of food angels 
//with their total avilable meal packages in that particular area.
//food seekers can secure the meal by ordering it(to order the food  log in is mandatory ) 
//and then pickup from the location by showing order number.
//the basic ideas is that resturants and cafes will be the food angels by offering their extra food
//but on second thought it can be anyone who want to donate
      
  //code
//class foodAngels who will registers as food doners have some basic properties
class foodAngels{
    constructor(name,address,availableMeal=0,cellPhone,email){
        this.name=name,
        this.address=address,
        this.availableMeal=availableMeal,
        this.cellPhone=cellPhone,
        this.email=email
        this.allBeneficiaries=[]
        }
        //method to for each foodAngels to see their total meals contributions
      totalMealDonated(){
          let total=0
         return  total+=this.availableMeal
        }
//kind of another method which allow foodangels to see the name of all of their foodRecievers 
        AllBeneficiaries(mohsin){
            this.allBeneficiaries.push(mohsin)
        }
      }
      //beneficiary class for food seeker with some basic properties
class beneficiary{
    constructor(name,phone,email){
        this.name=name,
        this.phone=phone,
        this.email=email
         }
         //kind of order method which allow beneficiary to order and it also assign a unique order number for each order 
         grabIt(){
            let orderNumber
           orderNumber=Math.round(Math.random()*1000000)
                console.log(`${this.name} you just got your Meal Secure.
                please bring your orderNumber along with you at the time of pickup. 
                Here is your order number: ${orderNumber}` )
            }  
        }


const zaiqa=new foodAngels('zaiqa','tonsberg',6,95273973,'example@gmail.com')
const flames=new foodAngels('flames','bjerke')
const pizzaZone=new foodAngels('pizzaZone','tonsberg')
 
const mohsin=new beneficiary('mohsin',23232323,'abc@gmail.com')
console.log(zaiqa.totalMealDonated())
 console.log(mohsin.grabIt())
zaiqa.AllBeneficiaries(mohsin)
console.log(zaiqa)