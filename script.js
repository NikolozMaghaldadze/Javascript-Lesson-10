// davaleba 1

function infoGet() {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      fetch("https://jsonplaceholder.typicode.com/users")
        .then((info) => info.json())
        .then((infoData) => {
          resolve(infoData);
        })
        .catch((error) => {
          reject(error);
        });
    }, 2000);
  });
}

infoGet()
  .then((info) => {
    console.log(info);
  })
  .catch((reject) => {
    console.log("Error");
  });

// davaleba 2

let getToast = () => {
    return new Promise( (resolve, reject) => {
        setTimeout( () => {
            resolve('Your toast is ready and');
        },1500)
    })
}
let getCoffee = () => {
    return new Promise( (resolve, reject) => {
        setTimeout( () => {
            resolve('Your coffee is ready !!!');
        },1500)
    })
}

let resolvedInfo = async function(){
    let toast = await getToast();
    let coffee = await getCoffee();

    let[first , second] = await Promise.all([toast , coffee]);
    console.log(first , second);
}

resolvedInfo();