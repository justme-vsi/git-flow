// Veselin
function Car() {
    console.log("This is my car:", wheels(), addEngine(), addDoors());
    
    function wheels() {
        return "I have 4 summer tiers";
    }

    function addDoors() {
        return "I have 4 doors";
    }

    function addEngine() {
        return 'I have 1000 hp';
    }
}

Car();