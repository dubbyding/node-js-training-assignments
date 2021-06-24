// prepare a function to group the given array of object with given property name

// eg var res = groupBy(laptops, 'brand');

// expected result {
// 	  dell:[{}, {}, {}]
// }

function groupBy(obj, name){
    return obj.reduce(
        (arr, item) => {
            if(typeof item[name]=="undefined"){
                err = new Error("name: Undefined Error,. 'name' doesn't map with any value of object.");
                throw err;
            }
            if(!arr.hasOwnProperty(item[name])){
                arr[item[name]] = [item];
            }else{
                arr[item[name]].push(item);
            }
            return arr
        },
        {}
    );
}

mobileBrands = [{
    name: "Samsung",
    model: "Samsung Galaxy Note 10+ ",
    display: 6.80,
    os: "Android",
    processor: "Samsung Exynos 9825"
},
{
    name: "Samsung",
    model: "Samsung Galaxy S21 Ultra",
    display: 6.80,
    os: "Android",
    processor: "Samsung Exynos 2100"
},
{
    name: "Apple",
    model: "Apple iPhone 12 Pro Max",
    display: 6.70,
    os: "iOS",
    processor: "A14 Bionic"
},{
    name: "Apple",
    model: "Apple iPhone XS Max",
    display: 6.50,
    os: "iOS",
    processor: "A12 Bionic"
},{
    name: "OnePlus",
    model: "OnePlus 9 Pro",
    display: 6.70,
    os: "Android",
    processor: "Qualcomm Snapdragon 888"
},{
    name: "Huawei",
    model: "Huawei P30 Pro",
    display: 6.47,
    os: "Android",
    processor: "HiSilicon Kirin 980"
}
]

console.log("Grouped By ", groupBy(mobileBrands, "name"));