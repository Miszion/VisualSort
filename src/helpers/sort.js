export const tracer =  (array, setArray, setSorted) => {

    setTimeout(() => {

       for (let i = 0; i < array.length; i++) {
            setTimeout(() => {
                array[i].color = "red"
                setArray([...array])
            }, i * 20)
       }

       setSorted(true)

    }, 2250)
}

export const insertionSort = (array, setArray, isSorted, setSorted) => {


    if (!isSorted) {

        let j, key;
        let timer;


        for (let i = 1; i < array.length; i++) {
            key = array[i]
            j = i - 1;

            while (j >= 0 && array[j].height > key.height) {
                array[j + 1] = array[j]
                j = j - 1;
            }

            array[j + 1] = key;
            
            let newArray = [...array]

            timer = setTimeout(() => {
                setArray(newArray)
            }, i * 45)
        }

        tracer(array, setArray, setSorted)

    }

}

export const merge = (array, setArray, left, middle, right) => {

    let i, j, k;

    let n1 = middle - left + 1;
    let n2 = right - middle;

    let leftArray = []
    let rightArray = []

    for (i = 0; i < n1; ++i) {
        leftArray.push(array[left + i])
    }
    for (j = 0; j < n2; ++j) {
        rightArray.push(array[middle + 1 + j])
    }

    i = 0;
    j = 0;
    k = left;

    while (i < n1 && j < n2) {
        if (leftArray[i].length <= rightArray[j].length) {
            array[k] = leftArray[i]
            i++;
        }
        else {
            array[k] = rightArray[j]
            j++;
        }
        k++;
    }

    while (i < n1) {
        array[k] = leftArray[i]
        i++;
        k++;
    }

    while (j < n2) {
        array[k] = rightArray[j]
        j++;
        k++;
    }

    setArray([...array])


}

export const mergeSort = (array, setArray, left, right, isSorted, setSorted) => {

    if (!isSorted) {
        
        if (left < right) {

            let middle = (left + right) / 2

            mergeSort(array, setArray, left, middle, isSorted, setSorted)
            mergeSort(array, setArray, middle + 1, right, isSorted, setSorted)
            merge(array, setArray, left, middle, right)

        }

        setArray([...array])


    }

}

export const selectionSort = (array, setArray, isSorted, setSorted) => {


        if (!isSorted) {
            const size = array.length

            let timer;

            for (var i = 0; i < size; i++)
            {
                var min_index = i;

                for (var j = i+1; j < size; j++)
                    if (array[j].height < array[min_index].height) {
                        min_index = j
                    }
                
                let temp = array[min_index]

                array[min_index]= array[i]

                array[i] = temp;

                let newArray = [...array]

                timer = setTimeout(() => {
                    setArray(newArray)
                }, i * 45)

            }

            tracer(array, setArray, setSorted)
    }
        
}


