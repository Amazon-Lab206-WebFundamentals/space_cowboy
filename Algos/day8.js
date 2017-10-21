// Reverse the string

function Reverse(str) {
    var newstr = ""
    for (var i = str.length - 1; i >= 0; i--) {
        newstr += str[i];
    }
    return newstr;
}
var result = Reverse("ABCDEFGHIJKLMNOPQRSTUVWXYZ")
console.log(result);


// Is the parenthesis valid "()"

// Time complexity: O(n)
function isValidParentheses(str) {
    var i = 0, l = str.length, arr = [];
    if (!l) {
        return true;
    }

    if ((l % 2) !== 0) {
        return false;
    }

    while (i < l) {
        var s = str[i];
        if (s == "{") {
            arr.push(s);
        } else if (s == "}") {
            if (arr.length) {
                arr.pop();
            } else {
                return false;
            }
        }
        i++;
    }
    return true;
}

console.log(isValidParentheses("{{{}}}")); // true
isValidParentheses("{{}{}}"); // true
isValidParentheses("{}{{}}"); // true
console.log(isValidParentheses("}{}{")); // false



var ParensValid = function(str) {
    var stack = [];
    var open = { '{': '}', '[': ']', '(': ')' };
    var closed = { '}': true, ']': true, ')': true };
    
    for (var i = 0; i < str.length; i ++) {
      var x = str[i];
      if (open[x]) {
        stack.push(x);
      } else if (closed[x]) {
        if (open[stack.pop()] !== x) return false;
      }
    }
    
    return stack.length === 0;
  };

  console.log(ParensValid("{{}}{}")); //true
  console.log(ParensValid("}{{}{")); //false

