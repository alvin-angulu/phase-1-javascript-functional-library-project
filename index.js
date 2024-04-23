function myEach(collection, callback) {
    // Check if the collection is an array
    if (Array.isArray(collection)) {
        // If it's an array, iterate over each element
        for (let i = 0; i < collection.length; i++) {
            callback(collection[i], i, collection);
        }
    } else {
        // If it's an object, iterate over each key-value pair
        for (let key in collection) {
            if (collection.hasOwnProperty(key)) {
                callback(collection[key], key, collection);
            }
        }
    }
    // Return the original collection
    return collection;
}

function myMap(collection, callback) {
    let result = []; // This will hold the transformed values

    // Check if the collection is an array
    if (Array.isArray(collection)) {
        // If it's an array, iterate over each element
        for (let i = 0; i < collection.length; i++) {
            result.push(callback(collection[i], i, collection)); // Transform and add to result
        }
    } else {
        // If it's an object, iterate over each key-value pair
        for (let key in collection) {
            if (collection.hasOwnProperty(key)) {
                result.push(callback(collection[key], key, collection)); // Transform and add to result
            }
        }
    }
    return result; // Return the new array of transformed values
}

function myReduce(collection, callback, acc) {
    let initializing = acc === undefined; // Check if the initial value is provided

    // Check if the collection is an array
    if (Array.isArray(collection)) {
        for (let i = 0; i < collection.length; i++) {
            if (initializing) {
                acc = collection[i]; // Set the first element as the accumulator
                initializing = false; // No longer initializing
            } else {
                acc = callback(acc, collection[i], collection); // Apply callback and update accumulator
            }
        }
    } else {
        // If it's an object, iterate over each key-value pair
        for (let key in collection) {
            if (collection.hasOwnProperty(key)) {
                if (initializing) {
                    acc = collection[key]; // Set the first value as the accumulator
                    initializing = false; // No longer initializing
                } else {
                    acc = callback(acc, collection[key], collection); // Apply callback and update accumulator
                }
            }
        }
    }
    return acc; // Return the final, reduced value
}

function myFind(collection, predicate) {
    // Check if the collection is an array
    if (Array.isArray(collection)) {
        for (let i = 0; i < collection.length; i++) {
            if (predicate(collection[i], i, collection)) { // Check if the predicate returns true
                return collection[i]; // Return the first element that matches
            }
        }
    } else {
        // If it's an object, iterate over each key-value pair
        for (let key in collection) {
            if (collection.hasOwnProperty(key)) {
                if (predicate(collection[key], key, collection)) { // Check if the predicate returns true
                    return collection[key]; // Return the first value that matches
                }
            }
        }
    }
    return undefined; // Return undefined if no elements match
}

function myFilter(collection, predicate) {
    let results = []; // Initialize an empty array to hold results

    // Check if the collection is an array
    if (Array.isArray(collection)) {
        for (let i = 0; i < collection.length; i++) {
            if (predicate(collection[i], i, collection)) { // Check if the predicate returns true
                results.push(collection[i]); // Add the element to results
            }
        }
    } else {
        // If it's an object, iterate over each key-value pair
        for (let key in collection) {
            if (collection.hasOwnProperty(key) && predicate(collection[key], key, collection)) {
                results.push(collection[key]); // Add the value to results
            }
        }
    }

    return results; // Return the array of filtered results
}

function mySize(collection) {
    if (Array.isArray(collection)) {
        return collection.length; // For arrays, return the length property
    } else {
        let count = 0;
        for (let key in collection) {
            if (collection.hasOwnProperty(key)) {
                count++; // Increment count for each own property in the object
            }
        }
        return count; // Return the count of properties
    }
}


function myFirst(array, n) {
    if (n === undefined) {
        return array[0]; // Return the first element if n is not provided
    } else {
        return array.slice(0, n); // Return the first n elements of the array
    }
}

function myLast(array, n) {
    if (n === undefined) {
        return array[array.length - 1]; // Return the last element if n is not provided
    } else {
        return array.slice(Math.max(array.length - n, 0)); // Return the last n elements of the array
    }
}

function myKeys(object) {
    let keys = [];
    for (let key in object) {
        if (object.hasOwnProperty(key)) {
            keys.push(key);  // Collect all enumerable property names owned by the object
        }
    }
    return keys;
}

function myValues(object) {
    let values = [];
    for (let key in object) {
        if (object.hasOwnProperty(key)) {
            values.push(object[key]);  // Collect all values of enumerable properties owned by the object
        }
    }
    return values;
}