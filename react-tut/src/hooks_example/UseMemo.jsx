import React from 'react'

// 5️⃣ useMemo – Saving Computation Time

export default function UseMemo() {
  
    const slowFunction = (num) => {
        console.log('Calling Slow Function');
        for (let i = 0; i <= 10000; i++) {
            console.log('Calculating...!');
            if(i === 10000) {
                return num * 2;
            }
        }
    }

    const computedValue = React.useMemo(() => slowFunction(3), []);
    return (
        <div>
            <p>Computed: {computedValue}</p>
        </div>
    );
}

/*
    What does it do?
        Remembers a computed value so it doesn’t recalculate unnecessarily.
        
        Example: Avoiding expensive calculations on every render.

    Where to use it?
        When calculations are slow and should only run when needed.
*/
