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


