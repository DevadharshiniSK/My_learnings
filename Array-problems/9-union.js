const union = (a1, a2) => {
    let i = 0, j = 0;
    let union = [];

    while(i < a1.length && j < a2.length){
        if(a1[i] < a2[j]){
            if(union.length === 0 || union[union.length - 1] !== a1[i]){
                union.push(a1[i]);
            }
            i++;
        }else if(a1[i] > a2[j]){
            if(union.length === 0 || union[union.length - 1] !== a2[j]){
                union.push(a2[j]);
            }
            j++;
        }else{
            if(union.length === 0 || union[union.length - 1] !== a1[i]){
                union.push(a1[i]);
            }
            i++;
            j++; 
        }
    }
    
    while(i < a1.length){
        if(union[union.length - 1] !== a1[i]){
            union.push(a1[i]);
            i++;
        }
    }
    
    while(j < a2.length){
        if(union[union.length - 1] !== a2[j]){
            union.push(a2[j]);
            j++;
        }
    }

    return union;
}

const arr1 = [1, 2, 2, 3, 4, 4, 5];
const arr2 = [2, 2, 3, 4, 5, 6, 7];
console.log(union(arr1, arr2));
