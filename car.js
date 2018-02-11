function Car() {
    console.log("This is my car:", wheels(), addDoors());
    
    function wheels() {
        return "I have 4 summer tiers";
    }

    function addDoors() {
        return "I have 4 doors";
    }
}

Car();