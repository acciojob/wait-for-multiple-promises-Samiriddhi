//your JS code here. If required.
 const tbody = document.querySelector('tbody');

    let first = (Math.random()*3000).toPrecision(4);
    let second = (Math.random()*3000).toPrecision(4);
    let third = (Math.random()*3000).toPrecision(4);
    
    const prom1 = new Promise((resolve,reject)=>{
            setTimeout(() => {
                resolve('x');
            }, first);
        })
        const prom2 = new Promise((resolve,reject)=>{
            setTimeout(() => {
                resolve('y');
            }, second);
        })
        const prom3 = new Promise((resolve,reject)=>{
            setTimeout(() => {
                resolve('z');
            }, third);
        })

        Promise.all([prom1, prom2, prom3]).then((values) => {
            console.log(values);
            makeTBody();
        });
        console.log(third);
        // console.log(first.toPrecision(7), second, third);
        let total = (Number(first)+Number(second)+Number(third)).toPrecision(4);
        function makeTBody(){
            let myStr = ` <tr>
                <td>Promise 1</td>
                <td>${first/1000}</td>
            </tr>
            <tr>
                <td>Promise 2</td>
                <td>${second/1000}</td>
            </tr>
            <tr>
                <td>Promise 3</td>
                <td>${third/1000}</td>
            </tr>
            <tr>
                <td>Total</td>
                <td>${total/1000}</td>
            </tr>`;
            tbody.innerText='';
            tbody.innerHTML = myStr;
        }
