import stats from '../stats.json';

let todoHomeSrc = stats.todoHome.split('/');
todoHomeSrc = todoHomeSrc[todoHomeSrc.length - 1];
let vendorsSrc = stats.vendors.split('/');
vendorsSrc = vendorsSrc[vendorsSrc.length - 1];

export function renderHomePage() {
  return `
<html lang="en-us">
    <head>
        <meta charset="utf-8">
        <title>JS Showcase</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="stylesheet" type="text/css" href="/css/semantic.min.css"/>
    </head>
    <body>
        <div id="root"></div>
        <script type="text/javascript" src="/js/${vendorsSrc}"></script>
        <script type="text/javascript" src="/js/${todoHomeSrc}"></script>
    </body>
</html>
	`;
}
