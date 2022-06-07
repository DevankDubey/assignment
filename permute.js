
    function nextPermutation(arr)
    {
        //code here
         let peak;
         for(let i=arr.length;i>=0;i--)
         {
             if(i===0)
             {
                 peak=0;
             }
             if(arr[i]>arr[i-1])
             {
                 peak=i;
                 break;
             }
         }
         for(let j=arr.length-1;j>=0;j--)
         {
             if(arr[j]>arr[peak-1])
             {
                 let temp=arr[j];
                 arr[j]=arr[peak-1];
                 arr[peak-1]=temp;
                 break;
             }
         }
         let start=peak;
         let end=arr.length-1;
         while(start<end)
         {
             let temp;
             temp=arr[start];
             arr[start]=arr[end];
             arr[end]=temp;
             start++;
             end--;
         }
         return arr;
    }
const arr=[1,5,8,4,7,6,5,3,1];
console.log(nextPermutation(arr));