[ <img src="public/src/image/Freddys_Logo.svg" width="100" /> ](https://tekporlipos.github.io/FE_Submission02/public/login.html)


[ FREDDY ](https://tekporlipos.github.io/FE_Submission02/public/login.html)


## Section B: The Assignment
Your assignment is to implement an analytics dashboard using
JavaScript and no framework.
Tasks
1. Implement assignment using JavaScript do not use a
framework.
2. Build out the project to the designs inside
the `/Designs` folder.
3. Implement the following views:

> a. Login
Login using the API at `.envlogin` with POST `{
username: 'freddy', password: 'ElmStreet2019' }`. The
login endpoint will return a JWT `access_token` that is
valid for 15 minutes and a `refresh_token` which is
valid for 30 days. Make sure to also handle wrong
credentials properly

> b. Dashboard
Retrieve the necessary data for the dashboard
at `https://freddy.codesubmit.io/dashboard`. Thisendpoint requires a `Authorization: Bearer
access_token` header. Use the access token that you
retrieved from Login. Keep in mind that access tokens
expire after 15 minutes. You may request a fresh
access token by sending a POST request
to `https://freddy.codesubmit.io/refresh` with
the `Authorization: Bearer refresh_token` header.
Implement the chart with a charting library of your
choice and add a toggle that switches between a
weekly and yearly view.

>c. Orders
Fetch the orders
at `https://freddy.codesubmit.io/orders?page=1&q=s
earch_term`. This endpoint requires a `Authorization:
Bearer access_token` header. Make sure to implement
search and pagination

## Deliverables
Make sure to include all source code in the repository.
To make reviewing easier, include a fully built version of your
assignment in a folder named public.
Evaluation
1. JavaScript best practices
2. We're looking for you to produce working code, with
enough room to demonstrate how to structure
components in a small program.
3. Show us your work through your commit history
4. Completeness: did you complete the features?5. Correctness: does the functionality act in sensible,
thought-out ways?
6. Maintainability: is it written in a clean, maintainable way?
7. Testing: is the system adequately tested?
Please organize, design, test and document your code as if it
were going into production - then push your changes to the
master branch. After you have pushed your code. Follow the
instructions in section A to make your submission.
