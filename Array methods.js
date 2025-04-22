
Array.prototype.map = function(cb)
{
    	let result = []  
    	for (let i = 0; i < this.length; i++) 
	{
        	result.push(cb(this[i], i, this));  
    	}
    return result;
};



Array.prototype.filter = function(cb)
{
    	let result = []  
	for (let i = 0; i < this.length; i++) 
	{  
        	if (cb(this[i], i, this)) 
		{  
           		 result.push(this[i]); 
       		}
    	}
   return result;
};



Array.prototype.reduce = function(cb, initVal)
{
    	let accumulator = initVal; 
    	let start = 0;  
    	if (accumulator === undefined) 
	{  
        	accumulator = this[0];  
        	start = 1;  
    	}
	for (let i = start; i < this.length; i++) 
	{  
        	accumulator = cb(accumulator, this[i], i, this);  
   	}
	return accumulator;  
};




Array.prototype.includes = function(val) 
{
    	for (let i = 0; i < this.length; i++)
	{  
      		if (this[i] === val) return true; 
    		return false;  
};

 

Array.prototype.find = function(cb) 
{
    	for (let i = 0; i < this.length; i++) 
	{  
      		if (cb(this[i], i, this)) return this[i]; 
    		return undefined;  
};


// Slice Method

Array.prototype.mySlice = function(start = 0, end = this.length) {
    let result = []; // Store the sliced elements
  
    // Handle negative indices
    let realStart = start < 0 ? this.length + start : start; // Convert negative start index
    let realEnd = end < 0 ? this.length + end : end; // Convert negative end index
  
    for (let i = realStart; i < realEnd && i < this.length; i++) { // Loop through the array
      result.push(this[i]); // Push the sliced elements to the result
    }
  
    return result; // Return the sliced array
  };
