/*
 * Complete the 'minimumNumber' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. STRING password
 */

const minimumNumber = (n, password) => {
    const STRONG_INPUT_LENGTH = 6;
    const numMissing = STRONG_INPUT_LENGTH - n;
        
    const passwordIsArray = Array.from(password);
       
    let [numOfNumbers, numOfLowerCase, numOfUpperCase, numOfSpecial] = [0, 0, 0, 0];
    
    passwordIsArray.filter(char => {
        if("0123456789".includes(char)) {
            numOfNumbers++;
        }
    });
    passwordIsArray.filter(char => {
        if("abcdefghijklmnopqrstuvwxyz".includes(char)) {
            numOfLowerCase++;
        }
    });
    passwordIsArray.filter(char => {
        if("ABCDEFGHIJKLMNOPQRSTUVWXYZ".includes(char)) {
            numOfUpperCase++;
        }
    });
    passwordIsArray.filter(char => {
        if("!@#$%^&*()-+".includes(char)) {
            numOfSpecial++;
        }
    });
    // console.log(numOfNumbers, numOfLowerCase, numOfUpperCase, numOfSpecial);
    
    let missingCharacters = 0;
    let extras = 0;
    if(numOfNumbers === 0) {
        missingCharacters++;
    }
    if(numOfLowerCase === 0) {
        missingCharacters++;
    }
    if(numOfUpperCase === 0) {
        missingCharacters++;
    }
    if(numOfSpecial === 0) {
        missingCharacters++;
    }
    
    if(numOfNumbers >= 2 && n > STRONG_INPUT_LENGTH) {
        extras++;
    }
    if(numOfLowerCase >= 2 && n > STRONG_INPUT_LENGTH) {
        extras++;
    }
    if(numOfUpperCase >= 2 && n > STRONG_INPUT_LENGTH) {
        extras++;
    }
    if(numOfSpecial >= 2 && n > STRONG_INPUT_LENGTH) {
        extras++;
    }
    
    
    
    console.log(Math.max(numMissing, Math.max((missingCharacters - extras), missingCharacters)));
    return Math.max(numMissing, Math.max((missingCharacters - extras), missingCharacters));
}


//////////////////////////////////////////////////////////////////////////////////////////////
// functional 
const STRONG_LENGTH = 6;
  const missingChars = STRONG_LENGTH - n;
  let score = 0;

  const passwordAsArray = Array.from(password);

  const hasNumber = passwordAsArray.some(char => "0123456789".includes(char));
  const hasLowerCase = passwordAsArray.some(char =>
    "abcdefghijklmnopqrstuvwxyz".includes(char)
  );
  const hasUpperCase = passwordAsArray.some(char =>
    "ABCDEFGHIJKLMNOPQRSTUVWXYZ".includes(char)
  );
  const hasSpecialChar = passwordAsArray.some(char =>
    "!@#$%^&*()-+".includes(char)
  );

  if (!hasNumber) score++;
  if (!hasLowerCase) score++;
  if (!hasUpperCase) score++;
  if (!hasSpecialChar) score++;

  return Math.max(score, missingChars);
