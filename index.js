function findMatching(drivers, name){
    return drivers.filter( find_name => {
      return (find_name.toLowerCase() === name.toLowerCase())
     }
    )
  }

  function fuzzyMatch(drivers, letter){
    return drivers.filter( find_name => {
      if (letter.charAt(0) === find_name.charAt(0)){
      return find_name
      }
    })
  }

function matchName(drivers, string) {
    return drivers.filter( find_name => {
        if (find_name.name === string) {
            return find_name
        }
    })

}