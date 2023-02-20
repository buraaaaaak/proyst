var homepage = "./pages/homepage.html"
var page_404 = "./pages/404.html"

/*
    The page to be displayed when the web site is loaded. "/"
*/
proyst.loadPageURL(homepage)

/*
    The page to be displayed when navigating to a page that does not exist.
*/
proyst.err(page_404)

/*
    If the page takes a long time to load, it shows the loader on the page.
    NOTE: Currently, you can *only* use the default loader for proyst.
*/
proyst.loader()