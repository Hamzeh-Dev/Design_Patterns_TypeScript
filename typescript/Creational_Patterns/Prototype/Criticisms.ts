let original = {
    name: "john",
    address: {
        street: "123 Main Street",
        city: "New York",
    },
};

let shallowCopy = { ...original };
shallowCopy.address.city = "Los Angeles";


// The city of both objects has changed to "Los Angeles"
// because the copy has been created only in the Top Level when we used the spread operatos ( ... )
// and the references are still shared between the original and copied objects.
console.log("Original", original.address.city); // Los Angeles
console.log("Copy", shallowCopy.address.city); // Los Angeles

// * -------------------------------------

// To Create a Deep Copy we can do the following:
let deepCopy = JSON.parse(JSON.stringify(original));
deepCopy.address.city = "San Francisco";

console.log("Original", original.address.city); // Los Angeles (unchanged)
console.log("Copy", deepCopy.address.city); // San Francisco