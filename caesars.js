function rot13(str) {
  let splited = str.split('');
  let decoded = "";
  let regex = /[a-zA-Z0-9]/;
  let letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  
  for (let i = 0; i < splited.length; i++) // Go through every coded letter
  {
    if (regex.test(splited[i])) // If alpha numeric
    {
      for (let j = 0; j < letters.length; j++) // Go through every letter in alphabet
      {
        if (splited[i] == letters[j]) // Check if there is a match
        {

          if (j + 13 <= 25) // If shifted number is in range add to decoded
          {
            decoded += letters[j + 13];
          }
          else // If shifted number not in range, go from beggining and add to decoded
          {
            decoded += letters[j - 26 + 13];
          }
        } 
      }
    }
    else // Add to decoded if not alphanumeric
    {
      decoded += splited[i];
    }
  }
  return decoded;
}

rot13("SERR PBQR PNZC");