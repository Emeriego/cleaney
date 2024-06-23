if(pathname.startsWith('/search')){
    router.setParams({query})
}
else
{
    router.push(`/search/${query}`)
}
