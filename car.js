// Veselin
function Car() {
    console.log("This is my car:", wheels(), addEngine())
    
    function wheels() {
        return "I have 4 summer tiers";
    }

    function addEngine() {
        return 'I have 1000 hp';
    }
}

Car();