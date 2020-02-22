module.exports = function toReadable (number) { 
  
    let obj_10th = {0:'zero', 1:'one', 2:'two', 3:'three', 4:'four', 5:'five', 6:'six', 7:'seven', 8:'eight', 9:'nine', 10:'ten', 11:'eleven', 12:'twelve', 13:'thirteen', 14:'fourteen', 15:'fifteen', 16:'sixteen', 17:'seventeen',18:'eighteen', 19:'nineteen'};
    let obj_100th = {1:'ten', 2:'twenty', 3:'thirty', 4:'forty', 5:'fifty', 6:'sixty', 7:'seventy', 8:'eighty', 9:'ninety'};
    let arr = number.toString().split('');
     
    if (number < 20) {
    return obj_10th[number]; 
    } else if (number%10 == 0 && number < 100) {
    return `${obj_100th[parseInt(arr[0])]}`;
    } else if (number < 100) {
     return `${obj_100th[parseInt(arr[0])]} ${obj_10th[parseInt(arr[1])]}`;
    } else if (number%100 == 0 && number < 1000) {
    return `${obj_10th[parseInt(arr[0])]} hundred`;
    } else if (number%10 == 0 && number > 100 && number < 1000) {
    return `${obj_10th[parseInt(arr[0])]} hundred ${obj_100th[parseInt(arr[1])]}`;
    } else if (number > 100 && number < 1000 && parseInt(arr[1]) == 0) {
    return `${obj_10th[parseInt(arr[0])]} hundred ${obj_10th[parseInt(arr[2])]}`;
    } else if (number > 110 && number < 120 || number > 210 && number < 220 || number > 310 && number < 320 || number > 410 && number < 420 || number > 510 && number < 520 || number > 610 && number < 620 || number > 710 && number < 720 || number > 810 && number < 820 || number > 910 && number < 920) {
    let index = arr[1] + arr[2];
    return `${obj_10th[parseInt(arr[0])]} hundred ${obj_10th[parseInt(index)]}`;   
    } else if (number > 100 && number < 1000) {
    return `${obj_10th[parseInt(arr[0])]} hundred ${obj_100th[parseInt(arr[1])]} ${obj_10th[parseInt(arr[2])]}`;
    }
  }