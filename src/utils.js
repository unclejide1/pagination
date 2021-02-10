const paginate = (followers) => {
 const itemsPerPage = 12;
 const pageLength = Math.ceil(followers.length/itemsPerPage)
 const newFollowers = Array.from({length:pageLength}, (_, index) => {
  const start = index * itemsPerPage
  return followers.slice(start, start + itemsPerPage)
 })
 return newFollowers
}

export default paginate
