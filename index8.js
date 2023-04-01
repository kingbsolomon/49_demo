function Home(bedrooms, bathrooms, sqft, floors, material, color){
    this.bedrooms = bedrooms;
    this.bathrooms = bathrooms;
    this.sqft = sqft;
    this.floors = floors;
    this.exterior = {
        "material": material,
        "color": color
    }
}

Home.prototype.printInfo = function(){
    console.log(`This home has ${this.bedrooms} bedrooms, 
    ${this.bathrooms} bathrooms, is ${this.sqft} sqft, and has ${this.floors} floors.`)
}

let myHome = new Home(4, 3, 3100, 2, "wood", "blue");
myHome.printInfo();

