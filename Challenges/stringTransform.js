**Challenge 2**
  function transform string(input) {const length=input.length;let result=";if (length %3===0) {result=input.split(").reverse().join(");}
                                                                                            if(length % 5===0){result=input.split(").map(char.charCodeAt(0).join('');}
                                                                                        if(length % 3===0 && length % 5===0){result=input.split(").reverse().map(char =>char.charCodeAt(0).join('');}
                                                                                                     return result||input;
                                                                                  **How above function work**
                                                                                This function first checks if the length of the input string is divisible by 3,5 or all.Depending on the divisibility,it either reverses the string,replaces each character with its ASC||code,or both operations in the specified order.If none of the confitions are met,it returns the orginal input string.  
