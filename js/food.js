class Food{
    constructor(){
        this.foodStock;
        this.milk=loadImage("Images/Milk.png")
    }

    getFoodStock(){}
    updateFoodStock(){}
    deductFoodStock(){}

    display(){
        image(this.milk,60,100,70,70)
    }
}
