password='abc123rrr'
function userchecker(mystring){
  if(mystring.includes(123) && mystring.length>8)
{
  return true
}
return false
}
v=userchecker(password)
console.log(v)
