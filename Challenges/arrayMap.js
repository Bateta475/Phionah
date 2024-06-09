function has contiguous subarray with sum(arr,target){let start=0; let end=0;let sum=0;while (end<arr.length){sum+=arr[end];while (sum>target){sum-=arr[start];start++;}if(sum===target){return true;}end++;}return false;}
**How above function work**
This function iterates through the array using two pointers (start and end) continously adjusting the size until  the sum matches the target sum or exceeds it.If the sum matches the target,it returns true;otherwise,it returns false. 
