
// 间接导出
// let name = "luffy";
// export {name}


// 2.直接导出

export let name = 'luffy';



// 3. 导出方法或类

let sum = function (a, b) {
    console.log(a+b);
};

class Person{
    run(){
        console.log("person")
    }
}

export {sum, Person}



// 4. default导出。 只可导出一个， 导入的可以起别名且可以不用大括号

// let name ="luffy";
// export default name