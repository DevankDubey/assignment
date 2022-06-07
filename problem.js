const arr=[1000,11,445,1,330,3000];
var min,max;
for(let i=0;i<arr.length;i++)
{
    if(arr[0]>arr[[1]])
    {
        max=arr[0];
        min=arr[1];
    }
    else{
        max=arr[1];
        min=arr[0];
    }
    for(var j=2;j<arr.length;j++)
    {
        if(arr[j]>max)
        {
            max=arr[j];
        }
        if(arr[j]<min)
        {
            min=arr[j];
        }
    }
}
console.log('maximum value is: '+max);
console.log('minimum value is: '+min);