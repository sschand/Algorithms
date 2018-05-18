/*

Modify and return the given map as follows: if the key "a" has a value, set the key "b"
to have that same value. In all cases remove the key "c", leaving the rest of the map unchanged.

mapShare({"a": "aaa", "b": "bbb", "c": "ccc"}) → {"a": "aaa", "b": "aaa"}
mapShare({"b": "xyz", "c": "ccc"}) → {"b": "xyz"}
mapShare({"a": "aaa", "c": "meh", "d": "hi"}) → {"a": "aaa", "b": "aaa", "d": "hi"}

 */

function mapShare(obj) {
    for (key in obj) {
        if (key == 'a') {
            obj['b'] = obj['a'];
        }

        if (key == 'c') {
            delete obj[key];
        }
    }

    console.log(obj);
}

mapShare({"a": "aaa", "b": "bbb", "c": "ccc"});
mapShare({"b": "xyz", "c": "ccc"});
mapShare({"a": "aaa", "c": "meh", "d": "hi"});