
function findMatching(drivers, string){
    return drivers.filter(function(driver){
        return string.toLowerCase() === driver.toLowerCase();
       
    })}

    function fuzzyMatch(drivers, string){
        
        return drivers.filter(function(driver){
            driver.split(" ")
            return driver[0] === string[0]
        })
    }

    function matchName(drivers, string){
        return drivers.filter(function(driver){
        return driver['name'] === string
        })}
        
    