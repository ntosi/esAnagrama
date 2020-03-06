function esAnagrama(arr1, arr2) {
    //si no son igual de largos sale porque ya no hay anagrama
    if (arr1.length !== arr2.length) {
      return false;
    }
  
    const contador = {};
  
    for (let i = 0; i < arr1.length; i++) {
      let letra = arr1[i];
      //si existe, incrementa, sino iguala a 1
      contador[letra] ? contador[letra] += 1 : contador[letra] = 1;
    }
    console.log(contador)
  
    for (let i = 0; i < arr2.length; i++) {
      let letra = arr2[i];
      // si no encuentra la letra no hay anagrama
      if (!contador[letra]) {
        return false;
      } else {
        contador[letra] -= 1;
      }
    }
  
    return true;
  }
  
  
  esAnagrama('anagram', 'nagaram')
  